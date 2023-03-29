
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import styles from './website.module.scss';


interface FaqQuestionProps {
  question: string
  children: JSX.Element | JSX.Element[]
}


export function FaqQuestion({
  question,
  children
}: FaqQuestionProps): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <div className={[styles.faq_question].join(' ')}>
      <div>
        <button className={styles.question} onClick={() => setOpen(!open)}>
          <span>{question}</span>
          {open ? <Minus /> : <Plus />}
        </button>
      </div>
      <div className={[styles.answer, open ? styles.open : ''].join(' ')}>
        {children}
      </div>
    </div>
  )
}

interface FaqProps {
  title?: string | JSX.Element | JSX.Element[]
  children: string | JSX.Element | JSX.Element[]
}



export function Faq({
  title = 'Frequently Asked Questions',
  children
}: FaqProps): JSX.Element {
  return (

    <section className={styles.faq}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.questions}>
        {children}
      </div>
    </section>
  )
}