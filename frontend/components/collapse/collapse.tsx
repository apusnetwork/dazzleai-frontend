import { ChevronDownArrow } from '@/frontend/components/basic-icons'
import { useState } from 'react'
import styles from './collapse.module.scss'


interface CollapseProps {
  title: string
  tag?: string
  children: JSX.Element[] | string[] | string | JSX.Element
  icon?: JSX.Element
  align?: 'center' | 'left' | 'right'
  style?: 'plain' | 'default'
  openByDefault?: boolean
}

export default function Collapse({ title, children, icon, align = 'left', style = 'default', openByDefault = false, tag }: CollapseProps): JSX.Element {
  const [open, setOpen] = useState(openByDefault)

  function handleOpen() {
    setOpen(!open)
  }

  return (
    <div className={[styles._, styles[style], styles[align], open ? styles._open : ''].join(' ')} >
      <div className={styles._head} onClick={handleOpen}>
        <div className={styles.head}>
          {icon ? icon : ''}
          <h4 className={styles.title}>{title}</h4>
          {tag ? <span className={styles.tag}>{tag}</span> : null}
        </div>
        <div className={styles.chevron}>
          <ChevronDownArrow size={16} strokeWidth={3} />
        </div>
      </div>
      <div className={[styles._content, open ? styles.open : ''].join(' ')}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )

}