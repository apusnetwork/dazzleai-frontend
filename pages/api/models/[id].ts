interface TaskInfo {
  id: string;
  tool: string;
  userId: string;
  user: {
    id: string;
    referralCode: string;
    additionalCredits: number;
    monthlyCredits: number;
    plan: string;
    billingPeriod: string;
    currentPeriodStartAt: string;
    currentPeriodEndAt: string;
    subscriptionStatus: string;
    cancelAtEnd: boolean;
    name: string;
    hasBetaAccess: boolean;
    status: string;
    createdAt: string;
    email: string;
    firstName: string;
    credits: number;
    isPaid: boolean;
  };
  createdAt: string;
  model: string;
  params: {
    tool: string;
    prompt: string;
    negative_prompt: string;
    width: number;
    height: number;
    num_inference_steps: number;
    guidance_scale: number;
    num_images: number;
    image_url: string;
    scheduler: string;
    strength: number;
    enhance_face: boolean;
  };
  acceptedImageId: null | string;
  startedAt: null | string;
  finishedAt: null | string;
  status: string;
}[];

import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'


type Image = {
  image_id: string;
  image_url: string;
  is_shared: boolean;
  task: string;
  task_id: string;
  user_id: string;
};

type Extra = {
  progress: number;
  status_msg: string;
};

type Param = {
  batch_count: number;
  cfg_scale: number;
  denoising_strength: number;
  height: number;
  image: string;
  model: string;
  negative_prompt: string;
  prompt: string;
  sampler: string;
  seed: number;
  steps: number;
  width: number;
};

type TaskStatus = 'pending' | 'succeed' | 'failed';

type RemoteTask = {
  extra: Extra;
  images: Image[];
  node: string;
  param: Param;
  status: TaskStatus;
  task_id: string;
  user_id: string;
};

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
}

interface GeneratorParams {
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
}

function mapParamsToRequest(params: GeneratorParams, model: string, node: string): ImageGenerationRequest {
  return {
    batch_count: params.num_images,
    cfg_scale: 0,
    denoising_strength: 0,
    height: params.height,
    image: params.image_url,
    model,
    negative_prompt: params.negative_prompt,
    node,
    prompt: params.prompt,
    sampler: params.scheduler,
    seed: 0,
    steps: params.num_inference_steps,
    width: params.width,
  };
}

// {"task_id":"task-cgjs3693bbtp4v5e1360","user_id":"1909b3ed-5a68-4a96-b648-9a00cca78f5a","node":"","status":"pending"}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    const createRes = await axiosInstance.post<RemoteTask>('/api/tasks/create', mapParamsToRequest(req.body as GeneratorParams, req.query.id as string, req.body.node as string), {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    res.status(200).json(createRes.data)
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}