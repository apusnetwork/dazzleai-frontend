(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{36111:function(e,t,i){"use strict";var n=i(64836);t.Z=void 0;var r=n(i(64938)),a=i(85893),s=(0,r.default)((0,a.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.Z=s},91811:function(e,t,i){"use strict";var n=i(64836);t.Z=void 0;var r=n(i(64938)),a=i(85893),s=(0,r.default)((0,a.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");t.Z=s},40759:function(e,t,i){"use strict";var n=i(64836);t.Z=void 0;var r=n(i(64938)),a=i(85893),s=(0,r.default)((0,a.jsx)("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt");t.Z=s},77834:function(e,t,i){"use strict";var n=i(64836);t.Z=void 0;var r=n(i(64938)),a=i(85893),s=(0,r.default)((0,a.jsx)("path",{d:"m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"}),"ThumbUpOffAlt");t.Z=s},78672:function(e,t,i){"use strict";i.d(t,{ZP:function(){return j}});var n=i(63366),r=i(87462),a=i(94780),s=i(73935),o=i(58271),l=i(54502),c=i(95408),d=i(98700),u=i(59766),h=i(30067),m=i(86010),f=i(67294),p=i(34867);function g(e){return(0,p.Z)("MuiMasonry",e)}(0,i(1588).Z)("MuiMasonry",["root"]);var v=i(85893);const x=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],b=e=>Number(e.replace("px","")),y={flexBasis:"100%",width:0,margin:0,padding:0},N=(0,o.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let i={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const n={};if(e.isSSR){const a={},s=b(t.spacing(e.defaultSpacing));for(let t=1;t<=e.defaultColumns;t+=1)a[`&:nth-of-type(${e.defaultColumns}n+${t%e.defaultColumns})`]={order:t};return n.height=e.defaultHeight,n.margin=-s/2,n["& > *"]=(0,r.Z)({},i["& > *"],a,{margin:s/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${s}px)`}),(0,r.Z)({},i,n)}const a=(0,c.P$)({values:e.spacing,breakpoints:t.breakpoints.values}),s=(0,d.hB)(t);i=(0,u.Z)(i,(0,c.k9)({theme:t},a,(t=>{let i;if("string"===typeof t&&!Number.isNaN(Number(t))||"number"===typeof t){const e=Number(t);i=(0,d.NA)(s,e)}else i=t;return(0,r.Z)({margin:`calc(0px - (${i} / 2))`,"& > *":{margin:`calc(${i} / 2)`}},e.maxColumnHeight&&{height:"number"===typeof i?Math.ceil(e.maxColumnHeight+b(i)):`calc(${e.maxColumnHeight}px + ${i})`})})));const o=(0,c.P$)({values:e.columns,breakpoints:t.breakpoints.values});return i=(0,u.Z)(i,(0,c.k9)({theme:t},o,(e=>({"& > *":{width:`calc(${`${(100/Number(e)).toFixed(2)}%`} - ${"string"===typeof a&&!Number.isNaN(Number(a))||"number"===typeof a?(0,d.NA)(s,Number(a)):"0px"})`}})))),"object"===typeof a&&(i=(0,u.Z)(i,(0,c.k9)({theme:t},a,((e,t)=>{if(t){const i=Number(e),n=Object.keys(o).pop(),r=(0,d.NA)(s,i);return{"& > *":{width:`calc(${`${(100/("object"===typeof o?o[t]||o[n]:o)).toFixed(2)}%`} - ${r})`}}}return null})))),i}));var j=f.forwardRef((function(e,t){const i=(0,l.Z)({props:e,name:"MuiMasonry"}),{children:o,className:c,component:d="div",columns:u=4,spacing:p=1,defaultColumns:j,defaultHeight:w,defaultSpacing:C}=i,Z=(0,n.Z)(i,x),S=f.useRef(),[M,_]=f.useState(),E=!M&&w&&void 0!==j&&void 0!==C,[k,$]=f.useState(E?j-1:0),R=(0,r.Z)({},i,{spacing:p,columns:u,maxColumnHeight:M,defaultColumns:j,defaultHeight:w,defaultSpacing:C,isSSR:E}),z=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},g,t)})(R),H=f.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((e=>{if(!S.current||!e||0===e.length)return;const t=S.current,i=S.current.firstChild,n=t.clientWidth,r=i.clientWidth;if(0===n||0===r)return;const a=window.getComputedStyle(i),o=b(a.marginLeft),l=b(a.marginRight),c=Math.round(n/(r+o+l)),d=new Array(c).fill(0);let u=!1;t.childNodes.forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE||"line-break"===e.dataset.class||u)return;const t=window.getComputedStyle(e),i=b(t.marginTop),n=b(t.marginBottom),r=b(t.height)?Math.ceil(b(t.height))+i+n:0;if(0!==r){for(let t=0;t<e.childNodes.length;t+=1){const i=e.childNodes[t];if("IMG"===i.tagName&&0===i.clientHeight){u=!0;break}}if(!u){const t=d.indexOf(Math.min(...d));d[t]+=r;const i=t+1;e.style.order=i}}else u=!0})),u||s.flushSync((()=>{_(Math.max(...d)),$(c>0?c-1:0)}))})));f.useEffect((()=>{const e=H.current;if(void 0!==e)return S.current&&S.current.childNodes.forEach((t=>{e.observe(t)})),()=>e?e.disconnect():{}}),[u,p,o]);const A=(0,h.Z)(t,S),O=new Array(k).fill("").map(((e,t)=>(0,v.jsx)("span",{"data-class":"line-break",style:(0,r.Z)({},y,{order:t+1})},t)));return(0,v.jsxs)(N,(0,r.Z)({as:d,className:(0,m.Z)(z.root,c),ref:A,ownerState:R},Z,{children:[o,O]}))}))},54887:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dreambooth/tools/outpainting",function(){return i(78832)}])},78832:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var n=i(85893),r=i(17337),a=i(44820),s=i(34038),o=i(80690),l=i(94162),c=i.n(l);function d(e){var t=e.title,i=void 0===t?(0,n.jsx)(n.Fragment,{children:"Ready to get started?"}):t,r=e.text,a=void 0===r?"Explore our tools, or create an account.":r,s=e.button;return(0,n.jsx)("section",{className:c()._large_cta,children:(0,n.jsx)("div",{className:c().large_cta,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:c().title,children:i}),(0,n.jsx)("p",{className:c().text,children:a}),(0,n.jsx)("div",{className:c().cta,children:s})]})})})}var u=i(13464),h=i(83137),m=i(44223),f=i.n(m);function p(){var e=(0,u.T)();return(0,n.jsx)(s.Z,{title:"Stable Diffusion Outpainting",description:"",canonical:"/tools/outpainting",image:"/social-image-ai-editor.png",children:(0,n.jsxs)("div",{className:f().bg,children:[(0,n.jsx)("div",{className:f()._hero,children:(0,n.jsxs)("div",{className:f().hero,children:[(0,n.jsxs)("h1",{className:f().h1,children:["Stable Diffusion Outpainting ",(0,n.jsx)("br",{}),"with AI Editor"]}),(0,n.jsx)("h2",{className:f().p1,children:"Transform your images like never before with our AI Editor. Use Stable Diffusion outpainting to expand your pictures beyond their original borders, or modify them using only words and creativity. Try it now and see the magic for yourself."}),(0,n.jsxs)("div",{className:f().cta,children:[(0,n.jsxs)(a.Z,{size:"xl",href:"/editor",children:["Start creating now",(0,n.jsx)(r.olP,{style:{marginLeft:12,marginRight:0}})]}),(0,n.jsx)("small",{children:"Generate 100 images every month for free \xb7 No credit card required"})]})]})}),(0,n.jsx)("div",{className:f()._preview,children:(0,n.jsx)("div",{className:f().preview,children:(0,n.jsx)("div",{className:f().preview_video,children:(0,n.jsx)("video",{src:"/videos/ai-editor-full.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})})}),(0,n.jsx)(o.GN,{caption:"Outpainting",title:"Expand pictures beyond its borders",text:"Use Stable Diffusion outpainting to expand pictures beyond their original borders. Create large-sized detailed graphics or extend existing images without limits. Use your imagination and generate missing parts of images with artificial intelligence.",visual:(0,n.jsx)("video",{src:"/guides/outpainting-simple-photo.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),(0,n.jsx)(o.GN,{caption:"Inpainting",title:"Remove objects from photos",text:"Remove any object or person from your image. Just erase unwanted parts of the picture and describe what to render in empty space. You can also change any visual features on your photos.",visual:(0,n.jsx)("video",{src:"/videos/inpainting.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),reverse:!0}),(0,n.jsx)(o.GN,{caption:"Find & Replace",title:"Edit pictures within seconds",text:"Change details of existing images with ease using the 'find and replace' feature. Tell AI what should be replaced and describe the new edit in detail. Enhance or edit images using only words.",visual:(0,n.jsx)("video",{src:"/videos/find-replace.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),(0,n.jsx)(d,{button:(0,n.jsx)(a.Z,{size:"lg",onClick:function(){return e((0,h.FA)("register"))},children:"Get started. It's Free."})})]})})}},44223:function(){}},function(e){e.O(0,[662,84,53,884,765,690,774,888,179],(function(){return t=54887,e(e.s=t);var t}));var t=e.O();_N_E=t}]);