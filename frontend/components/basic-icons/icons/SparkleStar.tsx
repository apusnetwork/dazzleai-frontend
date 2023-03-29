
import React from 'react'
import { IconI } from '../types'
export default function SparkleStar ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M11 4L13.4308 10.5692L20 13L13.4308 15.4308L11 22L8.56918 15.4308L2 13L8.56918 10.5692L11 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 2L16.9051 3.09486L18 3.5L16.9051 3.90514L16.5 5L16.0949 3.90514L15 3.5L16.0949 3.09486L16.5 2Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 7L21.2701 7.72991L22 8L21.2701 8.27009L21 9L20.7299 8.27009L20 8L20.7299 7.72991L21 7Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
