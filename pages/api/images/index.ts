import axiosInstance, { handleApiError } from '@/frontend/utils/axios'
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'
import FormData from 'form-data'
import fs from 'fs'

// import { withFileUpload, getConfig } from 'next-multiparty'
import path from 'path';
import multiparty from "multiparty"

interface ImageInfo {
  id: string;
  userId: string;
  format: string;
  width: number;
  height: number;
  path: string;
  hosting: string;
  modelTaskId: null | string;
  jpegPath: null | string;
  liked: boolean;
  isShared: boolean;
  createdAt: string;
  url: string;
}

interface RemoteUploadImage {
  Url: string
}

export interface GeneratedImage {
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
  modelTask: {
    id: string;
    model: string;
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
    _model: {
      id: string;
      name: string;
      params: {
        author: string;
        images: string[];
        author_url: string;
        description: string;
        instance_prompt: string;
      };
    };
  };
  url: string;
  jpegUrl: string;
}

export interface RemoteImage {
  image_id: string;
  image_url: string;
  is_shared: boolean;
  task: {
    extra: {
      progress: number;
      status_msg: string;
    };
    images: string[];
    node: string;
    param: {
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
    status: 'pendding' | 'succeed' | 'failed';
    task_id: string;
    user_id: string;
  };
  task_id: string;
  user_id: string;
}

export function mapRemoteImageToGeneratedImage(image: RemoteImage): GeneratedImage {
  const { task } = image;
  const { param } = task;
  // const { _model } = task.task_id;
  return {
    id: image.image_id,
    modelTaskId: task.task_id,
    userId: image.user_id,
    hosting: 'remote',
    path: '',
    jpegPath: '',
    width: param.width,
    height: param.height,
    format: 'jpg',
    liked: false,
    isShared: image.is_shared,
    createdAt: '',
    modelTask: {
      id: task.task_id,
      model: task.task_id,
      params: {
        seed: param.seed,
        tool: param.sampler,
        width: param.width,
        height: param.height,
        prompt: param.prompt,
        scheduler: param.sampler,
        num_images: param.batch_count,
        started_at: '',
        enhance_face: false,
        guidance_scale: 0,
        negative_prompt: param.negative_prompt,
        num_inference_steps: param.steps,
      },
      _model: {
        id: task.task_id,
        name: task.task_id,
        params: {
          author: '',
          images: [],
          author_url: '',
          description: '',
          instance_prompt: '',
        },
      },
    },
    url: image.image_url,
    jpegUrl: '',
  };
}

// export const config = getConfig()

export const config = {
  api: {
    bodyParser: false,
  },
};



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    if (req.method === 'POST') {
      const form = new multiparty.Form();
      const reqData: any = await new Promise((resolve, reject) => {
        form.parse(req, function (err: any, fields: any, files: any) {
          if (err) reject({ err });
          resolve({ fields, files });
        });
      });
      if (!reqData.files.file) {
        res.status(400).json({ message: 'No file' })
        return
      }

      const uploadRes = await axiosInstance.post<RemoteUploadImage>('/api/upload/image', {
        file: fs.createReadStream(reqData.files.file[0].path)
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        }
      })
      const resData: ImageInfo = {
        id: '',
        userId: '',
        format: '',
        width: 0,
        height: 0,
        path: '',
        hosting: '',
        modelTaskId: null,
        jpegPath: null,
        liked: false,
        isShared: false,
        createdAt: '',
        url: uploadRes.data.Url,
      }
      res.status(200).json(resData)
    } else if (req.method === "GET") {
      const imagesRes = await axiosInstance.get<RemoteImage[]>('/api/images', {
        params: {
          limit: req.query.take,
          offset: req.query.skip,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      res.status(200).json(imagesRes.data?.map(mapRemoteImageToGeneratedImage))
    } else if (req.method === "DELETE") {
      await axiosInstance.post(`/api/images/del`, {
        ids: req.query.ids,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      res.status(200).json({ success: true })
    } else {
      res.status(405).json({ message: 'Method not allowed' })
    }
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}