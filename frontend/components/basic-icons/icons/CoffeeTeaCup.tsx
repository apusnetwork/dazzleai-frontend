
import React from 'react'
import { IconI } from '../types'
export default function CoffeeTeaCup ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M17 6H17.9098C19.6165 6 21 7.38352 21 9.09017C21 10.2606 20.3387 11.3307 19.2918 11.8541L17 13.5M3 3V18C3 19.6569 4.34315 21 6 21H14C15.6569 21 17 19.6569 17 18V3H3Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
