
import React from 'react'
import { IconI } from '../types'
export default function AlphabetS ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M16 5H10.5C8.567 5 7 6.567 7 8.5C7 10.433 8.567 12 10.5 12H13.5C15.433 12 17 13.567 17 15.5C17 17.433 15.433 19 13.5 19H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
