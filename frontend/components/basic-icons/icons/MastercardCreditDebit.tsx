
import React from 'react'
import { IconI } from '../types'
export default function MastercardCreditDebit ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="15" cy="13" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3229 11.5C12.9703 11.1888 12.5072 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C12.5072 15 12.9703 14.8112 13.3229 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
