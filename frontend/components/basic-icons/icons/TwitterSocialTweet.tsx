
import React from 'react'
import { IconI } from '../types'
export default function TwitterSocialTweet ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M8.288 21C15.832 21 19.96 14.4544 19.96 8.78772C19.96 8.60357 19.96 8.41943 19.952 8.23528C20.752 7.62425 21.448 6.87092 22 6.01715C21.248 6.36033 20.456 6.5947 19.64 6.69514C20.496 6.15945 21.136 5.31404 21.44 4.31798C20.632 4.8202 19.752 5.17175 18.832 5.3559C17.28 3.62324 14.68 3.53954 13.024 5.17175C11.96 6.21804 11.504 7.78328 11.84 9.2732C8.552 9.09742 5.472 7.46521 3.392 4.78671C2.304 6.74537 2.856 9.25646 4.664 10.512C4.008 10.4953 3.376 10.3111 2.8 9.9763C2.8 9.99305 2.8 10.0098 2.8 10.0265C2.8 12.0689 4.176 13.8266 6.096 14.2368C5.488 14.4126 4.856 14.4377 4.24 14.3121C4.776 16.0615 6.32 17.2585 8.072 17.292C6.616 18.4889 4.824 19.1334 2.976 19.1334C2.648 19.1334 2.32 19.1083 2 19.0748C3.88 20.3387 6.056 21 8.288 21Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
