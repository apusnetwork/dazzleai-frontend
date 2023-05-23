import axiosInstance, { handleApiError } from '@/frontend/utils/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { RemoteUserInfoResponse, UserResponse } from '../me';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const nonceRes = await axiosInstance.post<{
        nonce: string
      }>('/api/nonce', req.body)
      res.status(200).json(nonceRes.data)
    }
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}