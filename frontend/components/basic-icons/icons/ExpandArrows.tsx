
import React from 'react'
import { IconI } from '../types'
export default function ExpandArrows ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M15 19L12 22M12 22L9 19M12 22V15.5M15 5L12 2M12 2L9 5M12 2V8.5M5 9L2 12M2 12L5 15M2 12H8.5M19 9L22 12M22 12L19 15M22 12H15.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
