import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RemoteImage, mapRemoteImageToGeneratedImage } from '../images';

export function transformGetImageResponse(res: RemoteImage[]) {
  return mapRemoteImageToGeneratedImage(res[0])
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    let headersConfig: any = {}
    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`
    }
    if (req.method === "GET") {
      const imagesRes = await axiosInstance.get<RemoteImage[]>('/api/images', {
        params: {
          ids: req.query.id,
          limit: req.query.take,
          offset: req.query.skip,
        },
        headers: headersConfig,
      })
      if (imagesRes.data.length === 0) {
        res.status(404).json({ message: 'Image not found' })
        return
      }
      res.status(200).json(transformGetImageResponse(imagesRes.data))
    } else if (req.method === "PUT") {
      console.log({
        image_id: req.query.id,
        ...req.body
      },)
      await axiosInstance.post('/api/images/update', {
        image_id: req.query.id,
        ...req.body
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      res.status(200).json({ messgage: "ok" })
    }
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}