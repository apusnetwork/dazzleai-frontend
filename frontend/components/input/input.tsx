import { useAppSelector } from "@/frontend/redux/hooks";
import { ApiError, selectErrors } from "@/frontend/redux/info/slice";
import { useEffect, useState } from "react";
import { EyePasswordHide, EyePasswordShow } from "../basic-icons";
import styles from './input.module.scss';
import Label from "./label";


export interface InputProps {
  size?: "xs" | "sm" | "md" | "lg";
  placeholder?: string;
  label?: string;
  id: string;
  name?: string;
  type?: "number" | "email" | "password" | "text" | "time";
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  error?: ApiError,
  info?: string;
  autoComplete?: "on" | "off";
  pattern?: string;
  disabled?: boolean
  step?: number
  required?: boolean
  customStyles?: string[]
  Icon?: React.ComponentType<{ className: string, size: number }>
  disableInfo?: boolean
}

export default function Input({ size = "md", placeholder, label, id, name, error, type = "text", value, onChange, autoFocus, info, autoComplete = "off", pattern, disabled, required, Icon, customStyles = [], disableInfo = false, step, onBlur, onFocus }: InputProps): JSX.Element {
  const errors = useAppSelector(selectErrors)
  const [showPassword, setShowPassword] = useState(false);
  error = error || (errors && errors[id])
  const hasError = error && ((!error.value && !value) || (error.value && error.value === value))


  const className = [
    styles.input,
    styles[size],
    Icon ? styles.with_icon : '',
    customStyles.map(s => styles[s]).join(' '),
    hasError ? styles.input_error : '',

  ].join(' ').trim();

  useEffect(() => {
    if (autoFocus) {
      document.getElementById(id)?.focus()
    }
  }, [autoFocus])


  // function handleNumber(v: number) {
  //   onChange && onChange({ target: { id: id, value: (parseFloat(value) + v).toString() } } as ChangeEvent<HTMLInputElement>)

  // }


  return (
    <div className={styles._}>
      <div className={[styles._input, label ? styles.with_label : ''].join(' ').trim()}>
        {Icon ? <Icon className={styles.icon} size={14} /> : null}
        <input
          id={id}
          name={name || id}
          className={className}
          value={value || ''}
          onChange={onChange}
          type={showPassword ? 'text' : type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          autoFocus={autoFocus}
          pattern={pattern}
          disabled={disabled}
          required={required !== undefined}
          onBlur={onBlur}
          onFocus={onFocus}
          step={step}
        />
        <Label htmlFor={id} className={styles.input_label}>{label}</Label>

        {
          type === 'password' ?
            <button type="button" className={styles.password_show} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyePasswordHide size={16} /> : <EyePasswordShow size={16} />}
            </button>
            : null

        }
      </div>



      {!disableInfo ? <div className={styles._info}>
        {
          hasError ?
            <div className={styles.error}>
              {error.msg}
            </div>
            : info ?
              <div className={styles.info}>
                {info}
              </div>
              : null

        }
      </div> : null}
    </div >
  )
}