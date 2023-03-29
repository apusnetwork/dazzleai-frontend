
import React from 'react'
import { IconI } from '../types'
export default function FlagCountry ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M20 15.0233C18.8333 15.6877 15.6 16.722 12 15.1273C10.5 14.2968 6.8 13.0301 4 15.0234M4 21.9326V2.99656C6.8 1.00328 10.5 2.26993 12 3.10047C15.6 4.69509 18.8333 3.66084 20 2.99642V14.9561" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
