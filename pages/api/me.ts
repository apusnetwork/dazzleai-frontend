import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'

export interface UserResponse {
  id: string;
  referralCode: string;
  additionalCredits: number;
  monthlyCredits: number;
  plan: string;
  billingPeriod: string;
  currentPeriodStartAt: string;
  currentPeriodEndAt: string;
  subscriptionStatus: string;
  cancelAtEnd: boolean;
  name: string;
  hasBetaAccess: boolean;
  status: string;
  createdAt: string;
  email: string;
  firstName: string;
  credits: number;
  isPaid: boolean;
}


export interface RemoteUserInfoResponse {
  avatar: string;
  google_id: string;
  nickname: string;
  twitter_id: string;
  user_id: string;
  credit: {
    credit: number
    free_credit: number
    free_credit_exp: number
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    const userRes = await axiosInstance.get<RemoteUserInfoResponse>('/api/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const resData: UserResponse = {
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
      credits: userRes.data.credit.credit,
      isPaid: false,
    }
    res.status(200).json(resData)
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}