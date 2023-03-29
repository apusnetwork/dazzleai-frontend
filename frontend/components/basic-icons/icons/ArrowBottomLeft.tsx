
import React from 'react'
import { IconI } from '../types'
export default function ArrowBottomLeft ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M18.364 5.63603L5.63605 18.364M5.63605 18.364L15.5356 18.3639M5.63605 18.364V8.46446" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
