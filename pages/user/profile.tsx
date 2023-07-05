import Button from "@/frontend/components/button/button";
import WebsiteLayout from "@/frontend/components/layout/website";
import { SimpleImage } from "@/frontend/components/website";
import { oapi } from "@/frontend/utils/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { transformGetImagesResponse } from "../api/images";
import styles from "@/frontend/components/tools/ai-generator/ai-generator.module.scss";
import { useAppDispatch, useAppSelector } from "@/frontend/redux/hooks";
import { selectUser } from "@/frontend/redux/user/slice";
import * as React from "react";

function ImageGallery() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [images, setImages] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [like, setLike] = useState([]);

  async function getImages(
    reset: boolean = false,
    favlikeL: string = favlike,
    favoriteL: any[] = favorite,
    likeL: any[] = like
  ) {
    try {
      const res = await oapi.get("/shared/images", {
        params: {
          ids: favlikeL === "Favorite" ? favoriteL.join(",") : likeL.join(","),
        },
      });
      setImages(
        reset
          ? transformGetImagesResponse(res.data)
          : [...images, ...transformGetImagesResponse(res.data)]
      );
    } catch (e) {
      console.log(e);
      setImages([]);
    }
  }

  async function getFavoriteLike() {
    try {
      const res = await oapi.get("/images/list/action");
      setFavorite(res.data.favourite ?? []);
      setLike(res.data.like ?? []);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }

  const [favlike, setFavLike] = useState("Favorite");

  useEffect(() => {
    if (user.id && favlike) {
      (async function () {
        const favlikeData = await getFavoriteLike();
        getImages(true, "Favorite", favlikeData.favourite, []);
      })();
    }
  }, [user.id, favlike]);

  return (
    <div className={styles._hero}>
      <div className={styles.hero}>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {["Favorite", "Like"].map((v) => (
              <Button
                key={v}
                size="sm"
                type={v === favlike ? "accent" : "accent-border"}
                onClick={async () => {
                  setFavLike(v);
                  setImages([]);
                  const favlikeData = await getFavoriteLike();
                  if (v === "Favorite" && favlikeData.favourite.length) {
                    getImages(true, v, favlikeData.favourite, []);
                  } else if (v === "Like" && favlikeData.like.length) {
                    getImages(true, v, [], favlikeData.like);
                  }
                }}
              >
                {v}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.images} id="images">
          <div className={styles.infinite}>
            <Masonry
              breakpointCols={{
                default: 8,
                2400: 6,
                1700: 4,
                1260: 3,
                1024: 2,
                840: 1,
                760: 2,
              }}
              className={styles.grid}
              columnClassName={styles.column}
            >
              {images.map((i) => (
                <div id={i.id} key={i.id} className={styles.img}>
                  <SimpleImage
                    model={{
                      id: i.id,
                      reuse_img_url: i.image_url,
                      nsfw: i.nsfw === "18+",
                      reuse_img: i.image_id,
                    }}
                    onClick={(e: any) => {
                      e.stopPropagation();
                      e.preventDefault();
                      router.push(`/img/${i.id}`);
                    }}
                    hasLike={like.find((item) => item === i.id) !== undefined}
                    hasFavorite={
                      favorite.find((item) => item === i.id) !== undefined
                    }
                    hideFavorite={favlike === "Like"}
                    hideLike={favlike === "Favorite"}
                    showRun
                  />
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage({
  exampleArt,
}: {
  exampleArt: ImageI[];
}): JSX.Element {
  return (
    <WebsiteLayout
      title="Everything you need to create images with AI"
      description="Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more."
      canonical="/"
      footer={false}
    >
      <ImageGallery />
    </WebsiteLayout>
  );
}
