
import React from 'react'
import { IconI } from '../types'
export default function HeadphoneEarphoneMusic ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M5 14V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V14M4 22H6.71428C7.26657 22 7.71429 21.5523 7.71429 21V15C7.71429 14.4477 7.26657 14 6.71429 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22ZM20 22H17.2857C16.7334 22 16.2857 21.5523 16.2857 21V15C16.2857 14.4477 16.7334 14 17.2857 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
