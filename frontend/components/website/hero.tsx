
import styles from './website.module.scss'

interface HeroProps {
  title: string | JSX.Element | JSX.Element[]
  subtitle: string
  subtitle2: React.ReactNode
  visual: JSX.Element
  socialProof?: JSX.Element
  cta: JSX.Element
}

export default function Hero({ title, subtitle, subtitle2, visual, socialProof, cta }: HeroProps): JSX.Element {

  return (
    <section className={styles._hero} >
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.hero_subtitle} style={{ marginTop: 20 }}>{subtitle2}</h2>
          <div className={styles.cta}>
            {cta}
          </div>
          <h2 className={styles.hero_subtitle}>{subtitle}</h2>
          <div className={styles.social_proof}>
            {socialProof}
          </div>
        </div>
        <div className={styles.visual}>
          {visual}
        </div>
      </div>
    </section>
  )
}