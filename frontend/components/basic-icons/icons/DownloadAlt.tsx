
import React from 'react'
import { IconI } from '../types'
export default function DownloadAlt ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M10 2H12H14C14.5523 2 15 2.44771 15 3V13L19 14L12 22L5 14L9 13V3C9 2.44772 9.44772 2 10 2Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
