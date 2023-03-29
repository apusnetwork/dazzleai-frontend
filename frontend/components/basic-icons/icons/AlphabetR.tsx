
import React from 'react'
import { IconI } from '../types'
export default function AlphabetR ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M7 12V5H13.7857C15.5609 5 17 6.567 17 8.5C17 10.433 15.5609 12 13.7857 12H7ZM7 12V19M11.2857 12L17 19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
