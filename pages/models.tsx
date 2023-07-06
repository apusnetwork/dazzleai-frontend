import WebsiteLayout from "@/frontend/components/layout/website";
import { ImageGridVisual } from "@/frontend/components/website";
import axios from "axios";
import { useRouter } from "next/router";
import { createRef, useEffect, useState } from "react";
import styles from "@/frontend/components/tools/ai-generator/ai-generator.module.scss";

export default function HomePage({
  exampleArt,
}: {
  exampleArt: ImageI[];
}): JSX.Element {
  const [models, setModels] = useState<ModelI[]>([]);

  async function getModels() {
    const res = await axios.get("/api/models?status=active&public=true");
    setModels([...res.data]);
    // const res = await oapi.get('/models?status=active&public=true');
    // setModels(transformModelsResponse(res.data));
  }

  useEffect(() => {
    getModels();
  }, []);

  return (
    <WebsiteLayout
      title="Everything you need to create images with AI"
      description="Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more."
      canonical="/"
      footer={false}
    >
      <div className={styles._hero}>
        <div className={styles.hero}>
          <ImageGridVisual
            images={models.filter((v) => Boolean(v.reuse_img))}
          />
        </div>
      </div>
    </WebsiteLayout>
  );
}
