
import React from 'react'
import { IconI } from '../types'
export default function FireTrendHot ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M6.99998 9C11.8752 5.5 11.3921 3.5 11.3921 2C17 6 14.8333 10.5 13.5 12.5C15.1 12.1 18 10 18.5 9C23.5 16.5 17.8921 21.1667 14.8921 22C12.4921 21.6 10.5588 18.1667 9.89211 16.5C8.69211 19.3 9.05878 21.3333 9.39211 22C2.62477 19 2.12475 12.5 6.99998 9Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
