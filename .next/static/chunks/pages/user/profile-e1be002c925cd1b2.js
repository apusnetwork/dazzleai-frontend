(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{30142:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/profile",function(){return r(16310)}])},3892:function(e,a,r){"use strict";r(76489)},22718:function(e,a,r){"use strict";r.d(a,{Mk:function(){return _},uX:function(){return o}});var i=r(26042),t=r(69396),n=(r(34051),r(14969),r(3892),{batch_count:1,cfg_scale:1,denoising_strength:0,height:512,width:512,image:"",model:"",lora:"",checkpoint:"",negative_prompt:"",prompt:"",sampler:"",seed:0,steps:0});function o(e){var a,r,o=e.task,_=e.model_id,s=e.seed,d=(e.image_id,o.param),l=void 0===d?n:d;return null==l&&(l=n),(0,t.Z)((0,i.Z)({},e),{id:e.image_id,modelTaskId:o.task_id,userId:e.user_id,hosting:"remote",path:"",jpegPath:"",width:l.width,height:l.height,format:"jpg",liked:!1,isShared:e.is_shared,createdAt:"",modelTask:{id:o.task_id,model:l.lora||l.checkpoint||l.model||"",params:(0,t.Z)((0,i.Z)({},l),{seed:s,tool:l.sampler,width:l.width,height:l.height,prompt:l.prompt,scheduler:l.sampler,num_images:l.batch_count,started_at:"",enhance_face:!1,guidance_scale:l.cfg_scale,negative_prompt:l.negative_prompt,num_inference_steps:l.steps}),_model:{id:"",name:null!==(r=null!==(a=l.model)&&void 0!==a?a:_)&&void 0!==r?r:"",params:{author:"",images:[],author_url:"",description:"",instance_prompt:""}}},url:e.image_url,jpegUrl:""})}function _(e){var a;return null!==(a=null===e||void 0===e?void 0:e.map(o))&&void 0!==a?a:[]}},16310:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return w}});var i=r(47568),t=r(29815),n=r(34051),o=r.n(n),_=r(85893),s=r(44820),d=r(34038),l=r(80690),c=r(14969),u=r(11163),g=r(67294),m=r(40827),p=r(22718),h=r(73913),f=r.n(h),v=r(13464),k=r(83779);function x(){var e=(0,u.useRouter)(),a=((0,v.T)(),(0,v.C)(k.dy)),r=(0,g.useState)([]),n=r[0],d=r[1],h=(0,g.useState)(!1),x=(h[0],h[1],(0,g.useState)([])),w=x[0],y=x[1],j=(0,g.useState)([]),b=j[0],N=j[1];function C(){return E.apply(this,arguments)}function E(){return E=(0,i.Z)(o().mark((function e(){var a,r,i,_,s,l=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>0&&void 0!==l[0]&&l[0],r=l.length>1&&void 0!==l[1]?l[1]:z,i=l.length>2&&void 0!==l[2]?l[2]:w,_=l.length>3&&void 0!==l[3]?l[3]:b,e.prev=1,e.next=4,c.xP.get("/shared/images",{params:{ids:"Favorite"===r?i.join(","):_.join(",")}});case 4:s=e.sent,d(a?(0,p.Mk)(s.data):(0,t.Z)(n).concat((0,t.Z)((0,p.Mk)(s.data)))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),d([]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),E.apply(this,arguments)}function Z(){return A.apply(this,arguments)}function A(){return(A=(0,i.Z)(o().mark((function e(){var a,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.xP.get("/images/list/action");case 3:return a=e.sent,y(null!==(r=a.data.favourite)&&void 0!==r?r:[]),N(null!==(i=a.data.like)&&void 0!==i?i:[]),e.abrupt("return",a.data);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var T=(0,g.useState)("Favorite"),z=T[0],F=T[1];return(0,g.useEffect)((function(){a.id&&z&&(Z(),C(!0))}),[a.id,z]),(0,_.jsx)("div",{className:f()._hero,children:(0,_.jsxs)("div",{className:f().hero,children:[(0,_.jsx)("div",{className:"flex justify-between items-center",children:(0,_.jsx)("div",{className:"flex gap-1",children:["Favorite","Like"].map((function(e){return(0,_.jsx)(s.Z,{size:"sm",type:e===z?"accent":"accent-border",onClick:(0,i.Z)(o().mark((function a(){var r;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return F(e),d([]),a.next=4,Z();case 4:r=a.sent,"Favorite"===e&&r.favourite.length?C(!0,e,r.favourite,[]):"Like"===e&&r.like.length&&C(!0,e,[],r.like);case 6:case"end":return a.stop()}}),a)}))),children:e},e)}))})}),(0,_.jsx)("div",{className:f().images,id:"images",children:(0,_.jsx)("div",{className:f().infinite,children:(0,_.jsx)(m.Z,{breakpointCols:{default:8,2400:6,1700:4,1260:3,1024:2,840:1,760:2},className:f().grid,columnClassName:f().column,children:n.map((function(a){return(0,_.jsx)("div",{id:a.id,className:f().img,children:(0,_.jsx)(l.El,{model:{id:a.id,reuse_img_url:a.image_url,nsfw:"18+"===a.nsfw,reuse_img:a.image_id},onClick:function(r){r.stopPropagation(),r.preventDefault(),e.push("/img/".concat(a.id))},hasLike:void 0!==b.find((function(e){return e===a.id})),hasFavorite:void 0!==w.find((function(e){return e===a.id})),hideFavorite:"Like"===z,hideLike:"Favorite"===z,showRun:!0})},a.id)}))})})})]})})}function w(e){e.exampleArt;return(0,_.jsx)(d.Z,{title:"Everything you need to create images with AI",description:"Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more.",canonical:"/",footer:!1,children:(0,_.jsx)(x,{})})}},73913:function(e){e.exports={_:"ai-generator____v_yms",_controls:"ai-generator__controls___8Piq",controls:"ai-generator_controls__ArQ54",_tabs:"ai-generator__tabs__Jn0T3",tabs:"ai-generator_tabs__MP411",_parameters:"ai-generator__parameters__YgHmr",parameters:"ai-generator_parameters__vio9v",random:"ai-generator_random__f2t2a",sliders2:"ai-generator_sliders2__vf0XO",mixer_images:"ai-generator_mixer_images__VU5CX",mixer_image:"ai-generator_mixer_image__VmVkB",_dropzone:"ai-generator__dropzone__w7cHT",upload:"ai-generator_upload__yT_nG",dropzone:"ai-generator_dropzone__EevXg",dropzone_image:"ai-generator_dropzone_image__KpiLA",image_loader:"ai-generator_image_loader__KrUaw",upload_delete:"ai-generator_upload_delete__Ezf91",actions:"ai-generator_actions__gA_Xn",keyboard:"ai-generator_keyboard__5Jrgg",images:"ai-generator_images___x2l6",images_head:"ai-generator_images_head__DNtWS",infinite:"ai-generator_infinite__9oyQm",grid:"ai-generator_grid__YK64A",column:"ai-generator_column__U_i5_",img:"ai-generator_img__EKyK3",img_dragging:"ai-generator_img_dragging__qha8C",_overlay:"ai-generator__overlay__N3jJA",overlay:"ai-generator_overlay__QERFA","fade-in":"ai-generator_fade-in__S3aCC",_modal:"ai-generator__modal__a3O5t",modal:"ai-generator_modal__6guHM","slide-in":"ai-generator_slide-in__y8Ds1",modal_image:"ai-generator_modal_image__3tswV",close:"ai-generator_close__O05CU",_hero:"ai-generator__hero__jef_V",hero:"ai-generator_hero__TioId"}}},function(e){e.O(0,[84,867,53,884,765,690,774,888,179],(function(){return a=30142,e(e.s=a);var a}));var a=e.O();_N_E=a}]);