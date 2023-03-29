
import React from 'react'
import { IconI } from '../types'
export default function ModelDiamond ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M2 10L6 4H18L22 10M2 10L12 20M2 10H22M12 20L22 10M12 20L16 10L12 4L8 10L12 20Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
