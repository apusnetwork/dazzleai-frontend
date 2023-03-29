
import React from 'react'
import { IconI } from '../types'
export default function AlphabetA ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M6 19L12 5L18 19M8.14281 14.0001H15.8572" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
