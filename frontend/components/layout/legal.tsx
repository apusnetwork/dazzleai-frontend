import ActiveLink from '@/frontend/components/active_link/active_link';
import styles from './layout.module.scss';
import WebsiteLayout from './website';



type LegalLayoutProps = {
  children: JSX.Element | JSX.Element[] | string
  title: string;
  description: string;
  canonical: string;
}


// TODO: all seo tags
export default function LegalLayout({ children, title, description, canonical }: LegalLayoutProps): JSX.Element {
  return (
    <WebsiteLayout title={title} description={description} canonical={canonical} robots="noindex" footer={false}>
      <div className={styles.legal}>
        <nav className={styles.legal_nav}>
          <ul className={styles.nav_links}>
            <li>
              <ActiveLink href='/legal/privacy-policy' activeClassName={styles.nav_link_active}>
                <a className={styles.nav_link}>
                  Privacy Policy
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/legal/terms-of-service' activeClassName={styles.nav_link_active}>
                <a className={styles.nav_link}>
                  Terms of service
                </a>
              </ActiveLink>

            </li>
            <li>
              <ActiveLink href='/legal/return-policy' activeClassName={styles.nav_link_active}>
                <a className={styles.nav_link}>
                  Return Policy
                </a>
              </ActiveLink>

            </li>
            {/* <li>
              <ActiveLink href='/legal/restrictions' activeClassName={styles.nav_link_active}>
                <a className={styles.nav_link}>
                  Restrictions
                </a>
              </ActiveLink>

            </li>
            <li>
              <ActiveLink href='/legal/subprocessors' activeClassName={styles.nav_link_active}>
                <a className={styles.nav_link}>
                  Subprocessors
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/legal/cancellation-policy' activeClassName={styles.nav_link_active}>
                <a className={styles.nav_link}>
                  Cancellation Policy
                </a>
              </ActiveLink>
            </li> */}
          </ul>
        </nav>
        <div className={styles.legal_content}>
          {children}
        </div>
      </div>
    </WebsiteLayout>
  )
}