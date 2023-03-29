import WebsiteLayout from 'frontend/components/layout/website';

import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "frontend/redux/hooks";
import { addErrors, clearErrors, message, updateAuthState } from "frontend/redux/info/slice";
import { selectUser, selectUserStatus, updateCredits } from "frontend/redux/user/slice";

import axios from 'axios';
import Button from 'frontend/components/button/button';
import { InputRow } from 'frontend/components/form/form';
import Input from 'frontend/components/input/input';
import Loader from 'frontend/components/loader/loader';
import Select from 'frontend/components/select/select';
import styles from 'frontend/styles/dreambooth.module.scss';
import ImageBlobReduce from 'image-blob-reduce';
import { Check, Trash2 } from 'lucide-react';
import { useRouter } from 'next/router';
import Pica from "pica";
import Dropzone from 'react-dropzone';
import { dreamboothLimits } from 'utils/limits';

const pica = Pica({ features: ["js", "wasm", "cib"] });
const resizer = new ImageBlobReduce({ pica })

export default function CreateDreamBoothModelPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const user = useAppSelector(selectUser);
  const userState = useAppSelector(selectUserStatus);
  const [state, setState] = useState({
    type: 'avatar',
    name: '',
    concept: 'man',
    lr: 0.000001,
    lr_warmup_steps: 200,
    lr_scheduler: 'polynomial',
    base_model: 'SG161222/Realistic_Vision_V1.3',
    max_train_steps: 2000,
    num_class_images: 1000,
    instance_prompt: 'gtmg man',
    class_prompt: 'a man',
    train_text_encoder: true,
    pregenerate: true
  })
  const [images, setImages] = useState<File[]>([])
  const [imagesPreview, setImagesPreview] = useState<string[]>([])
  const [loader, setLoader] = useState<boolean>(false);
  const [imagesLoader, setImagesLoader] = useState<boolean>(false);
  const [waitingTime, setWaitingTime] = useState(2000)
  const [queueSize, setQueueSize] = useState(0)

  async function getData() {
    try {
      const [resTime] = await Promise.all([
        axios.get('/api/models/time'),
      ]);

      setWaitingTime(resTime.data.time)
      setQueueSize(resTime.data.queueSize)
    } catch { }
  }


  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  function handleSelect(key: string, value: string) {
    setState({
      ...state,
      [key]: value
    })
  }

  async function handleImage(files: File[]) {
    if (!files) return
    setImagesLoader(true);


    for (const file of files) {
      // get image size
      try {
        const size: number[] = await new Promise((resolve, reject) => {
          const img = new Image();
          const objectURL = URL.createObjectURL(file);
          img.onload = function () {
            URL.revokeObjectURL(objectURL)
            resolve([img.width, img.height])
          }
          img.onerror = function (err) {
            reject(err);
          }
          img.src = objectURL
        });

        if (Math.min(...size) < 512) {
          message(dispatch, { text: 'Image should be larger than 512x512', type: 'info' })
          continue
        }

        let max = Math.ceil(512 * (Math.max(...size) / Math.min(...size)));
        console.log("Resizing", file.name, size, max)
        const blob = await resizer.toBlob(file, { max: max })

        const f = new File([blob], file.name);

        setImagesPreview(p => [...p, URL.createObjectURL(blob)])
        setImages(im => [...im, f])

        // wait 500ms
        await new Promise((resolve) => setTimeout(resolve, 500))

      } catch {
        continue
      }

    }
    setImagesLoader(false)

  }

  function handleImageDelete(e: React.MouseEvent, i: number) {
    e.stopPropagation()
    setImagesPreview(im => im.map((x, j) => {
      if (j === i) {
        URL.revokeObjectURL(x)
      }
      return x;
    })
      .filter((_, j) => j !== i))
    setImages(im => im.filter((_, j) => j !== i))

  }

  async function startTraining(e: React.FormEvent) {
    e.preventDefault();
    dispatch(clearErrors())

    if (!user.id) {
      dispatch(updateAuthState('register'));
      return
    }

    if (user && user.credits < 2000) {
      dispatch(updateAuthState('credits'));
      return
    }

    if (user.status !== 'active') {
      message(dispatch, { text: 'Please verify your account!', type: 'info' })
      return
    }

    if (!state.concept) {
      message(dispatch, { text: 'Concept is required. What are you creating model of?', type: 'info' })
      return
    }

    if (images.length < 4) {
      message(dispatch, { text: 'Please upload more images!', type: 'info' })
      return
    }

    if (images.length > 100) {
      message(dispatch, { text: 'Maximum 100 images!', type: 'info' })
      return
    }

    if (state.max_train_steps > 10_000) {
      message(dispatch, { text: 'Maximum 10 000 steps!', type: 'info' })
      return
    }
    if (state.lr_warmup_steps > 1000) {
      message(dispatch, { text: 'Maximum 1000 steps warmup!', type: 'info' })
      return
    }
    if (state.lr_warmup_steps > state.max_train_steps) {
      message(dispatch, { text: 'Warmup needs to be less than the number of training steps', type: 'info' })
      return
    }
    if (state.num_class_images > 10_000) {
      message(dispatch, { text: 'Maximum 10 000 class images!', type: 'info' })
      return
    }
    if (!state.class_prompt || state.class_prompt === 'gtmg') {
      message(dispatch, { text: 'Class prompt is required!', type: 'info' })
      return
    }
    if (!state.instance_prompt || state.class_prompt === 'a') {
      message(dispatch, { text: 'Instance prompt is required!', type: 'info' })
      return
    }

    try {
      setLoader(true)

      const data = new FormData();
      images.forEach(im => data.append('images', im))

      for (var key in state) {
        // @ts-ignore
        data.append(key, state[key]);
      }

      await axios.post('/api/models', data);

      // redirect
      dispatch(updateCredits(-2000))
      router.push('/dreambooth/models')

    } catch (e: any) {
      dispatch(addErrors(e.response.data))
      if (e.response.data && e.response.data.message) {
        message(dispatch, { text: e.response.data.message, type: 'danger' })

      } else {
        message(dispatch, { text: 'Something went wrong!', type: 'danger' })
      }
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    if (state.concept === 'style') {
      setState(s => ({ ...s, instance_prompt: 'gtmg style', class_prompt: 'illustration style' }))
    } else {
      setState(s => ({ ...s, instance_prompt: `gtmg ${state.concept}`, class_prompt: `a ${state.concept}` }))
    }
  }, [state.concept]);

  useEffect(() => {
    if (state.type === 'style') {
      setState(s => ({ ...s, concept: 'style' }))
    } else {
      setState(s => ({ ...s, concept: '' }))
    }
  }, [state.type])

  useEffect(() => {
    setState(s => ({ ...s, max_train_steps: Math.min(Math.max(images.length * 100, 1200) + 200, 10_000) }))
  }, [images])

  useEffect(() => {
    if ((userState === 'failed' || userState === 'completed') && !user.id) {
      dispatch(updateAuthState('register'));
    }
  }, [userState, user.id]);

  useEffect(() => {
    getData()
    const interval = setInterval(getData, 15000);

    return () => clearInterval(interval)
  }, []);

  const totalWaitingTime = waitingTime + 900 + state.max_train_steps / 2 + state.num_class_images * 2;

  return <WebsiteLayout
    title="Dreambooth - Create model"
    description="...."
    canonical='/dreambooth/model/create'
    robots='noindex'
    image='/social-image-dreambooth.png'
    footer={false}
  >
    <form className={styles.create} onSubmit={startTraining}>
      <div className={styles.top}>
        <h1 className={styles.title}>Create custom AI model</h1>
        <p className={styles.description}>Current estimated training time is {(Math.floor(totalWaitingTime / 3600) ? Math.floor(totalWaitingTime / 3600) + 'h' : '') + (Math.floor(totalWaitingTime / 60 % 60) > 0 ? ' ' + Math.floor(totalWaitingTime / 60 % 60) + 'm' : '')}. {queueSize > 0 ? `(${queueSize} model${queueSize === 1 ? ' is ' : 's are'} being processed)` : ''}</p>
      </div>
      <Section
        number={1}
        title="Model type"
        description="Purpose of the model"
      >
        <div className={styles.cards_select}>
          <CardSelect
            id='type'
            value="avatar"
            selectedValue={state.type}
            imageSrc='https://img.getimg.ai/generated/img-h68FLuIFyyJsVFGiZFYjtd.png'
            title='Avatar'
            description='Transform yourself into anything'
            onChange={handleSelect}
          />
          <CardSelect
            id='type'
            value="product"
            selectedValue={state.type}
            imageSrc='https://img.getimg.ai/generated/img-mt4rTAldHhkUzf1X7HDePI.png'
            title='Product shot'
            description='Capture objects in many scenerios'
            onChange={handleSelect}
          />
          <CardSelect
            id='type'
            value="style"
            selectedValue={state.type}
            imageSrc='https://img.getimg.ai/generated/img-sd31sMjVAoHjOqAXhGhO66.png'
            title='Style'
            description='Replicate custom art style'
            onChange={handleSelect}
          />
        </div>
        {state.type !== 'style' ? <>
          <div style={{ height: 24 }} />
          <Input
            label={state.type === 'avatar' ? 'Who are you?' : 'What is this model of?'}
            id='concept'
            value={state.concept}
            onChange={handleChange}
            placeholder={state.type === 'avatar' ? 'e.g. man, woman, couple, dog, cat etc.' : 'e.g. shoe, backpack, perfume, watch, car'}
            info={'be as general as possible, do not enter names or proper nouns here'}
          />
        </> : <div />}
      </Section>
      <Section
        number={2}
        title="Model style"
        description="Base model used for training"
      >
        {
          state.type === 'avatar' ?
            <ul className={styles.help_list}>
              <li>Select style to your liking or choose <b>Stable Diffusion</b> for more diversity.</li>
            </ul>

            : state.type === 'product' ?
              <ul className={styles.help_list}>
                <li> We recommend using <b>Stable Diffusion 2.1</b> for best photorealistic product shots.</li>
              </ul>
              : state.type === 'style' ?
                <ul className={styles.help_list}>
                  <li> We recommend using <b>Stable Diffusion 1.5</b> for the most diverse style replication results.</li>
                </ul>
                : <div />
        }
        <div className={styles.cards_select}>

          <CardSelect
            id='base_model'
            value="runwayml/stable-diffusion-v1-5"
            selectedValue={state.base_model}
            imageSrc='https://img.getimg.ai/generated/img-HEtP4lhQ16nxnsckEbnuQE.png'
            title='Stable Diffusion 1.5'
            onChange={handleSelect}
            size='md'
          />
          <CardSelect
            id='base_model'
            value="stabilityai/stable-diffusion-2-1-base"
            selectedValue={state.base_model}
            imageSrc='https://img.getimg.ai/generated/img-AkwqwLLzKt7VYKEYryC1oL.png'
            title='Stable Diffusion 2.1'
            onChange={handleSelect}
            size='md'
          />
          <CardSelect
            id='base_model'
            value="SG161222/Realistic_Vision_V1.3"
            selectedValue={state.base_model}
            imageSrc='https://img.getimg.ai/generated/img-hRYMVhHAAYtT35ZWKznGpb.png'
            title='Realistic Vision'
            onChange={handleSelect}
            size='md'
          />
          <CardSelect
            id='base_model'
            value="wavymulder/Analog-Diffusion"
            selectedValue={state.base_model}
            imageSrc='https://img.getimg.ai/generated/img-iuhi1mBbZYZMPw51kXWbW1.png'
            title='Analog'
            onChange={handleSelect}
            size='md'
          />
          <CardSelect
            id='base_model'
            value="prompthero/openjourney"
            selectedValue={state.base_model}
            imageSrc='https://img.getimg.ai/generated/img-VGm6rClhXMOcSac0pCFukK.png'
            title='Openjourney'
            onChange={handleSelect}
            size='md'
          />
        </div>

      </Section>
      <Section
        number={3}
        title="Upload images"
        description="Set of training images"
      >
        {
          state.type === 'avatar' ?
            <>
              <p className={styles.help}>
                Upload ~20 images of the same person/animal. Make sure that:
              </p>
              <ul className={styles.help_list}>
                <li>There are no duplicated images</li>
                <li>Uploaded images are widely diverse</li>
                <li>Images are larger than 512x512px</li>
              </ul>
              <p className={styles.help}>
                It&apos;s also best to:
              </p>
              <ul className={styles.help_list}>
                <li>Use photos with different backgrounds and angles</li>
                <li>Have no other people in your photos</li>
                <li>Use photos with good lighting</li>
                <li>Use photos with different framing (close ups, side, chest up, full body)</li>
                <li>Use photos with different facial expressions</li>
                <li>Have photos where you look into the camera and other photos that you look away the camera</li>
                <li>If couple, make sure that every photo has both people in it</li>
                <li>Use photos without sunglasses, hats, excessive makeup etc.</li>
              </ul>
              <p className={styles.help}>
                For the most diverse results use:
              </p>
              <ul className={styles.help_list}>
                <li>10 close up photos</li>
                <li>5 upper body photos</li>
                <li>3 full body photos</li>
                <li>2 side profiles photos</li>
              </ul>
            </>
            : state.type === 'product' ?
              <>
                <p className={styles.help}>
                  Upload ~10-20 images of the same object. Make sure that:
                </p>
                <ul className={styles.help_list}>
                  <li>There are no duplicated images</li>
                  <li>Uploaded images are widely diverse</li>
                  <li>Images are larger than 512x512px</li>
                </ul>
                <p className={styles.help}>
                  It&apos;s also best to:
                </p>
                <ul className={styles.help_list}>
                  <li>Use photos with different backgrounds and angles</li>
                  <li>Have no other objects or people in your photos</li>
                  <li>Use photos with good lighting</li>
                  <li>Use photos with different framing (close ups, side, top, bottom)</li>
                </ul>
              </>
              : state.type === 'style' ?
                <>
                  <p className={styles.help}>
                    Upload 40-100 images in the same style. Make sure that:
                  </p>
                  <ul className={styles.help_list}>
                    <li>There are no duplicated images</li>
                    <li>Uploaded images are widely diverse</li>
                    <li>Images are larger than 512x512px</li>
                  </ul>
                  <p className={styles.help}>
                    To get the best and most fliexible model that replicates a style try using:
                  </p>
                  <ul className={styles.help_list}>
                    <li>70% people</li>
                    <li>20% landscapes</li>
                    <li>10% objects</li>
                  </ul>
                </>
                : <div />
        }
        <p className={styles.help}>
          Please also note that the training process is performed on images with 1:1 ratio, so:
        </p>
        <ul className={styles.help_list}>
          <li>Every non-square picture will be cropped at the center</li>
          <li>Make sure that your subject is fully present in the cropped pictures below</li>
        </ul>

        {
          state.type === 'avatar' ?
            <>
              <p className={styles.help}>
                Do not:
              </p>
              <ul className={styles.error_list}>
                <li>Create model on photos of children or minors.</li>
              </ul>
            </>
            : <div />
        }
        <p className={styles.help}>
          The better you follow these instructions, the better your results will be!
        </p>
        <Dropzone
          accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg', '.jpg'] }}
          multiple={true}
          onDropAccepted={handleImage}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className={styles._dropzone}>
              <div className={styles.dropzone}>
                <input {...getInputProps()} />

                <div className={styles.dropzone_images}>
                  {
                    imagesPreview.map((im, i) => (
                      <div key={i} className={styles.dropzone_image}
                      >
                        <img
                          src={im}
                          alt=""
                        />
                        <button type='button' className={styles.image_delete} onClick={(e) => handleImageDelete(e, i)}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))
                  }
                </div>
                {
                  imagesPreview.length === 0 ?
                    <p>Drag &apos;n&apos; drop images here, or click to select.</p>
                    : null
                }
              </div>
            </div>
          )}
        </Dropzone>
        <div style={{ display: 'inline-block', paddingTop: 24 }}>
          {imagesLoader ? <Loader text='Processing images...' /> : null}
        </div>
      </Section>
      <Section
        number={4}
        title="Advanced settings"
        description="Training parameters for pros"
      >
        <p className={styles.help}>
          Change these only if you know what you&apos;re doing!
        </p>
        <div style={{ height: 6 }} />

        <InputRow>
          <Input
            label='Instance prompt'
            id='instance_prompt'
            value={state.instance_prompt}
            onChange={handleChange}
            info="Modifier used in prompt to invoke the new style. Needs to be unique."
          />
          <Input
            label='Class prompt'
            id='class_prompt'
            value={state.class_prompt}
            onChange={handleChange}
            info="What is this model of?"

          />
        </InputRow>
        <Input
          label='Train steps'
          id='max_train_steps'
          value={state.max_train_steps}
          onChange={handleChange}
          type="number"
          step={1}
          info="Total number of training steps to perform (10k max)."
        />

        <Input
          label='Number of class images'
          id='num_class_images'
          value={state.num_class_images}
          onChange={handleChange}
          type="number"
          step={1}
          info="Minimal class images for prior preservation loss (10k max)."
        />
        <InputRow>
          <Input
            label='Learning rate'
            id='lr'
            value={state.lr}
            onChange={handleChange}
            type="number"
            step={0.000001}
            info="Initial learning rate (after the potential warmup period) to use."
          />
          <Input
            label='Learning rate warmup steps'
            id='lr_warmup_steps'
            value={state.lr_warmup_steps}
            onChange={handleChange}
            type="number"
            step={1}
            placeholder="0"
            info='Number of steps for the warmup in the lr scheduler.'
          />
        </InputRow>
        <Select
          label='Learning rate scheduler'
          options={[
            { value: 'constant', key: 'constant' },
            { value: 'polynomial', key: 'polynomial' },
          ]}
          id='lr_scheduler'
          value={state.lr_scheduler}
          onChange={handleChange}
          info="The scheduler type to use"
        />
      </Section>
      <Section
        number={5}
        title="Model details"
        description="Details used to identify your model"
      >
        <>
          <Input
            label='Model name'
            id='name'
            value={state.name}
            onChange={handleChange}
            info='Used to identify your model in getimg.ai tools. It does not affect training.'
            // size='lg'
            placeholder='e.g. Self Diffusion'
          />
        </>
      </Section>
      <Section
        number={6}
        title="Train your model"
        description="Start the process"
      >
        <p className={styles.help}>
          Before submitting, please note that:
        </p>
        <ul className={styles.help_list}>
          <li>You&apos;ll get model hosted on getimg.ai ready to use at any time and files to use the model on your own machine.</li>
          <li>Quality of the model mostly depends on quality of used images.</li>
          <li>We do not offer refunds, as we start incurring costs immediately.</li>
          <li>We delete uploaded images as soon as training is finished.</li>
          <li>You will get some pre-generated images to start (we&apos;re still working on our prompt database).</li>
          <li>Current estimated training time is {(Math.floor(totalWaitingTime / 3600) ? Math.floor(totalWaitingTime / 3600) + 'h' : '') + (Math.floor(totalWaitingTime / 60 % 60) > 0 ? ' ' + Math.floor(totalWaitingTime / 60 % 60) + 'm' : '')}. {queueSize > 0 ? `(${queueSize} model${queueSize === 1 ? ' is ' : 's are'} being processed)` : ''}</li>
          <li>It costs 2000 credits to create a model.</li>
          <li>With your current plan ({user.plan}), you can have {dreamboothLimits[user.plan || 'free']} models stored.</li>

        </ul>

        <div style={{ height: 24 }} />

        <Button size='lg' fullWidth loading={loader} disabled={imagesLoader}>
          Create model&nbsp;<small>(2000 credits)</small>
        </Button>
      </Section>


    </form>

  </WebsiteLayout >
}


