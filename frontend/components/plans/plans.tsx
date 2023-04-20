import { useAppDispatch, useAppSelector } from '@/frontend/redux/hooks';
import { updateAuthState } from '@/frontend/redux/info/slice';
import { selectUser } from '@/frontend/redux/user/slice';
import { X } from 'lucide-react';
import posthog from 'posthog-js';
import { useEffect, useState } from 'react';
import { CheckGoodYes } from "../basic-icons";
import Button from "../button/button";
import Divider from '../divider/divider';
import styles from './plans.module.scss';


interface PlansProps {
  type: 'pricing' | 'checkout' | 'upgrade'
}

export default function Plans({ type = 'pricing' }: PlansProps): JSX.Element {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [referral, setReferral] = useState('');
  const [cta, setCta] = useState('Subscribe now')
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
    posthog.onFeatureFlags(() => {
      if (posthog.getFeatureFlag('checkout-method') === 'getimg') {
        setCheckoutMethod('getimg')
      } else {
        setCheckoutMethod('stripe')
      }
    })

  }, [user])

  function href(plan: string) {
    if (checkoutMethod === 'getimg') {
      return user.plan === 'free' || !user.plan || user.plan.includes('appsumo-') ? `/billing/checkout?plan=${plan}${referral ? `&referral=${referral}` : ''}` : '/api/billing/portal'
    } else {
      return user.plan === 'free' || !user.plan || user.plan.includes('appsumo-') ? `/api/billing/checkout?plan=${plan}${referral ? `&referral=${referral}` : ''}` : '/api/billing/portal'
    }
  }

  function handleClick(e: React.MouseEvent, plan: string) {
    if (!user.id) {
      e.preventDefault()
      dispatch(updateAuthState('login'))
      return
    }
    posthog && posthog.capture('Checkout', { plan: plan })

  }


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

            <Button disabled={user.plan === 'basic'} size="md" type="default" href={href('basic')} fullWidth>
              {user.credits != 0 ? <><CheckGoodYes size={14} />Received!</> : 'Signup now'}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                50 credits new user
              </div>
              <div className={styles.feature}>
                <Check /> 20 credits Inviting a user
              </div>
              <div className={styles.feature}>
                <Check /> Use images commercially
              </div>
            </div>

          </div>
          <div className={[styles.plan].join(' ')}>
            <div className={styles.name}>
              Starter
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$4.9/500 Credits</span>
            </div>

            <Button disabled={user.plan === 'starter'} size="md" type="default" href={href('starter')} onClick={(e) => handleClick(e, 'starter')} fullWidth>
              {user.plan === 'starter' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                &lt;$0.01 per image
              </div>
              <div className={styles.feature}>
                <Check /> 20 credits Inviting a user
              </div>
              <div className={styles.feature}>
                <Check /> 20 credits Inviting a user
              </div>
              <div className={styles.feature}>
                <Check /> Text To Image
              </div>
              <div className={styles.feature}>
                <Check /> 20+ AI models
              </div>
              <div className={styles.feature}>
                <Check /> 4x Upscaling
              </div>
              <div className={styles.feature}>
                <Check /> Premium GPUs
              </div>
            </div>

          </div>
          <div className={[styles.plan, styles.popular].join(' ')}>
            <div className={styles.name}>
              Hobby
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$9.9/1050 Credits</span>
            </div>

            <Button type={user.plan === 'hobby' ? 'default' : 'primary'} disabled={user.plan === 'hobby'} size="md" href={href('hobby')} onClick={(e) => handleClick(e, 'hobby')} fullWidth>
              {user.plan === 'hobby' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                &lt;$0.01 per image
              </div>

              <div className={styles.feature}>
                <Check /> 20 credits Inviting a user
              </div>
              <div className={styles.feature}>
                <Check /> Use images commercially
              </div>
              <div className={styles.feature}>
                <Check /> Text To Image
              </div>
              <div className={styles.feature}>
                <Check /> 20+ AI models
              </div>
              <div className={styles.feature}>
                <Check /> 4x Upscaling
              </div>
              <div className={styles.feature}>
                <Check /> Premium GPUs
              </div>
            </div>

          </div>
          <div className={[styles.plan].join(' ')}>
            <div className={styles.name}>
              Basic
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$19.9/mo</span>
            </div>

            <Button disabled={user.plan === 'basic'} size="md" href={href('basic')} onClick={(e) => handleClick(e, 'basic')} type="default" fullWidth>
              {user.plan === 'basic' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                4000 Credits per month
              </div>

              <div className={styles.feature}>
                <Check /> 20 credits Inviting a user
              </div>
              <div className={styles.feature}>
                <Check /> Use images commercially
              </div>
              <div className={styles.feature}>
                <Check /> Text To Image
              </div>
              <div className={styles.feature}>
                <Check /> 20+ AI models
              </div>
              <div className={styles.feature}>
                <Check /> 4x Upscaling
              </div>
              <div className={styles.feature}>
                <Check /> Premium GPUs
              </div>
            </div>

          </div>
          <div className={[styles.plan].join(' ')}>
            <div className={styles.name}>
              Pro
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$29.9/mo</span>
            </div>

            <Button disabled={user.plan === 'pro'} size="md" href={href('pro')} onClick={(e) => handleClick(e, 'pro')} type="default" fullWidth>
              {user.plan === 'pro' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                6500 Credits per month
              </div>

              <div className={styles.feature}>
                <Check /> 20 credits Inviting a user
              </div>
              <div className={styles.feature}>
                <Check /> Use images commercially
              </div>
              <div className={styles.feature}>
                <Check /> Text To Image
              </div>
              <div className={styles.feature}>
                <Check /> 20+ AI models
              </div>
              <div className={styles.feature}>
                <Check /> 4x Upscaling
              </div>
              <div className={styles.feature}>
                <Check /> Premium GPUs
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
