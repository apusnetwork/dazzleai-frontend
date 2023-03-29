
import React from 'react'
import { IconI } from '../types'
export default function WifiConnection ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C4.88494 6.10123 8.31702 5 12 5C15.683 5 19.1151 6.10123 22 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.99995 11.8774C7.05917 10.6054 9.44994 9.87744 12 9.87744C14.55 9.87744 16.9407 10.6054 19 11.8774" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.07355 15.4549C10.0119 15.0016 11.0216 14.7549 12.0735 14.7549C13.1255 14.7549 14.1352 15.0016 15.0735 15.4549" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9181 19.1465L11.902 19.1304" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
