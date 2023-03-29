
import React from 'react'
import { IconI } from '../types'
export default function VideoCameraMedia ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M16.1176 12L22 7.33333V16.6667L16.1176 12ZM16.1176 12V7.33333C16.1176 6.04467 15.0642 5 13.7647 5H4.35294C3.05345 5 2 6.04467 2 7.33333V16.6667C2 17.9553 3.05345 19 4.35294 19H13.7647C15.0642 19 16.1176 17.9553 16.1176 16.6667V12Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
