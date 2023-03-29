import ActiveLink from "../active_link/active_link"
import styles from './tabs.module.scss'

interface TabProps {
  children: any
  href?: string
  active?: boolean
  onClick?: () => void
}

interface TabsProps {
  children: JSX.Element[] | JSX.Element
}


export function Tabs({ children }: TabsProps): JSX.Element {

  return (
    <nav className={styles._}>
      <ul className={styles.tabs}>
        {children}
      </ul>
    </nav>
  )
}


export function Tab({ children, href, active, onClick }: TabProps): JSX.Element {

  if (href) {
    return (
      <li className={styles.tab}>
        <ActiveLink href={href} activeClassName={styles.active}>
          <a className={styles.a} onClick={onClick}>{children}</a>
        </ActiveLink>
      </li>
    );
  } else {
    return (
      <li className={styles.tab}>
        <a className={[styles.a, active ? styles.active : ''].join(' ')} onClick={onClick}>{children}</a>
      </li>
    )
  }

}