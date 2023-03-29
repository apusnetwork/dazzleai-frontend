
import { useAppSelector } from "@/frontend/redux/hooks";
import { ApiError, selectErrors } from "@/frontend/redux/info/slice";
import { CheckGoodYes } from "../basic-icons";
import styles from './checkbox.module.scss';

interface CheckboxProps {
  id: string
  label: React.ReactNode
  value: string | undefined
  error?: ApiError,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  noError?: boolean
}


export default function Checkbox({ id, label, value, onChange, error, noError }: CheckboxProps): JSX.Element {
  const errors = useAppSelector(selectErrors)
  error = error || (errors && errors[id])
  const hasError = error && ((!error.value && !value) || (error.value && error.value === value))


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = value === 'true' ? 'false' : 'true'
    onChange(e)
  }

  return (
    <div className={styles._}>
      <label htmlFor={id} className={styles._checkbox}>
        <input
          type='checkbox'
          id={id}
          name={id}
          className={styles.checkbox_input}
          onChange={handleChange}
          checked={value === 'true'}
        />
        <div className={[styles.checkbox, hasError ? styles.checkbox_error : ''].join(' ')}>

          <CheckGoodYes size={10} strokeWidth={4} className={value === 'false' ? styles.hidden : ''} />

        </div>
        {label ? <span className={styles.label}>{label}</span> : null}
      </label>
      {!noError ? <div className={styles._error}>
        {
          hasError ?
            <div className={styles.error}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 16.0195V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
              {error.msg}
            </div>
            : null
        }
      </div> : null}
    </div>
  )
}