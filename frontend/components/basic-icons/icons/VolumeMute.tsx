
import React from 'react'
import { IconI } from '../types'
export default function VolumeMute ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M22 10L20 12M20 12L18 14M20 12L18 10M20 12L22 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 8H3C2.44772 8 2 8.44772 2 9V15C2 15.5523 2.44772 16 3 16H8.5L15 21V3L8.5 8Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
