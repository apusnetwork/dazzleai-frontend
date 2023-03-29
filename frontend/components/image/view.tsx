import axios from "axios";
import dayjs from "dayjs";
import { Download, PhotoImagePicture } from '@/frontend/components/basic-icons';
import { useAppDispatch, useAppSelector } from "@/frontend/redux/hooks";
import { updateAuthState } from "@/frontend/redux/info/slice";
import { selectUser } from "@/frontend/redux/user/slice";
import { Maximize, Repeat } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { schedulerNames } from "utils/schedulers";
import Button from "../button/button";
import styles from './image.module.scss';
import ImageSharer from "./sharer";


const modelsMap: Record<string, string> = {
  "stable-diffusion-v1.5": "Stable Diffusion v1.5",
  "stable-diffusion-v2": "Stable Diffusion v2",
  "stable-diffusion-v2.1": "Stable Diffusion v2.1",
  "stable-diffusion-txt2img-v1.5": "Stable Diffusion v1.5 (Text to Image)",
  "stable-diffusion-txt2img-v2": "Stable Diffusion v2 (Text to Image)",
  "stable-diffusion-txt2img-v2.1": "Stable Diffusion v2.1 (Text to Image)",
  "stable-diffusion-img2img-v1.5": "Stable Diffusion v1.5 (Text to Image)",
  "stable-diffusion-img2img-v2": "Stable Diffusion v2 (Text to Image)",
  "stable-diffusion-img2img-v2.1": "Stable Diffusion v2.1 (Text to Image)",
  "stable-diffusion-inpaint-v1.5": "Stable Diffusion Inpainting v1.5",
  "real-esrgan": "Real-ESRGAN ",
  "gfpgan": "GFPGAN ",
  "image-mixer": "Image Mixer",
  "instruct-pix2pix": "Instruct Pix2Pix"
}


