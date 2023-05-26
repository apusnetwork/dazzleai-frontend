import axiosInstance, { handleApiError } from "@/frontend/utils/axios"
import { AuthHeaderKey, getCookie } from "@/frontend/utils/cookie"
import { NextApiRequest, NextApiResponse } from "next"

export interface RemoteCryptoSession {
  orderid: string
  rxaddress: string
  value: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    const stripeRes = await axiosInstance.post<RemoteCryptoSession>('/api/crypto/create-checkout-session', req.body, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    res.status(200).json(stripeRes.data)
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}