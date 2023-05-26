
import { ChevronDownArrow } from "@/frontend/components/basic-icons";
import { useAppSelector } from "@/frontend/redux/hooks";
import { ApiError, selectErrors } from "@/frontend/redux/info/slice";
import { CSSProperties } from "react";
import inputStyles from '../input/input.module.scss';
import Label from "../input/label";
import styles from './select.module.scss';

interface OptionProps {
  key: string
  value: any
}

interface SelectProps {
  size?: "xs" | "sm" | "md" | "lg";
  id: string;
  name?: string;
  label?: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: ApiError,
  info?: string;
  options: string[] | (OptionProps | undefined)[]
  noInfo?: boolean
  style?: CSSProperties
  customStyles?: string[]

}


export default function Select({ label, size = "md", id, name, value, onChange, error, info, options, noInfo = false, style, customStyles = [] }: SelectProps): JSX.Element {

  const errors = useAppSelector(selectErrors)
  error = error || (errors && errors[id])
  const hasError = error && ((!error.value && !value) || (error.value && error.value === value))

  const className = [
    inputStyles.input,
    inputStyles[size],
    customStyles.map(s => inputStyles[s]).join(' '),
    hasError ? inputStyles.input_error : '',
    styles.select
  ].join(' ').trim();

  return (
    <div className={inputStyles._}>
      <div className={[inputStyles._input, label ? styles.with_label : '', styles._select, styles[size]].join(' ').trim()}>
        <select
          id={id}
          name={name || id}
          className={className}
          value={value}
          onChange={onChange}
          style={style}
        >
          {
            options.map((o: any) => {
              if (o) {
                if (typeof o === 'string') {
                  return <option value={o} key={o}>{o}</option>
                } else {
                  return <option key={o.value} value={o.value}>{o.key}</option>
                }
              }
            })
          }
        </select>
        {label && <Label htmlFor={id} className={inputStyles.input_label}>{label}</Label>}
        <ChevronDownArrow className={styles.chevron} size={16} />
      </div>
      {!noInfo ? <div className={inputStyles._info}>
        {
          hasError ?
            <div className={inputStyles.error}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 16.0195V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
              {error.msg}
            </div>
            : info ?
              <div className={inputStyles.info}>
                {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle><path d="M12 6.01953V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 10V18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                {info}
              </div>
              : null
        }
      </div>
        : null}
    </div>
  )

}