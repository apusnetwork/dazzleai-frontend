
import React from 'react'
import { IconI } from '../types'
export default function PaperNote ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M8 6H16M8 10H16M8 14H11M6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
