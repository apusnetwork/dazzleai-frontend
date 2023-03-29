import styles from './website.module.scss';


interface LargeCTAProps {
  title?: string | JSX.Element | JSX.Element[]
  text?: string | JSX.Element | JSX.Element[]
  button: string | JSX.Element

}


export function LargeCTA({
  title = <>Ready to get started?</>,
  text = 'Explore our tools, or create an account.',
  button,
}: LargeCTAProps): JSX.Element {

  return (
    <section className={styles._large_cta}>
      <div className={styles.large_cta}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.cta}>{button}</div>
        </div>
      </div>
    </section>
  )
}