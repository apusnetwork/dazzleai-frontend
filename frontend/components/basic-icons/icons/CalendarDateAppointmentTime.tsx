
import React from 'react'
import { IconI } from '../types'
export default function CalendarDateAppointmentTime ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M8 4H5C3.89543 4 3 4.89543 3 6V9M8 4H16M8 4V2M8 4V6M16 4H19C20.1046 4 21 4.89543 21 6V9H3M16 4V2M16 4V6M3 9V20C3 21.1046 3.89543 22 5 22H10M17 15.25V17L18.25 18.25M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
