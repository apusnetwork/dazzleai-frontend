import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json([
      { id: '1', name: 'gpu-iqrk0b0p.apus.network' },
      { id: '2', name: 'gpu-hwvgffet.apus.network' },
      { id: '3', name: 'gpu-suku5n9v.apus.network' },
      { id: '4', name: 'gpu-c6n1fd7w.apus.network' },
      { id: '5', name: 'gpu-k4yuifup.apus.network' },
    ])
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}