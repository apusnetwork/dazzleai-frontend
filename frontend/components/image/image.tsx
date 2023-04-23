import axios from "axios";
import { ChevronsUp, Download, Heart, ImagePlus, Repeat, Smile, Trash2 } from 'lucide-react';
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import Button from "../button/button";
import Loader from "../loader/loader";
import Tooltip from "../tooltip/tooltip";

import styles from './image.module.scss';


interface GeneratorImageI {
  image: ImageI
  actions?: string[]
  onCopyParams?: (i: ImageI) => void
  onCopyImage?: (i: ImageI) => void
  onSelect?: (i: ImageI) => void
  onDelete?: (i: ImageI) => void
  onEnhanceFace?: (i: ImageI) => void
  onUpscale?: (i: ImageI) => void
  imageLoader?: any
  hoverable?: boolean
}



function GeneratedImage({
  image,
  onCopyParams,
  onCopyImage,
  onSelect,
  onDelete,
  onUpscale,
  onEnhanceFace,
  actions = ['like', 'delete', 'upscale', 'enhance_faces', 'copy_params', 'copy_image'],
  imageLoader,
  hoverable = true
}: GeneratorImageI): JSX.Element {
  const [timer, setTimer] = useState(0);
  const [liked, setLiked] = useState<boolean>(image.liked);

  useEffect(() => {
    setTimer(0)
  }, []);

  async function likeImage() {
    setLiked(l => !l);
    await axios.post(`/api/images/${image.id}/like`);

  }

  useEffect(() => {
    if (image.loading) {
      setTimeout(() => {
        setTimer(timer + 0.1)
      }, 100);
    }
  }, [image.loading, timer])

  if (image.loading) {
    return (
      <div
        className={styles.image}
        style={{
          paddingBottom: image.height / image.width * 100 + '%'
        }}
      >
        <div
          className={styles.loading}
        >
          <Loader text={`${(Math.round(timer * 10) / 10).toFixed(1)}s`} />
        </div>
      </div>
    )
  }

  return (
    <div
      className={styles.image}
    >
      <div className={[styles.img].join(' ')}>
        <Image
          src={image.url}
          alt=""
          width={image.width}
          height={image.height}
          loader={imageLoader}
          unoptimized={!imageLoader && image.width <= 1024 && image.height <= 1024}
        />

        <div className={[styles.img_hover, hoverable ? styles.hoverable : ''].join(' ')} onClick={() => onSelect && onSelect(image)}>

          <div className={styles.img_hover_row}>
            <div className={styles.btn_group}>
              {
                (image.modelTask.model?.includes('stable-diffusion') || image.modelTask.model?.includes('model-') || image.modelTask.model === 'instruct-pix2pix' || image.modelTask.model === 'image-mixer')
                  && actions.includes('copy_params')
                  && onCopyParams
                  ?
                  <Tooltip
                    text="Use&nbsp;parameters&nbsp;again"
                    type='button'
                  >
                    <Button
                      onClick={e => { e.stopPropagation(); onCopyParams(image) }}
                      size='md'
                      type='transparent'

                    >
                      <Repeat strokeWidth={1.5} />
                    </Button>
                  </Tooltip>
                  : null
              }
              {
                (image.modelTask.model?.includes('stable-diffusion') || image.modelTask.model?.includes('model-') || image.modelTask.model === 'instruct-pix2pix' || image.modelTask.model === 'image-mixer')
                  && actions.includes('copy_image')
                  && onCopyImage
                  ?
                  <Tooltip
                    text="Use&nbsp;as&nbsp;init&nbsp;image"
                    type='button'
                  >
                    <Button
                      onClick={e => { e.stopPropagation(); onCopyImage(image) }}
                      size='md'
                      type='transparent'
                    >
                      <ImagePlus strokeWidth={1.5} />
                    </Button>
                  </Tooltip>
                  : null
              }
            </div>
            {/* <div className={styles.btn_group}>
              {
                (image.width <= 1024 && image.height <= 1024)
                  && actions.includes('upscale')
                  && onUpscale
                  ?
                  <Tooltip
                    text="Upscale&nbsp;4x"
                    type='button'
                    position='right'
                  >
                    <Button
                      onClick={e => { e.stopPropagation(); onUpscale(image) }}
                      size='md'
                      type='transparent'

                    >
                      <ChevronsUp strokeWidth={1.5} />
                    </Button>
                  </Tooltip>
                  : null
              }
              {
                (image.width <= 1024 && image.height <= 1024)
                  && actions.includes('enhance_faces')
                  && onEnhanceFace
                  ?
                  <Tooltip
                    text="Enhance&nbsp;faces"
                    type='button'
                    position='right'
                  >
                    <Button
                      onClick={e => { e.stopPropagation(); onEnhanceFace(image) }}
                      size='md'
                      type='transparent'
                    >
                      <Smile strokeWidth={1.5} />
                    </Button>
                  </Tooltip>
                  : null
              }
            </div> */}
          </div>
          <div className={styles.img_hover_row}>
            <div className={styles.btn_group}>

              {actions.includes('delete') && onDelete ? <Button
                onClick={e => { e.stopPropagation(); onDelete(image) }}
                size='md'
                type='transparent'
              >
                <Trash2 strokeWidth={1.5} />
              </Button>
                : null
              }
            </div>
            <div className={styles.btn_group}>

              {
                actions.includes('download') ?
                  <Button
                    onClick={e => { e.stopPropagation(); }}
                    size='md'
                    type='transparent'
                    href={`/api/download/${image.id}`}
                    download={`getimg_ai_${image.id}.${image.format.toLowerCase()}`}
                  >
                    <Download strokeWidth={1.5} />
                  </Button>
                  : null
              }
              {/* {
                actions.includes('like') ?
                  <Button
                    onClick={e => { e.stopPropagation(); likeImage() }}
                    size='md'
                    type='transparent'
                  >
                    <Heart strokeWidth={1.5} fill={liked ? 'rgb(252, 8, 120)' : 'none'} stroke={liked ? 'rgb(252, 8, 120)' : 'white'} />


                  </Button>
                  : null
              } */}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default memo(GeneratedImage)