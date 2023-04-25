import { useAppDispatch, useAppSelector } from '@/frontend/redux/hooks';
import { updateAuthState } from '@/frontend/redux/info/slice';
import { selectUser } from '@/frontend/redux/user/slice';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CheckGoodYes } from "../basic-icons";
import Button from "../button/button";
import Divider from '../divider/divider';
import styles from './plans.module.scss';
import axios from 'axios';
import Cookies from 'js-cookie';


interface PlansProps {
  type: 'pricing' | 'checkout' | 'upgrade'
}

function href(productitemname: string) {
  return axios.post('/api/billing/checkout', {
    currency: "usd",
    productitemname,
    quantity: "1",
  }).then(r => r.data.Url)
}

export default function Plans({ type = 'pricing' }: PlansProps): JSX.Element {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [referral, setReferral] = useState('');
  const [cta, setCta] = useState('Buy now')
  const [checkoutMethod, setCheckoutMethod] = useState('stripe');

  useEffect(() => {
    if (user.requestStatus === 'idle' || user.requestStatus === 'loading') return
    if (user.id && user.plan !== 'free') {
      setCta('Upgrade now')
    }
  }, [user])

  useEffect(() => {
    if (user.requestStatus === 'idle' || user.requestStatus === 'loading') return
    if (user.id && user.plan !== 'free') {
      setCta('Upgrade now')
    }
  }, [user])

  async function handleClick(e: React.MouseEvent, plan: string) {
    window && (window as any)?.gtag('event', 'begin_checkout', {
      'event_category': 'ecommerce',
      'event_label': plan
    });
    if (!user.id) {
      e.preventDefault()
      dispatch(updateAuthState('login'))
      return
    }
  }

  const [href500, setHref500] = useState("")
  const [href1050, setHref1050] = useState("")

  useEffect(() => {
    href("500Credits").then(setHref500)
    href("1050Credits").then(setHref1050)
  }, [])


  return (
    <>
      <div className={styles[type]}>
        <div className={styles.plans}>
          <div className={[styles.plan].join(' ')}>
            <div className={styles.name}>
              Free
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$0/mo</span>
            </div>

            <Button disabled={user.plan === 'basic'} size="md" type="default" fullWidth>
              {user.credits != 0 ? <><CheckGoodYes size={14} />Received!</> : 'Signup now'}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                <Check /> 25 credits new user
              </div>
              {/* <div className={styles.feature}>
                <Check /> 20 credits Inviting a user
              </div> */}
              <div className={styles.feature}>
                <Check /> Use images commercially
              </div>
            </div>

          </div>
          <div className={[styles.plan].join(' ')}>
            <div className={styles.name}>
              500 Credits
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$4.9/500 Credits</span>
            </div>
            <Button disabled={user.plan === 'starter'} size="md" type="default" href={href500} onClick={(e) => handleClick(e, '500Credits')} fullWidth>
              {user.plan === 'starter' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>
            <Divider />
            <div className={styles.features}>
              <div className={styles.credits}>
                &lt;$0.01 per image
              </div>
              <div className={styles.credits}>
                <Check /> 25 credits new user
              </div>
              {/* <div className={styles.feature}>
                <Check /> 20 credits Inviting a user
              </div> */}
              <div className={styles.feature}>
                <Check /> Use images commercially
              </div>
            </div>
          </div>
          <div className={[styles.plan, styles.popular].join(' ')}>
            <div className={styles.name}>
              1050 Credits
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$9.9/1050 Credits</span>
            </div>
            <Button type={user.plan === 'hobby' ? 'default' : 'primary'} disabled={user.plan === 'hobby'} size="md" href={href1050} onClick={(e) => handleClick(e, '1050Credits')} fullWidth>
              {user.plan === 'hobby' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>
            <Divider />
            <div className={styles.features}>
              <div className={styles.credits}>
                &lt;$0.01 per image
              </div>
              <div className={styles.credits}>
                <Check /> 25 credits new user
              </div>
              {/* <div className={styles.feature}>
                <Check /> 20 credits Inviting a user
              </div> */}
              <div className={styles.feature}>
                <Check /> Use images commercially
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

const Check = () => <CheckGoodYes size={16} className={styles.check} strokeWidth={2} />
const NoCheck = () => <X size={16} className={styles.x} strokeWidth={2} />


const Section = ({ title }: { title: string }) => (
  <>
    <div className={[styles.cell, styles.section].join(' ')}>
      {title}
    </div>
    <div className={[styles.cell, styles.section].join(' ')}></div>
    <div className={[styles.cell, styles.section, styles.popular].join(' ')}></div>
    <div className={[styles.cell, styles.section].join(' ')}></div>
  </>
)
