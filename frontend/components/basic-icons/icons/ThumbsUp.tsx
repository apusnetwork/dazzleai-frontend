
import React from 'react'
import { IconI } from '../types'
export default function ThumbsUp ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M7.08409 10.6629L10.3393 3.23907C10.79 2.21121 11.9999 1.68012 12.9811 2.2056C14.5081 3.0234 14.2018 3.78995 14.2018 8.60158H19.9659C21.2123 8.60158 22.1654 9.72766 21.9759 10.9763L20.568 20.2521C20.4154 21.2577 19.5618 22 18.558 22H7.08409M7.08409 10.6629V22M7.08409 10.6629H4.03364C2.91049 10.6629 2 11.5857 2 12.7242V19.9387C2 21.0771 2.91049 22 4.03364 22L7.08409 22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
