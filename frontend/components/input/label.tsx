import styles from './input.module.scss';


interface LabelProps {
  className?: string,
  htmlFor?: string,
  children: React.ReactNode;
}


export default function Label({ className, children, htmlFor }: LabelProps): JSX.Element {
  return (
    <label htmlFor={htmlFor} className={[styles.label, className].join(' ').trim()}>{children}</label>
  )
}




