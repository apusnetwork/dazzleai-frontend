import dayjs from 'dayjs';
import cookies from 'js-cookie';
import { Lightbulb, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './onboarding.module.scss';

interface TipProps {
  id: string
  title?: string
  children: React.ReactNode[] | React.ReactNode
}


export default function Tip({ children, title, id }: TipProps) {
  const [open, setOpen] = useState(false);

  function handleClose() {
    cookies.set(id + '-tip', dayjs().unix().toString(), {
      expires: dayjs().add(24, 'months').toDate()
    })
    setOpen(false);
  }


  useEffect(() => {
    if (!cookies.get(id + '-tip')) {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  return (
    <div className={styles.tip}>
      {
        title ?
          <div className={styles.tip_title}>
            <Lightbulb size={18} />
            {title}
          </div>
          : null
      }

      {children}
      <button className={[styles.tip_close, title ? styles.title_close : ''].join(' ')} onClick={handleClose}>
        <X size={14} />
      </button>
    </div>
  )
}