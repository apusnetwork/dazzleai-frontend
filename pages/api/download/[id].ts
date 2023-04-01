import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RemoteImage } from '../images';
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
    const fileUrl = imagesRes.data[0].image_url
    res.setHeader('Content-Disposition', `attachment; filename="${fileUrl.split('/').pop() ?? 'default'}.png"`);
    res.setHeader('Content-Type', 'image/jpeg');

    // Stream the file to the response
    const response = await fetch(fileUrl);
    if (response.body != null) {
      await new Promise<void>((resolve, reject) => {
        stream.pipeline(response.body!, res, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    }
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}