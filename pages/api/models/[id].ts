import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RemoteTask, TaskInfo, mapRemoteTaskToTaskInfo } from '../tasks'

interface ImageGenerationRequest {
  batch_count: number;
  cfg_scale: number;
  denoising_strength: number;
  height: number;
  image: string;
  model: string;
  negative_prompt: string;
  node: string;
  prompt: string;
  sampler: string;
  seed: number;
  steps: number;
  width: number;
  checkpoint: string;
  lora: string;
}

interface GeneratorParams {
  node: string;
  tool: string;
  num_inference_steps: number;
  guidance_scale: number;
  num_images: number;
  width: number;
  height: number;
  enhance_face: string;
  scheduler: string;
  prompt: string;
  negative_prompt: string;
  image_url: string;
  strength: number;
  seed: string;
  sampler: string;
  checkpoint: string;
  type: string;
}

function mapParamsToRequest(params: GeneratorParams, model: string): ImageGenerationRequest {
  if (!["Euler a", "Euler", "LMS", "Heun", "DPM2", "DPM2 a", "DPM++ 2S a", "DPM++ 2M", "DPM++ SDE", "DPM fast", "DPM adaptive", "LMS Karras", "DPM2 Karras", "DPM2 a Karras", "DPM++ 2S a Karras", "DPM++ 2M Karras", "DPM++ SDE Karras", "DDIM"].includes(params.scheduler)) {
    params.scheduler = "DPM++ 2M Karras"
  }
  const req = {
    batch_count: params.num_images,
    cfg_scale: params.guidance_scale,
    denoising_strength: 0,
    height: params.height,
    image: params.image_url,
    model,
    checkpoint: '',
    lora: '',
    negative_prompt: params.negative_prompt,
    node: params.node,
    prompt: params.prompt,
    sampler: params.scheduler,
    seed: Number.isNaN(params.seed) ? 0 : Number(params.seed),
    steps: params.num_inference_steps,
    width: params.width,
  };
  if (params.type === "checkpoint") {
    req.checkpoint = model;
  } else if (params.type === "lora") {
    req.checkpoint = params.checkpoint;
    req.lora = model;
  }
  return req;
}

export function transformRequest(req: any, modelID: string) {
  return mapParamsToRequest(req, modelID)
}

export function transformResponse(res: RemoteTask): TaskInfo {
  return mapRemoteTaskToTaskInfo(res)
}

// {"task_id":"task-cgjs3693bbtp4v5e1360","user_id":"1909b3ed-5a68-4a96-b648-9a00cca78f5a","node":"","status":"pending"}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    if (req.body.node === 'all') {
      req.body.node = ""
    }
    const createRes = await axiosInstance.post<RemoteTask>('/api/tasks/create', mapParamsToRequest(req.body as GeneratorParams, req.query.id as string), {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    res.status(200).json([mapRemoteTaskToTaskInfo(createRes.data)])
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}