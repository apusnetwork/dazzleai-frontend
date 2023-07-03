import Loader from '@/frontend/components/loader/loader';
import { useAppSelector } from '@/frontend/redux/hooks';
import { selectErrors } from '@/frontend/redux/info/slice';
import Link from 'next/link';
import styles from './button.module.scss';
import { useEffect, useState } from 'react';


interface ButtonProps {
  id?: string
  openInNewTab?: boolean
  type?: "primary" | "default" | "danger" | "icon" | "accent" | "accent-border" | "google" | "link" | "icon-active" | "transparent";
  htmlType?: "button" | "submit" | "reset";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  href?: string | Promise<string>;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  errorFor?: string[];
  children: React.ReactNode
  title?: string
  onClick?: (e?: any) => void
  download?: string
}


export default function Button({ id, openInNewTab = false, type = "primary", htmlType, size = "md", href, loading,
  disabled, fullWidth, children, onClick, errorFor = [], title, download }: ButtonProps): JSX.Element {
  const [hrefStr, setHrefStr] = useState<string>("")

  useEffect(() => {
    if (href) {
      if (typeof href === 'string') {
        setHrefStr(href)
      } else {
        href.then(href => {
          setHrefStr(href)
        })
      }
    }
  }, [href])

  const errors = useAppSelector(selectErrors)
  let hasError = false;
  if (errors && errorFor.length) {
    errorFor.forEach(id => {
      if (errors[id]) {
        hasError = true
      }
    })
  }

  let loaderSize = 12;
  if (size === 'md') {
    loaderSize = 14
  } else if (size === 'lg') {
    loaderSize = 16
  }

  const className = [
    styles.btn,
    styles[type],
    styles[size],
    disabled ? styles.disabled : '',
    fullWidth ? styles.full_width : '',
    loading ? styles.loading : '',
    hasError ? styles.error : '',
  ].join(' ').trim();


  return (
    <div className={[styles._, fullWidth ? styles._full_width : ''].join(' ').trim()}>
      {
        openInNewTab ?
          <a className={className} onClick={onClick} href={hrefStr} target={!download ? "_blank" : ''} rel="noopener noreferrer" title={title} download={download}>
            {children}
          </a>
          : href ?
            <Link href={hrefStr}>
              <a className={className} onClick={onClick} title={title}>
                {children}
              </a>
            </Link>
            : <button
              id={id}
              className={className}
              onClick={onClick}
              type={htmlType}
              disabled={disabled || loading}
              title={title}
            >
              {type === 'google' ? <img src="/images/google-logo.png" className={styles.google_logo} /> : ''}

              {loading ? <span className={[styles.loader].join(' ').trim()}><Loader type={type} size={loaderSize} text="" /></span> : null}
              {children}
            </button>
      }
    </div>
  )
}