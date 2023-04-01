// utils/cookies.ts

import { serialize, parse, CookieSerializeOptions } from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

export const AuthHeaderKey = "getimgauth"

/**
 * This sets `cookie` using the `res` object
 */

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (typeof options.maxAge === 'number') {
    options.expires = new Date(Date.now() + options.maxAge * 1000)
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}

export const getCookie = (req: NextApiRequest, name: string) => {
  const cookies = parse(req.headers.cookie || '')
  return cookies[name]
}

export const deleteCookie = (res: NextApiResponse, name: string) => {
  res.setHeader('Set-Cookie', serialize(name, '', { maxAge: -1 }))
}
