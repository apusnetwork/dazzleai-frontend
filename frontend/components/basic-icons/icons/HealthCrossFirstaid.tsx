
import React from 'react'
import { IconI } from '../types'
export default function HealthCrossFirstaid ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M21 14V10C21 9.44772 20.5523 9 20 9H15L15 4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V9L4 9C3.44772 9 3 9.44772 3 10V14C3 14.5523 3.44772 15 4 15H9L9 20C9 20.5523 9.44771 21 10 21H14C14.5523 21 15 20.5523 15 20V15L20 15C20.5523 15 21 14.5523 21 14Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
