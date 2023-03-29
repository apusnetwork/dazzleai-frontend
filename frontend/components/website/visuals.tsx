import Masonry from "react-masonry-css";
import { cloudflareLoader } from "utils/cloudflare";

import styles from './website.module.scss';

interface ImageGridVisualProps {
  images: string[],
  columns?: number
}

export function ImageGridVisual({ images, columns = 4 }: ImageGridVisualProps): JSX.Element {

  return (
    <div className={styles.image_grid_visual}>
      <Masonry
        breakpointCols={{
          default: columns
        }}
        className={styles.grid}
        columnClassName={styles.column}
      >
        {
          images.map((i, id) => (
            <img
              key={id}
              src={cloudflareLoader({ src: i, quality: 75, width: 356 })}
              alt=""
              className={styles.image}
            />
          ))
        }
      </Masonry>
    </div>
  )
}