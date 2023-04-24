import axiosInstance, { handleApiError } from '@/frontend/utils/axios';
import { AuthHeaderKey, getCookie } from '@/frontend/utils/cookie';
import type { NextApiRequest, NextApiResponse } from 'next'


interface Node {
  id: string;
  name: string
  domain: string
}

type NodeList = Node[];

// created_at	string
// created time
// deleted_at	integer
// deleted time
// domain	string
// domain
// id	integer
// miner_addr	string
// miner addr
// payment_secs	integer
// seconds to be paid
// updated_at	string
// updated time
interface RemoteNode {
  created_at: string;
  deleted_at: number;
  domain: string;
  id: number;
  name?: string;
  miner_addr: string;
  payment_secs: number;
  updated_at: string;
}

type RemoteNodeList = RemoteNode[];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = getCookie(req, AuthHeaderKey)
    const nodeRes = await axiosInstance.get<RemoteNodeList>('/api/nodes', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const resData: NodeList = nodeRes.data.map((node) => ({
      id: node.id + "",
      name: node.name || node.domain || "",
      domain: node.domain,
    }))
    res.status(200).json(resData)
  } catch (e: any) {
    const { status, message } = handleApiError(e)
    res.status(status).json({ message })
  }
}