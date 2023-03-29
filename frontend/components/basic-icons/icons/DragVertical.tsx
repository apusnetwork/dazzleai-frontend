
import React from 'react'
import { IconI } from '../types'
export default function DragVertical ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M21 10L3 10M21 14L3 14M12 4L12 10M12 14L12 20M15 18L12 21L9 18M15 6L12 3L9 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
