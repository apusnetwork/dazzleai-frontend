import store from "@/frontend/redux/store";
import { AppProps } from "next/dist/shared/lib/router/router";
import Router, { useRouter } from "next/router";
import Script from "next/script";

import { useEffect, useLayoutEffect, useState } from "react";
import { Provider } from "react-redux";

import "@/frontend/styles/globals.css";
import "@/frontend/styles/index.scss";
import "rc-slider/assets/index.css";
import MetaMaskLogo from "@/frontend/images/metamask-logo.png";
import GoogleLogo from "@/frontend/images/google.png";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Button from "@/frontend/components/button/button";
import { AuthModal } from "@/frontend/components/modal/modal";
import Plans from "@/frontend/components/plans/plans";
import { useAppDispatch, useAppSelector } from "@/frontend/redux/hooks";
import {
  message,
  selectAuthState,
  updateAuthState,
} from "@/frontend/redux/info/slice";
import {
  getUser,
  loginGoogle,
  loginMetaMask,
} from "@/frontend/redux/user/actions";
import { selectUser, selectUserStatus } from "@/frontend/redux/user/slice";
import { Coins, Gift } from "lucide-react";
import Link from "next/link";
import Messages from "@/frontend/components/message/message";
import { ethers } from "ethers";
import {
  useMetaMask,
  MetaMaskContextProvider,
} from "@/frontend/context/metamask";

dayjs.extend(relativeTime);

interface Props {
  children: JSX.Element;
}

