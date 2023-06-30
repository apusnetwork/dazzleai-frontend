import Button from "@/frontend/components/button/button";
import WebsiteLayout from "@/frontend/components/layout/website";
import { SimpleImage } from "@/frontend/components/website";
import Hero from "@/frontend/components/website/hero";
import { oapi } from "@/frontend/utils/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import { transformGetImagesResponse } from "./api/images";
import styles from "@/frontend/components/tools/ai-generator/ai-generator.module.scss";
import { useAppSelector } from "@/frontend/redux/hooks";
import { selectUser } from "@/frontend/redux/user/slice";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Divider } from "@mui/material";

function ImageGallery() {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  const [images, setImages] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    loading: false,
    hasMore: true,
  });
  const [req, setReq] = useState({
    search: "",
    nsfw_types: "none,18+",
    sort: "rate,desc",
    tags: "All",
  });

  async function getImages(reset: boolean = false) {
    if (reset) {
      setPagination({ loading: false, hasMore: true });
    } else if (!pagination.hasMore) {
      return;
    }
    let hasMore = true;
    try {
      setPagination({ ...pagination, loading: true });
      const res = await oapi.get("/shared/images/list", {
        params: {
          limit: 10,
          offset: reset ? 0 : images.length,
          ...req,
          tags: req.tags === "All" ? undefined : req.tags,
        },
      });
      setImages(
        reset
          ? transformGetImagesResponse(res.data)
          : [...images, ...transformGetImagesResponse(res.data)]
      );
      hasMore = res.data.length > 0;
    } catch (e) {
      console.log(e);
      setImages([]);
    } finally {
      setPagination({ loading: false, hasMore });
    }
  }

  const [favorite, setFavorite] = useState([]);
  const [like, setLike] = useState([]);

  async function getFavoriteLike() {
    try {
      const res = await oapi.get("/images/list/action");
      setFavorite(res.data.favorite ?? []);
      setLike(res.data.like ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getImages(true);
  }, [req]);

  useEffect(() => {
    if (user.id) {
      getFavoriteLike();
    }
  }, [user.id]);

  const [searchCache, setSearchCache] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          {[
            "All",
            "Woman",
            "Clothing",
            "Anime",
            "Animal",
            "Landscapes",
            "Food",
            "Sci-Fi",
            "Man",
            "Vehicles",
          ].map((v) => (
            <Button
              key={v}
              size="sm"
              type={v === req.tags ? "accent" : "accent-border"}
              onClick={() => {
                setReq({ ...req, tags: v });
              }}
            >
              {v}
            </Button>
          ))}
        </div>
        <Paper
          elevation={0}
          className="flex border-2 border-solid"
          style={{
            borderColor: "#1024f0",
          }}
        >
          <InputBase
            size="small"
            className="flex-1 ml-1 pt-1"
            placeholder="Search Prompt"
            onChange={(e) => setSearchCache(e.target.value)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            size="small"
            type="button"
            onClick={() => setReq({ ...req, search: searchCache })}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className={styles.images} id="images">
        <InfiniteScroll
          dataLength={images.length}
          next={getImages}
          hasMore={pagination.hasMore}
          loader
          className={styles.infinite}
        >
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
                  showRun
                />
              </div>
            ))}
          </Masonry>
          <div style={{ height: 24 }}></div>
          {pagination.hasMore ? (
            <Button
              type="default"
              loading={pagination.loading}
              onClick={getImages}
              fullWidth
            >
              Load{pagination.loading ? "ing" : ""} more images
            </Button>
          ) : (
            <div />
          )}
          <div style={{ height: 24 }}></div>
        </InfiniteScroll>
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
      <Hero
        title={
          <>
            We Use a&nbsp;<span>decentralized</span>GPU network to help model
            creators&nbsp;<span>make money</span>
          </>
        }
        subtitle2={
          <>
            Harnessing <span>NFTs</span> to Secure Profit Rights for model
            creators.
          </>
        }
        subtitle="Amazing pictures generated deployed models, quick try"
        cta={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                maxWidth: 420,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                size="xl"
                openInNewTab={true}
                href="https://forms.gle/z9H5jxU3DCAV95dQ9"
              >
                Host Model
              </Button>
              <Button
                type="accent-border"
                size="xl"
                openInNewTab={true}
                href="https://forms.gle/XsaxVmyRsUCEAd199"
              >
                Host Node
              </Button>
            </div>
          </div>
        }
        visual={<ImageGallery />}
      />
    </WebsiteLayout>
  );
}
