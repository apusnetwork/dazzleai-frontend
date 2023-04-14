
import { ChevronRightArrow } from '@/frontend/components/basic-icons';
import Link from 'next/link';
import styles from './breadcrumbs.module.scss';


interface BreadcrumbsProps {
  type?: 'default' | 'accent'
  items: {
    title: string
    href?: string
  }[]
}


export default function Breadcrumbs({ items, type = 'default' }: BreadcrumbsProps): JSX.Element {

  return (
    <ul className={[styles._, styles[type]].join(' ')}>
      {
        items.map((item, i) => [
          <li key={i + 'elem'} className={styles.item}>
            {
              item.href ?
                <Link href={item.href}>
                  <a>
                    {item.title}
                  </a>
                </Link>
                : <span>{item.title}</span>
            }
          </li>,
          i < items.length - 1 ?
            <li key={i + 'svg'} className={styles._chevron}>
              <ChevronRightArrow size={9} strokeWidth={3} className={styles.chevron} />
            </li>
            : null
        ])
      }
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement":
            items.map((item, i) => (
              {
                "@type": "ListItem",
                "position": i + 1,
                "name": item.title,
                // "item": "https://dazzle.ai" + item.href
                "item": "/" + item.href
              }
            ))


        })
      }} />
    </ul>
  )

}