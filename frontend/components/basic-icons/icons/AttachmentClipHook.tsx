
import React from 'react'
import { IconI } from '../types'
export default function AttachmentClipHook ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.0265L12.8445 19.289C10.5925 21.5707 6.94113 21.5707 4.68905 19.289C2.43698 17.0074 2.43698 13.3081 4.68905 11.0265L11.4853 4.14106C12.9867 2.61997 15.4209 2.61997 16.9223 4.14106C18.4236 5.66215 18.4236 8.12832 16.9223 9.64941L10.126 16.5348C9.37535 17.2954 8.15824 17.2954 7.40754 16.5348C6.65685 15.7743 6.65685 14.5412 7.40754 13.7807L14.2038 6.89524" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
