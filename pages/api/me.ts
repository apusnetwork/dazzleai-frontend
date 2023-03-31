import { getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'

interface UserResponse {
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = getCookie(req, 'token')
  res.status(401).json({ "message": "Authentication is required!" })
}