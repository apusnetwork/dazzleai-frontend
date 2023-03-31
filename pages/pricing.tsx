import WebsiteLayout from '@/frontend/components/layout/website';
import Plans from '@/frontend/components/plans/plans';
import { Faq, FaqQuestion } from '@/frontend/components/website/faq';
import { useAppDispatch, useAppSelector } from '@/frontend/redux/hooks';
import { updateAuthState } from '@/frontend/redux/info/slice';
import { selectUser } from '@/frontend/redux/user/slice';
import styles from '@/frontend/styles/home.module.scss';
import { useEffect, useState } from 'react';

export default function Pricing(): JSX.Element {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [referral, setReferral] = useState('');

  function handleAuth(e: React.MouseEvent) {
    if (!user.id) {
      e.preventDefault()
      dispatch(updateAuthState('login'))
      return
    }

  }

  return <WebsiteLayout
    title="Pricing"
    description='Check prices of getimg.ai AI Creative Suite.'
    canonical='/pricing'
    footer={false}>


    <div className={styles._hero}>
      <div className={styles.hero}>
        <h1 className='h2'>Pricing</h1>
        <p className='p'>
          Use getimg.ai for free with 100 monthly credits.<br />
          Create more. Pay less.<br />
        </p>
      </div>
    </div>

    <Plans type='checkout' />
    <div className='container f-center small'>Training custom DreamBooth model requires one-time payment of 2000 image credits.</div>
    <div style={{ height: 24 }} />
    <Faq>
      <FaqQuestion question='How do image credits work?'>
        <p>
          It&apos;s simple. One credit is counted every time you generate a new image. For example, by default, our tools generate four pictures which require four credits.
        </p>
        <p>
          Apart from generating images, you may also use your credits to enhance, upscale images, or create custom models with DreamBooth.
        </p>
      </FaqQuestion>
      <FaqQuestion question='Can I use created images for commercial projects?'>
        <p> Yes, you can use generated images commercially. However, keep in mind that <a target="_blank" rel="noreferrer noopener" href='https://huggingface.co/spaces/CompVis/stable-diffusion-license'>CreativeML Open RAIL-M</a> license applies to created images.</p>

      </FaqQuestion>
      <FaqQuestion question='Can I create NSFW content?'>
        <p>
          You can create anything you want! But keep in mind that we do monitor generated content. Usage that violates any applicable national, federal, state, local, or international law or regulation will <b>be banned and reported!</b>
        </p>
      </FaqQuestion>
      <FaqQuestion question='Can I change my plan later?'>
        <p>
          Yes, you can upgrade or downgrade at any time. If you choose to upgrade, you&apos;ll pay a prorated amount for the rest of the month.
        </p>
      </FaqQuestion>
      <FaqQuestion question='What if I decide to cancel?'>
        <p>
          If you no longer wish to use getimg.ai, you can cancel your subscription anytime. When canceled, you will still be able to use your credits for the remaining of the current billing cycle.
        </p>
      </FaqQuestion>
      <FaqQuestion question='What payment options do you offer?'>
        <p>
          We accept all major credit cards and debit cards. However, if you wish to use another payment method and plan to spend at least $5,000 anually, <a href="mailto:hi@getimg.ai">contact us</a> to start the process.
        </p>
      </FaqQuestion>
      <FaqQuestion question='Will my unused credits roll over to the next month?'>
        <p>
          Plan&apos;s credits <b>do not</b> roll over to the next month.
        </p>
      </FaqQuestion>
      <FaqQuestion question='Can I get more credits?'>
        <p>
          Yes, we currently offer an option to top up with more credits. You can purchase 2400 credits for $9 <a onClick={handleAuth} href={`/api/billing/checkout${referral ? `?referral=${referral}` : ''}`}>here</a>. These credits do not expire.
        </p>
      </FaqQuestion>

    </Faq>

  </WebsiteLayout >
}