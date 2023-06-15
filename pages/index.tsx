import Button from '@/frontend/components/button/button';
import WebsiteLayout from '@/frontend/components/layout/website';
import { ImageGridVisual } from '@/frontend/components/website';
import Hero from '@/frontend/components/website/hero';
import { oapi } from '@/frontend/utils/axios';
import axios from 'axios';
import { useRouter } from 'next/router';
import { createRef, useEffect, useLayoutEffect, useState } from 'react';
import { transformModelsResponse } from './api/models';

export default function HomePage({ exampleArt }: { exampleArt: ImageI[] }): JSX.Element {
  const [models, setModels] = useState<ModelI[]>([]);
  const router = useRouter()
  const imageRef = createRef<HTMLDivElement>()
  const [scrolled, setScrolled] = useState(false)

  async function getModels() {
    const res = await oapi.get('/models?status=active&public=true');
    setModels(transformModelsResponse(res.data));
  }

  useEffect(() => {
    getModels();
  }, []);

  useEffect(() => {
    if (router.query?.scrollToModal !== undefined && models.length > 0 && !scrolled) {
      imageRef.current?.scrollIntoView({ behavior: 'smooth' })
      setScrolled(true)
    }
  }, [models, scrolled])

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
      subtitle2={<>Harnessing <span>NFTs</span> to Secure Profit Rights for model creators.</>}
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
          ref={imageRef}
          images={models.filter(v => Boolean(v.reuse_img))}
        />
      }
    />

  </WebsiteLayout >
}
