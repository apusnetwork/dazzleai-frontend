import dayjs from 'dayjs';
import { useAppSelector } from '@/frontend/redux/hooks';
import { selectUser } from '@/frontend/redux/user/slice';
import cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Button from '../button/button';
import Messages from '../message/message';
import WebsiteFooter from './footer';
import { WebsiteHeader } from './header';
import styles from './layout.module.scss';
import Script from 'next/script'


type WebsiteLayoutProps = {
  children: JSX.Element | JSX.Element[] | string
  title: string;
  description?: string;
  robots?: string;
  canonical?: string;
  image?: string
  footer?: boolean
}


export default function WebsiteLayout({ children, title, description, robots, canonical = '', image, footer = true }: WebsiteLayoutProps): JSX.Element {
  const [showCookieBar, setShowCookieBar] = useState(false)
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!cookies.get('permission-getimg')) {
      setShowCookieBar(true);
    }
  }, [])

  function handleCookie() {
    setShowCookieBar(false)
    cookies.set('permission-getimg', dayjs().unix().toString(), {
      expires: dayjs().add(9, 'months').toDate()
    })
  }
  if (!description) {
    description = ''
  }
  title += " | getimg.ai"

  let imgURL = image ? image : "/social-image-3.png"
  if (imgURL.startsWith('/')) {
    imgURL = 'https://getimg.ai' + imgURL
  }

  return (
    <div className={styles.website_layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="og:title" property="og:title" content={title} />
        <meta name="twitter:title" property="twitter:title" content={title} />
        <meta name="og:description" property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image" content={imgURL} />
        <meta name="twitter:image" content={imgURL} />
        <meta name="twitter:site" content="@getimg_ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:type" property="og:type" content="website" />
        <meta property="og:url" content={`https://getimg.ai${canonical}`} />
        <link rel="canonical" href={`https://getimg.ai${canonical}`} />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#333333" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#1f2023" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#1f2023" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1.0" />
        {robots ? <meta name="robots" content={robots} /> : null}
      </Head>
      <WebsiteHeader fixed />
      {
        user.id && (user.status === 'verify' || user.status === 'created') ?
          <div className={styles.banner} >
            <span>Please verify your account.</span>
          </div>
          : null
      }
      {
        user.id && user.status === 'ban' ?
          <div className={[styles.banner, styles.banner_danger].join(' ')} >
            <span>You have been banned.</span>
          </div>
          : null
      }
      <main className={styles.website}>
        {children}
      </main>
      {footer ? <WebsiteFooter /> : null}
      {
        showCookieBar ?
          <div className="cookies-notification">
            <p>We use cookies to improve your experience. Learn more in our <a href="/legal/privacy-policy" target="_blank">Privacy Policy</a>.</p>
            <Button onClick={handleCookie} type="accent">Accept all</Button>
          </div>
          : null
      }
      <Messages />

    </div >
  )
}