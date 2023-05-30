(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{54887:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dreambooth/tools/outpainting",function(){return s(78832)}])},79974:function(e,i,s){"use strict";s.d(i,{Z:function(){return r}});var t=s(85893),a=s(94162),n=s.n(a);function r(e){var i=e.title,s=e.subtitle,a=e.visual,r=e.socialProof,o=e.cta;return(0,t.jsx)("section",{className:n()._hero,children:(0,t.jsxs)("div",{className:n().hero,children:[(0,t.jsxs)("div",{className:n().content,children:[(0,t.jsx)("h1",{className:n().title,children:i}),(0,t.jsx)("div",{className:n().cta,children:o}),(0,t.jsx)("h2",{className:n().hero_subtitle,children:s}),(0,t.jsx)("div",{className:n().social_proof,children:r})]}),(0,t.jsx)("div",{className:n().visual,children:a})]})})}},89917:function(e,i,s){"use strict";s.d(i,{GN:function(){return r},mw:function(){return x}});var t=s(85893),a=s(94162),n=s.n(a);function r(e){var i=e.title,s=e.caption,a=e.text,r=e.visual,o=e.reverse;return(0,t.jsxs)("section",{className:[n().feature_row,o?n().reverse:""].join(" "),children:[(0,t.jsxs)("div",{className:n().content,children:[s?(0,t.jsx)("h3",{className:n().caption,children:s}):null,(0,t.jsx)("h2",{className:n().title,children:i}),(0,t.jsx)("p",{className:n().text,children:a})]}),(0,t.jsx)("div",{className:n()._visual,children:r})]})}s(79974),s(4298);var o=s(80714),l=s(41664),c=s.n(l),_=s(67294),d=s(29918),u=s.n(d),m=s(84645),h=s.n(m),g=s(34993),p="/_next/static/media/default_avatar.765939bc.webp",v=function(e){var i=e.model,s=(0,g.W)().show18Plus,a=(0,_.useState)(!1),r=a[0],o=a[1];return(0,_.useEffect)((function(){o(s)}),[s]),(0,t.jsx)(c(),{href:"/generate?img=".concat(i.reuse_img,"&shared=true"),children:(0,t.jsx)("div",{className:n().column,children:(0,t.jsxs)("div",{className:n().image_wrapper,children:[(0,t.jsx)("img",{src:"https://s3.apus.network/"+i.reuse_img,alt:"",style:{filter:i.nsfw&&!r?"blur(10px)":""},className:"z-0"},i.id),(0,t.jsxs)("div",{className:n().image_badge,children:[i.useCount," runs"]}),i.nsfw&&(0,t.jsxs)("div",{className:n().image_18_badge,onClick:function(e){e.preventDefault(),e.stopPropagation(),o((function(e){return!e}))},children:["18+ ",r?(0,t.jsx)(h(),{className:"leading-0 ml-1",rev:""}):(0,t.jsx)(u(),{className:"leading-0 ml-1",rev:""})]}),(0,t.jsx)("div",{className:n().image_name,children:i.name}),(0,t.jsx)("img",{className:n().image_avatar_url,src:i.params.author_avatar||p})]})})})};function x(e){var i=e.images;e.columns;return(0,t.jsx)("div",{className:n().image_grid_visual,children:(0,t.jsx)(o.ZP,{columns:4,spacing:2,children:i.map((function(e){return(0,t.jsx)(v,{model:e})}))})})}},78832:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return g}});var t=s(85893),a=s(17337),n=s(44820),r=s(34038),o=s(89917),l=s(94162),c=s.n(l);function _(e){var i=e.title,s=void 0===i?(0,t.jsx)(t.Fragment,{children:"Ready to get started?"}):i,a=e.text,n=void 0===a?"Explore our tools, or create an account.":a,r=e.button;return(0,t.jsx)("section",{className:c()._large_cta,children:(0,t.jsx)("div",{className:c().large_cta,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:c().title,children:s}),(0,t.jsx)("p",{className:c().text,children:n}),(0,t.jsx)("div",{className:c().cta,children:r})]})})})}var d=s(13464),u=s(83137),m=s(44223),h=s.n(m);function g(){var e=(0,d.T)();return(0,t.jsx)(r.Z,{title:"Stable Diffusion Outpainting",description:"",canonical:"/tools/outpainting",image:"/social-image-ai-editor.png",children:(0,t.jsxs)("div",{className:h().bg,children:[(0,t.jsx)("div",{className:h()._hero,children:(0,t.jsxs)("div",{className:h().hero,children:[(0,t.jsxs)("h1",{className:h().h1,children:["Stable Diffusion Outpainting ",(0,t.jsx)("br",{}),"with AI Editor"]}),(0,t.jsx)("h2",{className:h().p1,children:"Transform your images like never before with our AI Editor. Use Stable Diffusion outpainting to expand your pictures beyond their original borders, or modify them using only words and creativity. Try it now and see the magic for yourself."}),(0,t.jsxs)("div",{className:h().cta,children:[(0,t.jsxs)(n.Z,{size:"xl",href:"/editor",children:["Start creating now",(0,t.jsx)(a.olP,{style:{marginLeft:12,marginRight:0}})]}),(0,t.jsx)("small",{children:"Generate 100 images every month for free \xb7 No credit card required"})]})]})}),(0,t.jsx)("div",{className:h()._preview,children:(0,t.jsx)("div",{className:h().preview,children:(0,t.jsx)("div",{className:h().preview_video,children:(0,t.jsx)("video",{src:"/videos/ai-editor-full.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})})}),(0,t.jsx)(o.GN,{caption:"Outpainting",title:"Expand pictures beyond its borders",text:"Use Stable Diffusion outpainting to expand pictures beyond their original borders. Create large-sized detailed graphics or extend existing images without limits. Use your imagination and generate missing parts of images with artificial intelligence.",visual:(0,t.jsx)("video",{src:"/guides/outpainting-simple-photo.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),(0,t.jsx)(o.GN,{caption:"Inpainting",title:"Remove objects from photos",text:"Remove any object or person from your image. Just erase unwanted parts of the picture and describe what to render in empty space. You can also change any visual features on your photos.",visual:(0,t.jsx)("video",{src:"/videos/inpainting.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),reverse:!0}),(0,t.jsx)(o.GN,{caption:"Find & Replace",title:"Edit pictures within seconds",text:"Change details of existing images with ease using the 'find and replace' feature. Tell AI what should be replaced and describe the new edit in detail. Enhance or edit images using only words.",visual:(0,t.jsx)("video",{src:"/videos/find-replace.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),(0,t.jsx)(_,{button:(0,t.jsx)(n.Z,{size:"lg",onClick:function(){return e((0,u.FA)("register"))},children:"Get started. It's Free."})})]})})}},94162:function(e){e.exports={_hero:"website__hero__49ENh",hero:"website_hero__ssYjU",content:"website_content__DPLzT",title:"website_title__lStXQ",hero_subtitle:"website_hero_subtitle__syX5G",subtitle:"website_subtitle__igLVp",cta:"website_cta__vuIFI",social_proof:"website_social_proof__zvY01",feature_row:"website_feature_row__xIMTc",caption:"website_caption__5qgsO",text:"website_text__9_aXE",_visual:"website__visual__tMsSn",reverse:"website_reverse__1_ZKr",features_grid:"website_features_grid__i8RTU",heading:"website_heading__MIP9r",grid:"website_grid__MYDkl",feature_card:"website_feature_card__cgxF6",icon:"website_icon__Gue5X",image_grid_visual:"website_image_grid_visual__A9KrT",column:"website_column__6Z67w",image_wrapper:"website_image_wrapper__JDScv",image_name:"website_image_name__OitrX",image_badge:"website_image_badge__o4ekU",image_18_badge:"website_image_18_badge__B9iOJ",image_avatar_url:"website_image_avatar_url__TIcKv",_large_cta:"website__large_cta__JWVIc",large_cta:"website_large_cta__7nFVV",faq:"website_faq__a5XCs",questions:"website_questions__hJhPl",faq_question:"website_faq_question__bHtwU",question:"website_question__XBqiI",answer:"website_answer__Ag0J3",open:"website_open__3Goe4"}},44223:function(){}},function(e){e.O(0,[995,714,53,884,765,774,888,179],(function(){return i=54887,e(e.s=i);var i}));var i=e.O();_N_E=i}]);