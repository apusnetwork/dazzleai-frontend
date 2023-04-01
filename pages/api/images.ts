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

// export const config = getConfig()

export const config = {
  api: {
    bodyParser: false,
  },
};



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
    const token = getCookie(req, AuthHeaderKey)

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
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}