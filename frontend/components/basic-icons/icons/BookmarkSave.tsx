
import React from 'react'
import { IconI } from '../types'
export default function BookmarkSave ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M5 22V3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V22L12 15.8889L5 22Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
