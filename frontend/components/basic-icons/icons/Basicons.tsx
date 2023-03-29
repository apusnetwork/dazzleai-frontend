
import React from 'react'
import { IconI } from '../types'
export default function Basicons ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M13.2 12H8M13.2 12C14.7464 12 16 10.8807 16 9.5C16 8.11929 14.7464 7 13.2 7H8V17H13.2C14.7464 17 16 15.8807 16 14.5C16 13.1193 14.7464 12 13.2 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
