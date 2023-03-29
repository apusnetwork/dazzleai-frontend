
import React from 'react'
import { IconI } from '../types'
export default function Delete ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M12 9L18 15M18 9L12 15M8.36364 5L2 12L8.36364 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H8.36364Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
