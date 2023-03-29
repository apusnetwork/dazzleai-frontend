
import React from 'react'
import { IconI } from '../types'
export default function AlphabetQ ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M12.8192 12.8192L20 20M18.9927 11.4964C18.9927 15.6365 15.6365 18.9927 11.4964 18.9927C7.35624 18.9927 4 15.6365 4 11.4964C4 7.35624 7.35624 4 11.4964 4C15.6365 4 18.9927 7.35624 18.9927 11.4964Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
