import { useAppSelector } from "@/frontend/redux/hooks";
import { InfoMessage, selectMessages } from "@/frontend/redux/info/slice";
import { AlertError, CheckGoodYes, Info } from "../basic-icons";
import styles from './message.module.scss';




function Message({ type, text }: InfoMessage): JSX.Element {
  let Icon = Info;
  if (type === 'success') {
    Icon = CheckGoodYes
  } else if (type === 'danger') {
    Icon = AlertError
  }


  return (
    <div className={[styles.message].join(' ').trim()}>
      <div className={[styles.accent, styles[type]].join(' ').trim()} />


      <div className={styles.text}>
        <Icon size={16} className={[styles.icon, styles[type]].join(' ').trim()} />
        {text}
      </div>
    </div>
  )

}


export default function Messages({ type = 'right' }): JSX.Element {
  const messages = useAppSelector(selectMessages)

  return (
    <div className={[styles._, styles[type]].join(' ')} style={{ zIndex: 99999 }}>
      {
        messages.map((m, i) => (
          <Message key={m.id || i} {...m} />
        ))
      }
    </div>
  )
}
