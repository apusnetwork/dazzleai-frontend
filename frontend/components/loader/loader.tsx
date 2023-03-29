import styles from './loader.module.scss';

interface LoaderProps {
  children?: React.ReactNode,
  size?: number;
  margin?: number | string;
  type?: "primary" | "default" | "danger" | "icon" | "accent" | "accent-border" | "google" | "link" | "icon-active" | "transparent";
  text?: string
}

interface ProgressProps {
  percent: number
}



export default function Loader({ children, size = 14, margin = 0, type = "default", text = "Loading" }: LoaderProps): JSX.Element {
  return (
    <div className={styles._}>
      <div className={[styles.spinner, styles[type]].join(' ').trim()} style={{ width: size, height: size, margin: margin }}>
        {children}
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
}



export function ProgressLoader({ percent }: ProgressProps): JSX.Element {

  return (
    <div className={styles.progress}>
      <div className={styles._bar}>
        <div className={styles.bar} style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}