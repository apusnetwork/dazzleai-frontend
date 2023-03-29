
import React from 'react'
import { IconI } from '../types'
export default function CursorPointerMouse ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M6.91304 19.4348L3 3L19.4348 6.91304L14.7391 10.0435L21 16.3043L16.3043 21L10.0435 14.7391L6.91304 19.4348Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