interface SectionProps {
  number: number
  title: string
  description: string
  children: JSX.Element | JSX.Element[] | string[] | string
}

function Section({ number, title, description, children }: SectionProps) {

  return (
    <section className={styles.section}>
      <div className={styles._head}>
        <div className={styles.number}>
          {number}
        </div>
        <div className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}

interface CardSelectProps {
  id: string
  value: string
  selectedValue: string
  imageSrc: string
  title: string
  description?: string
  onChange: (id: string, value: string) => void
  size?: 'lg' | 'md' | 'sm'
}


function CardSelect({
  id,
  value,
  selectedValue,
  imageSrc,
  title,
  description,
  onChange,
  size = 'lg'
}: CardSelectProps) {


  const selected = value === selectedValue

  return (
    <div
      className={[styles._card_select, styles[size], selected ? styles.selected : ''].join(' ')}
      style={{ backgroundImage: `url(${imageSrc})` }}
      onClick={() => onChange(id, value)}
    >
      <div className={[styles.card_select].join(' ')}>
        <h3 className={styles.card_title}>{title}</h3>
        {description ? <p className={styles.card_description}>{description}</p> : null}
        {
          selected ?
            <div className={styles.check}>
              <Check size={12} strokeWidth={4} />
            </div>
            : null
        }
      </div>
    </div>
  )
}
