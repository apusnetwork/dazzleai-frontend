
import React from 'react'
import { IconI } from '../types'
export default function Forward ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M13.9289 9.21468V4.92896L21 12L13.9289 19.0711V14.2392M13.9289 9.22304C13.2857 9.07708 12.6163 9.00002 11.9289 9.00002C6.95836 9.00002 2.92892 13.0295 2.92892 18C2.92892 18.8675 3.05165 19.7063 3.28069 20.5C4.36404 16.7457 7.82583 14 11.9289 14C12.6163 14 13.2857 14.0771 13.9289 14.223" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
