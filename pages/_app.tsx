import store from '@/frontend/redux/store';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Router, { useRouter } from 'next/router';
import posthog from 'posthog-js';
import Script from 'next/script';

import { useEffect, useLayoutEffect, useState } from "react";
import { Provider } from 'react-redux';

import "@/frontend/styles/index.scss";
import "rc-slider/assets/index.css";


import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { LockPrivacy } from '@/frontend/components/basic-icons';
import Button from '@/frontend/components/button/button';
import Divider from '@/frontend/components/divider/divider';
import Input from '@/frontend/components/input/input';
import { AuthModal } from '@/frontend/components/modal/modal';
import Plans from '@/frontend/components/plans/plans';
import { useAppDispatch, useAppSelector } from '@/frontend/redux/hooks';
import { message, selectAuthState, updateAuthState } from '@/frontend/redux/info/slice';
import { getUser, loginGoogle, loginUser, registerUser } from '@/frontend/redux/user/actions';
import { selectUser, selectUserStatus } from '@/frontend/redux/user/slice';
import { Coins, Gift } from 'lucide-react';
import Link from 'next/link';

dayjs.extend(relativeTime)

interface Props {
  children: JSX.Element
}


function App({ children }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const authState = useAppSelector(selectAuthState);
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);
  const [state, setState] = useState({ name: '', email: '', password: '' })
  const [referral, setReferral] = useState('');


  function initGoogle() {
    const google = (window as any).google;
    if (!(window as any).google) return
    google.accounts.id.initialize({
      // client_id: "1089732682872-c6fieght7qb8su25cdfr5isi506v01lg.apps.googleusercontent.com",
      client_id: "1080163930978-2885m14p291dt08tej4p7f4bldtbpsj7.apps.googleusercontent.com",
      callback: googleLogin
    });
    google.accounts.id.renderButton(
      document.getElementById("google-login"),
      { theme: "filled_blue", size: "large", text: 'continue_with', locale: 'en_US', width: 260 }
    );
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  async function googleLogin(response: any) {
    const res = await dispatch(loginGoogle({ token: response.credential }))
    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(updateAuthState(undefined));
      message(dispatch, { type: 'success', text: 'Sucesfully Logged In!' })
      window.scrollTo({ top: 0 })
    }
  }

  // async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const res = await dispatch(loginUser({ ...state }))
  //   if (res.meta.requestStatus === 'fulfilled') {
  //     dispatch(updateAuthState(undefined))
  //     posthog.capture('Login', { provider: 'email' })
  //     posthog.identify(res.payload.id, {
  //       email: res.payload.email,
  //       name: res.payload.name,
  //       plan: res.payload.plan,
  //       status: res.payload.status,
  //       subscriptionStatus: res.payload.subscriptionStatus
  //     })
  //     window.scrollTo({ top: 0 })
  //   }
  // }
  // async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const res = await dispatch(registerUser({ ...state }))
  //   if (res.meta.requestStatus === 'fulfilled') {
  //     dispatch(updateAuthState(undefined))
  //     posthog.capture('Login', { provider: 'email' })
  //     posthog.capture('Regsiter', { provider: 'email' })
  //     posthog.identify(res.payload.id, {
  //       email: res.payload.email,
  //       name: res.payload.name,
  //       plan: res.payload.plan,
  //       status: res.payload.status,
  //       subscriptionStatus: res.payload.subscriptionStatus
  //     })
  //     window.scrollTo({ top: 0 })
  //   }
  // }

  useEffect(() => {
    if (authState === 'login' || authState === 'register' || !user.id) initGoogle()
  }, [authState])

  useEffect(() => {
    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (error && error.code === 'ERR_NETWORK') {
        message(dispatch, { text: 'Network error! Check your connection.', type: 'info' })
      }
      return Promise.reject(error);
    });

  }, []);


  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.onload = () => {
      const google = (window as any).google // Now you can access window.google
      initGoogle() // Assuming this is defined somewhere else
    }
    document.body.appendChild(script)

    if (user.requestStatus === 'idle' || user.requestStatus === 'failed') {
      dispatch(getUser()).then(res => {
        if (res.meta.requestStatus === 'fulfilled') {
          posthog.identify(res.payload.id, {
            email: res.payload.email,
            name: res.payload.name,
            plan: res.payload.plan,
            status: res.payload.status,
            subscriptionStatus: res.payload.subscriptionStatus
          })
        }
      });
    }

    // posthog.init('phc_UZBRYEnPfTrmBlX04oJZ0OaQdnpXrU5ZrpGgWrMEEuH', {
    //   api_host: 'https://app.posthog.com',
    //   loaded: (posthog) => {
    //     if (process.env.NODE_ENV !== 'production' || window.location.hostname !== 'getimg.ai') posthog.opt_out_capturing()
    //   },
    //   autocapture: false,
    // })

    function handleRouteChange() {
      posthog.capture('$pageview')
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    if (router.asPath && router.asPath.includes('#signup')) {
      dispatch(updateAuthState('register'))
    }

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };

  }, []);


  return (
    <>
      {children}

      <AuthModal
        show={authState === 'login'}
        onClose={() => dispatch(updateAuthState(undefined))}
        actions={[]}
        title=''
      >
        <div className='login'>
          <h2 className='login-h'>Log in to continue</h2>
          <p className='login-p'>Don&apos;t have an account?{' '}
            <a href='#' onClick={() => dispatch(updateAuthState('register'))}>
              Create it now
            </a>
          </p>
          <br />
          <div id='google-login' />

          <div className="mobile_link_cta" style={{ marginTop: 14 }}>
            <Button size="md" type="primary" fullWidth onClick={() => message(dispatch, { type: 'success', text: "Comming Soon!" })}>
              MetaMask
            </Button>
          </div>
          {/* <Divider text="or use email" />

          <form onSubmit={handleLogin}>
            <Input
              size="lg"
              label="Email address"
              placeholder="Enter your email address..."
              id="email"
              value={state.email}
              onChange={handleChange}
              autoFocus
            />
            <Input
              size="lg"
              label="Password"
              placeholder="Enter your password..."
              id="password"
              value={state.password}
              onChange={handleChange}
              type="password"
              info="at least 8 characters long"
            />
            <br />
            <Button size="lg" loading={status === 'loading'} fullWidth errorFor={['email', 'password']}>
              <LockPrivacy size={18} />
              Log in
            </Button>
          </form>
          <span className='login-foot'>
            <Link href="/forgot-password">
              <a onClick={() => dispatch(updateAuthState(undefined))}>
                Forgot your password?
              </a>
            </Link>
          </span> */}

        </div>
      </AuthModal>
      <AuthModal
        show={authState === 'register'}
        onClose={() => dispatch(updateAuthState(undefined))}
        actions={[]}
        title=''
      >
        <div className='login'>
          <h2 className='login-h'>Create an account</h2>
          <p className='login-p'>Get 100 image credits every month for free!</p>
          <div id='google-login' />

          <div className="mobile_link_cta" style={{ marginTop: 14 }}>
            <Button size="md" type="primary" fullWidth onClick={() => message(dispatch, { type: 'success', text: "Comming Soon!" })}>
              MetaMask
            </Button>
          </div>
          <small className='license'>By signing up, you agree to our <a href="/legal/terms-of-service" target="_blank">Terms of Service</a> and <a href="/legal/privacy-policy" target="_blank">Privacy Policy</a>.</small>

          {/* <span className='login-foot'>
            <span>
              Already have an account?{' '}
              <a href='#' onClick={() => dispatch(updateAuthState('login'))}>
                Log in
              </a>
            </span>
          </span> */}
        </div>
      </AuthModal>
      <AuthModal
        show={authState === 'credits'}
        onClose={() => dispatch(updateAuthState(undefined))}
        actions={[]}
        title=''
        size='xl'
      >
        <div className='login'>
          <div className='center'>
            <h2 className='login-h'>Upgrade your plan</h2>
            <p className='login-p'>
              You&apos;re out of credits. Upgrade your plan and start creating more.
            </p>
          </div>
          <div style={{ height: 9 }} />
          <Plans type='pricing' />
          <span className='login-foot center'>
            <span>
              Don&apos;t want to upgrade?
            </span>
            <Link href='/referrals'>
              <a onClick={() => dispatch(updateAuthState(undefined))}>
                <Gift size={14} strokeWidth={1} />
                Earn credits by sharing dazzle.ai with friends.
              </a>
            </Link>
            <a href={`/api/billing/checkout${referral ? `?referral=${referral}` : ''}`} onClick={() => dispatch(updateAuthState(undefined))}>
              <Coins size={14} strokeWidth={1} />
              Top up with more credits.
            </a>
          </span>

        </div>
      </AuthModal>
    </>
  )
}

function Frontend({ Component, pageProps }: AppProps): JSX.Element {
  return (

    <Provider store={store}>
      <Script src="https://accounts.google.com/gsi/client" defer async></Script>
      <App>
        <Component {...pageProps} />
      </App>
    </Provider>
  )
}

export default Frontend;
