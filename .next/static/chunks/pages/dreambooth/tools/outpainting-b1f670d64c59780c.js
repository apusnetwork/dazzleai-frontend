(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{54887:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dreambooth/tools/outpainting",function(){return s(78832)}])},4836:function(e,i){"use strict";i.Z={src:"/_next/static/media/default_avatar.765939bc.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAgAAkA4JaQAAp3NNVkYAAD++uFxGhP12LBx5g3tA3WgqONZM5UFAn8AAA=="}},79974:function(e,i,s){"use strict";s.d(i,{Z:function(){return r}});var t=s(85893),a=s(94162),n=s.n(a);function r(e){var i=e.title,s=e.subtitle,a=e.subtitle2,r=e.visual,l=e.socialProof,o=e.cta;return(0,t.jsx)("section",{className:n()._hero,children:(0,t.jsxs)("div",{className:n().hero,children:[(0,t.jsxs)("div",{className:n().content,children:[(0,t.jsx)("h1",{className:n().title,children:i}),(0,t.jsx)("h2",{className:n().hero_subtitle,style:{marginTop:20},children:a}),(0,t.jsx)("div",{className:n().cta,children:o}),(0,t.jsx)("h2",{className:n().hero_subtitle,children:s}),(0,t.jsx)("div",{className:n().social_proof,children:l})]}),(0,t.jsx)("div",{className:n().visual,children:r})]})})}},80690:function(e,i,s){"use strict";s.d(i,{GN:function(){return r},mw:function(){return l.m}});var t=s(85893),a=s(94162),n=s.n(a);function r(e){var i=e.title,s=e.caption,a=e.text,r=e.visual,l=e.reverse;return(0,t.jsxs)("section",{className:[n().feature_row,l?n().reverse:""].join(" "),children:[(0,t.jsxs)("div",{className:n().content,children:[s?(0,t.jsx)("h3",{className:n().caption,children:s}):null,(0,t.jsx)("h2",{className:n().title,children:i}),(0,t.jsx)("p",{className:n().text,children:a})]}),(0,t.jsx)("div",{className:n()._visual,children:r})]})}s(79974),s(4298);var l=s(39718)},39718:function(e,i,s){"use strict";s.d(i,{E:function(){return p},m:function(){return v}});var t=s(85893),a=s(80714),n=s(94162),r=s.n(n),l=s(41664),o=s.n(l),c=s(67294),_=s(29918),d=s.n(_),u=s(84645),m=s.n(u),g=s(34993),h=s(4836),p=function(e){var i=e.model,s=e.onClick,a=e.showRun,n=(0,g.W)().show18Plus,l=(0,c.useState)(!1),_=l[0],u=l[1];(0,c.useEffect)((function(){u(n)}),[n]);var h,p="18+"===i.nsfw;return(0,t.jsx)("div",{className:r().column,onClick:s,children:(0,t.jsxs)("div",{className:r().image_wrapper_2,children:[(0,t.jsx)("img",{src:null!==(h=i.reuse_img_url)&&void 0!==h?h:"https://s3.apus.network/"+i.reuse_img,alt:"",style:{filter:p&&!_?"blur(10px)":""},className:"z-0"},i.id),a&&(0,t.jsx)(o(),{href:"/generate?img=".concat(i.reuse_img,"&shared=true"),children:(0,t.jsx)("div",{className:r().image_try_badge_2,onClick:function(e){e.stopPropagation()},children:"Run"})}),p&&(0,t.jsxs)("div",{className:r().image_18_badge,onClick:function(e){e.preventDefault(),e.stopPropagation(),u((function(e){return!e}))},children:["18+ ",_?(0,t.jsx)(m(),{className:"leading-0 ml-1",rev:""}):(0,t.jsx)(d(),{className:"leading-0 ml-1",rev:""})]})]})})},f=function(e){var i,s=e.model,a=(0,g.W)().show18Plus,n=(0,c.useState)(!1),l=n[0],_=n[1];return(0,c.useEffect)((function(){_(a)}),[a]),(0,t.jsx)(o(),{href:"/model/".concat(s.id),children:(0,t.jsx)("div",{className:r().column,children:(0,t.jsxs)("div",{className:r().image_wrapper,children:[(0,t.jsx)("img",{src:null!==(i=s.reuse_img_url)&&void 0!==i?i:"https://s3.apus.network/"+s.reuse_img,alt:"",style:{filter:s.nsfw&&!l?"blur(10px)":""},className:"z-0"},s.id),(0,t.jsxs)("div",{className:r().image_badge,children:[s.useCount," runs"]}),(0,t.jsx)(o(),{href:"/generate?img=".concat(s.reuse_img,"&shared=true"),children:(0,t.jsx)("div",{className:r().image_try_badge,children:"Run"})}),s.nsfw&&(0,t.jsxs)("div",{className:r().image_18_badge,onClick:function(e){e.preventDefault(),e.stopPropagation(),_((function(e){return!e}))},children:["18+ ",l?(0,t.jsx)(m(),{className:"leading-0 ml-1",rev:""}):(0,t.jsx)(d(),{className:"leading-0 ml-1",rev:""})]}),(0,t.jsx)("div",{className:r().image_name,children:s.name}),(0,t.jsx)("img",{className:r().image_avatar_url,src:s.params.author_avatar||h.Z.src})]})})})},v=(0,c.forwardRef)((function(e,i){var s=e.images,n=(0,c.useState)(4),l=n[0],o=n[1];return(0,c.useEffect)((function(){var e=function(){window.innerWidth>768?o(4):o(2)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,t.jsx)("div",{className:r().image_grid_visual,ref:i,children:(0,t.jsx)(a.ZP,{columns:l,spacing:2,children:s.map((function(e,i){return(0,t.jsx)(f,{model:e},i)}))})})}))},78832:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return h}});var t=s(85893),a=s(17337),n=s(44820),r=s(34038),l=s(80690),o=s(94162),c=s.n(o);function _(e){var i=e.title,s=void 0===i?(0,t.jsx)(t.Fragment,{children:"Ready to get started?"}):i,a=e.text,n=void 0===a?"Explore our tools, or create an account.":a,r=e.button;return(0,t.jsx)("section",{className:c()._large_cta,children:(0,t.jsx)("div",{className:c().large_cta,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:c().title,children:s}),(0,t.jsx)("p",{className:c().text,children:n}),(0,t.jsx)("div",{className:c().cta,children:r})]})})})}var d=s(13464),u=s(83137),m=s(44223),g=s.n(m);function h(){var e=(0,d.T)();return(0,t.jsx)(r.Z,{title:"Stable Diffusion Outpainting",description:"",canonical:"/tools/outpainting",image:"/social-image-ai-editor.png",children:(0,t.jsxs)("div",{className:g().bg,children:[(0,t.jsx)("div",{className:g()._hero,children:(0,t.jsxs)("div",{className:g().hero,children:[(0,t.jsxs)("h1",{className:g().h1,children:["Stable Diffusion Outpainting ",(0,t.jsx)("br",{}),"with AI Editor"]}),(0,t.jsx)("h2",{className:g().p1,children:"Transform your images like never before with our AI Editor. Use Stable Diffusion outpainting to expand your pictures beyond their original borders, or modify them using only words and creativity. Try it now and see the magic for yourself."}),(0,t.jsxs)("div",{className:g().cta,children:[(0,t.jsxs)(n.Z,{size:"xl",href:"/editor",children:["Start creating now",(0,t.jsx)(a.olP,{style:{marginLeft:12,marginRight:0}})]}),(0,t.jsx)("small",{children:"Generate 100 images every month for free \xb7 No credit card required"})]})]})}),(0,t.jsx)("div",{className:g()._preview,children:(0,t.jsx)("div",{className:g().preview,children:(0,t.jsx)("div",{className:g().preview_video,children:(0,t.jsx)("video",{src:"/videos/ai-editor-full.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})})}),(0,t.jsx)(l.GN,{caption:"Outpainting",title:"Expand pictures beyond its borders",text:"Use Stable Diffusion outpainting to expand pictures beyond their original borders. Create large-sized detailed graphics or extend existing images without limits. Use your imagination and generate missing parts of images with artificial intelligence.",visual:(0,t.jsx)("video",{src:"/guides/outpainting-simple-photo.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),(0,t.jsx)(l.GN,{caption:"Inpainting",title:"Remove objects from photos",text:"Remove any object or person from your image. Just erase unwanted parts of the picture and describe what to render in empty space. You can also change any visual features on your photos.",visual:(0,t.jsx)("video",{src:"/videos/inpainting.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),reverse:!0}),(0,t.jsx)(l.GN,{caption:"Find & Replace",title:"Edit pictures within seconds",text:"Change details of existing images with ease using the 'find and replace' feature. Tell AI what should be replaced and describe the new edit in detail. Enhance or edit images using only words.",visual:(0,t.jsx)("video",{src:"/videos/find-replace.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),(0,t.jsx)(_,{button:(0,t.jsx)(n.Z,{size:"lg",onClick:function(){return e((0,u.FA)("register"))},children:"Get started. It's Free."})})]})})}},94162:function(e){e.exports={_hero:"website__hero__49ENh",hero:"website_hero__ssYjU",content:"website_content__DPLzT",title:"website_title__lStXQ",hero_subtitle:"website_hero_subtitle__syX5G",subtitle:"website_subtitle__igLVp",cta:"website_cta__vuIFI",social_proof:"website_social_proof__zvY01",feature_row:"website_feature_row__xIMTc",caption:"website_caption__5qgsO",text:"website_text__9_aXE",_visual:"website__visual__tMsSn",reverse:"website_reverse__1_ZKr",features_grid:"website_features_grid__i8RTU",heading:"website_heading__MIP9r",grid:"website_grid__MYDkl",feature_card:"website_feature_card__cgxF6",icon:"website_icon__Gue5X",image_wrapper:"website_image_wrapper__JDScv",image_wrapper_2:"website_image_wrapper_2__kUjC5",image_name:"website_image_name__OitrX",image_badge:"website_image_badge__o4ekU",image_try_badge:"website_image_try_badge__bT__J",image_try_badge_2:"website_image_try_badge_2__mzdpS",image_18_badge:"website_image_18_badge__B9iOJ",image_avatar_url:"website_image_avatar_url__TIcKv",column:"website_column__6Z67w",image_grid_visual:"website_image_grid_visual__A9KrT",_large_cta:"website__large_cta__JWVIc",large_cta:"website_large_cta__7nFVV",faq:"website_faq__a5XCs",questions:"website_questions__hJhPl",faq_question:"website_faq_question__bHtwU",question:"website_question__XBqiI",answer:"website_answer__Ag0J3",open:"website_open__3Goe4"}},44223:function(){}},function(e){e.O(0,[455,714,53,884,765,774,888,179],(function(){return i=54887,e(e.s=i);var i}));var i=e.O();_N_E=i}]);