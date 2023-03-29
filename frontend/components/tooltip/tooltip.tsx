import styles from './tooltip.module.scss';


interface TooltipProps {
  type?: string
  text: string
  children: JSX.Element
  disabled?: boolean
  position?: 'left' | 'right'
}


export default function Tooltip({ text, children, disabled = false, type = 'default', position = 'left' }: TooltipProps): JSX.Element {



  return (

    <div className={[styles._, styles[type]].join(' ')}>
      <div className={styles.content}>
        {children}
      </div>
      {!disabled ? <div className={[styles._tooltip, styles[position]].join(' ')}>
        <div className={styles.tooltip}>
          <span>{text}</span>
        </div>
      </div> : null}

    </div>
  )

}