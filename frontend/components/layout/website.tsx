import dayjs from "dayjs";
import { useAppSelector } from "@/frontend/redux/hooks";
import { selectUser } from "@/frontend/redux/user/slice";
import cookies from "js-cookie";
import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../button/button";
import Messages from "../message/message";
import WebsiteFooter from "./footer";
import { WebsiteHeader } from "./header";
import styles from "./layout.module.scss";
import Script from "next/script";
import { Global18PlusContextProvider } from "@/frontend/context/18puls";

type WebsiteLayoutProps = {
  children: JSX.Element | JSX.Element[] | string;
  title: string;
  description?: string;
  robots?: string;
  canonical?: string;
  image?: string;
  footer?: boolean;
};

export default function WebsiteLayout({
  children,
  title,
  description,
  robots,
  canonical = "",
  image,
  footer = true,
}: WebsiteLayoutProps): JSX.Element {
  const [showCookieBar, setShowCookieBar] = useState(false);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!cookies.get("permission-getimg")) {
      setShowCookieBar(true);
    }
  }, []);

  function handleCookie() {
    setShowCookieBar(false);
    cookies.set("permission-getimg", dayjs().unix().toString(), {
      expires: dayjs().add(9, "months").toDate(),
    });
  }
  if (!description) {
    description = "";
  }
  title += "";

  let imgURL = image ? image : "/social-image-3.png";
  if (imgURL.startsWith("/")) {
    imgURL = "" + imgURL;
  }

  return (
    <div className={styles.website_layout}>
      <Global18PlusContextProvider>
        <Head>
          <title>{title}</title>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];`,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MX6NDHL');`,
            }}
          ></script>
          <meta name="description" content={description} />
          <meta name="og:title" property="og:title" content={title} />
          <meta name="twitter:title" property="twitter:title" content={title} />
          <meta
            name="og:description"
            property="og:description"
            content={description}
          />
          <meta name="twitter:description" content={description} />
          <meta name="og:image" property="og:image" content={imgURL} />
          <meta name="twitter:image" content={imgURL} />
          <meta name="twitter:site" content="@getimg_ai" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="og:type" property="og:type" content="website" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#333333"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#1f2023" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="theme-color" content="#1f2023" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0,  maximum-scale=1.0"
          />
          {robots ? <meta name="robots" content={robots} /> : null}
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-EEYE7M0G1Y"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EEYE7M0G1Y');
          `
          }}>
          </script> */}
        </Head>
        <WebsiteHeader fixed />
        {user.id && (user.status === "verify" || user.status === "created") ? (
          <div className={styles.banner}>
            <span>Please verify your account.</span>
          </div>
        ) : null}
        {user.id && user.status === "ban" ? (
          <div className={[styles.banner, styles.banner_danger].join(" ")}>
            <span>You have been banned.</span>
          </div>
        ) : null}
        <main className={styles.website}>{children}</main>
        {footer ? <WebsiteFooter /> : null}
        {showCookieBar ? (
          <div className="cookies-notification">
            <p>
              We use cookies to improve your experience. Learn more in our{" "}
              <a href="/legal/privacy-policy" target="_blank">
                Privacy Policy
              </a>
              .
            </p>
            <Button onClick={handleCookie} type="accent">
              Accept all
            </Button>
          </div>
        ) : null}
      </Global18PlusContextProvider>
    </div>
  );
}
