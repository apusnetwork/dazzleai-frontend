
import Link from 'next/link';
import { InstagramSocial, TwitterSocialTweet } from '../basic-icons';
import styles from './layout.module.scss';


export default function WebsiteFooter(): JSX.Element {

  return (
    <footer className={styles._website_footer}>
      <nav className={styles.website_footer}>
        <div className={[styles.footer_column, styles.footer_branding].join(' ')}>
          <div>
            <Link href="/">
              <a>
                <img src="/logo-white.svg" className={styles.header_logo} alt="getimg.ai" height={20} width={104} />
              </a>
            </Link>
          </div>
          <div className={styles.socials}>


            <a href='https://instagram.com/getimg.ai' target='_blank' rel='noreferrer'>
              <InstagramSocial strokeWidth={1.5} size={22} color='#ffffff' />
            </a>
            <a href='https://twitter.com/getimg_ai' target='_blank' rel='noreferrer'>
              <TwitterSocialTweet strokeWidth={1.5} size={22} color='#ffffff' />
            </a>
            <a href='https://discord.gg/5KsUXSzVwS' target='_blank' rel='noreferrer'>
              <svg xmlns="http://www.w3.org/2000/svg" width={71 / 2.75} height={55 / 2.75} viewBox="0 0 71 55" fill="none">
                <g clipPath="url(#clip0)">
                  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#ffffff" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="71" height="55" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        <div className={[styles.footer_column].join(' ')}>
          <h6 className={styles.footer_title}>Product</h6>
          <ul className={styles.footer_list}>
            <li>
              <Link href="/tools/text-to-image">
                <a>Art Generator</a>
              </Link>
            </li>
            <li>
              <Link href="/tools/outpainting">
                <a>AI Editor</a>
              </Link>
            </li>
            <li>
              <Link href="/tools/dreambooth">
                <a>DreamBooth</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={[styles.footer_column].join(' ')}>
          <h6 className={styles.footer_title}>Models</h6>
          <ul className={styles.footer_list}>
            <li>
              <Link href="/models/analog-diffusion">
                <a>Analog Diffusion</a>
              </Link>
            </li>
            <li>
              <Link href="/models/anime-diffusion">
                <a>Anime Diffusion</a>
              </Link>
            </li>
            <li>
              <Link href="/models/classic-anim-diffusion">
                <a>Disney Diffusion</a>
              </Link>
            </li>
            <li>
              <Link href="/models/ghibli-diffusion">
                <a>Ghibli Diffusion</a>
              </Link>
            </li>
            <li>
              <Link href="/models/inkpunk-diffusion">
                <a>Inkpunk Diffusion</a>
              </Link>
            </li>
            <li>
              <Link href="/models/van-gogh-diffusion">
                <a>Van Gogh Diffusion</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={[styles.footer_column].join(' ')}>
          <h6 className={styles.footer_title}>Resources</h6>
          <ul className={styles.footer_list}>
            <li>
              <Link href="/legal/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/legal/terms-of-service">
                <a>Terms of Service</a>
              </Link>
            </li>
            <li>
              <Link href="/legal/restrictions">
                <a>Restrictions</a>
              </Link>
            </li>
            <li>
              <a href="https://getimg-ai.getrewardful.com/signup" target="_blank" rel='noreferrer noopener' >
                Affiliate Program
              </a>
            </li>
          </ul>
        </div>
        <div className={[styles.footer_column].join(' ')}>
          <h6 className={styles.footer_title}>About</h6>
          <ul className={styles.footer_list}>
            <li>
              <Link href="/guides">
                <a>Guides</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <a href="mailto:hi@getimg.ai">
                Email
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}