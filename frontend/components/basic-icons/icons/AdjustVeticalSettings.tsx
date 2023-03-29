
import React from 'react'
import { IconI } from '../types'
export default function AdjustVeticalSettings ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L16 13M16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19M16 13C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19M16 19L16 22M8 22L8 11M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5M8 5L8 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
