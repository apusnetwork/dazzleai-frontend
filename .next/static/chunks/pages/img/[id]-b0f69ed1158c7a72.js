(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[677],{1205:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/img/[id]",function(){return n(4011)}])},4011:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return a},default:function(){return s}});var r=n(6042),o=n(5893),i=n(7577),c=n(4038),u=n(1163),a=!0;function s(e){var t=(0,u.useRouter)(),n=e.modelTask&&e.modelTask.params.prompt||"",a=n.split(/[,|.]/gi),s=a[0].charAt(0).toUpperCase()+a[0].slice(1)+".";return"real-esrgan"!==e.modelTask.model&&"gfpgan"!==e.modelTask.model||(s="Enhanced image."),"image-mixer"===e.modelTask.model&&(s="Mixed image."),(0,o.jsx)(c.Z,{title:s+" Generated with Stable Diffusion",description:n,canonical:"/img/".concat(t.query.id),image:e.url,footer:!1,children:(0,o.jsx)(i.Z,(0,r.Z)({},e))})}},9008:function(e,t,n){e.exports=n(5443)},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},1955:function(e,t){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var r=function e(t,r){function o(e,o,i){if("undefined"!==typeof document){"number"===typeof(i=n({},r,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+c}}return Object.create({set:o,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var i=n[o].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(r[u]=t.read(c,u),e===u)break}catch(a){}}return e?r[e]:r}},remove:function(e,t){o(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});t.Z=r}},function(e){e.O(0,[584,884,71,774,888,179],(function(){return t=1205,e(e.s=t);var t}));var t=e.O();_N_E=t}]);