
import React from 'react'
import { IconI } from '../types'
export default function EmojiSmileyDizzyHappy ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C8 15 9 17 12 17C15 17 16 15 16 15M16 9L15 10M15 10L14 11M15 10L16 11M15 10L14 9M10 9L9 10M9 10L8 11M9 10L10 11M9 10L8 9M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
