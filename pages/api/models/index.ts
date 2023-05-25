import axiosInstance, { handleApiError } from '@/frontend/utils/axios'
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'

interface Model {
  id: string;
  userId: null;
  name: string;
  type: string;
  checkpoint: string;
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
  trainingStartedAt: null;
  trainingFinishedAt: null;
  lastUsedAt: string;
  useCount: number;
}

type ModelList = Model[];

interface RemoteModel {
  type: string;
  author: string;
  author_url: string;
  description: string;
  images: string;
  model_file: string;
  model_version_id: string;
  model_file_name: string;
  checkpoint_file_name: string;
  model_file_url: string;
  model_id: string;
  name: string;
  use_count: number;
}

type RemoteModelList = RemoteModel[];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    const modelRes = await axiosInstance.get<RemoteModelList>('/api/models', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const resData: ModelList = modelRes.data.filter(v => v.type === "checkpoint" || v.type === "lora").map((model) => ({
      id: model.type === "checkpoint" || model.type === "lora" ? model.model_file_name : model.model_id,
      userId: null,
      name: model.name,
      type: model.type,
      checkpoint: model.checkpoint_file_name,
      status: '',
      public: false,
      params: {
        author: model.author,
        images: model.images.split(','),
        author_url: model.author_url,
        description: model.description,
        instance_prompt: '',
      },
      createdAt: '',
      trainingStartedAt: null,
      trainingFinishedAt: null,
      lastUsedAt: '',
      useCount: model.use_count,
    }))
    res.status(200).json(resData)
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}