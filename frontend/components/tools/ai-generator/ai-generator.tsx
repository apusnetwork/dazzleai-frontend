import axios from 'axios';
import dayjs from 'dayjs';
import Button from '@/frontend/components/button/button';
import Collapse from '@/frontend/components/collapse/collapse';
import GeneratedImage from '@/frontend/components/image/image';
import ImageView from '@/frontend/components/image/view';
import Input from '@/frontend/components/input/input';
import Loader from '@/frontend/components/loader/loader';
import { TextToImageOnboardingModal } from '@/frontend/components/onboarding/onboarding';
import Tip from '@/frontend/components/onboarding/tip';
import ControlnetSelect from '@/frontend/components/select/controlnet';
import ModelSelect from '@/frontend/components/select/model';
import Select from '@/frontend/components/select/select';
import Slider, { VerticalSlider } from '@/frontend/components/slider/slider';
import Switch from '@/frontend/components/switch/switch';
import { Tab, Tabs } from '@/frontend/components/tabs/tabs';
import Textarea from '@/frontend/components/textarea/textarea';
import { useAppDispatch, useAppSelector } from "@/frontend/redux/hooks";
import { addErrors, clearErrors, message, updateAuthState } from '@/frontend/redux/info/slice';
import { selectUser, updateCredits } from '@/frontend/redux/user/slice';
import cookies from 'js-cookie';
import _ from 'lodash';
import { Command, Edit3, Image, PlusCircle, Settings, Shuffle, SlidersHorizontal, Trash2, X } from 'lucide-react';
import { useEffect, useState } from "react";
import Dropzone from 'react-dropzone';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './ai-generator.module.scss';
import NodesSelect from '../../select/nodes';

interface StateI {
  model: string
  node: string
  prompt: string
  negativePrompt: string
  steps: number
  guidanceScale: number
  imageGuidance: number
  seed: string | undefined
  numImages: number
  enhanceFace: string
  upscale: string
  width: number
  height: number
  scheduler: string
  strength: number
  image: UploadImageI
  images: MixingImageI[]
  controlnet: string
  skipControlnetProcessing: string
}

