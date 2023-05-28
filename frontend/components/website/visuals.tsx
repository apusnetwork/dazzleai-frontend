import Masonry from "react-masonry-css";
import { cloudflareLoader } from "utils/cloudflare";

import styles from './website.module.scss';
import Link from "next/link";
import { useEffect, useState } from "react";
import EyeOutlined from '@ant-design/icons/EyeOutlined'
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined'
import { useGlobal18Plus } from "@/frontend/context/18puls";

interface ImageGridVisualProps {
  images: ModelI[],
  columns?: number
}

const Image = ({ model }: { model: ModelI }) => {
  const { show18Plus: gloablShow18Plus } = useGlobal18Plus()
  const [show18Plus, setShow18Plus] = useState(false)
  useEffect(() => {
    setShow18Plus(gloablShow18Plus)
  }, [gloablShow18Plus])
  return <Link href={`/generate?img=${model.params.images[0].split('/').pop()}&shared=true`}>
    <div className={styles.image_wrapper}>
      <img
        key={model.id}
        src={model.params.images[0]}
        alt=""
        style={{
          filter: model.nsfw && !show18Plus ? 'blur(10px)' : '',
        }}
        className="z-0"
      />
      <div className={styles.image_badge}>{model.useCount} runs</div>
      {model.nsfw && <div className={styles.image_18_badge} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShow18Plus(show => !show) }} >18+ {show18Plus ? <EyeInvisibleOutlined className="leading-0 ml-1" rev="" /> : <EyeOutlined className="leading-0 ml-1" rev="" />}</div>}
      <div className={styles.image_name}>{model.name}</div>
      <img className={styles.image_avatar_url} src={model.params.author_avatar} />
    </div>
  </Link>
}

export function ImageGridVisual({ images, columns = 4 }: ImageGridVisualProps): JSX.Element {

  return (
    <div className={styles.image_grid_visual}>
      <Masonry
        breakpointCols={{
          default: columns,
          1100: 2,
          800: 2,
        }}
        className={styles.grid}
        columnClassName={styles.column}
      >
        {
          images.map((model) => <Image model={model} />)
        }
      </Masonry>
    </div>
  )
}