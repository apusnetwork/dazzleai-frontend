import Script from 'next/script';
import styles from './website.module.scss';

interface SocialProofProps {
  title?: string
}
export function SocialProof({
  title = 'See what our customers are saying about us'
}: SocialProofProps): JSX.Element {

  return (
    <div className={styles.social_proof}>
      <h3 className={styles.title}>{title}</h3>

      <div className="senja-frame-embed" data-id="60066c6a-b033-4b08-a2b4-d4bc64a75be4"></div>
      <Script defer type="text/javascript" src="https://widget.senja.io/embed/frame.js" />
    </div>
  )

}
export function SmallSocialProof(): JSX.Element {
  return (
    <>
      <div className="senja-frame-embed" data-id="6e099b7f-6264-4bb3-a78a-ebb8a55f151c"></div>
      <Script defer type="text/javascript" src="https://widget.senja.io/embed/frame.js" />
    </>
  )
}