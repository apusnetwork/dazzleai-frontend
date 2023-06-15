import axios from 'axios';
import dayjs from 'dayjs';
import Button from '@/frontend/components/button/button';
import Collapse from '@/frontend/components/collapse/collapse';
import GeneratedImage from '@/frontend/components/image/image';
import ImageView from '@/frontend/components/image/view';
import Input from '@/frontend/components/input/input';
import Tip from '@/frontend/components/onboarding/tip';
import ModelSelect from '@/frontend/components/select/model';
import Select from '@/frontend/components/select/select';
import Slider from '@/frontend/components/slider/slider';
import Textarea from '@/frontend/components/textarea/textarea';
import { useAppDispatch, useAppSelector } from "@/frontend/redux/hooks";
import { addErrors, clearErrors, message, updateAuthState } from '@/frontend/redux/info/slice';
import { selectUser, updateCredits } from '@/frontend/redux/user/slice';
import cookies from 'js-cookie';
import _ from 'lodash';
import { Command, Edit3, Settings, Shuffle, SlidersHorizontal, X } from 'lucide-react';
import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './ai-generator.module.scss';
import NodesSelect from '../../select/nodes';
import { oapi } from '@/frontend/utils/axios';
import { transformRequest, transformResponse } from '@/pages/api/models/[id]';
import { transformNodesResponse } from '@/pages/api/nodes';
import { transformTasksResponse } from '@/pages/api/tasks';
import { transformModelsResponse } from '@/pages/api/models';
import { transformGetImagesResponse } from '@/pages/api/images';
import { transformGetImageResponse } from '@/pages/api/images/[id]';

