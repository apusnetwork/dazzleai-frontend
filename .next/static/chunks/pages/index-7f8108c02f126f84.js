(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5075)}])},79974:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var i=s(85893),r=s(94162),n=s.n(r);function a(e){var t=e.title,s=e.subtitle,r=e.visual,a=e.socialProof,c=e.cta;return(0,i.jsx)("section",{className:n()._hero,children:(0,i.jsxs)("div",{className:n().hero,children:[(0,i.jsxs)("div",{className:n().content,children:[(0,i.jsx)("h1",{className:n().title,children:t}),(0,i.jsx)("div",{className:n().cta,children:c}),(0,i.jsx)("h2",{className:n().hero_subtitle,children:s}),(0,i.jsx)("div",{className:n().social_proof,children:a})]}),(0,i.jsx)("div",{className:n().visual,children:r})]})})}},89917:function(e,t,s){"use strict";s.d(t,{GN:function(){return a},mw:function(){return p}});var i=s(85893),r=s(94162),n=s.n(r);function a(e){var t=e.title,s=e.caption,r=e.text,a=e.visual,c=e.reverse;return(0,i.jsxs)("section",{className:[n().feature_row,c?n().reverse:""].join(" "),children:[(0,i.jsxs)("div",{className:n().content,children:[s?(0,i.jsx)("h3",{className:n().caption,children:s}):null,(0,i.jsx)("h2",{className:n().title,children:t}),(0,i.jsx)("p",{className:n().text,children:r})]}),(0,i.jsx)("div",{className:n()._visual,children:a})]})}s(79974),s(4298);var c=s(80714),o=s(41664),_=s.n(o),l=s(67294),u=s(29918),d=s.n(u),m=s(84645),f=s.n(m),h=s(34993),g="/_next/static/media/default_avatar.765939bc.webp",b=function(e){var t=e.model,s=(0,h.W)().show18Plus,r=(0,l.useState)(!1),a=r[0],c=r[1];return(0,l.useEffect)((function(){c(s)}),[s]),(0,i.jsx)(_(),{href:"/generate?img=".concat(t.reuse_img,"&shared=true"),children:(0,i.jsx)("div",{className:n().column,children:(0,i.jsxs)("div",{className:n().image_wrapper,children:[(0,i.jsx)("img",{src:"https://s3.apus.network/"+t.reuse_img,alt:"",style:{filter:t.nsfw&&!a?"blur(10px)":""},className:"z-0"},t.id),(0,i.jsxs)("div",{className:n().image_badge,children:[t.useCount," runs"]}),t.nsfw&&(0,i.jsxs)("div",{className:n().image_18_badge,onClick:function(e){e.preventDefault(),e.stopPropagation(),c((function(e){return!e}))},children:["18+ ",a?(0,i.jsx)(f(),{className:"leading-0 ml-1",rev:""}):(0,i.jsx)(d(),{className:"leading-0 ml-1",rev:""})]}),(0,i.jsx)("div",{className:n().image_name,children:t.name}),(0,i.jsx)("img",{className:n().image_avatar_url,src:t.params.author_avatar||g})]})})})};function p(e){var t=e.images;e.columns;return(0,i.jsx)("div",{className:n().image_grid_visual,children:(0,i.jsx)(c.ZP,{columns:4,spacing:2,children:t.map((function(e){return(0,i.jsx)(b,{model:e})}))})})}},5075:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var i=s(47568),r=s(29815),n=s(34051),a=s.n(n),c=s(85893),o=s(44820),_=s(34038),l=s(89917),u=s(79974),d=s(6154),m=s(67294);function f(e){e.exampleArt;var t=(0,m.useState)(!0),s=(t[0],t[1]),n=(0,m.useState)([]),f=n[0],h=n[1];function g(){return(g=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("/api/models?status=active&public=true");case 2:t=e.sent,h((0,r.Z)(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,m.useEffect)((function(){s(!1),function(){g.apply(this,arguments)}()}),[]),(0,c.jsx)(_.Z,{title:"Everything you need to create images with AI",description:"Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more.",canonical:"/",footer:!1,children:(0,c.jsx)(u.Z,{title:(0,c.jsxs)(c.Fragment,{children:["We Use a\xa0",(0,c.jsx)("span",{children:"decentralized"}),"GPU network to help model creators\xa0",(0,c.jsx)("span",{children:"make money"})]}),subtitle:"Amazing pictures generated deployed models, quick try",cta:(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,c.jsxs)("div",{style:{maxWidth:420,width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,c.jsx)(o.Z,{size:"xl",openInNewTab:!0,href:"https://forms.gle/z9H5jxU3DCAV95dQ9",children:"Host Model"}),(0,c.jsx)(o.Z,{type:"accent-border",size:"xl",openInNewTab:!0,href:"https://forms.gle/XsaxVmyRsUCEAd199",children:"Host Node"})]})}),visual:(0,c.jsx)(l.mw,{images:f.filter((function(e){return Boolean(e.reuse_img)}))})})})}},94162:function(e){e.exports={_hero:"website__hero__49ENh",hero:"website_hero__ssYjU",content:"website_content__DPLzT",title:"website_title__lStXQ",hero_subtitle:"website_hero_subtitle__syX5G",subtitle:"website_subtitle__igLVp",cta:"website_cta__vuIFI",social_proof:"website_social_proof__zvY01",feature_row:"website_feature_row__xIMTc",caption:"website_caption__5qgsO",text:"website_text__9_aXE",_visual:"website__visual__tMsSn",reverse:"website_reverse__1_ZKr",features_grid:"website_features_grid__i8RTU",heading:"website_heading__MIP9r",grid:"website_grid__MYDkl",feature_card:"website_feature_card__cgxF6",icon:"website_icon__Gue5X",image_grid_visual:"website_image_grid_visual__A9KrT",column:"website_column__6Z67w",image_wrapper:"website_image_wrapper__JDScv",image_name:"website_image_name__OitrX",image_badge:"website_image_badge__o4ekU",image_18_badge:"website_image_18_badge__B9iOJ",image_avatar_url:"website_image_avatar_url__TIcKv",_large_cta:"website__large_cta__JWVIc",large_cta:"website_large_cta__7nFVV",faq:"website_faq__a5XCs",questions:"website_questions__hJhPl",faq_question:"website_faq_question__bHtwU",question:"website_question__XBqiI",answer:"website_answer__Ag0J3",open:"website_open__3Goe4"}},20943:function(e,t,s){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,i=new Array(t);s<t;s++)i[s]=e[s];return i}s.d(t,{Z:function(){return i}})},13375:function(e,t,s){"use strict";function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}s.d(t,{Z:function(){return i}})},29815:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var i=s(20943);var r=s(13375);var n=s(91566);function a(e){return function(e){if(Array.isArray(e))return(0,i.Z)(e)}(e)||(0,r.Z)(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var i=s(20943);function r(e,t){if(e){if("string"===typeof e)return(0,i.Z)(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(s):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?(0,i.Z)(e,t):void 0}}}},function(e){e.O(0,[995,714,53,884,765,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);