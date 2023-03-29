
import React from 'react'
import { IconI } from '../types'
export default function CrosshairTargetCenter ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H16M12 22C6.47715 22 2 17.5228 2 12M12 22V16M2 12C2 6.47715 6.47715 2 12 2M2 12L8 12M12 2V8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
