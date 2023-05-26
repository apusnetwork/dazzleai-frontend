import WebsiteLayout from '@/frontend/components/layout/website';
import { useEffect, useState } from 'react';
import styles from './usdt.module.scss';
import cookies from 'js-cookie';
// import Select from '@/frontend/components/select/select';
// import dynamic from 'next/dynamic'
// const Select = dynamic(import("antd/es/select"), { ssr: false })
import Select from 'antd/lib/select'
import LoadingOutlined from '@ant-design/icons/LoadingOutlined'
import IconBSC from './icon_bsc.svg'
import { useMetaMask } from '@/frontend/context/metamask';
import { message, updateAuthState } from '@/frontend/redux/info/slice';
import { useAppDispatch } from '@/frontend/redux/hooks';
import Input from 'antd/lib/input'
import IconUSDT from './usdt.png'
import IconUSDC from './usdc.png'
import SwapOutlined from '@ant-design/icons/lib/icons/SwapOutlined';
import { useRouter } from 'next/router';
import IconCredits from './cashback.png';
import axiosInstance from '@/frontend/utils/axios';
import axios from 'axios';

function waitFor(millSeconds: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millSeconds);
  });
}

async function retryPromiseWithDelay<T>(promise: Promise<T>, totalTry: number, nthTry: number, delayTime: number): Promise<T> {
  try {
    const res = await promise;
    return res;
  } catch (e) {
    if (nthTry === 1) {
      return Promise.reject(e);
    }
    console.log('retrying', nthTry, 'time');
    // wait for delayTime amount of time before calling this method again
    await waitFor((totalTry - nthTry + 1) * delayTime);
    return retryPromiseWithDelay(promise, nthTry, nthTry - 1, delayTime);
  }
}

