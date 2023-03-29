
import React from 'react'
import { IconI } from '../types'
export default function InfinityLoop ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M12 12.0097C12 12.0097 8.97434 7.14626 5.00669 8.1316C0.99782 9.12718 0.997721 14.8724 5.00669 15.8676C8.97433 16.8525 12 12.0097 12 12.0097ZM12 12.0097C12 12.0097 15.0257 16.8527 18.9933 15.8676C23.0023 14.8723 23.0022 9.12725 18.9933 8.13168C15.0257 7.14636 12 12.0097 12 12.0097Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
