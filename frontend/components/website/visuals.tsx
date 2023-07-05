// import Masonry from "react-masonry-css";
import Masonry from "@mui/lab/Masonry";
import styles from "./website.module.scss";
import Link from "next/link";
import { LegacyRef, forwardRef, useEffect, useState } from "react";
import EyeOutlined from "@ant-design/icons/EyeOutlined";
import EyeInvisibleOutlined from "@ant-design/icons/EyeInvisibleOutlined";
import { useGlobal18Plus } from "@/frontend/context/18puls";
import DefaultAvatar from "./default_avatar.webp";
import classnames from "classnames";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useAppDispatch, useAppSelector } from "@/frontend/redux/hooks";
import { selectUser } from "@/frontend/redux/user/slice";
import { oapi } from "@/frontend/utils/axios";
import { message, updateAuthState } from "@/frontend/redux/info/slice";

interface ImageGridVisualProps {
  images: ModelI[];
  columns?: number;
}

export const SimpleImage = ({
  model,
  onClick,
  showRun,
  hasFavorite = false,
  hasLike = false,
  hideFavorite,
  hideLike,
}: {
  model: ModelI;
  onClick?: any;
  showRun?: boolean;
  hasFavorite?: boolean;
  hasLike?: boolean;
  hideLike?: boolean;
  hideFavorite?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { show18Plus: gloablShow18Plus } = useGlobal18Plus();
  const [show18Plus, setShow18Plus] = useState(false);
  useEffect(() => {
    setShow18Plus(gloablShow18Plus);
  }, [gloablShow18Plus]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const is18Plus = model.nsfw;

  useEffect(() => {
    setIsLike(hasLike);
  }, [hasLike]);

  useEffect(() => {
    setIsFavorite(hasFavorite);
  }, [hasFavorite]);

  async function toggleFavorite(image_id: string) {
    if (!user.id) return;
    try {
      await oapi.post(`/images/update`, {
        image_id,
        is_favourite: !isFavorite,
      });
      setIsFavorite((is) => !is);
    } catch (e) {
      message(dispatch, { text: "Failed to update favorite", type: "danger" });
    }
  }

  async function toggleLike(image_id: string) {
    if (!user.id) return;
    try {
      await oapi.post(`/images/update`, { image_id, is_like: !isLike });
      setIsLike((is) => !is);
    } catch (e) {
      message(dispatch, { text: "Failed to update like", type: "danger" });
    }
  }

  return (
    <div className={styles.column} onClick={onClick}>
      <div className={styles.image_wrapper_2}>
        <img
          key={model.id}
          src={
            model.reuse_img_url ?? "https://s3.apus.network/" + model.reuse_img
          }
          alt=""
          style={{
            filter: is18Plus && !show18Plus ? "blur(10px)" : "",
          }}
          className="z-0"
        />
        {showRun && (
          <Link href={`/generate?img=${model.reuse_img}&shared=true`}>
            <div
              className={styles.image_try_badge_2}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Run
            </div>
          </Link>
        )}
        <div
          className={classnames(
            styles.image_badge_wrapper,
            styles.image_badge_left_top
          )}
        >
          {is18Plus && (
            <div
              className={classnames(styles.image_badge, styles.image_badge_18)}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShow18Plus((show) => !show);
              }}
            >
              18+{" "}
              {show18Plus ? (
                <EyeInvisibleOutlined className="leading-0 ml-1" rev="" />
              ) : (
                <EyeOutlined className="leading-0 ml-1" rev="" />
              )}
            </div>
          )}
        </div>
          <div
            className={classnames(
              styles.image_badge_wrapper,
              "right-0.5 bottom-2 p-1 cursor-pointer"
            )}
          >
            {!hideFavorite && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  if (!user.id) {
                    dispatch(updateAuthState('login'))
                  }
                  toggleFavorite(model.id);
                }}
              >
                {isFavorite ? <Favorite /> : <FavoriteBorderIcon />}
              </div>
            )}
            {!hideLike && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  if (!user.id) {
                    dispatch(updateAuthState('login'))
                  }
                  toggleLike(model.id);
                }}
              >
                {isLike ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
              </div>
            )}
          </div>
      </div>
    </div>
  );
};

const Image = ({ model }: { model: ModelI }) => {
  const { show18Plus: gloablShow18Plus } = useGlobal18Plus();
  const [show18Plus, setShow18Plus] = useState(false);
  useEffect(() => {
    setShow18Plus(gloablShow18Plus);
  }, [gloablShow18Plus]);
  return (
    <Link href={`/model/${model.id}`}>
      <div className={styles.column}>
        <div className={styles.image_wrapper}>
          <img
            key={model.id}
            src={
              model.reuse_img_url ??
              "https://s3.apus.network/" + model.reuse_img
            }
            alt=""
            style={{
              filter: model.nsfw && !show18Plus ? "blur(10px)" : "",
            }}
            className="z-0"
          />
          <div className={styles.image_badge_runs}>{model.useCount} runs</div>
          <Link href={`/generate?img=${model.reuse_img}&shared=true`}>
            <div className={styles.image_try_badge}>Run</div>
          </Link>
          <div
            className={classnames(
              styles.image_badge_wrapper,
              styles.image_badge_left_top
            )}
          >
            {model.nsfw && (
              <div
                className={classnames(
                  styles.image_badge,
                  styles.image_badge_18
                )}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShow18Plus((show) => !show);
                }}
              >
                18+{" "}
                {show18Plus ? (
                  <EyeInvisibleOutlined className="leading-0 ml-1" rev="" />
                ) : (
                  <EyeOutlined className="leading-0 ml-1" rev="" />
                )}
              </div>
            )}
            {model.type && (
              <div
                className={[styles.image_badge, styles.image_badge_type].join(
                  " "
                )}
              >
                {model.type}
              </div>
            )}
          </div>
          <div className={styles.image_name}>{model.name}</div>
          <img
            className={styles.image_avatar_url}
            src={model.params.author_avatar || DefaultAvatar.src}
          />
        </div>
      </div>
    </Link>
  );
};

export const ImageGridVisual = forwardRef<HTMLDivElement, ImageGridVisualProps>(
  function ImageGridVisual({ images }: ImageGridVisualProps, ref): JSX.Element {
    const [columns, setColumns] = useState(4);
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setColumns(4);
        } else {
          setColumns(2);
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return (
      <div className={styles.image_grid_visual} ref={ref}>
        <Masonry columns={columns} spacing={2}>
          {images.map((model, index) => (
            <Image key={index} model={model} />
          ))}
        </Masonry>
      </div>
    );
  }
);
