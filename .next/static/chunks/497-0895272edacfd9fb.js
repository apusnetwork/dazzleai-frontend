(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{21061:function(e,i,a){"use strict";a.d(i,{Aq:function(){return l},VR:function(){return t}});var n=a(85893),s=a(11458),r=a.n(s);function t(e){var i=e.children,a=e.align,s=void 0===a?"left":a;return(0,n.jsx)("div",{className:[r().btn,r()[s]].join(" ").trim(),children:i})}function l(e){var i=e.children;return(0,n.jsx)("div",{className:[r().input_row].join(" ").trim(),children:i})}},20042:function(e,i,a){"use strict";a.d(i,{Z:function(){return Z}});var n=a(47568),s=a(26042),r=a(34051),t=a.n(r),l=a(85893),_=a(17337),c=a(13464),o=a(83137),m=a(83779),d=a(74200),u=a(25675),p=a.n(u),h=a(67294),g=a(44820),v=a(22572),x=a.n(v),f=a(39834),j=a(54201),b=a(21061),w=a(29580),N=a(14969);function y(e){var i=e.id,a=e.url,n=e.imageSrc,s=e.imageWidth,r=e.imageHeight,t=e.type,m=void 0===t?"icon":t,d=e.size,u=void 0===d?"md":d,v=(0,c.T)(),y=(0,h.useState)(!1),k=y[0],C=y[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(g.Z,{size:u,type:m,onClick:function(){C(!0),N.xP.post("/images/update",{image_id:i,is_shared:!0})},children:[(0,l.jsx)(_.rsq,{}),"Share"]}),!0===k?(0,l.jsxs)("div",{className:x()._overlay,children:[(0,l.jsx)("div",{className:x().overlay}),(0,l.jsx)("div",{className:x()._modal,children:(0,l.jsxs)("div",{className:x().modal,children:[(0,l.jsx)("button",{className:x().close,onClick:function(){return C(!1)},children:(0,l.jsx)(_.Ch3,{size:14})}),(0,l.jsx)(f.default,{onOutsideClick:function(){return C(!1)},display:"contents",children:(0,l.jsxs)("div",{className:x().sharer,children:[(0,l.jsx)("div",{className:x()._sharer_image,children:(0,l.jsx)("div",{className:x().sharer_image,children:(0,l.jsx)(p(),{src:n,width:s,height:r,alt:"",loader:j.O})})}),(0,l.jsxs)("div",{className:x().sharer_body,children:[(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:x().china_attention,children:"Attention: Our service is not currently available for users in China due to technical limitations."})}),(0,l.jsxs)(b.Aq,{children:[(0,l.jsx)(w.Z,{id:"link-copy",label:"",value:a,disableInfo:!0}),(0,l.jsx)("div",{className:x().copy_btn,children:(0,l.jsxs)(g.Z,{onClick:function(){if(!navigator.clipboard){var e=document.getElementById("link-copy");if(!e)return;try{e.focus(),document.execCommand("copy"),(0,o.yw)(v,{type:"success",text:"Copied link to clipboard!"}),e.blur()}catch(i){(0,o.yw)(v,{type:"danger",text:"Error while copying link to clipboard!"})}}navigator.clipboard.writeText(a).then((function(){(0,o.yw)(v,{type:"success",text:"Copied link to clipboard!"})}),(function(){(0,o.yw)(v,{type:"danger",text:"Error while copying link to clipboard!"})}))},children:[(0,l.jsx)(_.J4M,{})," Copy"]})})]})]})]})})]})})]}):null]})}var k=a(11163),C=a(78510);function Z(e){var i=-1!=(0,k.useRouter)().pathname.indexOf("/img/")?"&shared=true":"",a=(0,h.useState)(e),r=a[0],o=a[1];(0,c.C)(m.dy),(0,c.T)();function u(){return(u=(0,n.Z)(t().mark((function i(){var a;return t().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,N.xP.get("/image?ids=".concat(e.id));case 2:a=i.sent,o((0,s.Z)({},r,(0,C.a)(a.data)));case 4:case"end":return i.stop()}}),i)})))).apply(this,arguments)}(0,h.useEffect)((function(){e.url||function(){u.apply(this,arguments)}()}),[]);var v=r.id,f=r.modelTask,j=r.width,b=r.height,w=r.url,Z=(r.createdAt,f.model),I=f.params,T=f._model,F=f&&I&&I.prompt&&I.prompt||"";T&&T.id&&(F=F.replace(T.params.instance_prompt+", ",""));var S=(F||"").split(/[,|.]/gi),E=S[0].charAt(0).toUpperCase()+S[0].slice(1)+".";"real-esrgan"!==e.modelTask.model&&"gfpgan"!==e.modelTask.model||(E="Enhanced image."),"image-mixer"===Z&&(E="Mixed Image.");var z,B=(0,h.useState)(""),L=B[0],A=B[1];return(0,h.useEffect)((function(){window&&A(window.location.protocol+"//"+window.location.host)}),[]),(0,l.jsxs)("div",{className:x().view,children:[(0,l.jsxs)("div",{className:x().view_head,children:[(0,l.jsx)("h1",{className:x().title,children:E}),(0,l.jsxs)("div",{className:x().view_buttons,children:[(0,l.jsx)(g.Z,{type:"icon",title:"Download",href:"/api/download/".concat(e.id),download:"getimg_ai_".concat(e.id,".").concat(e.format.toLowerCase()),children:(0,l.jsx)(_.UWx,{})}),F?(0,l.jsxs)(g.Z,{type:"default",title:"Generate similar",href:"/generate?img=".concat(v).concat(i),openInNewTab:null===(z=e.reuseNewTab)||void 0===z||z,children:[(0,l.jsx)(d.Z,{strokeWidth:1.5}),"Reuse parameters"]}):null,(0,l.jsx)(y,{id:v,url:"".concat(L,"/img/").concat(v),imageSrc:w,imageWidth:j,imageHeight:b,type:"primary"})]})]}),(0,l.jsxs)("div",{className:x()._view_image,children:[(0,l.jsx)("div",{className:x().view_image_bg,style:{backgroundImage:"url(".concat(w,")")}}),(0,l.jsx)("div",{className:x().view_image,children:(0,l.jsx)(p(),{src:w,width:j,height:b,alt:F,className:x().view_img,unoptimized:!0})})]}),(0,l.jsxs)("div",{className:x().mobile_sharer,children:[(0,l.jsx)(g.Z,{size:"xs",type:"icon",title:"Download",href:"/api/download/".concat(e.id),download:"getimg_ai_".concat(e.id,".").concat(e.format.toLowerCase()),children:(0,l.jsx)(_.UWx,{})}),F?(0,l.jsxs)(g.Z,{size:"sm",type:"default",title:"Generate similar",href:"/generate?img=".concat(v).concat(i),openInNewTab:!0,children:[(0,l.jsx)(d.Z,{strokeWidth:1.5}),"Reuse parameters"]}):null,(0,l.jsx)(y,{size:"sm",id:v,type:"primary",url:"".concat(L,"/img/").concat(v),imageSrc:w,imageWidth:j,imageHeight:b})]}),(0,l.jsx)("div",{className:x().content,children:(0,l.jsx)("ul",{className:x().params,children:(0,l.jsxs)("li",{className:x().param,style:{justifyContent:"flex-end"},children:[(0,l.jsx)("b",{className:x().label,children:"Generated with nodes of the community"}),(0,l.jsx)("p",{className:x().value,children:(0,l.jsx)(_.I1x,{style:{width:16,height:16},color:"#999999",fill:"#999999"})})]})})}),(0,l.jsxs)("div",{className:x().content,children:[(0,l.jsx)("p",{className:x().prompt,children:F}),(0,l.jsxs)("ul",{className:x().params,children:[(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Size:"}),(0,l.jsxs)("p",{className:x().value,children:[j," \xd7 ",b]})]}),I.guidance_scale?(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"CFG Scale:"}),(0,l.jsx)("p",{className:x().value,children:f.params.guidance_scale})]}):null,I.image_guidance_scale?(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Image guidance:"}),(0,l.jsx)("p",{className:x().value,children:f.params.image_guidance_scale})]}):null,void 0!==I.strength?(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Strength:"}),(0,l.jsx)("p",{className:x().value,children:I.strength})]}):null,I.num_inference_steps?(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Steps:"}),(0,l.jsx)("p",{className:x().value,children:I.num_inference_steps})]}):null,I.seed>0?(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Seed:"}),(0,l.jsx)("p",{className:x().value,children:I.seed})]}):null,I.negative_prompt?(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Negative prompt:"}),(0,l.jsx)("p",{className:x().value,children:I.negative_prompt})]}):null,I.inpaint_prompt?(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Inpaint prompt:"}),(0,l.jsx)("p",{className:x().value,children:I.inpaint_prompt})]}):null,(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Diffusion sampler:"}),(0,l.jsx)("p",{className:x().value,children:I.scheduler})]}),I.upscale||I.enhance_face?(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Enhancements:"}),(0,l.jsx)("p",{className:x().value,children:[I.enhance_face?"Faces":"",I.upscale?I.upscale+"x Upscale":""].filter((function(e){return e})).join(", ")})]}):null,(0,l.jsxs)("li",{className:x().param,children:[(0,l.jsx)("b",{className:x().label,children:"Model:"}),(0,l.jsx)("p",{className:x().value,children:T&&T.name})]})]})]})]})}},29580:function(e,i,a){"use strict";a.d(i,{Z:function(){return m}});var n=a(85893),s=a(13464),r=a(83137),t=a(67294),l=a(17337),_=a(25777),c=a.n(_),o=a(54319);function m(e){var i=e.size,a=void 0===i?"md":i,_=e.placeholder,m=e.label,d=e.id,u=e.name,p=e.error,h=e.type,g=void 0===h?"text":h,v=e.value,x=e.onChange,f=e.autoFocus,j=e.info,b=e.autoComplete,w=void 0===b?"off":b,N=e.pattern,y=e.disabled,k=e.required,C=e.Icon,Z=e.customStyles,I=void 0===Z?[]:Z,T=e.disableInfo,F=void 0!==T&&T,S=e.step,E=e.onBlur,z=e.onFocus,B=(0,s.C)(r.i2),L=(0,t.useState)(!1),A=L[0],P=L[1],R=(p=p||B&&B[d])&&(!p.value&&!v||p.value&&p.value===v),U=[c().input,c()[a],C?c().with_icon:"",I.map((function(e){return c()[e]})).join(" "),R?c().input_error:""].join(" ").trim();return(0,t.useEffect)((function(){var e;f&&(null===(e=document.getElementById(d))||void 0===e||e.focus())}),[f]),(0,n.jsxs)("div",{className:c()._,children:[(0,n.jsxs)("div",{className:[c()._input,m?c().with_label:""].join(" ").trim(),children:[C?(0,n.jsx)(C,{className:c().icon,size:14}):null,(0,n.jsx)("input",{id:d,name:u||d,className:U,value:v||"",onChange:x,type:A?"text":g,autoComplete:w,placeholder:_,autoFocus:f,pattern:N,disabled:y,required:void 0!==k,onBlur:E,onFocus:z,step:S}),(0,n.jsx)(o.Z,{htmlFor:d,className:c().input_label,children:m}),"password"===g?(0,n.jsx)("button",{type:"button",className:c().password_show,onClick:function(){return P(!A)},children:A?(0,n.jsx)(l.pqo,{size:16}):(0,n.jsx)(l.djZ,{size:16})}):null]}),F?null:(0,n.jsx)("div",{className:c()._info,children:R?(0,n.jsx)("div",{className:c().error,children:p.msg}):j?(0,n.jsx)("div",{className:c().info,children:j}):null})]})}},54319:function(e,i,a){"use strict";a.d(i,{Z:function(){return t}});var n=a(85893),s=a(25777),r=a.n(s);function t(e){var i=e.className,a=e.children,s=e.htmlFor;return(0,n.jsx)("label",{htmlFor:s,className:[r().label,i].join(" ").trim(),children:a})}},3892:function(e,i,a){"use strict";a(76489)},78510:function(e,i,a){"use strict";a.d(i,{a:function(){return s}});a(34051),a(14969),a(3892);var n=a(22718);function s(e){return(0,n.uX)(e[0])}},22718:function(e,i,a){"use strict";a.d(i,{Mk:function(){return l},uX:function(){return t}});var n=a(26042),s=a(69396),r=(a(34051),a(14969),a(3892),{batch_count:1,cfg_scale:1,denoising_strength:0,height:512,width:512,image:"",model:"",lora:"",checkpoint:"",negative_prompt:"",prompt:"",sampler:"",seed:0,steps:0});function t(e){var i,a,t=e.task,l=e.model_id,_=e.seed,c=(e.image_id,t.param),o=void 0===c?r:c;return null==o&&(o=r),(0,s.Z)((0,n.Z)({},e),{id:e.image_id,modelTaskId:t.task_id,userId:e.user_id,hosting:"remote",path:"",jpegPath:"",width:o.width,height:o.height,format:"jpg",liked:!1,isShared:e.is_shared,createdAt:"",modelTask:{id:t.task_id,model:o.lora||o.checkpoint||o.model||"",params:(0,s.Z)((0,n.Z)({},o),{seed:_,tool:o.sampler,width:o.width,height:o.height,prompt:o.prompt,scheduler:o.sampler,num_images:o.batch_count,started_at:"",enhance_face:!1,guidance_scale:o.cfg_scale,negative_prompt:o.negative_prompt,num_inference_steps:o.steps}),_model:{id:"",name:null!==(a=null!==(i=o.model)&&void 0!==i?i:l)&&void 0!==a?a:"",params:{author:"",images:[],author_url:"",description:"",instance_prompt:""}}},url:e.image_url,jpegUrl:""})}function l(e){var i;return null!==(i=null===e||void 0===e?void 0:e.map(t))&&void 0!==i?i:[]}},54201:function(e,i,a){"use strict";a.d(i,{O:function(){return n}});var n=function(e){var i=e.src,a=e.width,n=e.quality,s=["width=".concat(a)];n&&s.push("quality=".concat(n));s.join(",");return i}},11458:function(e){e.exports={form:"form_form__TxUZP",title:"form_title__dpazE",body:"form_body__KAW4H",inline_input:"form_inline_input__sXUpG",label:"form_label__7yZDI",input:"form_input__eEEkj",btn:"form_btn__WIjry",left:"form_left__l_inl",right:"form_right__geMKV",center:"form_center__FByHZ",input_row:"form_input_row___bPgK"}},22572:function(e){e.exports={image:"image_image__el7xn",loading:"image_loading__sb7il",img:"image_img__LPrPB",img_hover:"image_img_hover__RhCpi",hoverable:"image_hoverable__KYVDh",img_hover_row:"image_img_hover_row__xU7dd",btn_group:"image_btn_group__hRuQR",_overlay:"image__overlay__BkxIA",overlay:"image_overlay__F614B","fade-in":"image_fade-in__lnnI9",_modal:"image__modal__PAd8e",modal:"image_modal__NMlg1","slide-in":"image_slide-in__vD2UD",modal_image:"image_modal_image__fngk2",close:"image_close__kTHQ5",view:"image_view__8hiTc",view_head:"image_view_head__mQ5UF",title:"image_title__0LC6Q",view_buttons:"image_view_buttons___GlqX",_view_image:"image__view_image__3YbrV",view_image_bg:"image_view_image_bg__LuKXc",view_image:"image_view_image__zLrnK",content:"image_content__cI9cP",prompt:"image_prompt__pfwoS",params:"image_params__jnsPO",param:"image_param__Q2u78",label:"image_label__QDuZz",value:"image_value__7m2OA",sharer:"image_sharer__vqTxI",_sharer_image:"image__sharer_image__z4JS0",sharer_image:"image_sharer_image__rdeTo",sharer_body:"image_sharer_body__LKjx8",sharer_links:"image_sharer_links__edr2R",sharer_link:"image_sharer_link__xn4RY",fb:"image_fb__zN4RF",pi:"image_pi__7V5xp",tw:"image_tw__LPiQF",re:"image_re__Bcs7P",china_attention:"image_china_attention__i2K1H",copy_btn:"image_copy_btn__2Lst_",mobile_sharer:"image_mobile_sharer__g1Hn0",_user_menu:"image__user_menu__3B4od",user_menu:"image_user_menu__L_7vs",user_menu_name:"image_user_menu_name__TdEBm",shimmer:"image_shimmer__TS7pj"}},25777:function(e){e.exports={_:"input____fc5J9",label:"input_label__e5_K4",input_label:"input_input_label__BRGcu",_input:"input__input__PIwFM",with_label:"input_with_label__yOxYO",chevron:"input_chevron__AhoTk",password_show:"input_password_show__Mk8QU",number:"input_number__oYL0_",input:"input_input__jeroS",icon:"input_icon__NMIum",with_icon:"input_with_icon__jxvcI",xs:"input_xs__ZBgEf",sm:"input_sm__A9GQf",md:"input_md__w_jv7",lg:"input_lg__ZRAD9",_info:"input__info___TmJT",info:"input_info__o1xT1",error:"input_error__H_Ieh",input_error:"input_input_error__JH47l",number_sm:"input_number_sm__yvM84",number_md:"input_number_md___nEqK",number_lg:"input_number_lg__X8NvC",textarea:"input_textarea__9B2w0",textarea_lg:"input_textarea_lg__Vead9",color:"input_color__F_dFr",color_handle:"input_color_handle__muymo",picker:"input_picker__wQvLX",color_picker:"input_color_picker__bMYXK","no-border":"input_no-border__BdLLt","no-margin":"input_no-margin__vjYJe",bold:"input_bold__oF3hH","font-15":"input_font-15__UEd_V"}}}]);