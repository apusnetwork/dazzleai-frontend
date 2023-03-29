
import React from 'react'
import { IconI } from '../types'
export default function GamingPad ({color = 'currentColor', size = 24, fill = 'none', strokeWidth = 2, className = '', style={} }: IconI): JSX.Element {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M8 9V13M6 11H10M17 10.0161L17.0161 10M14 12.0161L14.0161 12M16.1836 5H7.81641C5.60774 5 3.71511 6.57359 3.32002 8.73845L2.0451 15.7241C1.84609 16.8145 2.31653 17.9185 3.24219 18.5333C4.3485 19.268 5.82159 19.1227 6.76177 18.1861L7.99615 16.9563C8.36513 16.5887 8.86556 16.3822 9.38737 16.3822H14.6126C15.1344 16.3822 15.6349 16.5887 16.0038 16.9563L17.2382 18.1861C18.1784 19.1227 19.6515 19.268 20.7578 18.5333C21.6835 17.9185 22.1539 16.8145 21.9549 15.7241L20.68 8.73845C20.2849 6.57359 18.3923 5 16.1836 5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>);
}
