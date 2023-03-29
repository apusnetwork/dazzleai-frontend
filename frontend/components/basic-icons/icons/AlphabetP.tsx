
import React from 'react'
import { IconI } from '../types'
export default function AlphabetP ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M7 12.3684V5H13.3158C15.3505 5 17 6.64948 17 8.68421C17 10.7189 15.3505 12.3684 13.3158 12.3684H7ZM7 12.3684V19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