interface StateI {
  model: string // model_file_name
  node: string // the model should be run on this node
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
    node: 'all',
    prompt: '',
    negativePrompt: 'Disfigured, cartoon, blurry',
    steps: 25,
    guidanceScale: 9,
    imageGuidance: 1.5,
    seed: undefined,
    numImages: 1,
    enhanceFace: 'false',
    upscale: 'false',
    width: 512,
    height: 512,
    scheduler: 'DPM2',
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
    const res = await oapi.get('/models?status=active&public=true');
    const modelsRes = transformModelsResponse(res.data);
    setModels(modelsRes);
    if (res.data?.length) {
      setState((s: any) => {
        if (s.model === "") {
          return { ...s, model: res.data[0].id }
        }
        return s
      })
    }
  }

  async function getNodes() {
    const res = await oapi.get('/nodes?status=active');
    const resNodes = transformNodesResponse(res.data);
    setNodes([{ id: "all", name: "All", domain: "" }, ...resNodes]);
    // if (res.data?.length && state.node === "") {
    //   setState(s => ({ ...s, node: res.data[0].id }))
    // }
  }

  async function getImages() {
    if (!pagination.hasMore) return
    let hasMore = true;
    try {
      setPagination({ ...pagination, loading: true })
      const res = await oapi.get('/images?tool=generator&limit=24&offset=' + images.length);
      setImages([...images, ...transformGetImagesResponse(res.data)])
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

  // async function handleUpload(id: string, files: File[]) {

  //   if (!user.id) {
  //     dispatch(updateAuthState('login'));
  //     return
  //   }

  //   if (!files || _.get(state, id).loading) return

  //   if (files[0] && files[0].size > 2.5e7) {
  //     message(dispatch, { "type": "danger", text: "File too large! Max. file size is 25MB." })
  //     return
  //   }

  //   // upload file
  //   try {
  //     // set loader
  //     setState(s => ({ ..._.set<StateI>(s, id + '.loading', true) }))
  //     const data = new FormData();
  //     data.append('file', files[0]);

  //     const res = await axios.post('/api/images', data);
  //     const img = res.data
  //     img.strength = 1.0;

  //     // set image
  //     setState(s => ({ ..._.set<StateI>(s, id, img) }))

  //   } catch (e: any) {
  //     e && e.response && e.response.data && dispatch(addErrors(e.response.data))
  //     message(dispatch, { "type": "danger", text: "Please try uploading again!" })

  //   } finally {
  //     // set loader
  //     setState(s => ({ ..._.set<StateI>(s, id + '.loading', false) }))
  //   }
  // }



  // async function getRandomPrompt() {
  //   const res = await axios.get('/api/prompts/random');
  //   setState({
  //     ...state,
  //     prompt: res.data.prompt
  //   })
  // }

  async function importCivitai() {
    // read from clipboard
    const text = await navigator.clipboard.readText();
    /* map
a cute kitten made out of metal, (cyborg:1.1), ([tail | detailed wire]:1.3), (intricate details), hdr, (intricate details, hyperdetailed:1.2), cinematic shot, vignette, centered
Negative prompt: (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, (mutated hands and fingers:1.4), disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation, flowers, human, man, woman
ENSD: 31337, Size: 768x1024, Seed: 1791574510, Model: Deliberate, Steps: 26, Sampler: Euler a, CFG scale: 6.5, Model hash: 9aba26abdf
into state
*/
    try {

      const lines = text.split('\n')
      const prompt = lines[0].trim()
      const negativePrompt = lines[1].replace('Negative prompt: ', '').trim()
      const configLine = lines[lines.length - 1];
      const keyValuePairs = configLine.split(', ');
      setState(s => {
        const newState: Partial<StateI> = {};
        const UnSupportedKey: string[] = []
        keyValuePairs.forEach((pair) => {
          const [key, value] = pair.split(': ');

          switch (key) {
            // case "Model":
            //   state.model = value;
            //   break;
            case "Seed":
              if (Number.isNaN(value)) {
                newState.seed = undefined
                return
              }
              newState.seed = Number(value) > 0 ? value : undefined;
              break;
            case "Size":
              const [width, height] = value.split('x');
              newState.width = parseInt(width);
              if (Number.isNaN(newState.width)) {
                newState.width = 512
              } else if (newState.width > 1024) {
                newState.width = 1024
              } else if (newState.width < 0) {
                newState.width = 0
              }
              newState.height = parseInt(height);
              if (Number.isNaN(newState.height)) {
                newState.height = 512
              } else if (newState.height > 1024) {
                newState.height = 1024
              } else if (newState.height < 0) {
                newState.height = 0
              }
              break;
            case "Steps":
              newState.steps = parseInt(value);
              if (Number.isNaN(newState.steps)) {
                newState.steps = 25
              } else if (newState.steps > 75) {
                newState.steps = 75
              } else if (newState.steps < 1) {
                newState.steps = 1
              }
              break;
            case "CFG scale":
              newState.guidanceScale = parseFloat(value);
              if (Number.isNaN(newState.guidanceScale)) {
                newState.guidanceScale = 9
              } else if (newState.guidanceScale > 20) {
                newState.guidanceScale = 20
              } else if (newState.guidanceScale < 0) {
                newState.guidanceScale = 0
              }
              break;
            case "Sampler":
              if (!["Euler a", "Euler", "LMS", "Heun", "DPM2", "DPM2 a", "DPM++ 2S a", "DPM++ 2M", "DPM++ SDE", "DPM fast", "DPM adaptive", "LMS Karras", "DPM2 Karras", "DPM2 a Karras", "DPM++ 2S a Karras", "DPM++ 2M Karras", "DPM++ SDE Karras", "DDIM"].includes(value)) {
                newState.scheduler = "DPM++ 2M Karras"
              } else {
                newState.scheduler = value;
              }
            // Add more cases for the other keys
            default:
              UnSupportedKey.push(key)
          }
        });
        if (UnSupportedKey.length > 3) {
          message(dispatch, { type: "info", text: `${UnSupportedKey.length} params are unsupport.` })
        } else if (UnSupportedKey.length > 0) {
          message(dispatch, { type: "info", text: `Params ${UnSupportedKey.join(', ')} are unsupport.` })
        }
        return {
          ...s,
          ...newState,
          prompt,
          negativePrompt,
        }
      })
    } catch (e) {
      dispatch(addErrors({ message: 'Invalid civitai config' }))
    }
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
      // if (_model && !_model.id.includes('/')) newState.prompt = newState.prompt.replace(_model.params.instance_prompt + ', ', '')
      if (params.guidance_scale) newState.guidanceScale = params.guidance_scale;
      if (params.image_guidance_scale) newState.imageGuidance = params.image_guidance_scale;
      if (params.width) newState.width = params.width;
      if (params.height) newState.height = params.height;
      if (params.scheduler) newState.scheduler = params.scheduler;
      if (params.num_inference_steps) newState.steps = params.num_inference_steps;
      if (params.negative_prompt) newState.negativePrompt = params.negative_prompt;
      if (params.strength) newState.strength = params.strength;
      if (params.controlnet) newState.controlnet = params.controlnet;
      if (params.seed) newState.seed = params.seed;
      if (params.image_url) {
        newState.image = {
          ...s.image,
          url: params.image_url
        }
      }
      if (params.images && params.images.length) {
        newState.images = [...params.images]
      }

      console.log('copy Params', dayjs().format('HH:mm:ss:SSS'))
      return newState
    });
    message(dispatch, { text: 'Copied parameters.', type: 'success' })

  }

  async function deleteImage(image: ImageI) {
    try {
      oapi.post('/images/del?ids=' + image.id)
      setImages(im => im.filter(im => im.id !== image.id))
    } catch {
      message(dispatch, { type: 'danger', text: 'Unexpected Error!' })
    }
  }

  async function shareImage(image: ImageI) {
    try {
      oapi.post('/images/del?ids=' + image.id)
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

    if (user && user.credits < state.numImages) {
      dispatch(updateAuthState('credits'));
      return
    }

    // if (!user.id) {
    //   dispatch(updateAuthState('register'));
    //   return
    // }

    // if (user.status !== 'active') {
    //   message(dispatch, { text: 'Please verify your account!', type: 'info' })
    //   return
    // }

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

        // if (state.model.startsWith('model')) {
        //   const m = models.find(x => x.id === state.model);
        //   if (!m) return
        //   if (m.params.instance_prompt && !body.prompt.includes(m.params.instance_prompt)) body.prompt = m.params.instance_prompt + ', ' + body.prompt;
        // }

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

      body.node = nodes.find(v => v.id === state.node)?.domain || state.node;
      body.type = models.find(v => v.id === state.model)?.type;
      body.checkpoint = models.find(v => v.id === state.model)?.checkpoint;

      const pendingTasksRes = await oapi.post('/tasks/create', transformRequest(body, model));

      let pendingIds: string[] = [transformResponse(pendingTasksRes.data).id]

      while (pendingIds.length > 0) {
        const tasksRes = await oapi.get('/tasks?ids=' + pendingIds.join(','));

        const tasks = transformTasksResponse(tasksRes.data);

        const generatedImages: ImageI[] = [];
        for (const task of tasks) {
          if (task.status === 'succeed' && task.images && task.images.length) {
            generatedImages.push(...task.images.map((im: any) => ({
              ...im, modelTask: {
                ...task,
                params: {
                  ...task.params,
                  seed: im.seed
                }
              }
            })))
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
      console.log(e)
      if (e && e.response && e.response.status === 401) {
        dispatch(updateAuthState('register'));
      } else {
        if (e && e.response && e.response.data) dispatch(addErrors(e.response.data))
        message(dispatch, { text: 'Something went wrong!', type: 'danger' })
      }
      setImages(im => im.filter(i => !i.loading))
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
      console.log('setting Cookies', dayjs().format('HH:mm:ss:SSS'))
      setState(s => ({ ...s, ...json }))
    }

    //init model
    const m = urlParams.get('model');
    if (m) {
      setState(s => ({ ...s, model: m }))
    }

    // remember source of signup
    const from_user = urlParams.get('ref')
    if (from_user) {
      sessionStorage.setItem('from_user', from_user)
    }

    const model_version_id = urlParams.get('model_version_id')
    const utm_source = urlParams.get('utm_source')
    if (model_version_id != null && model_version_id !== "") {
      window && (window as any)?.gtag('event', 'model_version_id', {
        event_category: 'model_version_id',
        event_label: model_version_id,
        value: 1
      });
    }
    if (utm_source != null && utm_source !== "") {
      window && (window as any)?.gtag('event', 'utm_source', {
        event_category: 'utm_source',
        event_label: utm_source,
        value: 1
      });
    }

    const img = urlParams.get('img') || urlParams.get('init-img');
    if (!img) return
    if (img) {
      sessionStorage.setItem('from_img', img)
    }

    const isShared = urlParams.get('shared') !== null

    try {
      const res = await oapi.get(`${isShared ? '/shared/images' : '/image'}?ids=${img}`);
      const imageRes = transformGetImageResponse(res.data);
      if (urlParams.has('img')) {
        copyParams(imageRes)
      } else if (urlParams.has('init-img')) {
        copyImage(imageRes)
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


  // useEffect(() => {
  //   const s = { ...state };

  //   let baseSize = s.width;
  //   const model = s.model;
  //   if (!model) return

  //   if (mode === 'edit') {
  //     s.negativePrompt = !s.negativePrompt || s.negativePrompt === 'Disfigured, cartoon, blurry' ? '' : s.negativePrompt
  //     baseSize = 512;
  //   } else if (mode === 'mix') {
  //     baseSize = 640
  //   } else {
  //     s.negativePrompt = s.negativePrompt || 'Disfigured, cartoon, blurry'

  //     if (model.startsWith('model-')) {
  //       const m = models.find(x => x.id === model);
  //       if (m) {
  //         baseSize = m.params.resolution || 512
  //       }
  //     } else if (model.endsWith('v2.1')) {
  //       baseSize = 768
  //     } else {
  //       baseSize = 512
  //     }
  //   }

  //   const ratio = s.width / s.height;
  //   if (ratio > 1) {
  //     // horizontal
  //     s.width = baseSize;
  //     s.height = Math.round(baseSize / ratio / 64) * 64;
  //   } else {
  //     // vertical
  //     s.height = baseSize
  //     s.width = Math.round(ratio * s.height / 64) * 64
  //   }

  //   setState(x => ({ ...x, ...s }))

  // }, [state.model, mode])

  // useEffect(() => {
  //   if (1 / state.steps > state.strength) {
  //     setState(s => ({
  //       ...s,
  //       strength: Math.round(1 / state.steps * 100) / 100
  //     }))
  //   }

  // }, [state.steps, state.strength])

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

  // const selectedModel: ModelI | undefined = models.find(m => m.id === state.model)

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
                    <div className={styles.random}>
                      <Button htmlType='button' size='xs' type='default' onClick={importCivitai}><Shuffle /> Import Civitai</Button>
                    </div>
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
                // mode === 'generate' || mode === 'edit' ?
                // {<Collapse icon={<Image />} title="Image" style='plain'>
                //   <div className={styles.upload} onDrop={e => handleDrop(e, 'image')} onDragOver={allowDrop}>
                //     <Dropzone
                //       accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg', '.jpg'] }}
                //       multiple={false}
                //       onDropAccepted={(f) => handleUpload('image', f)}
                //       disabled={state.image.loading}
                //     >
                //       {({ getRootProps, getInputProps }) => (
                //         <div {...getRootProps()} className={styles._dropzone}>
                //           <div className={styles.dropzone}>
                //             <input {...getInputProps()} />
                //             {
                //               state.image.url ?
                //                 <div className={styles.dropzone_image}>
                //                   <img src={state.image.url} alt="" />
                //                 </div>
                //                 :
                //                 <p>Drag an image here, or click to select one.</p>
                //             }
                //             {state.image.loading ? <div className={styles.image_loader}>
                //               <Loader text='' size={20} />
                //             </div> : null}
                //           </div>
                //         </div>
                //       )}
                //     </Dropzone>
                //     {state.image.url ?
                //       <div className={styles.upload_delete}>
                //         <Button
                //           onClick={() => setState(s => ({ ..._.set<StateI>(s, `image`, {}) }))}
                //           type='icon'
                //           size='xs'
                //         >
                //           <Trash2 />
                //         </Button>
                //       </div>
                //       : <div />}
                //   </div>
                //   <div style={{ height: 12 }} />
                //   {mode === 'edit' ?
                //     <>
                //       <Slider
                //         label={`Image guidance: ${state.imageGuidance}`}
                //         min={1}
                //         max={3}
                //         step={0.1}
                //         value={state.imageGuidance}
                //         onChange={n => setState({ ...state, imageGuidance: n as number })}
                //       />
                //       <Tip id='image-guidance' title="Image guidance">
                //         Image guidance decides how strongly does the original image should be preserved. Higher image guidance encourages to
                //         generate images that are closely linked to the source, usually at the expense of lower
                //         image quality.
                //       </Tip>
                //     </>
                //     :
                //     <>
                //       {/* {state.model !== 'stable-diffusion-v2.1' && (selectedModel && selectedModel.params.base_model && selectedModel.params.base_model.startsWith('stabilityai/stable-diffusion-2-1') ? false : true) ?

                //         <ControlnetSelect
                //           id='controlnet'
                //           value={state.controlnet}
                //           onChange={handleChange}
                //         />

                //         : null} */}
                //       {/* {
                //         state.controlnet === 'none' || state.model === 'stable-diffusion-v2.1' || (selectedModel && selectedModel.params.base_model && selectedModel.params.base_model.startsWith('stabilityai/stable-diffusion-2-1'))
                //           ?
                //           <>
                //             <Slider
                //               label={`Strength: ${state.strength}`}
                //               min={state.steps * 0.01 < 1 ? Math.round(1 / state.steps * 100) / 100 : 0.01}
                //               max={1.0}
                //               step={0.01}
                //               value={state.strength}
                //               onChange={n => setState({ ...state, strength: n as number })}
                //             />
                //             <Tip id='strength' title="Strength">
                //               Strength represents the similarity between generated output and the init image. Setting low strength values will result in images similar to the input. High strength will produce more diverse outputs that closer resemble the prompt.
                //             </Tip>
                //           </>
                //           : <div />
                //       } */}
                //     </>
                //   }
                // </Collapse>}
                // : null
              }


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
                  max={4}
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
                    label={`CFG Scale: ${state.guidanceScale}`}
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
                    <Tip id='guidance-scale-low' title="CFG scale">
                      High cfg scale may result in a loss of quality. We recommend values in 7-12 range. Learn more <a href='/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter' target="_blank">here</a>.
                    </Tip>
                    : <div />
                }
                {
                  state.guidanceScale < 6 ?
                    <Tip id='guidance-scale-hight' title="CFG scale">
                      Low cfg scale value may result in bad prompt interpretation. We recommend values in 7-12 range. Learn more <a href='/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter' target="_blank">here</a>.
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
                          { key: "Euler a", value: "Euler a" },
                          { key: "Euler", value: "Euler" },
                          { key: "LMS", value: "LMS" },
                          { key: "Heun", value: "Heun" },
                          { key: "DPM2", value: "DPM2" },
                          { key: "DPM2 a", value: "DPM2 a" },
                          { key: "DPM++ 2S a", value: "DPM++ 2S a" },
                          { key: "DPM++ 2M", value: "DPM++ 2M" },
                          { key: "DPM++ SDE", value: "DPM++ SDE" },
                          { key: "DPM fast", value: "DPM fast" },
                          { key: "DPM adaptive", value: "DPM adaptive" },
                          { key: "LMS Karras", value: "LMS Karras" },
                          { key: "DPM2 Karras", value: "DPM2 Karras" },
                          { key: "DPM2 a Karras", value: "DPM2 a Karras" },
                          { key: "DPM++ 2S a Karras", value: "DPM++ 2S a Karras" },
                          { key: "DPM++ 2M Karras", value: "DPM++ 2M Karras" },
                          { key: "DPM++ SDE Karras", value: "DPM++ SDE Karras" },
                          { key: "DDIM", value: "DDIM" },
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
              onClick={e => {
                window && (window as any)?.gtag('event', 'generate', {
                  'event_category': 'consume',
                  'event_label': ''
                });;
              }}
            >
              {/* {
                user.id ?
                  <>Generat{loader ? 'ing' : 'e ' + state.numImages + (state.numImages === 1 ? ' image' : ' images')}&nbsp;  <small className={styles.keyboard}><Command /> + G</small></>
                  : <>Create free account</>
              } */}
              {<>Generat{loader ? 'ing' : 'e ' + state.numImages + (state.numImages === 1 ? ' image' : ' images')}&nbsp;  <small className={styles.keyboard}><Command /> + G</small></>}
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
