
import React from 'react'
import { IconI } from '../types'
export default function CoffeeTeaCupAlt ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M17 11H18.0185C19.6652 11 21 12.3348 21 13.9815C21 15.0731 20.4048 16.0664 19.4676 16.5872C19.2473 16.7096 19.0167 16.8138 18.7995 16.9416L17 18M5 2V4M9 2V4M13 2V4M3 8V19C3 20.6569 4.34315 22 6 22H14C15.6569 22 17 20.6569 17 19V8H3Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
