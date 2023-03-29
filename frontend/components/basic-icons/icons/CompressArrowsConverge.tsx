
import React from 'react'
import { IconI } from '../types'
export default function CompressArrowsConverge ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M15 6L12 9M12 9L9 6M12 9V2M15 18L12 15M12 15L9 18M12 15V22M6 9L9 12M9 12L6 15M9 12H2M18 9L15 12M15 12L18 15M15 12H22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
