
import React from 'react'
import { IconI } from '../types'
export default function VolumeDown ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 8H4C3.44772 8 3 8.44772 3 9V15C3 15.5523 3.44772 16 4 16H9.5L16 21V3L9.5 8Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 9.35425C20.6224 10.0594 21 10.9856 21 12.0001C21 13.0145 20.6224 13.9408 20 14.6459" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
