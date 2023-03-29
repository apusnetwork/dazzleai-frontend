import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { XCloseDelete } from '../basic-icons';
import styles from './modal.module.scss';


interface ModalProps {
  show: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode[] | undefined;
  onClose: () => void;
  size?: 'xl' | 'lg' | 'md'
}


export default function Modal({ show, size, title, onClose, children, actions }: ModalProps): React.ReactPortal | null {

  useEffect(() => {
    if (show) {
      document.body.classList.add('noscroll')
    } else {
      document.body.classList.remove('noscroll')
    }

    return () => {
      document.body.classList.remove('noscroll')
    }
  }, [show]);

  if (typeof document === 'undefined') {
    return null
  }

  const modal = show ? (
    <div className={styles._overlay}>
      <div className={styles.overlay} />
      <div className={styles._}>
        <OutsideClickHandler onOutsideClick={onClose} display='contents'>
          <div className={[styles.modal, size ? styles[size] : ''].join(' ')}>
            <div className={styles.head}>
              <div className={styles.title}>{title}</div>
              <button className={styles.close} onClick={onClose}>
                <XCloseDelete size={14} />
              </button>
            </div>
            <div className={styles.body}>
              {children}
            </div>
            {actions ? <div className={styles.foot}>
              {actions}
            </div> : null}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  ) : null

  return ReactDOM.createPortal(modal, document.body)
}

export function AuthModal({ show, size, title, onClose, children, actions }: ModalProps): React.ReactPortal | null {

  useEffect(() => {
    if (show) {
      document.body.classList.add('noscroll')
    } else {
      document.body.classList.remove('noscroll')
    }

    return () => {
      document.body.classList.remove('noscroll')
    }
  }, [show]);

  if (typeof document === 'undefined') {
    return null
  }

  const modal = show ? (
    <div className={styles._overlay}>
      <div className={styles.overlay} />
      <div className={styles._}>
        <OutsideClickHandler onOutsideClick={onClose} display='contents'>
          <div className={[styles.modal, size ? styles[size] : '', styles.auth].join(' ')}>

            <div className={styles.body}>
              {children}
            </div>
            <button className={styles.close} onClick={onClose}>
              <XCloseDelete size={14} />
            </button>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  ) : null

  return ReactDOM.createPortal(modal, document.body)
}