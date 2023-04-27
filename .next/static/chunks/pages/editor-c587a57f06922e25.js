(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{1012:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});const r=(0,n(4297).Z)("Plus",[["line",{x1:"12",y1:"5",x2:"12",y2:"19",key:"myz83a"}],["line",{x1:"5",y1:"12",x2:"19",y2:"12",key:"1smlys"}]])},6281:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return n(1509)}])},1509:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(7568),i=n(9815),s=n(655),c=n(5893),o=n(6154),a=n(4038),u=n(7551),l=n(1163),d=n(7294),p=n(7484),f=n.n(p),h=n(7337),_=n(4820),j=n(7558),m=n(3464),v=n(3137),y=n(3779),x=n(6713),b=n.n(x),g=n(1012);const w=(0,n(4297).Z)("Copy",[["rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",key:"1ma1o8"}],["path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",key:"pklvoz"}]]);function Z(){var e=(0,m.T)(),t=(0,m.C)(y.dy),n=(0,m.C)(y.ss),p=(0,l.useRouter)(),x=(0,d.useState)(void 0),Z=x[0],C=x[1],N=(0,d.useState)([]),k=N[0],A=N[1],O=(0,d.useState)(!0),E=O[0],I=O[1],S=(0,d.useState)(!1),P=S[0],z=S[1];function D(){return(D=(0,r.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),[4,o.Z.get("/api/projects")];case 1:return e=t.sent(),A(e.data),[3,4];case 2:return t.sent(),A([]),[3,4];case 3:return I(!1),[7];case 4:return[2]}}))}))).apply(this,arguments)}function U(){return(U=(0,r.Z)((function(){var n;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return t.id?"active"!==t.status?((0,v.yw)(e,{text:"Please verify your account!",type:"info"}),[2]):[4,o.Z.post("/api/projects")]:(e((0,v.FA)("register")),[2]);case 1:return n=r.sent(),p.push("/editor/"+n.data.id),[2]}}))}))).apply(this,arguments)}function R(){return(R=(0,r.Z)((function(n){var r;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return t.id?[4,o.Z.post("/api/projects?id="+n.id)]:(e((0,v.FA)("register")),[2]);case 1:return r=s.sent(),A([r.data].concat((0,i.Z)(k))),[2]}}))}))).apply(this,arguments)}function F(){return(F=(0,r.Z)((function(e){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:if(z(!0),!e)return[2];t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,o.Z.delete("/api/projects/".concat(e.id))];case 2:return t.sent(),A(k.filter((function(t){return t.id!==e.id}))),C(void 0),[3,5];case 3:return t.sent(),[3,5];case 4:return z(!1),[7];case 5:return[2]}}))}))).apply(this,arguments)}return(0,d.useEffect)((function(){!function(){D.apply(this,arguments)}()}),[t.id]),(0,d.useEffect)((function(){"failed"!==n&&"completed"!==n||t.id||e((0,v.FA)("register"))}),[n,t.id]),(0,c.jsxs)(a.Z,{title:"Projects - AI Editor",image:"/social-image-ai-editor.png",children:[(0,c.jsxs)("div",{className:b()._,children:[(0,c.jsx)("div",{className:b().head,children:"My Projects:"}),(0,c.jsxs)("div",{className:b().projects,children:[(0,c.jsxs)("button",{className:[b().project,b().new_project].join(" "),onClick:function(){return U.apply(this,arguments)},children:[(0,c.jsx)("span",{className:b().icon,children:(0,c.jsx)(g.Z,{size:16})}),(0,c.jsxs)("span",{className:b().text,children:[(0,c.jsx)("span",{className:b().name,children:"New AI Editor project"}),(0,c.jsx)("span",{className:b().date,children:"Outpaint and edit images"})]})]}),E?(0,c.jsx)("div",{className:b().loader,children:(0,c.jsx)(u.Z,{})}):k.map((function(e){return(0,c.jsxs)("a",{className:b().project,href:"/editor/".concat(e.id),children:[(0,c.jsx)("div",{className:b()._preview,children:(0,c.jsx)("div",{className:b().preview,style:{backgroundImage:"url(".concat(e.previewUrl,")")}})}),(0,c.jsxs)("div",{className:b()._meta,children:[(0,c.jsxs)("div",{className:b().meta,children:[(0,c.jsx)("div",{className:b().name,children:e.name}),(0,c.jsxs)("div",{className:b().date,children:["Edited ",f()(e.updatedAt).fromNow()]})]}),(0,c.jsxs)("div",{className:b().actions,children:[(0,c.jsx)(_.Z,{size:"sm",type:"icon",onClick:function(t){t.preventDefault(),function(e){R.apply(this,arguments)}(e)},children:(0,c.jsx)(w,{})}),(0,c.jsx)(_.Z,{size:"sm",type:"icon",onClick:function(t){t.preventDefault(),C(e)},children:(0,c.jsx)(h.Apg,{})})]})]})]},e.id)}))]})]}),(0,c.jsxs)(j.Z,{title:"Delete ".concat(Z&&Z.name),show:void 0!==Z,onClose:function(){return C(void 0)},actions:[(0,c.jsx)(_.Z,{size:"sm",type:"default",onClick:function(){return C(void 0)},children:"Cancel"},1),(0,c.jsx)(_.Z,{size:"sm",type:"danger",onClick:function(){return function(e){return F.apply(this,arguments)}(Z)},loading:P,children:"Delete"},2)],children:[(0,c.jsxs)("p",{children:["Are you sure that you'd like to delete ",(0,c.jsx)("b",{children:Z&&Z.name})," project?"]}),(0,c.jsx)("p",{children:"Keep in mind that this operation is irreversible. Partially generated frames will still be available in your Gallery."})]})]})}},6713:function(e){e.exports={_:"projects____Jl4cY",head:"projects_head__b2KZn",projects:"projects_projects__S0lMn",loader:"projects_loader__OmN8e",new_project:"projects_new_project__PF5qg",icon:"projects_icon___289Z",name:"projects_name__x7Eun",date:"projects_date__j9DGj",text:"projects_text___g1Cp",project:"projects_project__onaI1",_meta:"projects__meta__b8R5W",meta:"projects_meta__Xalee",actions:"projects_actions__Q3P6E",_preview:"projects__preview__4HV80",preview:"projects_preview__Hj7co"}},9008:function(e,t,n){e.exports=n(5443)},943:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},3375:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(943);var i=n(3375);var s=n(1566);function c(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,i.Z)(e)||(0,s.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(943);function i(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},1955:function(e,t){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var r=function e(t,r){function i(e,i,s){if("undefined"!==typeof document){"number"===typeof(s=n({},r,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var o in s)s[o]&&(c+="; "+o,!0!==s[o]&&(c+="="+s[o].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+c}}return Object.create({set:i,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},i=0;i<n.length;i++){var s=n[i].split("="),c=s.slice(1).join("=");try{var o=decodeURIComponent(s[0]);if(r[o]=t.read(c,o),e===o)break}catch(a){}}return e?r[e]:r}},remove:function(e,t){i(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});t.Z=r}},function(e){e.O(0,[53,884,774,888,179],(function(){return t=6281,e(e.s=t);var t}));var t=e.O();_N_E=t}]);