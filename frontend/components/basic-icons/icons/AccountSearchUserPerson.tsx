
import React from 'react'
import { IconI } from '../types'
export default function AccountSearchUserPerson ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="7" r="4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21V17C3 15.8954 3.89543 15 5 15H12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5 19.5L21 21M20.25 17.625C20.25 19.0747 19.0747 20.25 17.625 20.25C16.1753 20.25 15 19.0747 15 17.625C15 16.1753 16.1753 15 17.625 15C19.0747 15 20.25 16.1753 20.25 17.625Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
