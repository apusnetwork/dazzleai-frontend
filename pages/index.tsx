import { ArrowRight, Cloud } from '@/frontend/components/basic-icons';
import Button from '@/frontend/components/button/button';
import WebsiteLayout from '@/frontend/components/layout/website';
import { FeatureCard, FeatureRow, FeaturesGrid, ImageGridVisual } from '@/frontend/components/website';
import { LargeCTA } from '@/frontend/components/website/cta';
import { Faq, FaqQuestion } from '@/frontend/components/website/faq';
import Hero from '@/frontend/components/website/hero';
import { useAppDispatch } from '@/frontend/redux/hooks';
import { updateAuthState } from '@/frontend/redux/info/slice';
import { Cpu, Infinity, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "images",
  "art",
  "photos",
  "artworks",
  "avatars",
];

export default function HomePage({ exampleArt }: { exampleArt: ImageI[] }): JSX.Element {
  const [index, setIndex] = useState(0);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  const dispatch = useAppDispatch();

  return <WebsiteLayout
    title="Everything you need to create images with AI"
    description="Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more."
    canonical='/'
  >

    <Hero
      title={
        <>
          Create amazing&nbsp;
          {isSSR ? <span>{TEXTS[0]}&nbsp;</span> : <TextTransition text={TEXTS[index % TEXTS.length] + ' '} springConfig={presets.wobbly} />}<i>with the power of&nbsp;<span>AI</span>.</i>
        </>
      }
      subtitle="getimg.ai is a suite of magical AI tools. Generate original images at scale, modify photos, expand pictures beyond their original borders, or create custom AI models."
      cta={
        <>
          <Button
            size='xl'
            href='/text-to-image'
          >
            Start creating for free
            <ArrowRight />
          </Button>
          <small>100/mo images for free &middot; No credit card required</small>
        </>
      }
      visual={
        <ImageGridVisual
          images={[
            "https://img.getimg.ai/generated/img-YkfgHICXA8YFGEzbWC36kS.png",
            "https://img.getimg.ai/generated/img-WcykmlaekkgasgzP70JQTD.png",
            "https://img.getimg.ai/generated/img-uiSqi31mkxo5PabcADdlXX.png",
            "https://img.getimg.ai/generated/img-TdRuGZy3YmIBXvPmqU6lpz.png",
            "https://img.getimg.ai/generated/img-kWY1RGIowDFHObYWrqKEuX.png",
            "https://img.getimg.ai/generated/img-pflMQRap58h9aCuMEEekHf.png",
            "https://img.getimg.ai/generated/img-mz3jpmlQzO8enprS6Z5IUk.png",
            "https://img.getimg.ai/generated/img-aD3ZVFuZOQykjCugaqYZLa.png",
            "https://img.getimg.ai/generated/img-q9tOtcskhqYjxvpFdvE5c2.png",
            "https://img.getimg.ai/generated/img-nCU8xt4kkugIc6gMvDqWVF.png",
            "https://img.getimg.ai/generated/img-M30VWmdBvEYfVrdNmp5RFW.png",
            "https://img.getimg.ai/generated/img-RgNQfTcfAo4fhUlgdkV2pC.png",
            "https://img.getimg.ai/generated/img-aHbNRGbgmNutEKIOHdTQ2t.png",
            "https://img.getimg.ai/generated/img-DjVseuFs8N2CikjWGgXM0T.png",
            "https://img.getimg.ai/generated/img-KrV9CmArl69eDiCteWECiq.png",
            "https://img.getimg.ai/generated/img-GgOSvUjkqVGiJoacFvZNsG.png",
            "https://img.getimg.ai/generated/img-l3zHjbrXFdWc78rwi0YPPN.png",
            "https://img.getimg.ai/generated/img-jYjnraZM46IaWERJsWQEw5.png",
            "https://img.getimg.ai/generated/img-RpLjpqFAgmJCIqPTuH004k.png",
            "https://img.getimg.ai/generated/img-afDC6nRaihw1IidGRKib8J.png",
            "https://img.getimg.ai/generated/img-5lxSExuwWStJCuwd4OjIn6.png",
            "https://img.getimg.ai/generated/img-hoT72XlOTiNoUcWPamhr9v.png",
            "https://img.getimg.ai/generated/img-iZLVCR0qAlWXNVmAPGlKrT.png",
            "https://img.getimg.ai/generated/img-UWssaEWdUjqK1DXwJywwKe.png",
            "https://img.getimg.ai/generated/img-WIBwVTR1rF74J3tVc8C2dE.png",
            "https://img.getimg.ai/generated/img-9jjtCkXWwKjZe9wElBEly2.png",
            "https://img.getimg.ai/generated/img-MX8g0VKpK3LZUEulhywQE7.png",
            "https://img.getimg.ai/generated/img-gMNOEgET3EwFuQuPUCpw4G.png",
            "https://img.getimg.ai/generated/img-i77g0LU68dD7As1cNlm7gR.png",
            "https://img.getimg.ai/generated/img-Azk6WKhpgaMAoMweR2HkUy.png",
            "https://img.getimg.ai/generated/img-XfKva6OJ994qNrzifh58vo.png",
            "https://img.getimg.ai/generated/img-9Sdzb5s1Fgx92yjH8emmS9.png",
            "https://img.getimg.ai/generated/img-56NIBOvrjSaKS45vxomR6n.png",
            "https://img.getimg.ai/generated/img-Xcw19IKMv7yPiqDyASeju1.png",
            "https://img.getimg.ai/generated/img-D6bW4s9IlEg71b6mtMz6pn.png",
          ]}
        />
      }
    />


    <FeaturesGrid title='A fully integrated suite of image-generation tools'>
      <FeatureCard
        title="Built for speed"
        text="Generate up to 10 images in seconds."
        icon={<Zap />}
      />
      <FeatureCard
        title="20+ AI models"
        text="From Stable Diffusion to custom community styles."
        icon={<Cpu />}
      />
      <FeatureCard
        title="No downloads required"
        text="Magical AI tools right in your browser."
        icon={<Cloud />}
      />
      <FeatureCard
        title="Works for every use case"
        text="Art creation, photo editing, design inspiration and more."
        icon={<Infinity />}
      />

    </FeaturesGrid>



    <FeatureRow
      caption='Text to Image'
      title="Generate original images at scale."
      text="Unleash your imagination and create any type of image or art with text. Use your creativity to mix different art styles, or just describe what you want to see and watch the AI bring your ideas to life. Use one of 20+ community-trained models to apply a unique style to your creations, or train custom model based on your own art."
      visual={
        <video src={"/videos/ai-generator-2.mp4"} autoPlay loop muted playsInline />
      }
    />

    <FeatureRow
      caption='AI Editor · Outpainting'
      title="Expand pictures beyond their borders"
      text="Make your artwork creation process faster thanks to AI. With our advanced Editor, you can generate missing parts of any photo or create stunning large art pieces on infinitely sized canvas. There literally are no limits here."
      visual={
        <video src={"/guides/outpainting-simple-photo.mp4"} autoPlay loop muted playsInline />
      }
      reverse
    />

    <FeatureRow
      caption='AI Editor · Inpainting'
      title="Edit images with only text"
      text="Easily modify small details or change whole visual features on any picture. Use AI inpainting to remove unwanted objects from images, or alter any other elements. Just erase part of the image and tell AI what to render in empty space."
      visual={
        <video src={"/videos/inpainting.mp4"} autoPlay loop muted playsInline />
      }
    />
    <FeatureRow
      caption="DreamBooth"
      title="Create your custom AI model"
      text="Get a personalized AI model. It's as easy as uploading 10 pictures. Whether you want to create AI avatars for yourself or your team, need to render beautiful images of your product in different scenarios, or just want to have your own AI model to generate ideas with your style. We've got you covered. Every model is hosted on getimg.ai and available to use in seconds."
      visual={
        <video src={"/videos/dreambooth-2.mp4"} autoPlay loop muted playsInline />
      }
      reverse
    />


    <Faq title="Frequently Asked Questions">

      <FaqQuestion question='Can I use created images for commercial projects?'>
        <p> Yes, you can use generated images commercially. However, keep in mind that <a target="_blank" rel="noreferrer noopener" href='https://huggingface.co/spaces/CompVis/stable-diffusion-license'>CreativeML Open RAIL-M</a> license applies to created images.</p>

      </FaqQuestion>
      <FaqQuestion question='How to generate beautiful images?'>
        <p>
          Most of the time, simple prompts are not enough to get excellent results. But writing good prompts can be learned. You can start by reading <a target="_blank" rel="noreferrer noopener" href='https://cdn.openart.ai/assets/Stable%20Diffusion%20Prompt%20Book%20From%20OpenArt%2011-13.pdf'>OpenArt prompt book</a>.
        </p>
      </FaqQuestion>
      <FaqQuestion question='Is getimg.ai really free?'>
        <p>Yes, it is. You can generate 100 images for free every month. Just create an account.</p>
        <p>Additionally, you can earn more credits by referring friends and followers.
        </p>

      </FaqQuestion>
      <FaqQuestion question='Can I create NSFW content?'>
        <p>
          You can create anything you want! But keep in mind that we do monitor generated content. Usage that violates any applicable national, federal, state, local, or international law or regulation will <b>be banned and reported!</b>
        </p>
      </FaqQuestion>

    </Faq>

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




  </WebsiteLayout >
}
