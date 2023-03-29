
import React from 'react'
import { IconI } from '../types'
export default function ShuffleAlt ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M21 17H14L8 7H3M21 17L18 14M21 17L18 20M21 7H14L8 17H3M21 7L18 4M21 7L18 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
