(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{76489:function(e,a){"use strict";var i=Object.prototype.toString,t=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function r(e){return-1!==e.indexOf("%")?decodeURIComponent(e):e}function n(e){return encodeURIComponent(e)}function s(e,a){try{return a(e)}catch(i){return e}}},75411:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/model/[id]",function(){return i(94045)}])},4836:function(e,a){"use strict";a.Z={src:"/_next/static/media/default_avatar.765939bc.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAgAAkA4JaQAAp3NNVkYAAD++uFxGhP12LBx5g3tA3WgqONZM5UFAn8AAA=="}},39718:function(e,a,i){"use strict";i.d(a,{E:function(){return p},m:function(){return x}});var t=i(85893),r=i(80714),n=i(94162),s=i.n(n),_=i(41664),o=i.n(_),l=i(67294),d=i(29918),c=i.n(d),u=i(84645),m=i.n(u),g=i(34993),f=i(4836),p=function(e){var a,i=e.model,r=e.onClick,n=e.showRun,_=(0,g.W)().show18Plus,d=(0,l.useState)(!1),u=d[0],f=d[1];return(0,l.useEffect)((function(){f(_)}),[_]),(0,t.jsx)("div",{className:s().column,onClick:r,children:(0,t.jsxs)("div",{className:s().image_wrapper_2,children:[(0,t.jsx)("img",{src:null!==(a=i.reuse_img_url)&&void 0!==a?a:"https://s3.apus.network/"+i.reuse_img,alt:"",style:{filter:i.nsfw&&!u?"blur(10px)":""},className:"z-0"},i.id),n&&(0,t.jsx)(o(),{href:"/generate?img=".concat(i.reuse_img,"&shared=true"),children:(0,t.jsx)("div",{className:s().image_try_badge_2,onClick:function(e){e.stopPropagation()},children:"Run"})}),i.nsfw&&(0,t.jsxs)("div",{className:s().image_18_badge,onClick:function(e){e.preventDefault(),e.stopPropagation(),f((function(e){return!e}))},children:["18+ ",u?(0,t.jsx)(m(),{className:"leading-0 ml-1",rev:""}):(0,t.jsx)(c(),{className:"leading-0 ml-1",rev:""})]})]})})},h=function(e){var a,i=e.model,r=(0,g.W)().show18Plus,n=(0,l.useState)(!1),_=n[0],d=n[1];return(0,l.useEffect)((function(){d(r)}),[r]),(0,t.jsx)(o(),{href:"/model/".concat(i.id),children:(0,t.jsx)("div",{className:s().column,children:(0,t.jsxs)("div",{className:s().image_wrapper,children:[(0,t.jsx)("img",{src:null!==(a=i.reuse_img_url)&&void 0!==a?a:"https://s3.apus.network/"+i.reuse_img,alt:"",style:{filter:i.nsfw&&!_?"blur(10px)":""},className:"z-0"},i.id),(0,t.jsxs)("div",{className:s().image_badge,children:[i.useCount," runs"]}),(0,t.jsx)(o(),{href:"/generate?img=".concat(i.reuse_img,"&shared=true"),children:(0,t.jsx)("div",{className:s().image_try_badge,children:"Run"})}),i.nsfw&&(0,t.jsxs)("div",{className:s().image_18_badge,onClick:function(e){e.preventDefault(),e.stopPropagation(),d((function(e){return!e}))},children:["18+ ",_?(0,t.jsx)(m(),{className:"leading-0 ml-1",rev:""}):(0,t.jsx)(c(),{className:"leading-0 ml-1",rev:""})]}),(0,t.jsx)("div",{className:s().image_name,children:i.name}),(0,t.jsx)("img",{className:s().image_avatar_url,src:i.params.author_avatar||f.Z.src})]})})})},x=(0,l.forwardRef)((function(e,a){var i=e.images,n=(0,l.useState)(4),_=n[0],o=n[1];return(0,l.useEffect)((function(){var e=function(){window.innerWidth>768?o(4):o(2)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,t.jsx)("div",{className:s().image_grid_visual,ref:a,children:(0,t.jsx)(r.ZP,{columns:_,spacing:2,children:i.map((function(e,a){return(0,t.jsx)(h,{model:e},a)}))})})}))},3892:function(e,a,i){"use strict";i(76489)},22718:function(e,a,i){"use strict";i.d(a,{Mk:function(){return _},uX:function(){return s}});var t=i(26042),r=i(69396),n=(i(34051),i(14969),i(3892),{batch_count:1,cfg_scale:1,denoising_strength:0,height:512,width:512,image:"",model:"",lora:"",checkpoint:"",negative_prompt:"",prompt:"",sampler:"",seed:0,steps:0});function s(e){var a,i,s=e.task,_=e.model_id,o=e.seed,l=(e.image_id,s.param),d=void 0===l?n:l;return null==d&&(d=n),(0,r.Z)((0,t.Z)({},e),{id:e.image_id,modelTaskId:s.task_id,userId:e.user_id,hosting:"remote",path:"",jpegPath:"",width:d.width,height:d.height,format:"jpg",liked:!1,isShared:e.is_shared,createdAt:"",modelTask:{id:s.task_id,model:d.lora||d.checkpoint||d.model||"",params:{seed:o,tool:d.sampler,width:d.width,height:d.height,prompt:d.prompt,scheduler:d.sampler,num_images:d.batch_count,started_at:"",enhance_face:!1,guidance_scale:d.cfg_scale,negative_prompt:d.negative_prompt,num_inference_steps:d.steps},_model:{id:"",name:null!==(i=null!==(a=d.model)&&void 0!==a?a:_)&&void 0!==i?i:"",params:{author:"",images:[],author_url:"",description:"",instance_prompt:""}}},url:e.image_url,jpegUrl:""})}function _(e){var a;return null!==(a=null===e||void 0===e?void 0:e.map(s))&&void 0!==a?a:[]}},94045:function(e,a,i){"use strict";i.r(a),i.d(a,{__N_SSG:function(){return j},default:function(){return N}});var t=i(47568),r=i(26042),n=i(69396),s=i(29815),_=i(34051),o=i.n(_),l=i(85893),d=i(34038),c=i(14969),u=i(11163),m=i(67294),g=i(58533),f=i(40827),p=i(44820),h=i(73913),x=i.n(h),v=i(22718),w=i(39718),b=i(4836),j=!0;function N(e){var a=e.model,i=(0,u.useRouter)(),_=(0,m.useState)([]),h=_[0],j=_[1],N=(0,m.useState)({loading:!1,hasMore:!0}),y=N[0],k=N[1];function A(){return C.apply(this,arguments)}function C(){return(C=(0,t.Z)(o().mark((function e(){var i,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:if(y.hasMore){e.next=4;break}return e.abrupt("return");case 4:return i=!0,e.prev=5,k((0,n.Z)((0,r.Z)({},y),{loading:!0})),e.next=9,c.xP.get("/shared/images/list",{params:{limit:24,offset:h.length,model:a.model_file_name,order:"desc"}});case 9:t=e.sent,j((0,s.Z)(h).concat((0,s.Z)((0,v.Mk)(t.data)))),i=t.data.length>0,e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),console.error(e.t0),j([]);case 18:return e.prev=18,k({loading:!1,hasMore:i}),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[5,14,18,21]])})))).apply(this,arguments)}return(0,m.useEffect)((function(){A()}),[a]),a?(0,l.jsx)(d.Z,{title:a.id,description:a.description,canonical:"/",footer:!1,children:(0,l.jsxs)("div",{className:"py-1 px-2 md:py-2 md:px-12 lg:py-4 lg:px-24",children:[(0,l.jsx)("div",{className:"p-2 md:p-4 lg:p-8 flex justify-center",children:(0,l.jsxs)("div",{className:"flex items-end flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden h-auto md: h-96",children:[(0,l.jsx)(w.E,{model:a}),(0,l.jsxs)("div",{className:"h-full flex flex-col justify-between w-full pl-4 py-4",style:{alignItems:"start"},children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("img",{className:"w-12 h-12 rounded-full mr-4",src:a.author_avatar||b.Z.src}),(0,l.jsx)("div",{className:"text-2xl font-semibold text-slate-600",children:a.author})]}),(0,l.jsx)("div",{className:"flex flex-col pl-2 py-8 w-full gap-4",style:{alignItems:"start"},children:[{label:"Type",value:a.type},{label:"Run Count",value:a.use_count},{label:"Base Model",value:a.checkpoint_file_name}].map((function(e){var a=e.label,i=e.value;return(0,l.jsxs)("div",{className:"flex flex-col justify-start",style:{alignItems:"flex-start"},children:[(0,l.jsx)("div",{className:"w-24 flex-shrink-0 text-sm text-gray-600",children:a}),(0,l.jsx)("div",{className:"",children:i})]},a)}))}),(0,l.jsx)(p.Z,{size:"lg",fullWidth:!0,href:"/generate?img=".concat(a.reuse_img,"&shared=true"),children:(0,l.jsx)("div",{className:"w-20 text-center",children:"Run"})})]})]})}),(0,l.jsx)("div",{className:"flex justify-center text-3xl font-medium text-gray-800 mt-8 md:mt-0",children:"Explore Related"}),(0,l.jsx)("div",{className:x().images,id:"images",children:(0,l.jsxs)(g.Z,{dataLength:h.length,next:A,hasMore:y.hasMore,loader:!0,className:x().infinite,children:[(0,l.jsx)(f.Z,{breakpointCols:{default:8,2400:6,1700:4,1260:3,1024:2,840:1,760:2},className:x().grid,columnClassName:x().column,children:h.map((function(e){return(0,l.jsx)("div",{id:e.id,className:x().img,children:(0,l.jsx)(w.E,{model:{id:e.id,reuse_img_url:e.image_url,nsfw:e.nsfw,reuse_img:e.image_id},onClick:function(a){a.stopPropagation(),a.preventDefault(),i.push("/img/".concat(e.id))},showRun:!0})},e.id)}))}),(0,l.jsx)("div",{style:{height:24}}),y.hasMore?(0,l.jsxs)(p.Z,{type:"default",loading:y.loading,onClick:A,fullWidth:!0,children:["Load",y.loading?"ing":""," more images"]}):(0,l.jsx)("div",{}),(0,l.jsx)("div",{style:{height:24}})]})})]})}):(0,l.jsx)(d.Z,{title:"Everything you need to create images with AI",description:"Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more.",canonical:"/",footer:!1,children:""})}},73913:function(e){e.exports={_:"ai-generator____v_yms",_controls:"ai-generator__controls___8Piq",controls:"ai-generator_controls__ArQ54",_tabs:"ai-generator__tabs__Jn0T3",tabs:"ai-generator_tabs__MP411",_parameters:"ai-generator__parameters__YgHmr",parameters:"ai-generator_parameters__vio9v",random:"ai-generator_random__f2t2a",sliders2:"ai-generator_sliders2__vf0XO",mixer_images:"ai-generator_mixer_images__VU5CX",mixer_image:"ai-generator_mixer_image__VmVkB",_dropzone:"ai-generator__dropzone__w7cHT",upload:"ai-generator_upload__yT_nG",dropzone:"ai-generator_dropzone__EevXg",dropzone_image:"ai-generator_dropzone_image__KpiLA",image_loader:"ai-generator_image_loader__KrUaw",upload_delete:"ai-generator_upload_delete__Ezf91",actions:"ai-generator_actions__gA_Xn",keyboard:"ai-generator_keyboard__5Jrgg",images:"ai-generator_images___x2l6",images_head:"ai-generator_images_head__DNtWS",infinite:"ai-generator_infinite__9oyQm",grid:"ai-generator_grid__YK64A",column:"ai-generator_column__U_i5_",img:"ai-generator_img__EKyK3",img_dragging:"ai-generator_img_dragging__qha8C",_overlay:"ai-generator__overlay__N3jJA",overlay:"ai-generator_overlay__QERFA","fade-in":"ai-generator_fade-in__S3aCC",_modal:"ai-generator__modal__a3O5t",modal:"ai-generator_modal__6guHM","slide-in":"ai-generator_slide-in__y8Ds1",modal_image:"ai-generator_modal_image__3tswV",close:"ai-generator_close__O05CU"}},94162:function(e){e.exports={_hero:"website__hero__49ENh",hero:"website_hero__ssYjU",content:"website_content__DPLzT",title:"website_title__lStXQ",hero_subtitle:"website_hero_subtitle__syX5G",subtitle:"website_subtitle__igLVp",cta:"website_cta__vuIFI",social_proof:"website_social_proof__zvY01",feature_row:"website_feature_row__xIMTc",caption:"website_caption__5qgsO",text:"website_text__9_aXE",_visual:"website__visual__tMsSn",reverse:"website_reverse__1_ZKr",features_grid:"website_features_grid__i8RTU",heading:"website_heading__MIP9r",grid:"website_grid__MYDkl",feature_card:"website_feature_card__cgxF6",icon:"website_icon__Gue5X",image_wrapper:"website_image_wrapper__JDScv",image_wrapper_2:"website_image_wrapper_2__kUjC5",image_name:"website_image_name__OitrX",image_badge:"website_image_badge__o4ekU",image_try_badge:"website_image_try_badge__bT__J",image_try_badge_2:"website_image_try_badge_2__mzdpS",image_18_badge:"website_image_18_badge__B9iOJ",image_avatar_url:"website_image_avatar_url__TIcKv",column:"website_column__6Z67w",image_grid_visual:"website_image_grid_visual__A9KrT",_large_cta:"website__large_cta__JWVIc",large_cta:"website_large_cta__7nFVV",faq:"website_faq__a5XCs",questions:"website_questions__hJhPl",faq_question:"website_faq_question__bHtwU",question:"website_question__XBqiI",answer:"website_answer__Ag0J3",open:"website_open__3Goe4"}}},function(e){e.O(0,[455,714,578,53,884,765,774,888,179],(function(){return a=75411,e(e.s=a);var a}));var a=e.O();_N_E=a}]);