
import React from 'react'
import { IconI } from '../types'
export default function FacebookSocial ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H18V6H16C14.8954 6 14 6.89543 14 8V10H18L16.9565 14H13.8261V22H9.65217V14H6V10.0396H10V7C10 4.23858 12.2386 2 15 2Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
