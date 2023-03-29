
import { useAppSelector } from "@/frontend/redux/hooks";
import { ApiError, selectErrors } from "@/frontend/redux/info/slice";
import React, { createRef, useEffect } from "react";
import styles from '../input/input.module.scss';
import Label from "../input/label";


interface TextareaProps {
  height?: number
  placeholder?: string;
  label?: string;
  id: string;
  name?: string;
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  error?: ApiError,
  info?: string | JSX.Element;
  autoComplete?: "on" | "off";
  disabled?: boolean
  step?: number
  customStyles?: string[]
  size?: "sm" | "md" | "lg";
  noInfo?: boolean;

}

export default function Textarea({ height = 90, placeholder, label, id, name, error, value, onChange, autoFocus, info, autoComplete = "off", disabled, customStyles = [], size, noInfo, onBlur, onFocus }: TextareaProps): JSX.Element {
  const errors = useAppSelector(selectErrors)
  error = error || (errors && errors[id])
  const hasError = error && ((!error.value && !value) || (error.value && error.value === value))
  const ref = createRef<HTMLTextAreaElement>();

  const className = [
    styles.input,
    styles.textarea,
    styles['textarea_' + size],
    hasError ? styles.input_error : '',
    customStyles.map(s => styles[s]).join(' '),

  ].join(' ').trim();

  useEffect(() => {
    if (autoFocus) {
      document.getElementById(id)?.focus()
    }
  }, [autoFocus])

  function resize() {
    const e = ref.current;
    if (!e) return

    e.style.height = 'inherit';
    e.style.height = `${e.scrollHeight + 9}px`;
  }

  useEffect(() => {
    resize()
  }, [value]);


  return (
    <div className={styles._}>
      <div className={[styles._input, label ? styles.with_label : ''].join(' ').trim()}>
        <textarea
          id={id}
          name={name || id}
          className={className}
          value={value || ''}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
          autoFocus={autoFocus}
          disabled={disabled}
          ref={ref}
          style={{ minHeight: height }}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <Label htmlFor={id} className={styles.input_label}>{label}</Label>
      </div>



      {!noInfo ? <div className={styles._info}>
        {
          hasError ?
            <div className={styles.error}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 16.0195V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
              {error.msg}
            </div>
            : info ?
              <div className={styles.info}>
                {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle><path d="M12 6.01953V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 10V18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                {info}
              </div>
              : null

        }
      </div> : null}
    </div>
  )
}