
import React from 'react'
import { IconI } from '../types'
export default function Gift ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M4 13H20V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V13Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9H22V13H2V9Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5L12 22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5.5C12 3.567 10.433 2 8.5 2C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 9C17.433 9 19 7.433 19 5.5C19 3.567 17.433 2 15.5 2C13.567 2 12 3.567 12 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