export default function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { wallet } = useMetaMask()
  const [network, setNetwork] = useState<"BSC">()
  const [currency, setCurrency] = useState<'USDT' | 'USDC'>('USDT')
  const [orderID, setOrderID] = useState<string>()
  const [rxAddress, setRxAddress] = useState<string>()
  const [value, setValue] = useState<number>()
  const router = useRouter();
  const productItemName = router.query.id as string
  const creditsNumber = Number.isNaN(productItemName?.replace('Credits', '')) ? 0 : Number(productItemName?.replace('Credits', ''))

  useEffect(() => {
    if (wallet?.accounts[0]) {
      switch (wallet.chainId) {
        case '0x38':
          setNetwork('BSC')
      }
    }
  }, [wallet])

  useEffect(() => {
    if (creditsNumber > 0 && network) {
      setValue(undefined)
      axios.post('/api/crypto/create-checkout-session', {
        currency,
        network,
        productitemname: productItemName,
      }).then(res => {
        if (res.data.orderid && res.data.rxaddress && res.data.value && !Number.isNaN(res.data.value)) {
          setOrderID(res.data.orderid)
          setRxAddress(res.data.rxaddress)
          setValue(Number(res.data.value))
        }
      })
    }
  }, [productItemName, network, currency])

  const switchNetwork = async (network: "BSC") => {
    if (!wallet?.accounts[0]) {
      message(dispatch, { type: 'danger', text: 'Please Login Frist' })
      dispatch(updateAuthState('login'))
      return
    }
    try {
      await window.ethereum?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }],
      });
      setNetwork(network)
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x38',
                chainName: 'BSC Mainnet',
                rpcUrls: ['https://bsc.publicnode.com', 'https://bsc.meowrpc.com'],
                nativeCurrency: {
                  name: 'USDT',
                  symbol: 'USDT',
                  decimals: 18,
                }
              },
            ],
          });
          setNetwork(network)
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
    } finally {
    }
  }

  const handleDeposit = async () => {
    if (!wallet?.accounts[0]) {
      message(dispatch, { type: 'danger', text: 'Please Login Frist' })
      dispatch(updateAuthState('login'))
      return
    }
    if (!network) {
      message(dispatch, { type: 'danger', text: 'Please Select Network' })
      return
    }
    if (!orderID || !rxAddress || !value) {
      message(dispatch, { type: 'danger', text: 'Please Wait For Bill Calculating.' })
      return
    }
    try {
      const txHash = await window.ethereum?.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: wallet.accounts[0], // The user's active address.
            to: rxAddress, // Required except during contract publications.
            value: `0x${value.toString(16)}`, // Only required to send ether to the recipient from the initiating external account.
          },
        ],
      })
      message(dispatch, { type: 'success', text: 'Deposit Success, Credits will arrival later.' })
      router.push('/generate')
      await retryPromiseWithDelay(axiosInstance.post('/api/crypto/update-order', {
        orderid: orderID,
        txaddress: wallet.accounts[0],
        txhash: txHash,
      }), 3, 3, 1000)
    } catch (error: any) {
      message(dispatch, { type: 'danger', text: error.message ?? error })
    }
  }

  return <WebsiteLayout
    title="Everything you need to create images with AI"
    description="Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more."
    canonical='/'
    footer={false}
  >
    <div className='flex justify-center'>
      <div className={styles.deposit_page_box}>
        <div className={styles.deposit_page_title}>
          <div className={styles.deposit_page_name}>
            <p style={{
              fontSize: 18,
              color: '#09244B',
              fontWeight: 600,
            }}>BUY SPACE</p>
          </div>
          <Select
            style={{
              width: 160
            }}
            placeholder={
              <div className='flex'><LoadingOutlined rev="" className='mr-2' /> Select Network</div>
            }
            id='scheduler'
            options={[
              {
                value: 'BSC',
                label: <div className='flex'><img className="w-4 h-4 mr-2" src={IconBSC.src} /><span>BSC</span></div>,
              },
            ]}
            value={network}
            onChange={switchNetwork}
          />
        </div>
        <div className='px-8 pt-4'>
          <div className='h-8 leading-8 font-semibold text-gray-300'>CONSUME</div>
          <Input size="large" placeholder={network ? "Calculating..." : ""} value={value ? value / 100 : undefined} disabled addonAfter={<Select defaultValue="USDT" size="large" className='w-32'>
            <Select.Option value="USDT"><div className='flex'><img src={IconUSDT.src} className="w-6 h-6 mr-2" /> USDT</div></Select.Option>
            <Select.Option value="USDC"><div className='flex'><img src={IconUSDC.src} className="w-6 h-6 mr-2" /> USDC</div></Select.Option>
          </Select>} />
          <div className='flex justify-center mt-4'><div className='rounded-full flex items-center justify-center w-10 h-10' style={{
            backgroundColor: '#faf9f8'
          }}><SwapOutlined className='text-xl leading-none rotate-90' style={{ marginRight: -2 }} rev="" /></div></div>
          <div className='h-8 leading-8 font-semibold text-gray-300'>BUY</div>
          <Input size="large" disabled value={creditsNumber * 1.05 || ''} addonAfter={
            <div className='flex text-base pl-1' style={{ width: 106, color: "rgba(0, 0, 0, 0.88)" }}>
              <img src={IconCredits.src} className='w-5 h-5 mr-2' />
              <span>Credits</span>
            </div>
          } />
          {creditsNumber ? < div className='mt-2 text-xs italic opacity-75 text-gray-500'> 500 + <span className={styles.deposit_bonus}>{creditsNumber * 0.05}<sup> Bonus</sup></span> = {creditsNumber * 1.05}</div> : null}
        </div>
        <div className={styles.deposit_page_content}>
          <p className={styles.deposit_page_button} onClick={handleDeposit}>DEPOSIT</p>
          <p className={styles.deposit_page_Reminder_content}>Credits will auto reach your account wallet after we check your transcation on chain.</p>
        </div>
      </div>
    </div>
  </WebsiteLayout >
}
