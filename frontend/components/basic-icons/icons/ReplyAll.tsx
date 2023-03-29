
import React from 'react'
import { IconI } from '../types'
export default function ReplyAll ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M13 5.95795L7 11.9036L13 17.765V13.7309C13.5339 13.609 13.9589 13.5734 14.5295 13.5734C17.9353 13.5734 20.8088 15.8657 21.708 19.0001C21.8981 18.3374 22 17.6371 22 16.9129C22 12.7631 18.6553 9.39898 14.5295 9.39898C13.9589 9.39898 13.5339 9.42114 13 9.543L13 5.95795Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6L2 12L8 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
