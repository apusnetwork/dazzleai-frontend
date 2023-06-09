
import React from 'react'
import { IconI } from '../types'
export default function CalculatorComputeMath ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M16 6V10M18 8H14M6 13L8 15M8 15L10 17M8 15L10 13M8 15L6 17M18 16.5H14M18 13.5H14M10 8H6M5 21.5H19C20.1046 21.5 21.5 20.1046 21.5 19V5C21.5 3.89543 20.1046 2.5 19 2.5H5C3.89543 2.5 2.5 3.89543 2.5 5V19C2.5 20.1046 3.89543 21.5 5 21.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
