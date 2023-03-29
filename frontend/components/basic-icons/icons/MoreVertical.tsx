
import React from 'react'
import { IconI } from '../types'
export default function MoreVertical ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="18" r="1" transform="rotate(-90 12 18)" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="12" r="1" transform="rotate(-90 12 12)" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="6" r="1" transform="rotate(-90 12 6)" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
