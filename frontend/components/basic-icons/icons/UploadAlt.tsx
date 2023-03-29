
import React from 'react'
import { IconI } from '../types'
export default function UploadAlt ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M10 22H12H14C14.5523 22 15 21.5523 15 21V11L19 10L12 2L5 10L9 11V21C9 21.5523 9.44772 22 10 22Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
