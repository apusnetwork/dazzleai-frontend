(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{76489:function(e,t){"use strict";var i=Object.prototype.toString,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(e){return-1!==e.indexOf("%")?decodeURIComponent(e):e}function r(e){return encodeURIComponent(e)}function a(e,t){try{return t(e)}catch(i){return e}}},48312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5075)}])},79974:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var s=i(85893),n=i(94162),r=i.n(n);function a(e){var t=e.title,i=e.subtitle,n=e.subtitle2,a=e.visual,c=e.socialProof,o=e.cta;return(0,s.jsx)("section",{className:r()._hero,children:(0,s.jsxs)("div",{className:r().hero,children:[(0,s.jsxs)("div",{className:r().content,children:[(0,s.jsx)("h1",{className:r().title,children:t}),(0,s.jsx)("h2",{className:r().hero_subtitle,style:{marginTop:20},children:n}),(0,s.jsx)("div",{className:r().cta,children:o}),(0,s.jsx)("h2",{className:r().hero_subtitle,children:i}),(0,s.jsx)("div",{className:r().social_proof,children:c})]}),(0,s.jsx)("div",{className:r().visual,children:a})]})})}},89917:function(e,t,i){"use strict";i.d(t,{GN:function(){return a},mw:function(){return w}});var s=i(85893),n=i(94162),r=i.n(n);function a(e){var t=e.title,i=e.caption,n=e.text,a=e.visual,c=e.reverse;return(0,s.jsxs)("section",{className:[r().feature_row,c?r().reverse:""].join(" "),children:[(0,s.jsxs)("div",{className:r().content,children:[i?(0,s.jsx)("h3",{className:r().caption,children:i}):null,(0,s.jsx)("h2",{className:r().title,children:t}),(0,s.jsx)("p",{className:r().text,children:n})]}),(0,s.jsx)("div",{className:r()._visual,children:a})]})}i(79974),i(4298);var c=i(80714),o=i(41664),_=i.n(o),u=i(67294),l=i(29918),d=i.n(l),m=i(84645),f=i.n(m),h=i(34993),p="/_next/static/media/default_avatar.765939bc.webp",g=function(e){var t=e.model,i=(0,h.W)().show18Plus,n=(0,u.useState)(!1),a=n[0],c=n[1];return(0,u.useEffect)((function(){c(i)}),[i]),(0,s.jsx)(_(),{href:"/generate?img=".concat(t.reuse_img,"&shared=true"),children:(0,s.jsx)("div",{className:r().column,children:(0,s.jsxs)("div",{className:r().image_wrapper,children:[(0,s.jsx)("img",{src:"https://s3.apus.network/"+t.reuse_img,alt:"",style:{filter:t.nsfw&&!a?"blur(10px)":""},className:"z-0"},t.id),(0,s.jsxs)("div",{className:r().image_badge,children:[t.useCount," runs"]}),t.nsfw&&(0,s.jsxs)("div",{className:r().image_18_badge,onClick:function(e){e.preventDefault(),e.stopPropagation(),c((function(e){return!e}))},children:["18+ ",a?(0,s.jsx)(f(),{className:"leading-0 ml-1",rev:""}):(0,s.jsx)(d(),{className:"leading-0 ml-1",rev:""})]}),(0,s.jsx)("div",{className:r().image_name,children:t.name}),(0,s.jsx)("img",{className:r().image_avatar_url,src:t.params.author_avatar||p})]})})})},w=(0,u.forwardRef)((function(e,t){var i=e.images,n=(0,u.useState)(4),a=n[0],o=n[1];return(0,u.useEffect)((function(){var e=function(){window.innerWidth>768?o(4):o(2)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,s.jsx)("div",{className:r().image_grid_visual,ref:t,children:(0,s.jsx)(c.ZP,{columns:a,spacing:2,children:i.map((function(e,t){return(0,s.jsx)(g,{model:e},t)}))})})}))},3892:function(e,t,i){"use strict";i(76489)},48581:function(e,t,i){"use strict";i.d(t,{y:function(){return r}});var s=i(26042),n=i(69396);i(34051),i(14969),i(3892);function r(e){return e.filter((function(e){return"checkpoint"===e.type||"lora"===e.type})).map((function(e){return(0,n.Z)((0,s.Z)({},e),{id:"checkpoint"===e.type||"lora"===e.type?e.model_file_name:e.model_id,userId:null,name:e.name,type:e.type,checkpoint:e.checkpoint_file_name,status:"",public:!1,params:{author:e.author,images:e.images.split(","),author_url:e.author_url,description:e.description,instance_prompt:"",author_avatar:e.author_avatar},createdAt:"",trainingStartedAt:null,trainingFinishedAt:null,lastUsedAt:"",useCount:e.use_count,nsfw:e.nsfw,reuse_img:e.reuse_img})}))}},5075:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return h}});var s=i(47568),n=i(34051),r=i.n(n),a=i(85893),c=i(44820),o=i(34038),_=i(89917),u=i(79974),l=i(14969),d=i(11163),m=i(67294),f=i(48581);function h(e){e.exampleArt;var t=(0,m.useState)([]),i=t[0],n=t[1],h=(0,d.useRouter)(),p=(0,m.createRef)(),g=(0,m.useState)(!1),w=g[0],v=g[1];function b(){return(b=(0,s.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.xP.get("/models?status=active&public=true");case 2:t=e.sent,n((0,f.y)(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,m.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]),(0,m.useEffect)((function(){var e,t;void 0!==(null===(e=h.query)||void 0===e?void 0:e.scrollToModal)&&i.length>0&&!w&&(null===(t=p.current)||void 0===t||t.scrollIntoView({behavior:"smooth"}),v(!0))}),[i,w]),(0,a.jsx)(o.Z,{title:"Everything you need to create images with AI",description:"Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more.",canonical:"/",footer:!1,children:(0,a.jsx)(u.Z,{title:(0,a.jsxs)(a.Fragment,{children:["We Use a\xa0",(0,a.jsx)("span",{children:"decentralized"}),"GPU network to help model creators\xa0",(0,a.jsx)("span",{children:"make money"})]}),subtitle2:(0,a.jsxs)(a.Fragment,{children:["Harnessing ",(0,a.jsx)("span",{children:"NFTs"})," to Secure Profit Rights for model creators."]}),subtitle:"Amazing pictures generated deployed models, quick try",cta:(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,a.jsxs)("div",{style:{maxWidth:420,width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(c.Z,{size:"xl",openInNewTab:!0,href:"https://forms.gle/z9H5jxU3DCAV95dQ9",children:"Host Model"}),(0,a.jsx)(c.Z,{type:"accent-border",size:"xl",openInNewTab:!0,href:"https://forms.gle/XsaxVmyRsUCEAd199",children:"Host Node"})]})}),visual:(0,a.jsx)(_.mw,{ref:p,images:i.filter((function(e){return Boolean(e.reuse_img)}))})})})}},94162:function(e){e.exports={_hero:"website__hero__49ENh",hero:"website_hero__ssYjU",content:"website_content__DPLzT",title:"website_title__lStXQ",hero_subtitle:"website_hero_subtitle__syX5G",subtitle:"website_subtitle__igLVp",cta:"website_cta__vuIFI",social_proof:"website_social_proof__zvY01",feature_row:"website_feature_row__xIMTc",caption:"website_caption__5qgsO",text:"website_text__9_aXE",_visual:"website__visual__tMsSn",reverse:"website_reverse__1_ZKr",features_grid:"website_features_grid__i8RTU",heading:"website_heading__MIP9r",grid:"website_grid__MYDkl",feature_card:"website_feature_card__cgxF6",icon:"website_icon__Gue5X",image_grid_visual:"website_image_grid_visual__A9KrT",column:"website_column__6Z67w",image_wrapper:"website_image_wrapper__JDScv",image_name:"website_image_name__OitrX",image_badge:"website_image_badge__o4ekU",image_18_badge:"website_image_18_badge__B9iOJ",image_avatar_url:"website_image_avatar_url__TIcKv",_large_cta:"website__large_cta__JWVIc",large_cta:"website_large_cta__7nFVV",faq:"website_faq__a5XCs",questions:"website_questions__hJhPl",faq_question:"website_faq_question__bHtwU",question:"website_question__XBqiI",answer:"website_answer__Ag0J3",open:"website_open__3Goe4"}}},function(e){e.O(0,[455,714,53,884,765,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);