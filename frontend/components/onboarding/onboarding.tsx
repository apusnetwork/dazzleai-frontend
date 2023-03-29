import dayjs from 'dayjs';
import cookies from 'js-cookie';
import { X } from "lucide-react";
import { Children, useEffect, useState } from "react";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";
import styles from './onboarding.module.scss';
interface OnboardingModalScreenProps {
  title: string
  image: string
  children: React.ReactNode[] | React.ReactNode
}

function OnboardingModalScreen({ title, image, children }: OnboardingModalScreenProps) {
  return (
    <div className={styles.screen}>
      <img
        className={styles.image}
        src={image}
      />
      <div className={styles.content}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.text}>
          {children}
        </div>
      </div>
    </div >
  )
}


interface OnboardingModalProps {
  id: string
  children: React.ReactNode[] | React.ReactNode
}

function OnboardingModal({ id, children }: OnboardingModalProps) {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState(0);
  const [doNotShow, setDoNotShow] = useState('false');
  const count = Children.count(children)
  const array = Children.toArray(children)

  function handlePrev() {
    if (screen === 0) {
      handleClose();
      return
    }
    setScreen(x => x - 1)
  }
  function handleNext() {
    if (screen === count - 1) {
      handleClose();
      return
    }
    setScreen(x => x + 1)
  }

  function handleClose() {
    if (doNotShow === 'true') {
      cookies.set(id + '-onboarding-modal', dayjs().unix().toString(), {
        expires: dayjs().add(24, 'months').toDate()
      })
    }
    setOpen(false);
  }


  useEffect(() => {
    if (!cookies.get(id + '-onboarding-modal')) {
      setOpen(true);
    }
  }, []);


  if (!open) return null;


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.body}>
          {array[screen]}

        </div>
        <div className={styles.footer}>
          <div className={styles.dots}>
            {array.length > 1 && array.map((_, i) => (
              <div key={i} className={[styles.dot, i === screen ? styles.active : ''].join(' ')} onClick={() => setScreen(i)} />
            ))}
          </div>
          <div className={[styles.actions].join(' ')}>
            <Button type="default" fullWidth onClick={handlePrev}>
              {screen == 0 ? 'Close' : 'Back'}
            </Button>
            <Button fullWidth onClick={handleNext}>
              {screen === array.length - 1 ? 'Close' : 'Continue'}
            </Button>
          </div>
          <div className={styles.checkbox}>
            <Checkbox
              label="Don't show me this again."
              id="do_not_show"
              value={doNotShow}
              onChange={e => setDoNotShow(e.target.value)}
              noError
            />
          </div>
        </div>
        <button className={styles.close} onClick={handleClose}>
          <X size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}



export function TextToImageOnboardingModal() {

  return (
    <OnboardingModal id='text-to-image'>
      <OnboardingModalScreen
        image="/onboarding/controlnet.png"
        title="Control generation with input images"
      >
        <p>
          Use 7 powerful ControlNet pipelines to guide the generation using input images. Preserve depth, edges, human pose, or even turn your drawings into detailed artworks in seconds. All you need is a source image and a simple prompt.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="/onboarding/instruct.png"
        title="Edit images with Instruct model"
      >
        <p>
          Click on &apos;Edit&apos; tab to use text-based instructions like &apos;Make her smile&apos;, or &apos;Change hair color to blue&apos; to apply subtle edits to your images.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="/onboarding/mixer.png"
        title="Create variations of multiple images"
      >
        <p>
          Upload pictures or select ones you have already generated to mix them together. Image Mixer will combine all visual features from source images into stunning new pictures or art.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="onboarding/models.png"
        title="Try 25+ community trained models"
      >
        <p>
          Be more creative by using multiple models in your art creation pipeline. Use different models to apply different styles easily without writing complex prompts.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="/onboarding/outpainting.png"
        title="Use AI Editor to further improve your images"
      >
        <p>
          Edit photos using a few brush strokes and the inpainting model, or expand pictures beyond their original borders with outpainting.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="/onboarding/dreambooth.png"
        title="Create your own custom AI models"
      >
        <p>
          Use DreamBooth to turn photos into personalized Text to Image model that can generate stunning images of your chosen subject.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="/onboarding/discord.jpeg"
        title="Join our Discord"
      >
        <p>
          Be up to date with latest features, leave feedback about our platform, or share your art with the community.
        </p>

        <Button href='https://discord.gg/5KsUXSzVwS' fullWidth>
          <svg xmlns="http://www.w3.org/2000/svg" width={71 / 3.2} height={55 / 3.2} viewBox="0 0 71 55" fill="none">
            <g clipPath="url(#clip0)">
              <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#ffffff" opacity={1} />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="71" height="55" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Join Discord server
        </Button>

      </OnboardingModalScreen>
    </OnboardingModal>
  )
}


export function DreamBoothOnboardingModal() {

  return (
    <OnboardingModal id='dreambooth'>
      <OnboardingModalScreen
        image="/onboarding/dreambooth.png"
        title="Transform your images
        into custom AI models"
      >
        <p>
          Turn your photos into Text to Image model that can generate stunning images of your chosen subject.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="/onboarding/avatars.png"
        title="AI Avatars"
      >
        <p>
          Create your own custom AI Avatar generator and transform anyone into a piece of art.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="/onboarding/product-shots.png"
        title="Product shots"
      >
        <p>
          Visualize any object in different scenerios or get inspired generating infinite variations of it.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="/onboarding/styles.png"
        title="Style replication"
      >
        <p>
          Teach AI to replicate any style or get creative with endless AI art possibilities.
        </p>
      </OnboardingModalScreen>
      <OnboardingModalScreen
        image="/onboarding/discord.jpeg"
        title="Join our Discord"
      >
        <p>
          Be up to date with latest features, leave feedback about our platform, or share your art with the community.
        </p>

        <Button href='https://discord.gg/5KsUXSzVwS' fullWidth>
          <svg xmlns="http://www.w3.org/2000/svg" width={71 / 3.2} height={55 / 3.2} viewBox="0 0 71 55" fill="none">
            <g clipPath="url(#clip0)">
              <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#ffffff" opacity={1} />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="71" height="55" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Join Discord server
        </Button>

      </OnboardingModalScreen>
    </OnboardingModal>
  )
}