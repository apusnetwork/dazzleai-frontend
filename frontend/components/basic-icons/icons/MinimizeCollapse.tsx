
import React from 'react'
import { IconI } from '../types'
export default function MinimizeCollapse ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 13.5L3 21M10.5 13.5V19.1M10.5 13.5H4.9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 10.5L21 3M13.5 10.5V4.84315M13.5 10.5H19.1568" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
