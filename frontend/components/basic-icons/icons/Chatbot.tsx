
import React from 'react'
import { IconI } from '../types'
export default function Chatbot ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12C14.2005 12.6224 13.1502 13 12 13C10.8498 13 9.79952 12.6224 9 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8.01953V8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8.01953V8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
