import Loader from '../loader/loader';
import styles from './switch.module.scss';

interface SwitchProps {
  id: string
  value: any
  labels: string[]
  values?: any[]
  onChange: (i: string, v: any) => void
  loading?: boolean
}



export default function Switch({ id, value, labels, values = [false, true], onChange, loading }: SwitchProps): JSX.Element {

  return (
    <div className={styles._}>
      {
        loading ?
          <span className={styles.loader}>
            <Loader size={9} type="primary" text='' />
          </span>
          : null
      }
      {labels && labels[0] ? <span onClick={() => onChange(id, values[0])} className={styles.label1}>{labels[0]}</span> : null}
      <label htmlFor={id} className={styles.switch}>
        <input id={id} type="checkbox" checked={value === values[1]} onChange={() => onChange(id, value === values[0] ? values[1] : values[0])} />
        <span className={styles.slider} />
      </label>
      {labels && labels[1] ? <span onClick={() => onChange(id, values[1])} className={styles.label2}>{labels[1]}</span> : null
      }
    </div >
  )

}