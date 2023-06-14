import axiosInstance, { handleApiError } from '@/frontend/utils/axios'
import { AuthHeaderKey, setCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RemoteUserInfoResponse, UserResponse } from '../me';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const remoteReq: any = {
      "google_id_token": req.body.token,
      "login_type": "google"
    }
    if ('from_img' in req.body) {
      remoteReq["from_img"] = req.body.from_img
    }
    if ('from_url' in req.body) {
      remoteReq["from_url"] = req.body.from_url
    }
    const loginRes = await axiosInstance.post('/login', remoteReq)
    const userRes = await axiosInstance.get<RemoteUserInfoResponse>('/api/userinfo', {
      headers: {
        Authorization: `Bearer ${loginRes.data.token}`,
      }
    })
    setCookie(res, AuthHeaderKey, loginRes.data.token, {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'lax',
    })
    const resData: UserResponse = {
      ...userRes.data,
      id: userRes.data.user_id,
      referralCode: '',
      additionalCredits: 0,
      monthlyCredits: 0,
      plan: '',
      billingPeriod: '',
      currentPeriodStartAt: '',
      currentPeriodEndAt: '',
      subscriptionStatus: '',
      cancelAtEnd: false,
      name: userRes.data.nickname,
      hasBetaAccess: false,
      status: 'active',
      createdAt: '',
      email: '',
      firstName: '',
      credits: 0,
      isPaid: false,
    }
    res.status(200).json(resData)
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}