import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RemoteTask, TaskInfo } from '../tasks'

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
    // sampler: params.scheduler,
    sampler: "",
    seed: 0,
    steps: params.num_inference_steps,
    width: params.width,
  };
}

// {"task_id":"task-cgjs3693bbtp4v5e1360","user_id":"1909b3ed-5a68-4a96-b648-9a00cca78f5a","node":"","status":"pending"}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    const nodeRes = await axiosInstance.get('/api/nodes', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const createRes = await axiosInstance.post<RemoteTask>('/api/tasks/create', mapParamsToRequest(req.body as GeneratorParams, req.query.id as string, nodeRes.data[0].domain), {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const resData: TaskInfo[] = [
      {
        id: createRes.data.task_id,
        tool: req.body.tool,
        userId: createRes.data.user_id,
        user: {
          id: createRes.data.user_id,
          referralCode: '',
          additionalCredits: 0,
          monthlyCredits: 0,
          plan: '',
          billingPeriod: '',
          currentPeriodStartAt: '',
          currentPeriodEndAt: '',
          subscriptionStatus: '',
          cancelAtEnd: false,
          name: '',
          hasBetaAccess: false,
          status: '',
          createdAt: '',
          email: '',
          firstName: '',
          credits: 0,
          isPaid: false,
        },
        createdAt: '',
        model: req.query.id as string,
        params: req.body as TaskInfo['params'],
        acceptedImageId: null,
        startedAt: null,
        finishedAt: null,
        status: createRes.data.status,
      }
    ]
    res.status(200).json(resData)
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}