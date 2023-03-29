
import React from 'react'
import { IconI } from '../types'
export default function PoundCurrencyMoney ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M3 21H4.21053C6.30339 21 8 19.3034 8 17.2105V9.5C8 5.91015 10.9101 3 14.5 3H15C17.087 3 18.9251 4.06551 20 5.6822M4 21H21M3 13H16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
