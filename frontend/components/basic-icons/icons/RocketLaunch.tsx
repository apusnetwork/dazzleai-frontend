
import React from 'react'
import { IconI } from '../types'
export default function RocketLaunch ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11H2L6 7L13 7L15 5.00002C16.1252 3.8748 17.4087 3.00002 19 3.00002L21 3L21 5.00002C21 6.50001 20 8.00001 19 9.00001L17 11L17 18L13 22V16.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9497 12L7 16.9497" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
