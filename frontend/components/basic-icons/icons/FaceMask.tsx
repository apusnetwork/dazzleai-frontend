
import React from 'react'
import { IconI } from '../types'
export default function FaceMask ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M19 9H20C21.6569 9 23 10.3431 23 12C23 13.6569 21.6569 15 20 15H19M5 9H4C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15H5M16 10.5H8M16 13.5H8M6 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H6C5.44772 7 5 7.44772 5 8V16C5 16.5523 5.44772 17 6 17Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
