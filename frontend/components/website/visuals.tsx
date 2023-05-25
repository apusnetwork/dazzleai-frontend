import Masonry from "react-masonry-css";
import { cloudflareLoader } from "utils/cloudflare";

import styles from './website.module.scss';
import Link from "next/link";

interface ImageGridVisualProps {
  images: ModelI[],
  columns?: number
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
          images.map((model) => (
            <Link href={`/generate?img=${model.params.images[0].split('/').pop()}&shared=true`}>
              <div className={styles.image_wrapper}>
                <div className={styles.image_badge}>{model.useCount} runs</div>
                <img
                  key={model.id}
                  src={model.params.images[0]}
                  alt=""
                  className={styles.image}
                />
              </div>
            </Link>
          ))
        }
      </Masonry>
    </div>
  )
}