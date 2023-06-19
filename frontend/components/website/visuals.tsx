// import Masonry from "react-masonry-css";
import Masonry from '@mui/lab/Masonry';
import styles from './website.module.scss';
import Link from "next/link";
import { LegacyRef, forwardRef, useEffect, useState } from "react";
import EyeOutlined from '@ant-design/icons/EyeOutlined'
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined'
import { useGlobal18Plus } from "@/frontend/context/18puls";
import DefaultAvatar from './default_avatar.webp'

interface ImageGridVisualProps {
  images: ModelI[]
  columns?: number
}

export const SimpleImage = ({ model }: { model: ModelI }) => {
  const { show18Plus: gloablShow18Plus } = useGlobal18Plus()
  const [show18Plus, setShow18Plus] = useState(false)
  useEffect(() => {
    setShow18Plus(gloablShow18Plus)
  }, [gloablShow18Plus])
  return <div className={styles.column}>
      <div className={styles.image_wrapper_2}>
        <img
          key={model.id}
          src={model.reuse_img_url ?? 'https://s3.apus.network/' + model.reuse_img}
          alt=""
          style={{
            filter: model.nsfw && !show18Plus ? 'blur(10px)' : '',
          }}
          className="z-0"
        />
        <Link href={`/generate?img=${model.reuse_img}&shared=true`}><div className={styles.image_try_badge_2}>Run</div></Link>
        {model.nsfw && <div className={styles.image_18_badge} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShow18Plus(show => !show) }} >18+ {show18Plus ? <EyeInvisibleOutlined className="leading-0 ml-1" rev="" /> : <EyeOutlined className="leading-0 ml-1" rev="" />}</div>}
      </div>
    </div>
}

const Image = ({ model }: { model: ModelI }) => {
  const { show18Plus: gloablShow18Plus } = useGlobal18Plus()
  const [show18Plus, setShow18Plus] = useState(false)
  useEffect(() => {
    setShow18Plus(gloablShow18Plus)
  }, [gloablShow18Plus])
  return <Link href={`/model/${model.id}`}>
    <div className={styles.column}>
      <div className={styles.image_wrapper}>
        <img
          key={model.id}
          src={model.reuse_img_url ?? 'https://s3.apus.network/' + model.reuse_img}
          alt=""
          style={{
            filter: model.nsfw && !show18Plus ? 'blur(10px)' : '',
          }}
          className="z-0"
        />
        <div className={styles.image_badge}>{model.useCount} runs</div>
        <Link href={`/generate?img=${model.reuse_img}&shared=true`}><div className={styles.image_try_badge}>Run</div></Link>
        {model.nsfw && <div className={styles.image_18_badge} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShow18Plus(show => !show) }} >18+ {show18Plus ? <EyeInvisibleOutlined className="leading-0 ml-1" rev="" /> : <EyeOutlined className="leading-0 ml-1" rev="" />}</div>}
        <div className={styles.image_name}>{model.name}</div>
        <img className={styles.image_avatar_url} src={model.params.author_avatar || DefaultAvatar.src} />
      </div>
    </div>
  </Link>
}

export const ImageGridVisual = forwardRef<HTMLDivElement, ImageGridVisualProps>(function ImageGridVisual({ images }: ImageGridVisualProps, ref): JSX.Element {
  const [columns, setColumns] = useState(4)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setColumns(4)
      } else {
        setColumns(2)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className={styles.image_grid_visual} ref={ref}>
      <Masonry columns={columns} spacing={2}>
        {
          images.map((model, index) => <Image key={index} model={model} />)
        }
      </Masonry>
      {/* <Masonry
        breakpointCols={{
          default: columns,
          1100: 2,
          800: 2,
        }}
        className={styles.grid}
        columnClassName={styles.column}
      >
        {images.map((model) => <Image model={model} />)}
      </Masonry> */}
    </div>
  )
})