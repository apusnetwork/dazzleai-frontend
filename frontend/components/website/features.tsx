
import styles from './website.module.scss';

interface FeatureRowProps {
  caption?: string
  title: string | JSX.Element | JSX.Element[]
  text: string | JSX.Element | JSX.Element[]
  visual?: JSX.Element
  reverse?: boolean
}

export function FeatureRow({ title, caption, text, visual, reverse }: FeatureRowProps) {
  return (
    <section className={[styles.feature_row, reverse ? styles.reverse : ''].join(' ')}>
      <div className={styles.content}>
        {caption ? <h3 className={styles.caption}>{caption}</h3> : null}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles._visual}>
        {visual}
      </div>
    </section>
  )
}


interface FeatureCardProps {
  title: string | JSX.Element | JSX.Element[]
  text: string | JSX.Element | JSX.Element[]
  icon: JSX.Element
}

export function FeatureCard({ title, text, icon }: FeatureCardProps) {
  return (
    <div className={[styles.feature_card].join(' ')}>
      {icon ? <div className={styles.icon}>{icon}</div> : null}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

interface FeatureGridProps {
  title: string | JSX.Element | JSX.Element[]
  children: string | JSX.Element | JSX.Element[]
}

export function FeaturesGrid({
  title,
  children
}: FeatureGridProps): JSX.Element {
  return (

    <section className={styles.features_grid}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.grid}>
        {children}
      </div>
    </section>
  )
}