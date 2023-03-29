
import React from 'react'
import { IconI } from '../types'
export default function Pin ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M15.0538 16.8032L20.8584 6.74939C21.1499 6.2446 20.9769 5.59914 20.4721 5.30771L14.9882 2.14157C14.4834 1.85014 13.838 2.02309 13.5465 2.52787L7.74196 12.5817M15.0538 16.8032L11.3979 14.6925M15.0538 16.8032L17.7958 18.3863M7.74196 12.5817L5 10.9986M7.74196 12.5817L11.3979 14.6925M11.3979 14.6925L7.17638 22.0044" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
