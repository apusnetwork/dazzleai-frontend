
import React from 'react'
import { IconI } from '../types'
export default function ArrowTopLeft ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M18.364 18.364L5.63605 5.63605M5.63605 5.63605L15.5356 5.63606M5.63605 5.63605V15.5355" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
