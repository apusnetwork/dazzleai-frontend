
import React from 'react'
import { IconI } from '../types'
export default function MicrophoneMusicTalk ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M12 17C8.13401 17 5 13.866 5 10M12 17C15.866 17 19 13.866 19 10M12 17V21M15 22H9M12 13C10.3431 13 9 11.5225 9 9.7V5.3C9 3.47746 10.3431 2 12 2C13.6569 2 15 3.47746 15 5.3V9.7C15 11.5225 13.6569 13 12 13Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
