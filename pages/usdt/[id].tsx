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
import { ethers } from 'ethers';
import Web3 from 'web3';
import BN from 'bn.js'

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

const currencyDataMap = {
  USDT: {
    contractAddress: "0x55d398326f99059ff775485246999027b3197955",
    contractABI: `[{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]`
  },
  USDC: {
    contractAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    contractABI: `[{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`
  },
}

export default function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { wallet } = useMetaMask()
  const [network, setNetwork] = useState<"BSC">()
  const [currency, setCurrency] = useState<'USDT' | 'USDC'>('USDT')
  const [orderID, setOrderID] = useState<string>()
  const [rxAddress, setRxAddress] = useState<string>()
  const [value, setValue] = useState<number>()
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const productItemName = router.query.id as string
  const creditsNumber = Number.isNaN(productItemName?.replace('Credits', '')) ? 0 : Number(productItemName?.replace('Credits', ''))
  const creditsNumberAfterBonus = Math.ceil(creditsNumber * 1.05)

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
                chainName: 'BNB Smart Chain',
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                nativeCurrency: {
                  name: 'BNB',
                  symbol: 'BNB',
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

  const canDeposit = wallet?.accounts[0] && network && orderID && rxAddress && value

  const handleDeposit = async () => {
    if (loading) return
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
      setLoading(true)
      const { contractABI, contractAddress } = currencyDataMap[currency]
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(JSON.parse(contractABI), contractAddress)
      const valueHex = (new BN(value)).mul(new BN(10).pow(new BN(16))).toString()
      const result = await contract.methods.transfer(rxAddress, valueHex).send({
        from: wallet.accounts[0],
      })
      message(dispatch, { type: 'success', text: 'Deposit Success, Credits will arrival later.' })
      setLoading(false)
      router.push('/generate')
      await retryPromiseWithDelay(axios.post('/api/crypto/update-order', {
        orderid: orderID,
        txaddress: wallet.accounts[0],
        txhash: result.transactionHash,
      }), 3, 3, 1000)
    } catch (error: any) {
      message(dispatch, { type: 'danger', text: error.message ?? error })
    } finally {
      setLoading(false)
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
            }}>BUY CREDITS</p>
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
          <Input size="large" placeholder={network ? "Calculating..." : ""} value={value ? value / 100 : undefined} disabled addonAfter={<Select defaultValue="USDT" size="large" className='w-32' onChange={setCurrency}>
            <Select.Option value="USDT"><div className='flex'><img src={IconUSDT.src} className="w-6 h-6 mr-2" /> USDT</div></Select.Option>
            {/* <Select.Option value="USDC"><div className='flex'><img src={IconUSDC.src} className="w-6 h-6 mr-2" /> USDC</div></Select.Option> */}
          </Select>} />
          <div className='flex justify-center mt-4'><div className='rounded-full flex items-center justify-center w-10 h-10' style={{
            backgroundColor: '#faf9f8'
          }}><SwapOutlined className='text-xl leading-none rotate-90' style={{ marginRight: -2 }} rev="" /></div></div>
          <div className='h-8 leading-8 font-semibold text-gray-300'>BUY <span className={styles.deposit_bonus}>+5%</span></div>
          <Input size="large" disabled value={creditsNumberAfterBonus || ''} addonAfter={
            <div className='flex text-base pl-1' style={{ width: 106, color: "rgba(0, 0, 0, 0.88)" }}>
              <img src={IconCredits.src} className='w-5 h-5 mr-2' />
              <span>Credits</span>
            </div>
          } />
          {creditsNumber ? < div className='mt-2 text-xs italic opacity-75 text-gray-500'> {creditsNumber} + <span className={styles.deposit_bonus}>{Math.ceil(creditsNumber * 0.05)}<sup> Bonus</sup></span> = {creditsNumberAfterBonus}</div> : null}
        </div>
        <div className={styles.deposit_page_content}>
          <p className={styles.deposit_page_button} style={{
            backgroundColor: !canDeposit ? '#828282' : "#1024F0",
          }} onClick={handleDeposit}>{loading && <LoadingOutlined rev="" className="w-4 h-4 mr-2 leading-none" style={{
            fontSize: 16,
            // lineHeight: 16,
          }} />}Approve</p>
          <p className={styles.deposit_page_Reminder_content} >Credits will auto reach your account wallet after we check your transcation on chain.The arrival time is about 3~20 mins.</p>
        </div>
      </div>
    </div>
  </WebsiteLayout >
}
