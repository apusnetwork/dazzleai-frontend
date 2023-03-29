import styles from './divider.module.scss';

interface DividerProps {
  text?: string
}


export default function Divider({ text }: DividerProps): JSX.Element {

  return (
    <div className={styles._}>
      <div className={styles.line}>
        {text ?
          <div className={styles.text}>
            <span>
              {text}
            </span>
          </div>
          : null
        }
      </div>
    </div>
  )
}