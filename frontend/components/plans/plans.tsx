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
              Basic
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$12/mo</span>
            </div>

            <Button disabled={user.plan === 'basic'} size="md" type="default" href={href('basic')} onClick={(e) => handleClick(e, 'basic')} fullWidth>
              {user.plan === 'basic' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                3 000 images /mo
              </div>
              <div className={styles.feature}>
                <Check /> 2 active DreamBooth models
              </div>
              <div className={styles.feature}>
                <Check /> Text To Image
              </div>
              <div className={styles.feature}>
                <Check /> AI Editor
              </div>
              <div className={styles.feature}>
                <Check /> 20+ AI models
              </div>
              <div className={styles.feature}>
                <Check /> Quality up to 1M pixels
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
              Starter
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$29/mo</span>
            </div>

            <Button disabled={user.plan === 'starter'} size="md" type="default" href={href('starter')} onClick={(e) => handleClick(e, 'starter')} fullWidth>
              {user.plan === 'starter' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                12 000 images /mo
              </div>

              <div className={styles.feature}>
                <Check /> 6 active DreamBooth models
              </div>
              <div className={styles.feature}>
                <Check /> Text To Image
              </div>
              <div className={styles.feature}>
                <Check /> AI Editor
              </div>
              <div className={styles.feature}>
                <Check /> 20+ AI models
              </div>
              <div className={styles.feature}>
                <Check /> Quality up to 1M pixels
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
              <span className={styles.value}>$49/mo</span>
            </div>

            <Button type={user.plan === 'hobby' ? 'default' : 'primary'} disabled={user.plan === 'hobby'} size="md" href={href('hobby')} onClick={(e) => handleClick(e, 'hobby')} fullWidth>
              {user.plan === 'hobby' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                24 000 images /mo
              </div>

              <div className={styles.feature}>
                <Check /> 12 active DreamBooth models
              </div>
              <div className={styles.feature}>
                <Check /> Text To Image
              </div>
              <div className={styles.feature}>
                <Check /> AI Editor
              </div>
              <div className={styles.feature}>
                <Check /> 20+ AI models
              </div>
              <div className={styles.feature}>
                <Check /> Quality up to 1M pixels
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
              <span className={styles.value}>$99/mo</span>
            </div>

            <Button disabled={user.plan === 'pro'} size="md" href={href('pro')} onClick={(e) => handleClick(e, 'pro')} type="default" fullWidth>
              {user.plan === 'pro' ? <><CheckGoodYes size={14} /> Active</> : cta}
            </Button>

            <Divider />

            <div className={styles.features}>
              <div className={styles.credits}>
                60 000 images /mo
              </div>

              <div className={styles.feature}>
                <Check /> 30 active DreamBooth models
              </div>
              <div className={styles.feature}>
                <Check /> Text To Image
              </div>
              <div className={styles.feature}>
                <Check /> AI Editor
              </div>
              <div className={styles.feature}>
                <Check /> 20+ AI models
              </div>
              <div className={styles.feature}>
                <Check /> Quality up to 1M pixels
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
