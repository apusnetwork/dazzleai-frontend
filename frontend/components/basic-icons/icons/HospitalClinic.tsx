
import React from 'react'
import { IconI } from '../types'
export default function HospitalClinic ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M3 9.01131V21C3 21.5523 3.44772 22 4 22H8.5C9.05228 22 9.5 21.5523 9.5 21V16.5H14.5V21C14.5 21.5523 14.9477 22 15.5 22H20C20.5523 22 21 21.5523 21 21V9.01131C21 8.69021 20.8458 8.38864 20.5855 8.20063L12 2L3.41451 8.20063C3.1542 8.38864 3 8.69021 3 9.01131Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7.5V12.5M9.5 10H14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
