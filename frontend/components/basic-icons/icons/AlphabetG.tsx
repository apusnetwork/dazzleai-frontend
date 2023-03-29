
import React from 'react'
import { IconI } from '../types'
export default function AlphabetG ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M13 12.5H17V15C17 17.7614 14.7614 20 12 20C9.23858 20 7 17.7614 7 15V8.54545C7 6.03507 9.03507 4 11.5455 4H13C15.2091 4 17 5.79086 17 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
