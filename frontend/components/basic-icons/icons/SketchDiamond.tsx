
import React from 'react'
import { IconI } from '../types'
export default function SketchDiamond ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 3.5L12 3L17.5 3.5M6.5 3.5L2 8M6.5 3.5L12 21M2 8L12 21M2 8H22M12 21L22 8M12 21L17.5 3.5M22 8L17.5 3.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
