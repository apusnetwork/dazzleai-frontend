import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RemoteImage, mapRemoteImageToGeneratedImage } from '../images';
import fetch from 'node-fetch';
import stream from 'stream';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    const imagesRes = await axiosInstance.get<RemoteImage[]>('/api/images', {
      params: {
        ids: req.query.id,
        limit: req.query.take,
        offset: req.query.skip,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    if (imagesRes.data.length === 0) {
      res.status(404).json({ message: 'Image not found' })
      return
    }
    res.status(200).json(mapRemoteImageToGeneratedImage(imagesRes.data[0]))
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}