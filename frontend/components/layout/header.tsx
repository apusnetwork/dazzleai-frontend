import { useAppDispatch, useAppSelector } from '@/frontend/redux/hooks';
import { updateAuthState } from '@/frontend/redux/info/slice';
import { logoutUser } from '@/frontend/redux/user/actions';
import { selectUser } from '@/frontend/redux/user/slice';
import Link from 'next/link';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import ActiveLink from '../active_link/active_link';
import Avatar from '../avatar/avatar';
import { LogoutExit, MenuHambuger, PaperFileText, SecurityShield, XCloseDelete } from '../basic-icons';
import Button from '../button/button';
import styles from './layout.module.scss';
import Cookies from 'js-cookie';
import { useGlobal18Plus } from '@/frontend/context/18puls';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';


declare global {
  interface Window {
    gtag: any;
    mixpanel: any;
  }
}


export function WebsiteHeader({ fixed = false }): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [open, setOpen] = useState(false);
  const { setShow18Plus, show18Plus } = useGlobal18Plus();


  return (
    <header className={[open ? styles.mobile_header : ''].join(' ')}>
      <div className={styles.website_header + (fixed ? ' ' + styles.fixed : '')}>
        <h1>
          <Link href="/">
            <a className={styles.website_logo}>
              <img src="/logo-blue.png" className={styles.header_logo} alt="" height={20} width={104} />
            </a>
          </Link>
        </h1>

        <div className={styles.hamburger}>
          <Button type='icon' size='lg' onClick={() => setOpen(o => !o)} >
            {
              !open ?
                <MenuHambuger />
                : <XCloseDelete />
            }
          </Button>
        </div>
        <div className={[styles.header_right, open ? styles.mobile_menu : ''].join(' ')}>
          {/* {/* <ActiveLink activeClassName={styles.active} href="/editor"><a className={styles.header_link}>AI Editor</a></ActiveLink> */}
          <ActiveLink activeClassName={styles.active} href="/generate"><a className={styles.header_link}>Generate Image</a></ActiveLink>
          <div className={styles.image_18_badge} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShow18Plus(t => !t) }}>18+ {show18Plus ? <EyeInvisibleOutlined className="leading-0 ml-1" rev="" /> : <EyeOutlined className="leading-0 ml-1" rev="" />}</div>
          {/* <ActiveLink activeClassName={styles.active} href="/dreambooth/models"><a className={styles.header_link}>DreamBooth <span className={styles.new}>new</span></a></ActiveLink> */}
          {/* <ActiveLink activeClassName={styles.active} href="/guides"><a className={styles.header_link}>Guides</a></ActiveLink> */}
          <a className={styles.header_link} href='https://discord.gg/BxXM6qfmwp' target='_blank' rel='noreferrer'>
            <svg xmlns="http://www.w3.org/2000/svg" width={71 / 3.2} height={55 / 3.2} viewBox="0 0 71 55" fill="#000000">
              <g clipPath="url(#clip0)">
                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#000000" opacity={0.9} />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="71" height="55" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          {
            user.id ?
              <>
                <div className={styles.mobile_link_cta}>
                  <Button href='/pricing' onClick={e => {
                    window && (window as any)?.gtag('event', 'view_item_list', {
                      'event_category': 'engagement',
                      'event_label': ''
                    });;
                  }}>Upgrade now</Button>
                </div>
                <HeaderUser />

              </>

              : <>
                <ActiveLink activeClassName={styles.active} href="/pricing"><a className={styles.header_link}>Pricing</a></ActiveLink>

                <a onClick={() => dispatch(updateAuthState('login'))} href="#" className={styles.header_link}>Log in</a>
                <div className={styles.mobile_link_cta}>
                  <Button onClick={() => {
                    window && (window as any)?.gtag('event', 'signup', {
                      'event_category': 'account',
                      'event_label': ''
                    });
                    dispatch(updateAuthState('register'))
                  }}>Create free account</Button>
                </div>

              </>
          }
        </div>

      </div>
    </header >
  )
}



function HeaderUser(): JSX.Element {
  const [open, setOpen] = useState(false)
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const userNameSliced = user.name?.startsWith('0x') ?
    user.name.length > 10 ? `${user.name.substring(0, 6)}...${user.name.substring(user.name.length - 4)}` : user.name
    : user.name

  return (
    <section className={styles._header_user} >
      <div className={styles.header_user} onClick={e => { e.stopPropagation(); setOpen(!open) }}>
        <div >
          <div className={styles.name}>{userNameSliced}</div>
          <div className={styles.credits}>Credits: {user.credits}</div>
        </div>
        <div className={styles.header_avatar}>
          <Avatar name={user.name} size={36} />
        </div>
      </div>
      {
        open ?
          <OutsideClickHandler onOutsideClick={(e) => { e.stopPropagation(); setOpen(false) }}>
            <div className={styles._user_menu}>
              <div className={styles.user_menu_name}>
                {user.name}
              </div>
              <ul className={styles.user_menu}>
                {/* <li>
                  <Link href="/gallery?mode=generator">
                    <a>
                      <Grid size={16} />
                      My Gallery
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/settings">
                    <a>
                      <SettingsAccountMore size={16} />
                      Settings
                    </a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/legal/privacy-policy">
                    <a>
                      <SecurityShield size={16} />
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms-of-service">
                    <a>
                      <PaperFileText size={16} />
                      Terms of service
                    </a>
                  </Link>
                </li>
                <li>
                  <a onClick={() => {
                    Cookies.remove('getimgauth')
                    dispatch(logoutUser())
                  }}>
                    <LogoutExit size={16} />
                    Log Out
                  </a>
                </li>
                {/* <li>
                  <Link href="/referrals">
                    <a style={{ background: '#5858e6', color: '#ffffff' }}>
                      <Coins size={16} />
                      Invite friends & Earn credits
                    </a>
                  </Link>
                </li> */}
              </ul>
            </div>
          </OutsideClickHandler>
          : null
      }
    </section >
  )
}


