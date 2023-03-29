


import { ArrowRight } from 'frontend/components/basic-icons';
import Button from 'frontend/components/button/button';
import WebsiteLayout from 'frontend/components/layout/website';
import { FeatureRow } from 'frontend/components/website';
import { LargeCTA } from 'frontend/components/website/cta';
import { useAppDispatch } from 'frontend/redux/hooks';
import { updateAuthState } from 'frontend/redux/info/slice';
import styles from 'frontend/styles/landing.module.scss';


export default function OutpaintinLanding(): JSX.Element {
  const dispatch = useAppDispatch();

  return <WebsiteLayout
    title="Stable Diffusion Outpainting"
    description=""
    canonical='/tools/outpainting'
    image='/social-image-ai-editor.png'
  >


    <div className={styles.bg}>
      <div className={styles._hero}>
        <div className={styles.hero}>
          <h1 className={styles.h1}>
            Stable Diffusion Outpainting <br />with AI Editor
          </h1>
          <h2 className={styles.p1}>
            Transform your images like never before with our AI Editor. Use Stable Diffusion outpainting to expand your pictures beyond their original borders, or modify them using only words and creativity. Try it now and see the magic for yourself.
          </h2>

          <div className={styles.cta}>
            <Button
              size='xl'
              href='/editor'
            >
              Start creating now
              <ArrowRight style={{ marginLeft: 12, marginRight: 0 }} />
            </Button>
            <small>
              Generate 100 images every month for free &middot; No credit card required
            </small>
          </div>
        </div>
      </div>


      <div className={styles._preview}>
        <div className={styles.preview}>

          <div className={styles.preview_video}>
            <video src="/videos/ai-editor-full.mp4" autoPlay loop muted playsInline />
          </div>

        </div>
      </div>


      <FeatureRow
        caption='Outpainting'
        title='Expand pictures beyond its borders'
        text='Use Stable Diffusion outpainting to expand pictures beyond their original borders. Create large-sized detailed graphics or extend existing images without limits. Use your imagination and generate missing parts of images with artificial intelligence.'
        visual={
          <video src={"/guides/outpainting-simple-photo.mp4"} autoPlay loop muted playsInline />
        } />

      <FeatureRow
        caption='Inpainting'
        title='Remove objects from photos'
        text="Remove any object or person from your image. Just erase unwanted parts of the picture and describe what to render in empty space. You can also change any visual features on your photos."
        visual={
          <video src={"/videos/inpainting.mp4"} autoPlay loop muted playsInline />
        }
        reverse
      />



      <FeatureRow
        caption='Find & Replace'
        title='Edit pictures within seconds'
        text="Change details of existing images with ease using the 'find and replace' feature. Tell AI what should be replaced and describe the new edit in detail. Enhance or edit images using only words."
        visual={
          <video src={"/videos/find-replace.mp4"} autoPlay loop muted playsInline />
        }
      />

      <LargeCTA
        button={
          <Button
            size='lg'
            onClick={() => dispatch(updateAuthState('register'))}
          >
            Get started. It&apos;s Free.
          </Button>
        }
      />


    </div>
  </WebsiteLayout >
}