export default function ImageView(props: ImageI) {
  const [state, setState] = useState(props);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  async function getImage() {
    const res = await axios.get('/api/images/' + props.id);
    setState({ ...state, ...res.data });
  }

  useEffect(() => {
    if (!props.url) {
      getImage();
    }
  }, []);

  function handleEditorOpen(e: React.MouseEvent) {
    if (!user.id) {
      e.preventDefault();
      dispatch(updateAuthState('register'));
    }
  }

  const { id, modelTask, width, height, url, createdAt } = state;
  const { model, params, _model } = modelTask;

  let prompt = modelTask && params && params.prompt ? (params.prompt || "") : "";
  if (_model && _model.id) {
    prompt = prompt.replace(_model.params.instance_prompt + ', ', '')
  }
  const splitted = (prompt || "").split(/[,|.]/gi)
  let h = splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1) + '.';

  if (props.modelTask.model === 'real-esrgan' || props.modelTask.model === 'gfpgan') {
    h = 'Enhanced image.'
  }
  if (model === 'image-mixer') {
    h = 'Mixed Image.'
  }

  return (
    <div className={styles.view}>
      <div className={styles.view_head}>
        <h1 className={styles.title}>{h}</h1>
        <div className={styles.view_buttons}>
          <Button type="icon" title="Download" href={`https://getimg.ai/api/download/${props.id}`} download={`getimg_ai_${props.id}.${props.format.toLowerCase()}`}><Download /></Button>
          {prompt ? <Button type="default" title="Generate similar" href={`https://getimg.ai/text-to-image?img=${id}`}>
            <Repeat strokeWidth={1.5} />
            Reuse parameters
          </Button> : null}
          <Button type="default" title="Generate similar" href={`https://getimg.ai/text-to-image?init-img=${id}`}>
            <PhotoImagePicture strokeWidth={1.5} />
            Reuse image
          </Button>
          <Button type="default" title="Open in AI Editor" href={`https://getimg.ai/editor/new?img=${id}`} onClick={handleEditorOpen}>
            <Maximize strokeWidth={1.5} />
            Open in AI Editor
          </Button>
          <ImageSharer url={`https://getimg.ai/img/${id}`} imageSrc={url} imageWidth={width} imageHeight={height} type="primary" />
        </div>
      </div>
      <div className={styles._view_image}>
        <div
          className={styles.view_image_bg}
          style={{ backgroundImage: `url(${url})` }}
        >
        </div>
        <div className={styles.view_image}>
          <Image
            src={url}
            width={width}
            height={height}
            alt={prompt}
            className={styles.view_img}
            unoptimized={true}
          />
        </div>
      </div>
      <div className={styles.mobile_sharer}>
        <Button size="xs" type="icon" title="Download" href={`https://getimg.ai/api/download/${props.id}`} download={`getimg_ai_${props.id}.${props.format.toLowerCase()}`}><Download /></Button>
        {prompt ? <Button size="sm" type="default" title="Generate similar" href={`https://getimg.ai/text-to-image?img=${id}`}>
          <Repeat strokeWidth={1.5} />
          Reuse parameters
        </Button> : null}
        <Button size="sm" type="default" title="Generate similar" href={`https://getimg.ai/text-to-image?init-img=${id}`}>
          <PhotoImagePicture strokeWidth={1.5} />
          Reuse image
        </Button>
        <Button size="sm" type="default" title="Open in AI Editor" href={`https://getimg.ai/editor/new?img=${id}`} onClick={handleEditorOpen}>
          <Maximize strokeWidth={1.5} />
          Open in AI Editor
        </Button>
        <ImageSharer size='sm' type="primary" url={`https://getimg.ai/img/${id}`} imageSrc={url} imageWidth={width} imageHeight={height} />
      </div>

      <div className={styles.content}>
        <p className={styles.prompt}>{prompt}</p>


        <ul className={styles.params}>
          <li className={styles.param}>
            <b className={styles.label}>
              Size:
            </b>
            <p className={styles.value}>{width} × {height}</p>
          </li>
          {params.guidance_scale ?
            <li className={styles.param}>
              <b className={styles.label}>
                Guidance scale:
              </b>
              <p className={styles.value}>{modelTask.params.guidance_scale}</p>
            </li>
            : null}
          {params.image_guidance_scale ?
            <li className={styles.param}>
              <b className={styles.label}>
                Image guidance:
              </b>
              <p className={styles.value}>{modelTask.params.image_guidance_scale}</p>
            </li>
            : null}
          {params.strength !== undefined ?
            <li className={styles.param}>
              <b className={styles.label}>
                Strength:
              </b>
              <p className={styles.value}>{params.strength}</p>
            </li>
            : null}
          {params.num_inference_steps ?
            <li className={styles.param}>
              <b className={styles.label}>
                Steps:
              </b>
              <p className={styles.value}>{params.num_inference_steps}</p>
            </li>
            : null}
          {params.seed && (model.includes('stable-diffusion') || model === 'image-mixer' || model.startsWith('model-')) ?
            <li className={styles.param}>
              <b className={styles.label}>
                Seed:
              </b>
              <p className={styles.value}>{params.seed}</p>
            </li>
            : null}
          {params.negative_prompt ?
            <li className={styles.param}>
              <b className={styles.label}>
                Negative prompt:
              </b>
              <p className={styles.value}>{params.negative_prompt}</p>
            </li>
            : null}
          {params.inpaint_prompt ?
            <li className={styles.param}>
              <b className={styles.label}>
                Inpaint prompt:
              </b>
              <p className={styles.value}>{params.inpaint_prompt}</p>
            </li>
            : null}
          {model.includes('stable-diffusion') || model.startsWith('model-') ?
            <li className={styles.param}>
              <b className={styles.label}>
                Diffusion sampler:
              </b>
              <p className={styles.value}>{schedulerNames[params.scheduler || 'ddim']}</p>
            </li>
            : null}
          {params.upscale || params.enhance_face ?
            <li className={styles.param}>
              <b className={styles.label}>
                Enhancements:
              </b>
              <p className={styles.value}>
                {[
                  params.enhance_face ? 'Faces' : '',
                  params.upscale ? params.upscale + 'x Upscale' : ''
                ].filter(x => x).join(', ')}
              </p>
            </li>
            : null}
          <li className={styles.param}>
            <b className={styles.label}>
              Model:
            </b>
            <p className={styles.value}>{(_model && _model.name) || modelsMap[model]}</p>
          </li>
          <li className={styles.param}>
            <b className={styles.label}>
              Created:
            </b>
            <p className={styles.value}>{dayjs(createdAt).format('MMMM D, YYYY h:mm A')}</p>
          </li>
        </ul>

      </div>
    </div >
  )
}
