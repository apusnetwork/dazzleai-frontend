import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RemoteImage, mapRemoteImageToGeneratedImage } from '../../images';

export function transformSharedImageResponse(res: RemoteImage[]) {
  return mapRemoteImageToGeneratedImage(res[0])
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const imagesRes = await axiosInstance.get<RemoteImage[]>('/api/shared/images', {
      params: {
        ids: req.query.id,
      },
    })
    if (imagesRes.data.length === 0) {
      res.status(404).json({ message: 'Image not found' })
      return
    }
    res.status(200).json(transformSharedImageResponse(imagesRes.data))
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}