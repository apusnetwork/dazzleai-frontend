import axiosInstance, { handleApiError } from '@/frontend/utils/axios'
import { AuthHeaderKey, deleteCookie, setCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RemoteUserInfoResponse, UserResponse } from '../me';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "DELETE") {
      deleteCookie(res, AuthHeaderKey)
      res.status(200).json({ message: "Successfully logged out" })
    }
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}