import styles from './form.module.scss';



interface FormProps {
  children: JSX.Element | JSX.Element[] | null | string | string[]
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  title?: string;
  card?: boolean
}


interface InlineInputProps {
  children: JSX.Element | JSX.Element[]
  label?: string;
}

export function InlineInput({ children, label }: InlineInputProps): JSX.Element {

  return (
    <div className={styles.inline_input}>
      <div className={styles.label}>{label}</div>
      <div className={styles.input}>{children}</div>
    </div>
  )
}


interface ButtonRowProps {
  children: JSX.Element | JSX.Element[] | null
  align?: 'left' | 'right' | 'center'
}

export function ButtonRow({ children, align = 'left' }: ButtonRowProps): JSX.Element {

  return (
    <div className={[styles.btn, styles[align]].join(' ').trim()}>
      {children}
    </div>
  )
}

interface InputRowProps {
  children: JSX.Element | JSX.Element[]
}

export function InputRow({ children }: InputRowProps): JSX.Element {

  return (
    <div className={[styles.input_row].join(' ').trim()}>
      {children}
    </div>
  )
}