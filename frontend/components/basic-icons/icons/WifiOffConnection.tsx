
import React from 'react'
import { IconI } from '../types'
export default function WifiOffConnection ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M2 7.92647C3.24008 7.13029 4.58126 6.47786 6 5.99271M22 7.92647C19.1151 6.07423 15.683 5 12 5C11.6645 5 11.3311 5.00891 11 5.02652" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.17159 11.7046C6.63169 10.86 8.26267 10.2779 9.99998 10.0229M18.8284 11.7046C17.9699 11.2079 17.0522 10.8021 16.0886 10.5001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.07355 15.2544C9.98888 14.9309 10.9739 14.7549 12 14.7549C13.0261 14.7549 14.0111 14.9309 14.9265 15.2544" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9181 19.1465L11.902 19.1304" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