export default function AiGenerator(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [images, setImages] = useState<ImageI[]>([])
  const [selectedImage, setSelectedImage] = useState<ImageI | undefined>(undefined)
  const [mode, setMode] = useState<'generate' | 'edit' | 'mix'>('generate')
  const [pagination, setPagination] = useState({
    loading: false, hasMore: true
  });
  const [dragging, setDragging] = useState<string | undefined>(undefined)
  const [loader, setLoader] = useState(false)
  const [models, setModels] = useState<ModelI[]>([]);
  const [nodes, setNodes] = useState<NodeI[]>([])
  const [state, setState] = useState<StateI>({
    model: '',
    node: '',
    prompt: '',
    negativePrompt: 'Disfigured, cartoon, blurry',
    steps: 25,
    guidanceScale: 9,
    imageGuidance: 1.5,
    seed: undefined,
    numImages: 4,
    enhanceFace: 'false',
    upscale: 'false',
    width: 512,
    height: 512,
    scheduler: 'dpmsolver++',
    strength: 0.5,
    controlnet: 'none',
    skipControlnetProcessing: 'false',
    image: {
      url: '',
    },
    images: [
      {
        url: '',
        strength: 1.0
      },
      {
        url: '',
        strength: 1.0
      },
    ]
  })

  async function getModels() {
    const res = await axios.get('/api/models?status=active&public=true');
    setModels([...res.data]);
  }

  async function getNodes() {
    const res = await axios.get('/api/nodes?status=active');
    setNodes([...res.data]);
  }

  async function getImages() {
    if (!pagination.hasMore) return
    let hasMore = true;
    try {
      setPagination({ ...pagination, loading: true })
      const res = await axios.get('/api/images?tool=generator&take=24&skip=' + images.length);
      setImages([...images, ...res.data])
      hasMore = res.data.length > 0
    } catch {
      setImages([]);
    } finally {
      setPagination({ loading: false, hasMore: hasMore });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  function allowDrop(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleDragStart(e: React.DragEvent) {
    //@ts-ignore
    const id = e.target.id;
    e.dataTransfer.setData("text", id);
    setDragging(id);
  }
  function handleDragEnd(e: React.DragEvent) {
    setDragging(undefined)
  }

  function handleDrop(e: React.DragEvent, id: string) {
    e.preventDefault()
    const source = e.dataTransfer.getData("text");

    const img = images.find(im => im.id === source);
    if (!img) return

    // set image
    setState(s => ({ ..._.set<StateI>(s, id, { ...img, strength: 1.0 }) }))

  }

  async function handleUpload(id: string, files: File[]) {

    if (!user.id) {
      dispatch(updateAuthState('login'));
      return
    }

    if (!files || _.get(state, id).loading) return

    if (files[0] && files[0].size > 2.5e7) {
      message(dispatch, { "type": "danger", text: "File too large! Max. file size is 25MB." })
      return
    }

    // upload file
    try {
      // set loader
      setState(s => ({ ..._.set<StateI>(s, id + '.loading', true) }))
      const data = new FormData();
      data.append('file', files[0]);

      const res = await axios.post('/api/images', data);
      const img = res.data
      img.strength = 1.0;

      // set image
      setState(s => ({ ..._.set<StateI>(s, id, img) }))

      if (id === 'image') {
        // resize based on model

        let baseSize = 512;
        if (state.model.startsWith('model-')) {
          const m = models.find(x => x.id === state.model);
          if (m) {
            baseSize = m.params.resolution || 512
          }
        } else if (state.model.endsWith('v2.1')) {
          baseSize = 768

        } else {
          baseSize = 512
        }

        let width = img.width || 512;
        let height = img.height || 512;
        const ratio = width / height;
        if (ratio > 1) {
          // horizontal
          width = baseSize;
          height = Math.round(baseSize / ratio / 64) * 64;
          if (height < baseSize) {
            height = baseSize
            width = Math.round(baseSize * ratio / 64) * 64;
          }
        } else {
          // vertical
          height = baseSize
          width = Math.round(ratio * height / 64) * 64
          if (width < baseSize) {
            width = baseSize
            height = Math.round(height / ratio / 64) * 64
          }
        }

        setState(s => ({
          ...s,
          width: width,
          height: height
        }))
      }
    } catch (e: any) {
      e && e.response && e.response.data && dispatch(addErrors(e.response.data))
      message(dispatch, { "type": "danger", text: "Please try uploading again!" })

    } finally {
      // set loader
      setState(s => ({ ..._.set<StateI>(s, id + '.loading', false) }))
    }
  }



  async function getRandomPrompt() {
    const res = await axios.get('/api/prompts/random');
    setState({
      ...state,
      prompt: res.data.prompt
    })
  }

  async function upscale(image: ImageI) {
    if (loader) {
      message(dispatch, { "type": "danger", text: "Please wait until current task is completed!" })
      return
    }
    generate(undefined, 'upscale', image)

  }
  async function enhanceFace(image: ImageI) {
    if (loader) {
      message(dispatch, { "type": "danger", text: "Please wait until current task is completed!" })
      return
    }
    generate(undefined, 'enhance-face', image)
  }

  async function copyImage(image: ImageI) {
    // @ts-ignore
    setState(s => ({ ...s, image: { ...s.image, ...image }, width: Math.min(image.width, 1024), height: Math.min(image.height, 1024) }))
    message(dispatch, { text: 'Copied init image.', type: 'success' })
  }

  async function copyParams(image: ImageI) {
    const task = image.modelTask
    const params = image.modelTask.params
    const _model = image.modelTask._model

    setState(s => {
      const newState = {
        ...s,
      }
      if (task.model === 'instruct-pix2pix') {
        setMode('edit')
      } else if (task.model === 'image-mixer') {
        setMode('mix')
      } else {
        newState.model = task.model.replace('-img2img', '').replace('-inpaint', '').replace('-txt2img', '')
        setMode('generate')
      }
      if (params.prompt) newState.prompt = params.prompt;
      if (_model && !_model.id.includes('/')) newState.prompt = newState.prompt.replace(_model.params.instance_prompt + ', ', '')
      if (params.guidance_scale) newState.guidanceScale = params.guidance_scale;
      if (params.image_guidance_scale) newState.imageGuidance = params.image_guidance_scale;
      if (params.width) newState.width = params.width;
      if (params.height) newState.height = params.height;
      if (params.scheduler) newState.scheduler = params.scheduler;
      if (params.num_inference_steps) newState.steps = params.num_inference_steps;
      if (params.negative_prompt) newState.negativePrompt = params.negative_prompt;
      if (params.strength) newState.strength = params.strength;
      if (params.controlnet) newState.controlnet = params.controlnet;
      if (params.image_url) {
        newState.image = {
          ...s.image,
          url: params.image_url
        }
      }
      if (params.images && params.images.length) {
        newState.images = [...params.images]
      }

      return newState
    });
    message(dispatch, { text: 'Copied parameters.', type: 'success' })

  }

  async function deleteImage(image: ImageI) {
    try {
      axios.delete('/api/images?ids=' + image.id)
      setImages(im => im.filter(im => im.id !== image.id))
    } catch {
      message(dispatch, { type: 'danger', text: 'Unexpected Error!' })
    }

  }

  async function generate(e?: React.FormEvent, forceMode?: string, initImage?: ImageI) {
    e && e.preventDefault();
    dispatch(clearErrors())

    let pipeline = forceMode || mode;

    const taskCount = pipeline === 'upscale' || pipeline === 'enhance-face' ? 1 : state.numImages;
    const credits = pipeline === 'upscale' || pipeline === 'enhance-face' ? 1 : state.numImages * (1 + (state.upscale === 'true' ? 1 : 0) + (state.enhanceFace === 'true' ? 1 : 0))


    if (loader) {
      message(dispatch, { "type": "danger", text: "Please wait until current task is completed!" })
      return
    }

    // if (user && user.credits < credits) {
    //   dispatch(updateAuthState('credits'));
    //   return
    // }

    if (!user.id) {
      dispatch(updateAuthState('register'));
      return
    }

    if (user.status !== 'active') {
      message(dispatch, { text: 'Please verify your account!', type: 'info' })
      return
    }

    if (state.image && state.image.loading) {
      message(dispatch, { text: 'Please wait until image is fully loaded!', type: 'info' })
      return
    }



    try {
      setLoader(true)
      const body: Record<string, any> = {
        tool: 'generator'
      }
      let model = state.model;

      if (pipeline === 'generate' || pipeline === 'edit' || pipeline === 'mix') {
        // generation params
        body.num_inference_steps = state.steps;
        body.guidance_scale = state.guidanceScale;
        body.num_images = parseInt(state.numImages.toString());
        body.width = state.width;
        body.height = state.height;
        body.enhance_face = state.enhanceFace;
        body.scheduler = state.scheduler;

        if (state.upscale === 'true') body.upscale = 4
        if (state.enhanceFace === 'true') body.enhance_face = true

      }

      if (pipeline === 'generate' || pipeline === 'edit') {
        body.prompt = state.prompt;
        if (!body.prompt) {
          message(dispatch, { text: 'Text prompt is required for generation!', type: 'danger' })
          return
        }

        if (pipeline === 'edit' && (!state.image || !state.image.url)) {
          message(dispatch, { text: 'Image is required for Editing!', type: 'danger' })
          return
        }

        if (state.model.startsWith('model')) {
          const m = models.find(x => x.id === state.model);
          if (!m) return
          if (m.params.instance_prompt && !body.prompt.includes(m.params.instance_prompt)) body.prompt = m.params.instance_prompt + ', ' + body.prompt;
        }

        if (state.negativePrompt) body.negative_prompt = state.negativePrompt;
        if (state.seed) body.seed = state.seed;

        if (pipeline === 'edit') {
          body.image_guidance_scale = state.imageGuidance;
          body.scheduler = 'euler_a';

        }

        if (state.image && state.image.url) {
          body.image_url = state.image.url
        }

        if (body.image_url && pipeline === 'generate') {
          body.strength = state.strength
          if (Math.floor(body.strength * body.num_inference_steps) === 0) {
            message(dispatch, { text: 'Strength × Steps should be greater than 0', type: 'danger' })
            return
          }

          const sm: ModelI | undefined = models.find(m => m.id === state.model)
          if (state.controlnet !== 'none' && state.model !== 'stable-diffusion-v2.1' && (sm && sm.params.base_model && sm.params.base_model.startsWith('stabilityai/stable-diffusion-2-1') ? false : true)) {
            body.controlnet = state.controlnet
            body.skip_controlnet_processing = state.skipControlnetProcessing
          }
        }


        if (pipeline === 'edit') {
          model = 'instruct-pix2pix'
        }

      } else if (pipeline === 'mix') {
        body.images = [];

        for (const im of state.images) {
          if (im.loading) {
            message(dispatch, { text: 'Please wait until all images are loaded!', type: 'danger' })
            return
          }
          if (!im.strength || !im.url) continue
          body.images.push({
            url: im.url,
            strength: im.strength
          })
        }

        if (body.images.length < 1) {
          message(dispatch, { text: 'Please upload at least 1 image!', type: 'danger' })
          return
        }

        model = 'image-mixer'

      } else if (pipeline === 'upscale') {
        body.upscale = 4
        body.image_url = initImage && initImage.url
        model = 'real-esrgan'
      } else if (pipeline === 'enhance-face') {
        body.enhance_face = true
        body.image_url = initImage && initImage.url
        model = 'gfpgan'
      }

      //@ts-ignore
      setImages(s => [...Array(taskCount).fill(1).map((_, i) => ({
        ...(s.length ? s[0] : {}), id: Math.random().toString(), loading: true, seed: parseInt(body.seed) + i, width: initImage ? initImage.width : state.width, height: initImage ? initImage.height : state.height
      })), ...s])



      window.scrollTo({ top: window.innerWidth < 700 ? window.innerHeight : 0, behavior: 'smooth' });


      const pendingTasks = await axios.post('/api/models/' + model, body);

      let pendingIds: string[] = pendingTasks.data.map((t: ModelTaskI) => t.id);

      while (pendingIds.length > 0) {
        const tasks = await axios.get('/api/tasks?ids=' + pendingIds.join(','));

        const generatedImages: ImageI[] = [];
        for (const task of tasks.data) {
          if (task.status === 'succeed' && task.images && task.images.length) {
            generatedImages.push(...task.images.map((im: any) => ({ ...im, modelTask: task })))
          }
          if (task.status === 'failed') {
            throw new Error("Something went wrong!")
          }
        }
        setImages((v) => {
          const im = [...v];
          let modelTasks: any[] = []
          for (let i = 0; i < generatedImages.length; i++) {
            const image = generatedImages[i]
            // if (body.seed) {
            //   const seedIndex = im.findIndex(i => i.seed && image.modelTask.params.seed && i.seed.toString() === image.modelTask.params.seed.toString());
            //   if (seedIndex > -1) {
            //     im[seedIndex] = image
            //   }
            // } else {
            im[pendingIds.length + i - 1] = image
            // }
            modelTasks.push(image.modelTask)
          }
          pendingIds = pendingIds.filter(id => {
            return !modelTasks.find(t => t.id === id)
          })

          return [...im]
        })
        await new Promise((r) => setTimeout(r, 300));

      }

      dispatch(updateCredits(-1 * credits))

    } catch (e: any) {
      if (e && e.response && e.response.data) dispatch(addErrors(e.response.data))
      setImages(im => im.filter(i => !i.loading))
      message(dispatch, { text: 'Something went wrong!', type: 'danger' })
    } finally {
      setLoader(false);
    }

  }

  async function init() {
    const urlParams = new URLSearchParams(window.location.search);

    // init state from cookies
    const cookieState = cookies.get('text-to-image-state')
    if (cookieState) {
      const json = JSON.parse(cookieState);
      if (json['image']) delete json['image']
      if (json['images']) delete json['images']
      setState(s => ({ ...s, ...json }))
    }

    //init model
    const m = urlParams.get('model');
    if (m) {
      setState(s => ({ ...s, model: m }))
    }

    const img = urlParams.get('img') || urlParams.get('init-img');
    if (!img) return

    try {
      const res = await axios.get('/api/images/' + img);
      if (urlParams.has('img')) {
        copyParams(res.data)
      } else if (urlParams.has('init-img')) {
        copyImage(res.data)
      }
    } catch { }
  }

  useEffect(() => {
    getModels()
    getNodes()
    init();
  }, []);

  useEffect(() => {
    if (!user.id) return
    getImages();

  }, [user.id])


  useEffect(() => {
    const s = { ...state };

    let baseSize = s.width;
    const model = s.model;
    if (!model) return

    if (mode === 'edit') {
      s.negativePrompt = !s.negativePrompt || s.negativePrompt === 'Disfigured, cartoon, blurry' ? '' : s.negativePrompt
      baseSize = 512;
    } else if (mode === 'mix') {
      baseSize = 640
    } else {
      s.negativePrompt = s.negativePrompt || 'Disfigured, cartoon, blurry'

      if (model.startsWith('model-')) {
        const m = models.find(x => x.id === model);
        if (m) {
          baseSize = m.params.resolution || 512
        }
      } else if (model.endsWith('v2.1')) {
        baseSize = 768
      } else {
        baseSize = 512
      }
    }

    const ratio = s.width / s.height;
    if (ratio > 1) {
      // horizontal
      s.width = baseSize;
      s.height = Math.round(baseSize / ratio / 64) * 64;
    } else {
      // vertical
      s.height = baseSize
      s.width = Math.round(ratio * s.height / 64) * 64
    }

    setState(x => ({ ...x, ...s }))

  }, [state.model, mode])

  useEffect(() => {
    if (1 / state.steps > state.strength) {
      setState(s => ({
        ...s,
        strength: Math.round(1 / state.steps * 100) / 100
      }))
    }

  }, [state.steps, state.strength])

  useEffect(() => {
    if (!state.model) return
    cookies.set('text-to-image-state', JSON.stringify(state), {
      expires: dayjs().add(24, 'months').toDate()
    })
  }, [state])


  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.altKey || e.metaKey) && (e.key === 'g' || e.key === 'Enter')) {
        e.preventDefault();
        generate();
      }
      if (selectedImage && e.key === 'ArrowRight') {
        // find next
        const next = images.findIndex(i => i.id === selectedImage.id) + 1;
        if (next < images.length) {
          setSelectedImage(images[next])
        }
        if (next > images.length * 0.7 && pagination.hasMore) {
          getImages()
        }
      }
      if (selectedImage && e.key === 'ArrowLeft') {
        // find prev
        const prev = images.findIndex(i => i.id === selectedImage.id) - 1;
        if (prev > -1) {
          setSelectedImage(images[prev])
        }
      }
      if (selectedImage && e.key === 'Escape') {
        setSelectedImage(undefined)
      }

    }

    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey);
    }
  }, [user.id, state, selectedImage, images, pagination, loader])

  const selectedModel: ModelI | undefined = models.find(m => m.id === state.model)

  return (
    <div className={styles._}>

      <div className={styles._controls}>
        <div className={styles.controls}>
          {/* <div className={styles._tabs}>
            <div className={styles.tabs}>
              <Tabs>
                <Tab onClick={() => setMode('generate')} active={mode === 'generate'}>Generate</Tab>
                <Tab onClick={() => setMode('edit')} active={mode === 'edit'}>Edit</Tab>
                <Tab onClick={() => setMode('mix')} active={mode === 'mix'}>Mix</Tab>
              </Tabs>
            </div>
          </div> */}
          <div className={styles._parameters}>
            <div className={styles.parameters}>
              {
                mode === 'generate' ?
                  <ModelSelect
                    id='model'
                    models={models}
                    value={state.model}
                    onChange={handleChange}
                  />
                  : null
              }
              {
                mode === 'generate' ?
                  <NodesSelect
                    id='node'
                    models={nodes}
                    value={state.node}
                    onChange={handleChange}
                  />
                  : null
              }
              {
                mode === 'generate' || mode === 'edit' ?

                  <Collapse icon={<Edit3 />} title={mode === 'edit' ? 'Instruction' : 'Prompt'} style='plain' openByDefault>
                    <Textarea
                      label={mode === 'edit' ? 'Instruction' : 'Prompt'}
                      id='prompt'
                      placeholder={
                        mode === 'edit' ?
                          "Use natural language to edit the image e.g. make it a miro painting, add fireworks to the sky, what if it was an anime ..."
                          : "Describe something you'd like to see generated. Experiment with different words and styles..."}
                      value={state.prompt}
                      onChange={handleChange}
                      autoFocus
                      size='md'
                      noInfo
                    />
                    {/* {
                      mode === 'generate' ?
                        <div className={styles.random}>
                          <Button htmlType='button' size='xs' type='default' onClick={getRandomPrompt}><Shuffle /> Random</Button>
                        </div>
                        : <div />
                    } */}
                    <Input
                      label='Negative prompt'
                      id='negativePrompt'
                      placeholder="Describe what you don't want in your image"
                      value={state.negativePrompt}
                      onChange={handleChange}
                      disableInfo
                    />
                  </Collapse>
                  : null
              }
              {
                mode === 'generate' || mode === 'edit' ?
                  <Collapse icon={<Image />} title="Image" style='plain'>
                    <div className={styles.upload} onDrop={e => handleDrop(e, 'image')} onDragOver={allowDrop}>
                      <Dropzone
                        accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg', '.jpg'] }}
                        multiple={false}
                        onDropAccepted={(f) => handleUpload('image', f)}
                        disabled={state.image.loading}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()} className={styles._dropzone}>
                            <div className={styles.dropzone}>
                              <input {...getInputProps()} />
                              {
                                state.image.url ?
                                  <div className={styles.dropzone_image}>
                                    <img src={state.image.url} alt="" />
                                  </div>
                                  :
                                  <p>Drag an image here, or click to select one.</p>
                              }
                              {state.image.loading ? <div className={styles.image_loader}>
                                <Loader text='' size={20} />
                              </div> : null}
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      {state.image.url ?
                        <div className={styles.upload_delete}>
                          <Button
                            onClick={() => setState(s => ({ ..._.set<StateI>(s, `image`, {}) }))}
                            type='icon'
                            size='xs'
                          >
                            <Trash2 />
                          </Button>
                        </div>
                        : <div />}
                    </div>
                    <div style={{ height: 12 }} />
                    {mode === 'edit' ?
                      <>
                        <Slider
                          label={`Image guidance: ${state.imageGuidance}`}
                          min={1}
                          max={3}
                          step={0.1}
                          value={state.imageGuidance}
                          onChange={n => setState({ ...state, imageGuidance: n as number })}
                        />
                        <Tip id='image-guidance' title="Image guidance">
                          Image guidance decides how strongly does the original image should be preserved. Higher image guidance encourages to
                          generate images that are closely linked to the source, usually at the expense of lower
                          image quality.
                        </Tip>
                      </>
                      :
                      <>
                        {/* {state.model !== 'stable-diffusion-v2.1' && (selectedModel && selectedModel.params.base_model && selectedModel.params.base_model.startsWith('stabilityai/stable-diffusion-2-1') ? false : true) ?

                          <ControlnetSelect
                            id='controlnet'
                            value={state.controlnet}
                            onChange={handleChange}
                          />

                          : null} */}
                        {/* {
                          state.controlnet === 'none' || state.model === 'stable-diffusion-v2.1' || (selectedModel && selectedModel.params.base_model && selectedModel.params.base_model.startsWith('stabilityai/stable-diffusion-2-1'))
                            ?
                            <>
                              <Slider
                                label={`Strength: ${state.strength}`}
                                min={state.steps * 0.01 < 1 ? Math.round(1 / state.steps * 100) / 100 : 0.01}
                                max={1.0}
                                step={0.01}
                                value={state.strength}
                                onChange={n => setState({ ...state, strength: n as number })}
                              />
                              <Tip id='strength' title="Strength">
                                Strength represents the similarity between generated output and the init image. Setting low strength values will result in images similar to the input. High strength will produce more diverse outputs that closer resemble the prompt.
                              </Tip>
                            </>
                            : <div />
                        } */}
                      </>
                    }
                  </Collapse>
                  : null}


              {/* {
                mode === 'mix' ?
                  <Collapse icon={<Image />} title="Images" style='plain' openByDefault>
                    <div className={styles.mixer_images}>
                      <Tip id='image-mixing' title="Image Mixing">
                        Upload or drag already generated pictures to mix them into one. Use sliders to apply weights to each image, guiding mixer in the desired direction. We recommend starting with default 1.0 and adjusting values by 0.05 increments, as weights are very sensitive. Higher weights may result in a loss of quality.
                      </Tip>

                      {
                        state.images.map((image, i) => (

                          <div key={i} className={styles.mixer_image}>
                            <div className={styles.upload} onDrop={e => handleDrop(e, `images[${i}]`)} onDragOver={allowDrop}>
                              <Dropzone
                                accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg', '.jpg'] }}
                                multiple={false}
                                onDropAccepted={(f) => handleUpload(`images[${i}]`, f)}
                                disabled={image.loading}
                              >
                                {({ getRootProps, getInputProps }) => (
                                  <div {...getRootProps()} className={styles._dropzone}>
                                    <div className={styles.dropzone}>
                                      <input {...getInputProps()} />
                                      {
                                        image.url ?
                                          <div className={styles.dropzone_image}>
                                            <img
                                              src={image.url}
                                              alt=""
                                              style={{ filter: image.strength === 0 ? `opacity(0%)` : `contrast(${(image.strength || 0) * 100}%)` }}
                                            />
                                          </div>
                                          :
                                          <p>Drag an image here, or click to select one.</p>
                                      }
                                      {image.loading ? <div className={styles.image_loader}>
                                        <Loader text='' size={20} />
                                      </div> : null}
                                    </div>
                                  </div>
                                )}
                              </Dropzone>
                              {image.url ?
                                <div className={styles.upload_delete}>
                                  <Button
                                    onClick={() => setState(s => ({ ..._.set<StateI>(s, `images[${i}]`, {}) }))}
                                    type='icon'
                                    size='xs'
                                  >
                                    <Trash2 />
                                  </Button>
                                </div>
                                : <div />}
                            </div>
                            <div className={styles.mix_strength}>
                              <VerticalSlider
                                min={0.0}
                                max={3.0}
                                step={0.05}
                                value={image.strength}
                                onChange={(n) => setState(s => ({ ..._.set<StateI>(s, `images[${i}].strength`, n as number) }))}
                              />
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    {state.images.length < 6 ?
                      <Button
                        size='sm'
                        type='default'
                        onClick={() => setState(s => ({ ...s, images: [...s.images, { url: '', strength: 1.0 }] }))}
                      >
                        <PlusCircle /> Add image
                      </Button>
                      : <div />
                    }
                  </Collapse>
                  : null
              } */}

              <Collapse icon={<SlidersHorizontal />} title="Generation Parameters" style='plain'>
                <div style={{ height: 12 }}></div>
                <Slider
                  label={`Number of images: ${state.numImages}`}
                  min={1}
                  max={10}
                  step={1}
                  value={state.numImages}
                  onChange={n => setState({ ...state, numImages: n as number })}
                />
                <div style={{ height: 24 }}></div>
                <div className={styles.sliders2}>
                  <Slider
                    label={`Width: ${state.width}`}
                    min={256}
                    max={1024}
                    step={64}
                    value={state.width}
                    onChange={n => setState({ ...state, width: n as number })}
                  />
                  <Slider
                    label={`Height: ${state.height}`}
                    min={256}
                    max={1024}
                    step={64}
                    value={state.height}
                    onChange={n => setState({ ...state, height: n as number })}
                  />
                </div>
                <div style={{ height: 24 }}></div>
                <div className={styles.sliders2}>
                  <Slider
                    label={`Steps: ${state.steps}`}
                    min={1}
                    max={75}
                    step={1}
                    value={state.steps}
                    onChange={n => setState({ ...state, steps: n as number })}
                  />
                  <Slider
                    label={`Guidance scale: ${state.guidanceScale}`}
                    min={0}
                    max={20}
                    step={1}
                    value={state.guidanceScale}
                    onChange={n => setState({ ...state, guidanceScale: n as number })}
                  />
                </div>
                {
                  state.steps > 35 ?
                    <Tip id='steps-high' title="Steps">
                      High number of steps may take a while to generate. For fast generations we recommend 20-25 steps. Learn more <a href='/guides/interactive-guide-to-stable-diffusion-steps-parameter' target="_blank">here</a>.
                    </Tip>
                    : <div />
                }
                {
                  state.steps < 14 ?
                    <Tip id='steps-low' title="Steps">
                      Low number of steps may result in bad image quality or noise. We recommend 20-25 steps. Learn more <a href='/guides/interactive-guide-to-stable-diffusion-steps-parameter' target="_blank">here</a>.
                    </Tip>
                    : <div />
                }
                {
                  state.guidanceScale > 14 ?
                    <Tip id='guidance-scale-low' title="Guidance scale">
                      High guidance scale may result in a loss of quality. We recommend values in 7-12 range. Learn more <a href='/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter' target="_blank">here</a>.
                    </Tip>
                    : <div />
                }
                {
                  state.guidanceScale < 6 ?
                    <Tip id='guidance-scale-hight' title="Guidance scale">
                      Low guidance scale value may result in bad prompt interpretation. We recommend values in 7-12 range. Learn more <a href='/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter' target="_blank">here</a>.
                    </Tip>
                    : <div />
                }
                {
                  mode !== 'mix' ? <>
                    <div style={{ height: 12 }}></div>
                    <Input
                      label='Seed'
                      id='seed'
                      placeholder='Blank for random'
                      value={state.seed}
                      onChange={handleChange}
                      type="number"
                      disableInfo
                    />
                  </> : <div />
                }

              </Collapse>

              <Collapse icon={<Settings />} title="Advanced" style='plain'>
                {
                  mode === 'generate' ?
                    <>
                      <Select
                        label='Sampler'
                        id='scheduler'
                        options={[
                          { value: 'euler_a', key: 'Euler Ancestral' },
                          { value: 'euler', key: 'Euler' },
                          { value: 'lms', key: 'LMS' },
                          { value: 'dpmsolver++', key: 'DPM-Solver++' },
                          { value: 'pndm', key: 'PLMS' },
                          { value: 'ddim', key: 'DDIM' },
                          { value: 'kdpm2', key: 'DPM Karras' },
                          { value: 'kdpm2_a', key: 'DPM Karras Ancestral' },
                        ]}
                        value={state.scheduler}
                        onChange={handleChange}
                        noInfo
                      />
                      {/* <Tip id='sampler' title="Sampler">
                        Use DPM-Solver++ for fastest generation.
                      </Tip> */}
                      {/* {state.model !== 'stable-diffusion-v2.1' && (selectedModel && selectedModel.params.base_model && selectedModel.params.base_model.startsWith('stabilityai/stable-diffusion-2-1') ? false : true) ?
                        <>
                          <Switch
                            id='skipControlnetProcessing'
                            value={state.skipControlnetProcessing}
                            values={['false', 'true']}
                            labels={['', 'Skip ControlNet pre-processing']}
                            onChange={(_, v) => setState(s => ({ ...s, skipControlnetProcessing: v }))}
                          />
                          <div style={{ height: 12 }} />
                        </>
                        : null} */}
                    </>
                    : <div />}

                {/* <Switch
                  id='enhanceFace'
                  value={state.enhanceFace}
                  values={['false', 'true']}
                  labels={['', 'Fix faces (+1 credit/image)']}
                  onChange={(_, v) => setState(s => ({ ...s, enhanceFace: v }))}
                />
                <div style={{ height: 12 }} />
                <Switch
                  id='upscale'
                  value={state.upscale}
                  values={['false', 'true']}
                  labels={['', 'Upscale 4x (+1 credit/image)']}
                  onChange={(_, v) => setState(s => ({ ...s, upscale: v }))}
                />
                <div style={{ height: 12 }} />

                <small className='small'>You can always upscale and enhance faces after generating images.</small> */}


              </Collapse>
            </div>
          </div>
          <form className={styles.actions} onSubmit={generate}>
            <small className='small' style={{ marginBottom: 6 }}>
              <span>
                Need {state.numImages * (1 + (state.upscale === 'true' ? 1 : 0) + (state.enhanceFace === 'true' ? 1 : 0))} credit{state.numImages + (1 + (state.upscale === 'true' ? 1 : 0) + (state.enhanceFace === 'true' ? 1 : 0)) === 1 ? '' : 's'} for this generation.
              </span>
            </small>
            <Button
              fullWidth
              loading={loader}
              size='lg'
              errorFor={['prompt']}
            >
              {
                user.id ?
                  <>Generat{loader ? 'ing' : 'e ' + state.numImages + (state.numImages === 1 ? ' image' : ' images')}&nbsp;  <small className={styles.keyboard}><Command /> + G</small></>
                  : <>Create free account</>
              }
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.images} id='images'>
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
              760: 2
            }}
            className={styles.grid}
            columnClassName={styles.column}
          >
            {
              images.map((i) => (
                <div id={i.id} key={i.id} className={[styles.img, dragging === i.id ? styles.img_dragging : ''].join(' ')} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                  <GeneratedImage
                    onCopyParams={copyParams}
                    onCopyImage={copyImage}
                    onSelect={setSelectedImage}
                    onDelete={deleteImage}
                    onUpscale={upscale}
                    onEnhanceFace={enhanceFace}
                    image={i}
                    hoverable={dragging !== i.id}
                  />
                </div>
              ))
            }
            {
              images.length == 0 && Array(24).fill(1).map((_, i) => (
                <div
                  key={i}
                  className={styles.image}
                  style={{
                    paddingBottom: '100%'
                  }}
                >

                </div>
              ))
            }

          </Masonry>
          <div style={{ height: 24 }}></div>
          {user.id && pagination.hasMore ?
            <Button
              type='default'
              loading={pagination.loading}
              onClick={getImages}
              fullWidth
            >
              Load{pagination.loading ? 'ing' : ''} more images
            </Button>
            : <div />}
          <div style={{ height: 24 }}></div>

        </InfiniteScroll>
        {/* <TextToImageOnboardingModal /> */}
      </div>
      {
        selectedImage !== undefined ?
          <div className={styles._overlay}>
            <div className={styles.overlay} />
            <div className={styles._modal}>

              <div className={styles.modal}>
                <button className={styles.close} onClick={() => setSelectedImage(undefined)}>
                  <X size={14} />
                </button>
                <div className={styles.modal_image}>

                  <OutsideClickHandler onOutsideClick={() => setSelectedImage(undefined)} display='contents'>
                    <ImageView key={selectedImage.id} {...selectedImage} />
                  </OutsideClickHandler>
                </div>
              </div>

            </div>
          </div>
          : null
      }
    </div >
  )
}