function App({ children }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const authState = useAppSelector(selectAuthState);
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);
  const [state, setState] = useState({ name: "", email: "", password: "" });
  const [referral, setReferral] = useState("");
  const { wallet, hasProvider, isConnecting, connectMetaMask, errorMessage } =
    useMetaMask();

  useEffect(() => {
    if (errorMessage) {
      message(dispatch, { type: "danger", text: errorMessage });
    }
  }, [errorMessage]);

  function initGoogle() {
    const login_btn_wrapper_register = document.getElementById(
      "login_btn_wrapper_register"
    );
    const login_btn_wrapper_signin = document.getElementById(
      "login_btn_wrapper_signin"
    );
    const clientWidth =
      login_btn_wrapper_register?.clientWidth ??
      login_btn_wrapper_signin?.clientWidth ??
      328;
    console.log(clientWidth);
    const google = (window as any).google;
    if (!(window as any).google) return;
    google.accounts.id.initialize({
      // client_id: "1089732682872-c6fieght7qb8su25cdfr5isi506v01lg.apps.googleusercontent.com",
      client_id:
        "1080163930978-2885m14p291dt08tej4p7f4bldtbpsj7.apps.googleusercontent.com",
      callback: googleLogin,
    });
    google.accounts.id.renderButton(document.getElementById("g_id_signin"), {
      width: clientWidth,
      logo_alignment: "center",
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  }

  async function googleLogin(response: any) {
    function getLoginRequest() {
      return {
        token: response.credential,
        from_img: sessionStorage.getItem("from_img") || undefined,
        from_user: sessionStorage.getItem("from_user") || undefined,
      };
    }
    const res = await dispatch(loginGoogle(getLoginRequest()));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(updateAuthState(undefined));
      dispatch(getUser());
      message(dispatch, { type: "success", text: "Sucesfully Logged In!" });
      window.scrollTo({ top: 0 });
    }
  }

  async function metaMaskLogin() {
    console.log(hasProvider);
    if (!hasProvider) {
      message(dispatch, { type: "danger", text: "Redirecting to MetaMask..." });
      setTimeout(() => {
        window.open("https://metamask.io", "_blank");
      }, 1000);
      return;
    }
    if (window.ethereum?.isMetaMask && wallet.accounts.length < 1) {
      connectMetaMask();
    }

    if (!wallet.accounts[0]) {
      message(dispatch, { type: "danger", text: "Please connect to MetaMask" });
      return;
    }
    const account = ethers.getAddress(wallet.accounts[0]);
    const nonceRes = await axios.post("/api/auth/nonce", { address: account });
    if (!nonceRes.data.nonce) {
      message(dispatch, { type: "danger", text: "Get Nonce Failed!" });
      return;
    }
    const nonce = `welcome login dazzleai;${nonceRes.data.nonce}`;
    const signature = await (window as any).ethereum.request({
      method: "personal_sign",
      params: [nonce, account],
    });
    if (!signature) {
      message(dispatch, { type: "danger", text: "Signature Failed!" });
      return;
    }
    const loginRes = await dispatch(
      loginMetaMask({
        address: account,
        signature,
        nonce,
        from_img: sessionStorage.getItem("from_img") || undefined,
        from_user: sessionStorage.getItem("from_user") || undefined,
      })
    );
    if (loginRes.meta.requestStatus === "fulfilled") {
      dispatch(updateAuthState(undefined));
      dispatch(getUser());
      message(dispatch, { type: "success", text: "Sucesfully Logged In!" });
      window.scrollTo({ top: 0 });
    }
  }

  function loginWithGoogleOneTap() {
    window?.google.accounts.id.prompt((notification: any) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        message(dispatch, {
          type: "danger",
          text: "You have refused google login, try again later or use MetaMask Login.",
        });
      }
    });
  }

  useEffect(() => {
    if (authState === "login" || authState === "register") initGoogle();
    if (authState === undefined && user.id) {
      const autoRefreshAccount = setInterval(() => {
        dispatch(getUser());
      }, 30000);
      return () => clearInterval(autoRefreshAccount);
    }
  }, [authState, user]);

  useEffect(() => {
    // Add a response interceptor
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error && error.code === "ERR_NETWORK") {
          console.warn(error);
          message(dispatch, {
            type: "danger",
            text: "Network error! Check your connection.",
          });
        }
        return Promise.reject(error);
      }
    );
  }, []);

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://accounts.google.com/gsi/client";
    // script.onload = () => {
    //   const google = (window as any).google // Now you can access window.google
    //   initGoogle() // Assuming this is defined somewhere else
    // }
    // document.body.appendChild(script);

    if (user.requestStatus === "idle" || user.requestStatus === "failed") {
      dispatch(getUser());
    }

    function handleRouteChange() {
      // posthog.capture('$pageview')
    }

    Router.events.on("routeChangeComplete", handleRouteChange);

    if (router.asPath && router.asPath.includes("#signup")) {
      dispatch(updateAuthState("register"));
    }

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Messages />
      {children}

      <AuthModal
        show={authState === "login"}
        onClose={() => dispatch(updateAuthState(undefined))}
        actions={[]}
        title=""
      >
        <div className="login">
          <h2 className="login-h">Log in to continue</h2>
          <p className="login-p">
            Don&apos;t have an account?{" "}
            <a href="#" onClick={() => dispatch(updateAuthState("register"))}>
              Create it now
            </a>
          </p>
          <br />
          {/* <div id='google-login' /> */}

          {/* <div className="mobile_link_cta" style={{ marginTop: 14 }}>
            <Button size="md" type="primary" fullWidth onClick={loginWithGoogleOneTap}>
              <img src={GoogleLogo.src} className="h-6 w-6" />Google
            </Button>
          </div> */}
          <div
            id="g_id_signin"
            className="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="center"
          ></div>

          <div
            id="login_btn_wrapper_signin"
            className="mobile_link_cta"
            style={{ marginTop: 14 }}
          >
            <Button size="md" type="primary" fullWidth onClick={metaMaskLogin}>
              <img src={MetaMaskLogo.src} className="h-6 w-6" />
              MetaMask
            </Button>
          </div>
        </div>
      </AuthModal>
      <AuthModal
        show={authState === "register"}
        onClose={() => dispatch(updateAuthState(undefined))}
        actions={[]}
        title=""
      >
        <div className="login">
          <h2 className="login-h">Create an account</h2>
          <p className="login-p">Get 25 image credits new user for free!</p>
          {/* <div className="mobile_link_cta" style={{ marginTop: 14 }}>
            <Button size="md" type="primary" fullWidth onClick={loginWithGoogleOneTap}>
              <img src={GoogleLogo.src} className="h-6 w-6" />Google
            </Button>
          </div> */}
          <div
            id="g_id_signin"
            className="g_id_signin"
            data-type="icon"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="center"
          ></div>

          <div
            id="login_btn_wrapper_register"
            className="mobile_link_cta"
            style={{ marginTop: 14 }}
          >
            <Button size="md" type="primary" fullWidth onClick={metaMaskLogin}>
              <img src={MetaMaskLogo.src} className="h-6 w-6" />
              MetaMask
            </Button>
          </div>
          <small className="license">
            By signing up, you agree to our{" "}
            <a href="/legal/terms-of-service" target="_blank">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/legal/privacy-policy" target="_blank">
              Privacy Policy
            </a>
            .
          </small>
        </div>
      </AuthModal>
      <AuthModal
        show={authState === "credits"}
        onClose={() => dispatch(updateAuthState(undefined))}
        actions={[]}
        title=""
        size="xl"
      >
        <div className="login">
          <div className="center">
            <h2 className="login-h">Upgrade your plan</h2>
            <p className="login-p">
              You&apos;re out of credits. Upgrade your plan and start creating
              more.
            </p>
          </div>
          <div style={{ height: 9 }} />
          <Plans type="pricing" />
          <span className="login-foot center">
            <span>Don&apos;t want to upgrade?</span>
            <Link href="/referrals">
              <a onClick={() => dispatch(updateAuthState(undefined))}>
                <Gift size={14} strokeWidth={1} />
                Earn credits by sharing dazzle.ai with friends.
              </a>
            </Link>
            <a
              href={`/api/billing/checkout${
                referral ? `?referral=${referral}` : ""
              }`}
              onClick={() => dispatch(updateAuthState(undefined))}
            >
              <Coins size={14} strokeWidth={1} />
              Top up with more credits.
            </a>
          </span>
        </div>
      </AuthModal>
    </>
  );
}

function Frontend({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MX6NDHL"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden",
          }}
        ></iframe>
      </noscript>
      <MetaMaskContextProvider>
        <App>
          <Component {...pageProps} />
        </App>
      </MetaMaskContextProvider>
    </Provider>
  );
}

export default Frontend;
