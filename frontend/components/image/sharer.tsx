import { useAppDispatch } from "@/frontend/redux/hooks";
import { message } from "@/frontend/redux/info/slice";
import Image from "next/image";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { cloudflareLoader } from "@/utils/cloudflare";
import { CopyDuplicate, ShareAlt, XCloseDelete } from "../basic-icons";
import Button from "../button/button";
import { InputRow } from "../form/form";
import Input from "../input/input";
import styles from './image.module.scss';
import axios from "axios";
import { oapi } from "@/frontend/utils/axios";


interface ImageSharerProps {
  id: string
  url: string
  imageSrc: string
  imageWidth: number
  imageHeight: number
  type?: 'icon' | 'icon-active' | 'primary'
  size?: 'sm' | 'md' | 'lg'
}




export default function ImageSharer({ id, url, imageSrc, imageWidth, imageHeight, type = 'icon', size = 'md' }: ImageSharerProps) {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState(false);

  function handleCopy() {
    if (!navigator.clipboard) {
      const textArea = document.getElementById("link-copy");
      if (!textArea) return

      try {
        textArea.focus()
        document.execCommand('copy');
        message(dispatch, { type: 'success', "text": "Copied link to clipboard!" })
        textArea.blur()

      } catch {
        message(dispatch, { type: 'danger', "text": "Error while copying link to clipboard!" })
      }

    }


    navigator.clipboard.writeText(url).then(function () {
      message(dispatch, { type: 'success', "text": "Copied link to clipboard!" })
    }, function () {
      message(dispatch, { type: 'danger', "text": "Error while copying link to clipboard!" })
    });
  }

  return (
    <>
      <Button size={size} type={type} onClick={() => {
        setModal(true)
        oapi.post(`/images/update`, {
          image_id: id,
          is_shared: true,
        })
      }}><ShareAlt />Share</Button>


      {
        modal === true ?
          <div className={styles._overlay}>
            <div className={styles.overlay} />
            <div className={styles._modal}>

              <div className={styles.modal}>
                <button className={styles.close} onClick={() => setModal(false)}>
                  <XCloseDelete size={14} />
                </button>
                <OutsideClickHandler onOutsideClick={() => setModal(false)} display='contents'>

                  <div className={styles.sharer}>
                    <div className={styles._sharer_image}>
                      <div className={styles.sharer_image}>
                        <Image
                          src={imageSrc}
                          width={imageWidth}
                          height={imageHeight}
                          alt=""
                          loader={cloudflareLoader}
                        />
                      </div>
                    </div>
                    <div className={styles.sharer_body}>
                      {/* <h3>Share this with your social Community</h3>
                      <div className={styles.sharer_links}>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}?ref=fb-share`} target="_blank" rel="nofollow noreferrer" className={[styles.sharer_link, styles.fb].join(' ')}>
                          <img src="/social/f_logo_blue.png" loading="lazy" alt="" />
                        </a>
                        <a href={`https://twitter.com/intent/tweet?text=${url}&via=getimg_ai`} target="_blank" rel="nofollow noreferrer" className={[styles.sharer_link, styles.tw].join(' ')} >
                          <img src="/social/twitter.png" loading="lazy" alt="" />
                        </a>
                        <a href={`http://www.reddit.com/submit?url=${url}?ref=reddit`} target="_blank" rel="nofollow noreferrer" className={[styles.sharer_link, styles.re].join(' ')}>
                          <img src="/social/reddit.png" loading="lazy" alt="" />
                        </a>
                        <a href={`http://pinterest.com/pin/create/button/?url=${url}&media=${imageSrc}`} target="_blank" rel="nofollow noreferrer" className={[styles.sharer_link, styles.pi].join(' ')}>
                          <img src="/social/pinterest.png" loading="lazy" alt="" />
                        </a>
                      </div> */}
                      <div>
                        <p className={styles.china_attention}>Attention: Our service is not currently available for users in China due to technical limitations.</p>
                      </div>
                      <InputRow>
                        <Input
                          id="link-copy"
                          label=""
                          value={url}
                          disableInfo
                        />
                        <div className={styles.copy_btn}>
                          <Button onClick={handleCopy}><CopyDuplicate /> Copy</Button>
                        </div>
                      </InputRow>
                    </div>
                  </div>

                </OutsideClickHandler>
              </div>

            </div>
          </div>
          : null}

    </>
  )
}
