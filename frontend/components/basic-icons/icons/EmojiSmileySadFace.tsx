
import React from 'react'
import { IconI } from '../types'
export default function EmojiSmileySadFace ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M15.0161 10.0161L15 10M9.01611 10.0161L9 10M15.5789 16.4247C15.0403 15.8338 13.9371 15 12 15C10.0629 15 8.9597 15.8338 8.42109 16.4247M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
