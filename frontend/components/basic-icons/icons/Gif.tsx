
import React from 'react'
import { IconI } from '../types'
export default function Gif ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M13 7V17M17 17V7H21M17 12H20M6.5 12.5H9V13.875C9 15.6009 7.65685 17 6 17C4.34315 17 3 15.6009 3 13.875V10.125C3 8.39911 4.34315 7 6 7C7.15198 7 8.15231 7.67635 8.65498 8.66863" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
