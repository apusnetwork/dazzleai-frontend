
import React from 'react'
import { IconI } from '../types'
export default function AlphabetB ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M13.1461 12H7M13.1461 12C15.2745 12 17 10.433 17 8.5C17 6.567 15.2745 5 13.1461 5H7V19H13.1461C15.2745 19 17 17.433 17 15.5C17 13.567 15.2745 12 13.1461 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
