
import React from 'react'
import { IconI } from '../types'
export default function NotificationOffBellAlarm ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M16.7438 17H3L3.67285 15.9408C4.89971 14.0096 5.55243 11.7583 5.55243 9.45798V8.4C5.55243 7.61493 5.69119 6.86288 5.94511 6.16791M8.46159 3C9.4362 2.36687 10.5937 2 11.8353 2C15.3053 2 18.1182 4.86537 18.1182 8.4V9.45798C18.1182 11.0231 18.4204 12.5656 19 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 20.8889V20.8889C11.5344 21.4827 12.4656 21.4827 13 20.8889V20.8889" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
