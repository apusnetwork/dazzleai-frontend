import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'
interface TaskInfoImage {
  id: string;
  modelTaskId: string;
  userId: string;
  hosting: string;
  path: string;
  jpegPath: string;
  width: number;
  height: number;
  format: string;
  liked: boolean;
  isShared: boolean;
  createdAt: string;
  url: string;
  jpegUrl: string;
}

interface TaskInfoModel {
  id: string;
  userId: string | null;
  name: string;
  status: string;
  public: boolean;
  params: {
    author: string;
    images: string[];
    author_url: string;
    description: string;
    instance_prompt: string;
  };
  createdAt: string;
  trainingStartedAt: string | null;
  trainingFinishedAt: string | null;
  lastUsedAt: string;
}

export interface TaskInfo {
  id: string;
  userId: string;
  acceptedImageId: string | null;
  model: string;
  tool: string;
  status: string;
  params: {
    seed: number;
    tool: string;
    width: number;
    height: number;
    prompt: string;
    scheduler: string;
    num_images: number;
    started_at: string;
    enhance_face: boolean;
    guidance_scale: number;
    negative_prompt: string;
    num_inference_steps: number;
  };
  createdAt: string;
  startedAt: string;
  finishedAt: string;
  images: TaskInfoImage[];
  _model: TaskInfoModel;
}

type Image = {
  image_id: string;
  image_url: string;
  is_shared: boolean;
  task: string;
  task_id: string;
  user_id: string;
  seed: string
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
  lora: string;
  checkpoint: string;
};

type TaskStatus = 'pending' | 'succeed' | 'failed';

export type RemoteTask = {
  extra: Extra;
  images: Image[];
  node: string;
  param: Param;
  status: TaskStatus;
  task_id: string;
  user_id: string;
};

export function mapRemoteTaskToTaskInfo(remoteTask: RemoteTask): TaskInfo {
  const { task_id, user_id, param, status, extra, images, node } = remoteTask;
  const { model, prompt, negative_prompt, seed, width, height, steps, sampler, cfg_scale, lora, checkpoint } = param;
  const { progress, status_msg } = extra;
  const createdAt = new Date().toISOString();
  const startedAt = new Date().toISOString();
  const finishedAt = new Date().toISOString();
  const _model: TaskInfoModel = {
    id: lora || checkpoint || model,
    userId: user_id,
    name: lora || checkpoint || model,
    status: status_msg,
    public: false,
    params: {
      author: 'unknown',
      images: [],
      author_url: 'unknown',
      description: 'unknown',
      instance_prompt: 'unknown',
    },
    createdAt,
    trainingStartedAt: null,
    trainingFinishedAt: null,
    lastUsedAt: createdAt,
  };
  const imagesInfo = images?.map((image) => {
    console.log(image)
    const { image_id, image_url, is_shared } = image;
    return {
      id: image_id,
      modelTaskId: task_id,
      userId: user_id,
      hosting: node,
      path: image_url,
      jpegPath: image_url,
      width,
      height,
      format: 'jpg',
      liked: false,
      isShared: is_shared,
      createdAt,
      url: image_url,
      jpegUrl: image_url,
      seed: image.seed,
    };
  }) ?? []
  return {
    id: task_id,
    userId: user_id,
    acceptedImageId: null,
    model,
    tool: sampler,
    status,
    params: {
      seed,
      tool: sampler,
      width,
      height,
      prompt,
      scheduler: sampler,
      num_images: 1,
      started_at: startedAt,
      enhance_face: false,
      guidance_scale: cfg_scale,
      negative_prompt,
      num_inference_steps: steps,
    },
    createdAt,
    startedAt,
    finishedAt,
    images: imagesInfo,
    _model,
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    const nodeRes = await axiosInstance.get('/api/nodes', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const createRes = await axiosInstance.get<RemoteTask[]>('/api/tasks', {
      params: {
        ids: req.query.ids
      },
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const resData: TaskInfo[] = createRes.data.map(mapRemoteTaskToTaskInfo)
    res.status(200).json(resData)
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}