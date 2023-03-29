
import React from 'react'
import { IconI } from '../types'
export default function FocusCameraPlusAdd ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M21 9V5C21 3.89543 20.1046 3 19 3H15M21 15V19C21 20.1046 20.1046 21 19 21H15M3 15V19C3 20.1046 3.89543 21 5 21H9M3 9V5C3 3.89543 3.89543 3 5 3H9M12 9V12M12 12V15M12 12H9M12 12H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
