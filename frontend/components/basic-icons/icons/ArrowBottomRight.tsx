
import React from 'react'
import { IconI } from '../types'
export default function ArrowBottomRight ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M5.63603 5.63603L18.364 18.364M18.364 18.364L8.46445 18.3639M18.364 18.364V8.46446" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
