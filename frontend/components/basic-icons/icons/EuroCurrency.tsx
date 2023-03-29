
import React from 'react'
import { IconI } from '../types'
export default function EuroCurrency ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M19 2.83209C17.7751 2.2969 16.4222 2 15 2C9.47715 2 5 6.47715 5 12C5 17.5228 9.47715 22 15 22C16.4222 22 17.7751 21.7031 19 21.1679M2 10H15M2 14H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
