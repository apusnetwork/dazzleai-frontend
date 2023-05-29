import Button from '@/frontend/components/button/button';
import WebsiteLayout from '@/frontend/components/layout/website';
import { ImageGridVisual } from '@/frontend/components/website';
import Hero from '@/frontend/components/website/hero';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HomePage({ exampleArt }: { exampleArt: ImageI[] }): JSX.Element {
  const [isSSR, setIsSSR] = useState(true);
  const [models, setModels] = useState<ModelI[]>([]);

  async function getModels() {
    const res = await axios.get('/api/models?status=active&public=true');
    setModels([...res.data]);
  }

  useEffect(() => {
    setIsSSR(false);
    getModels();
  }, []);

  return <WebsiteLayout
    title="Everything you need to create images with AI"
    description="Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more."
    canonical='/'
    footer={false}
  >

    <Hero
      title={
        <>
          We Use a&nbsp;<span>decentralized</span>GPU network to help model creators&nbsp;<span>make money</span>
        </>
      }
      subtitle="Amazing pictures generated deployed models, quick try"
      cta={
        <div style={{
          display: 'flex',
          justifyContent: "center",
        }}>
          <div style={{
            maxWidth: 420,
            width: '100%',
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center',
          }}>
            <Button
              size='xl'
              openInNewTab={true}
              href='https://forms.gle/z9H5jxU3DCAV95dQ9'
            >
              Host Model
            </Button>
            <Button
              type="accent-border"
              size='xl'
              openInNewTab={true}
              href='https://forms.gle/XsaxVmyRsUCEAd199'
            >
              Host Node
            </Button>
          </div>
        </div>
      }
      visual={
        <ImageGridVisual
          images={models.filter(v => Boolean(v?.params?.images?.[0]))}
        />
      }
    />

  </WebsiteLayout >
}
