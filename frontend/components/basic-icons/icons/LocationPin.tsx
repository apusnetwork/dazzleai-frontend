
import React from 'react'
import { IconI } from '../types'
export default function LocationPin ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M6.0325 15.2873L12.0001 22L17.9677 15.2873C22.5447 10.1388 18.8894 2 12.0001 2C5.11079 2 1.45549 10.1388 6.0325 15.2873Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="10" r="3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
