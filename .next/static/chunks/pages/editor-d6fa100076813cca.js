(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{1012:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});const n=(0,r(4297).Z)("Plus",[["line",{x1:"12",y1:"5",x2:"12",y2:"19",key:"myz83a"}],["line",{x1:"5",y1:"12",x2:"19",y2:"12",key:"1smlys"}]])},6281:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return r(1509)}])},1509:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(7568),i=r(9815),c=r(4051),s=r.n(c),o=r(5893),a=r(6154),u=r(4038),p=r(7551),l=r(1163),d=r(7294),f=r(7484),j=r.n(f),m=r(2492),h=r(4820),v=r(7558),_=r(3464),x=r(3137),y=r(3779),b=r(6713),w=r.n(b);const g=(0,r(4297).Z)("Copy",[["rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",key:"1ma1o8"}],["path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",key:"pklvoz"}]]);var Z=r(1012);function k(){var e=(0,_.T)(),t=(0,_.C)(y.dy),r=(0,_.C)(y.ss),c=(0,l.useRouter)(),f=(0,d.useState)(void 0),b=f[0],k=f[1],C=(0,d.useState)([]),N=C[0],A=C[1],O=(0,d.useState)(!0),E=O[0],I=O[1],S=(0,d.useState)(!1),P=S[0],z=S[1];function D(){return(D=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/api/projects");case 3:t=e.sent,A(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),A([]);case 10:return e.prev=10,I(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))).apply(this,arguments)}function U(){return(U=(0,n.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.id){r.next=3;break}return e((0,x.FA)("register")),r.abrupt("return");case 3:if("active"===t.status){r.next=6;break}return(0,x.yw)(e,{text:"Please verify your account!",type:"info"}),r.abrupt("return");case 6:return r.next=8,a.Z.post("/api/projects");case 8:n=r.sent,c.push("/editor/"+n.data.id);case 10:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function R(){return(R=(0,n.Z)(s().mark((function r(n){var c;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.id){r.next=3;break}return e((0,x.FA)("register")),r.abrupt("return");case 3:return r.next=5,a.Z.post("/api/projects?id="+n.id);case 5:c=r.sent,A([c.data].concat((0,i.Z)(N)));case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function F(){return(F=(0,n.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z(!0),t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,a.Z.delete("/api/projects/".concat(t.id));case 6:A(N.filter((function(e){return e.id!==t.id}))),k(void 0),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:return e.prev=12,z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[3,10,12,15]])})))).apply(this,arguments)}return(0,d.useEffect)((function(){!function(){D.apply(this,arguments)}()}),[t.id]),(0,d.useEffect)((function(){"failed"!==r&&"completed"!==r||t.id||e((0,x.FA)("register"))}),[r,t.id]),(0,o.jsxs)(u.Z,{title:"Projects - AI Editor",image:"/social-image-ai-editor.png",children:[(0,o.jsxs)("div",{className:w()._,children:[(0,o.jsx)("div",{className:w().head,children:"My Projects:"}),(0,o.jsxs)("div",{className:w().projects,children:[(0,o.jsxs)("button",{className:[w().project,w().new_project].join(" "),onClick:function(){return U.apply(this,arguments)},children:[(0,o.jsx)("span",{className:w().icon,children:(0,o.jsx)(Z.Z,{size:16})}),(0,o.jsxs)("span",{className:w().text,children:[(0,o.jsx)("span",{className:w().name,children:"New AI Editor project"}),(0,o.jsx)("span",{className:w().date,children:"Outpaint and edit images"})]})]}),E?(0,o.jsx)("div",{className:w().loader,children:(0,o.jsx)(p.Z,{})}):N.map((function(e){return(0,o.jsxs)("a",{className:w().project,href:"/editor/".concat(e.id),children:[(0,o.jsx)("div",{className:w()._preview,children:(0,o.jsx)("div",{className:w().preview,style:{backgroundImage:"url(".concat(e.previewUrl,")")}})}),(0,o.jsxs)("div",{className:w()._meta,children:[(0,o.jsxs)("div",{className:w().meta,children:[(0,o.jsx)("div",{className:w().name,children:e.name}),(0,o.jsxs)("div",{className:w().date,children:["Edited ",j()(e.updatedAt).fromNow()]})]}),(0,o.jsxs)("div",{className:w().actions,children:[(0,o.jsx)(h.Z,{size:"sm",type:"icon",onClick:function(t){t.preventDefault(),function(e){R.apply(this,arguments)}(e)},children:(0,o.jsx)(g,{})}),(0,o.jsx)(h.Z,{size:"sm",type:"icon",onClick:function(t){t.preventDefault(),k(e)},children:(0,o.jsx)(m.Apg,{})})]})]})]},e.id)}))]})]}),(0,o.jsxs)(v.Z,{title:"Delete ".concat(b&&b.name),show:void 0!==b,onClose:function(){return k(void 0)},actions:[(0,o.jsx)(h.Z,{size:"sm",type:"default",onClick:function(){return k(void 0)},children:"Cancel"},1),(0,o.jsx)(h.Z,{size:"sm",type:"danger",onClick:function(){return function(e){return F.apply(this,arguments)}(b)},loading:P,children:"Delete"},2)],children:[(0,o.jsxs)("p",{children:["Are you sure that you'd like to delete ",(0,o.jsx)("b",{children:b&&b.name})," project?"]}),(0,o.jsx)("p",{children:"Keep in mind that this operation is irreversible. Partially generated frames will still be available in your Gallery."})]})]})}},6713:function(e){e.exports={_:"projects____Jl4cY",head:"projects_head__b2KZn",projects:"projects_projects__S0lMn",loader:"projects_loader__OmN8e",new_project:"projects_new_project__PF5qg",icon:"projects_icon___289Z",name:"projects_name__x7Eun",date:"projects_date__j9DGj",text:"projects_text___g1Cp",project:"projects_project__onaI1",_meta:"projects__meta__b8R5W",meta:"projects_meta__Xalee",actions:"projects_actions__Q3P6E",_preview:"projects__preview__4HV80",preview:"projects_preview__Hj7co"}},9008:function(e,t,r){e.exports=r(5443)},943:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},3375:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return n}})},9534:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,{Z:function(){return n}})},9815:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(943);var i=r(3375);var c=r(1566);function s(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,i.Z)(e)||(0,c.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(943);function i(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},1955:function(e,t){"use strict";function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var n=function e(t,n){function i(e,i,c){if("undefined"!==typeof document){"number"===typeof(c=r({},n,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var o in c)c[o]&&(s+="; "+o,!0!==c[o]&&(s+="="+c[o].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+s}}return Object.create({set:i,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},i=0;i<r.length;i++){var c=r[i].split("="),s=c.slice(1).join("=");try{var o=decodeURIComponent(c[0]);if(n[o]=t.read(s,o),e===o)break}catch(a){}}return e?n[e]:n}},remove:function(e,t){i(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});t.Z=n}},function(e){e.O(0,[884,774,888,179],(function(){return t=6281,e(e.s=t);var t}));var t=e.O();_N_E=t}]);