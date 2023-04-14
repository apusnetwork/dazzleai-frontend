import dayjs from 'dayjs';
import cookies from 'js-cookie';
import { Dices, Eraser, Expand, Layers, ListStart } from 'lucide-react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { MinusSquare } from 'react-feather';
import ActiveLink from '../active_link/active_link';
import { AdjustHorizontalSettings } from '../basic-icons';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Button from '../button/button';
import Messages from '../message/message';
import { WebsiteHeader } from './header';
import styles from './layout.module.scss';
import Script from 'next/script'


type GuideLayoutProps = {
  children: JSX.Element | JSX.Element[] | string
  title: string;
  description?: string;
  robots?: string;
  canonical?: string;
  image?: string
  breadcrumbs?: { title: string, href?: string }[]
}


export default function GuideLayout({ children, title, description, robots, canonical = '', image, breadcrumbs }: GuideLayoutProps): JSX.Element {
  const [showCookieBar, setShowCookieBar] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
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
  const metaTitle = title + " | dazzle.ai"

  const imgURL = image ? image : "https://dazzle.ai/social-image-2.png"

  return (
    <div className={styles.guide_layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="og:title" property="og:title" content={metaTitle} />
        <meta name="twitter:title" property="twitter:title" content={metaTitle} />
        <meta name="og:description" property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image" content={imgURL} />
        <meta name="twitter:image" content={imgURL} />
        <meta name="twitter:site" content="@getimg_ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:type" property="og:type" content="website" />
        <meta property="og:url" content={`https://dazzle.ai${canonical}`} />
        <link rel="canonical" href={`https://dazzle.ai${canonical}`} />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#333333" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {robots ? <meta name="robots" content={robots} /> : null}
        <Script src="https://accounts.google.com/gsi/client"></Script>

      </Head>
      <WebsiteHeader fixed />

      <main className={styles.guide_main}>
        <div className={styles.guide_content}>
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : <div />}

          <article className={styles.guide_article}>
            <h1 className={styles.guide_title}>{title}</h1>
            <p className={styles.guide_description}>{description}</p>
            <div className={styles.guide_article_content}>
              {children}
            </div>
          </article>

          <div className={styles.guide_footer}>

          </div>
        </div>
      </main >
      <aside className={styles._sidebar}>
        <nav className={styles.sidebar}>
          <ul className={styles.guide_links}>
            <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides'>
                <a className={styles.guide_link}><ListStart /> Overview</a>
              </ActiveLink>
            </li>
          </ul>
          <b className={styles.guide_links_title}>Parameters</b>
          <ul className={styles.guide_links}>
            <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides/stable-diffusion-parameters'>
                <a className={styles.guide_link}><ListStart /> Overview</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides/interactive-guide-to-stable-diffusion-steps-parameter'>
                <a className={styles.guide_link}><Layers /> Steps</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter'>
                <a className={styles.guide_link}><AdjustHorizontalSettings /> CFG scale</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides/guide-to-negative-prompts-in-stable-diffusion'>
                <a className={styles.guide_link}><MinusSquare /> Negative prompt</a>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides/guide-to-seed-parameter-in-stable-diffusion'>
                <a className={styles.guide_link}><Dices /> Seed</a>
              </ActiveLink>
            </li>

          </ul>
          <b className={styles.guide_links_title}>AI Editor</b>
          <ul className={styles.guide_links}>
            <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides/ai-editor'>
                <a className={styles.guide_link}><ListStart /> Overview</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides/outpainting-with-stable-diffusion'>
                <a className={styles.guide_link}><Expand /> Outpainting</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides/inpainting-with-stable-diffusion'>
                <a className={styles.guide_link}><Eraser /> Inpainting</a>
              </ActiveLink>
            </li>
            {/* <li>
              <ActiveLink activeClassName={styles.guide_link_active} href='/guides/find-and-replace-objects-with-stable-diffusion'>
                <a className={styles.guide_link}><Eraser /> Find & Replace</a>
              </ActiveLink>
            </li> */}
          </ul>
        </nav>
      </aside>
      {
        showCookieBar ?
          <div className="cookies-notification">
            < p > We use cookies to improve your experience.Learn more in our < a href="/legal/privacy-policy" target="_blank" > Privacy Policy</a >.</p >
            <Button onClick={handleCookie} type="accent">Accept all</Button>
          </div >
          : null
      }
      <Messages />

    </div >
  )
}