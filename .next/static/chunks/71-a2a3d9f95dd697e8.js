(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{1061:function(e,i,a){"use strict";a.d(i,{Aq:function(){return r},VR:function(){return t}});var n=a(5893),s=a(1458),l=a.n(s);function t(e){var i=e.children,a=e.align,s=void 0===a?"left":a;return(0,n.jsx)("div",{className:[l().btn,l()[s]].join(" ").trim(),children:i})}function r(e){var i=e.children;return(0,n.jsx)("div",{className:[l().input_row].join(" ").trim(),children:i})}},7577:function(e,i,a){"use strict";a.d(i,{Z:function(){return T}});var n=a(7568),s=a(6042),l=a(4051),t=a.n(l),r=a(5893),_=a(6154),o=a(2492),c=a(3464),m=a(3137),d=a(3779),u=a(4200),p=a(5675),h=a.n(p),g=a(7294),f={euler_a:"Euler Ancestral",euler:"Euler",lms:"LMS","dpmsolver++":"DPM-Solver++",dpmsolver:"DPM-Solver",pndm:"PLMS",ddim:"DDIM",kdpm2:"DPM Karras",kdpm2_a:"DPM Karras Ancestral"},v=a(4820),x=a(2572),b=a.n(x),j=a(9834),N=a(4201),w=a(1061),y=a(9580);function k(e){var i=e.id,a=e.url,n=e.imageSrc,s=e.imageWidth,l=e.imageHeight,t=e.type,d=void 0===t?"icon":t,u=e.size,p=void 0===u?"md":u,f=(0,c.T)(),x=(0,g.useState)(!1),k=x[0],I=x[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.Z,{size:p,type:d,onClick:function(){I(!0),_.Z.put("/api/images/".concat(i),{is_shared:!0})},children:[(0,r.jsx)(o.rsq,{}),"Share"]}),!0===k?(0,r.jsxs)("div",{className:b()._overlay,children:[(0,r.jsx)("div",{className:b().overlay}),(0,r.jsx)("div",{className:b()._modal,children:(0,r.jsxs)("div",{className:b().modal,children:[(0,r.jsx)("button",{className:b().close,onClick:function(){return I(!1)},children:(0,r.jsx)(o.Ch3,{size:14})}),(0,r.jsx)(j.default,{onOutsideClick:function(){return I(!1)},display:"contents",children:(0,r.jsxs)("div",{className:b().sharer,children:[(0,r.jsx)("div",{className:b()._sharer_image,children:(0,r.jsx)("div",{className:b().sharer_image,children:(0,r.jsx)(h(),{src:n,width:s,height:l,alt:"",loader:N.O})})}),(0,r.jsx)("div",{className:b().sharer_body,children:(0,r.jsxs)(w.Aq,{children:[(0,r.jsx)(y.Z,{id:"link-copy",label:"",value:a,disableInfo:!0}),(0,r.jsx)("div",{className:b().copy_btn,children:(0,r.jsxs)(v.Z,{onClick:function(){if(!navigator.clipboard){var e=document.getElementById("link-copy");if(!e)return;try{e.focus(),document.execCommand("copy"),(0,m.yw)(f,{type:"success",text:"Copied link to clipboard!"}),e.blur()}catch(i){(0,m.yw)(f,{type:"danger",text:"Error while copying link to clipboard!"})}}navigator.clipboard.writeText(a).then((function(){(0,m.yw)(f,{type:"success",text:"Copied link to clipboard!"})}),(function(){(0,m.yw)(f,{type:"danger",text:"Error while copying link to clipboard!"})}))},children:[(0,r.jsx)(o.J4M,{})," Copy"]})})]})})]})})]})})]}):null]})}var I=a(1163),S={"stable-diffusion-v1.5":"Stable Diffusion v1.5","stable-diffusion-v2":"Stable Diffusion v2","stable-diffusion-v2.1":"Stable Diffusion v2.1","stable-diffusion-txt2img-v1.5":"Stable Diffusion v1.5 (Text to Image)","stable-diffusion-txt2img-v2":"Stable Diffusion v2 (Text to Image)","stable-diffusion-txt2img-v2.1":"Stable Diffusion v2.1 (Text to Image)","stable-diffusion-img2img-v1.5":"Stable Diffusion v1.5 (Text to Image)","stable-diffusion-img2img-v2":"Stable Diffusion v2 (Text to Image)","stable-diffusion-img2img-v2.1":"Stable Diffusion v2.1 (Text to Image)","stable-diffusion-inpaint-v1.5":"Stable Diffusion Inpainting v1.5","real-esrgan":"Real-ESRGAN ",gfpgan:"GFPGAN ","image-mixer":"Image Mixer","instruct-pix2pix":"Instruct Pix2Pix"};function T(e){var i=-1!=(0,I.useRouter)().pathname.indexOf("/img/")?"&shared=true":"",a=(0,g.useState)(e),l=a[0],m=a[1];(0,c.C)(d.dy),(0,c.T)();function p(){return(p=(0,n.Z)(t().mark((function i(){var a;return t().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_.Z.get("/api/images/"+e.id);case 2:a=i.sent,m((0,s.Z)({},l,a.data));case 4:case"end":return i.stop()}}),i)})))).apply(this,arguments)}(0,g.useEffect)((function(){e.url||function(){p.apply(this,arguments)}()}),[]);var x=l.id,j=l.modelTask,N=l.width,w=l.height,y=l.url,T=(l.createdAt,j.model),Z=j.params,C=j._model,D=j&&Z&&Z.prompt&&Z.prompt||"";C&&C.id&&(D=D.replace(C.params.instance_prompt+", ",""));var E=(D||"").split(/[,|.]/gi),F=E[0].charAt(0).toUpperCase()+E[0].slice(1)+".";"real-esrgan"!==e.modelTask.model&&"gfpgan"!==e.modelTask.model||(F="Enhanced image."),"image-mixer"===T&&(F="Mixed Image.");var z=(0,g.useState)(""),M=z[0],P=z[1];return(0,g.useEffect)((function(){window&&P(window.location.protocol+"//"+window.location.host)}),[]),(0,r.jsxs)("div",{className:b().view,children:[(0,r.jsxs)("div",{className:b().view_head,children:[(0,r.jsx)("h1",{className:b().title,children:F}),(0,r.jsxs)("div",{className:b().view_buttons,children:[(0,r.jsx)(v.Z,{type:"icon",title:"Download",href:"/api/download/".concat(e.id),download:"getimg_ai_".concat(e.id,".").concat(e.format.toLowerCase()),children:(0,r.jsx)(o.UWx,{})}),D?(0,r.jsxs)(v.Z,{type:"default",title:"Generate similar",href:"/?img=".concat(x).concat(i),openInNewTab:!0,children:[(0,r.jsx)(u.Z,{strokeWidth:1.5}),"Reuse parameters"]}):null,(0,r.jsxs)(v.Z,{type:"default",title:"Generate similar",href:"/?init-img=".concat(x).concat(i),openInNewTab:!0,children:[(0,r.jsx)(o.UO2,{strokeWidth:1.5}),"Reuse image"]}),(0,r.jsx)(k,{id:x,url:"".concat(M,"/img/").concat(x),imageSrc:y,imageWidth:N,imageHeight:w,type:"primary"})]})]}),(0,r.jsxs)("div",{className:b()._view_image,children:[(0,r.jsx)("div",{className:b().view_image_bg,style:{backgroundImage:"url(".concat(y,")")}}),(0,r.jsx)("div",{className:b().view_image,children:(0,r.jsx)(h(),{src:y,width:N,height:w,alt:D,className:b().view_img,unoptimized:!0})})]}),(0,r.jsxs)("div",{className:b().mobile_sharer,children:[(0,r.jsx)(v.Z,{size:"xs",type:"icon",title:"Download",href:"/api/download/".concat(e.id),download:"getimg_ai_".concat(e.id,".").concat(e.format.toLowerCase()),children:(0,r.jsx)(o.UWx,{})}),D?(0,r.jsxs)(v.Z,{size:"sm",type:"default",title:"Generate similar",href:"/?img=".concat(x).concat(i),openInNewTab:!0,children:[(0,r.jsx)(u.Z,{strokeWidth:1.5}),"Reuse parameters"]}):null,(0,r.jsxs)(v.Z,{size:"sm",type:"default",title:"Generate similar",href:"/?init-img=".concat(x).concat(i),openInNewTab:!0,children:[(0,r.jsx)(o.UO2,{strokeWidth:1.5}),"Reuse image"]}),(0,r.jsx)(k,{size:"sm",id:x,type:"primary",url:"".concat(M,"/img/").concat(x),imageSrc:y,imageWidth:N,imageHeight:w})]}),(0,r.jsxs)("div",{className:b().content,children:[(0,r.jsx)("p",{className:b().prompt,children:D}),(0,r.jsxs)("ul",{className:b().params,children:[(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Size:"}),(0,r.jsxs)("p",{className:b().value,children:[N," \xd7 ",w]})]}),Z.guidance_scale?(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"CFG scale:"}),(0,r.jsx)("p",{className:b().value,children:j.params.guidance_scale})]}):null,Z.image_guidance_scale?(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Image guidance:"}),(0,r.jsx)("p",{className:b().value,children:j.params.image_guidance_scale})]}):null,void 0!==Z.strength?(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Strength:"}),(0,r.jsx)("p",{className:b().value,children:Z.strength})]}):null,Z.num_inference_steps?(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Steps:"}),(0,r.jsx)("p",{className:b().value,children:Z.num_inference_steps})]}):null,Z.seed?(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Seed:"}),(0,r.jsx)("p",{className:b().value,children:Z.seed})]}):null,Z.negative_prompt?(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Negative prompt:"}),(0,r.jsx)("p",{className:b().value,children:Z.negative_prompt})]}):null,Z.inpaint_prompt?(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Inpaint prompt:"}),(0,r.jsx)("p",{className:b().value,children:Z.inpaint_prompt})]}):null,T.includes("stable-diffusion")||T.startsWith("model-")?(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Diffusion sampler:"}),(0,r.jsx)("p",{className:b().value,children:f[Z.scheduler||"ddim"]})]}):null,Z.upscale||Z.enhance_face?(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Enhancements:"}),(0,r.jsx)("p",{className:b().value,children:[Z.enhance_face?"Faces":"",Z.upscale?Z.upscale+"x Upscale":""].filter((function(e){return e})).join(", ")})]}):null,(0,r.jsxs)("li",{className:b().param,children:[(0,r.jsx)("b",{className:b().label,children:"Model:"}),(0,r.jsx)("p",{className:b().value,children:C&&C.name||S[T]})]})]})]})]})}},9580:function(e,i,a){"use strict";a.d(i,{Z:function(){return m}});var n=a(5893),s=a(3464),l=a(3137),t=a(7294),r=a(2492),_=a(5777),o=a.n(_),c=a(4319);function m(e){var i=e.size,a=void 0===i?"md":i,_=e.placeholder,m=e.label,d=e.id,u=e.name,p=e.error,h=e.type,g=void 0===h?"text":h,f=e.value,v=e.onChange,x=e.autoFocus,b=e.info,j=e.autoComplete,N=void 0===j?"off":j,w=e.pattern,y=e.disabled,k=e.required,I=e.Icon,S=e.customStyles,T=void 0===S?[]:S,Z=e.disableInfo,C=void 0!==Z&&Z,D=e.step,E=e.onBlur,F=e.onFocus,z=(0,s.C)(l.i2),M=(0,t.useState)(!1),P=M[0],R=M[1],A=(p=p||z&&z[d])&&(!p.value&&!f||p.value&&p.value===f),L=[o().input,o()[a],I?o().with_icon:"",T.map((function(e){return o()[e]})).join(" "),A?o().input_error:""].join(" ").trim();return(0,t.useEffect)((function(){var e;x&&(null===(e=document.getElementById(d))||void 0===e||e.focus())}),[x]),(0,n.jsxs)("div",{className:o()._,children:[(0,n.jsxs)("div",{className:[o()._input,m?o().with_label:""].join(" ").trim(),children:[I?(0,n.jsx)(I,{className:o().icon,size:14}):null,(0,n.jsx)("input",{id:d,name:u||d,className:L,value:f||"",onChange:v,type:P?"text":g,autoComplete:N,placeholder:_,autoFocus:x,pattern:w,disabled:y,required:void 0!==k,onBlur:E,onFocus:F,step:D}),(0,n.jsx)(c.Z,{htmlFor:d,className:o().input_label,children:m}),"password"===g?(0,n.jsx)("button",{type:"button",className:o().password_show,onClick:function(){return R(!P)},children:P?(0,n.jsx)(r.pqo,{size:16}):(0,n.jsx)(r.djZ,{size:16})}):null]}),C?null:(0,n.jsx)("div",{className:o()._info,children:A?(0,n.jsx)("div",{className:o().error,children:p.msg}):b?(0,n.jsx)("div",{className:o().info,children:b}):null})]})}},4319:function(e,i,a){"use strict";a.d(i,{Z:function(){return t}});var n=a(5893),s=a(5777),l=a.n(s);function t(e){var i=e.className,a=e.children,s=e.htmlFor;return(0,n.jsx)("label",{htmlFor:s,className:[l().label,i].join(" ").trim(),children:a})}},4201:function(e,i,a){"use strict";a.d(i,{O:function(){return n}});var n=function(e){var i=e.src,a=e.width,n=e.quality,s=["width=".concat(a)];n&&s.push("quality=".concat(n));var l=s.join(",");return"https://getimg.ai/cdn-cgi/image/".concat(l,"/").concat(i)}},1458:function(e){e.exports={form:"form_form__TxUZP",title:"form_title__dpazE",body:"form_body__KAW4H",inline_input:"form_inline_input__sXUpG",label:"form_label__7yZDI",input:"form_input__eEEkj",btn:"form_btn__WIjry",left:"form_left__l_inl",right:"form_right__geMKV",center:"form_center__FByHZ",input_row:"form_input_row___bPgK"}},2572:function(e){e.exports={image:"image_image__el7xn",loading:"image_loading__sb7il",img:"image_img__LPrPB",img_hover:"image_img_hover__RhCpi",hoverable:"image_hoverable__KYVDh",img_hover_row:"image_img_hover_row__xU7dd",btn_group:"image_btn_group__hRuQR",_overlay:"image__overlay__BkxIA",overlay:"image_overlay__F614B","fade-in":"image_fade-in__lnnI9",_modal:"image__modal__PAd8e",modal:"image_modal__NMlg1","slide-in":"image_slide-in__vD2UD",modal_image:"image_modal_image__fngk2",close:"image_close__kTHQ5",view:"image_view__8hiTc",view_head:"image_view_head__mQ5UF",title:"image_title__0LC6Q",view_buttons:"image_view_buttons___GlqX",_view_image:"image__view_image__3YbrV",view_image_bg:"image_view_image_bg__LuKXc",view_image:"image_view_image__zLrnK",content:"image_content__cI9cP",prompt:"image_prompt__pfwoS",params:"image_params__jnsPO",param:"image_param__Q2u78",label:"image_label__QDuZz",value:"image_value__7m2OA",sharer:"image_sharer__vqTxI",_sharer_image:"image__sharer_image__z4JS0",sharer_image:"image_sharer_image__rdeTo",sharer_body:"image_sharer_body__LKjx8",sharer_links:"image_sharer_links__edr2R",sharer_link:"image_sharer_link__xn4RY",fb:"image_fb__zN4RF",pi:"image_pi__7V5xp",tw:"image_tw__LPiQF",re:"image_re__Bcs7P",copy_btn:"image_copy_btn__2Lst_",mobile_sharer:"image_mobile_sharer__g1Hn0",shimmer:"image_shimmer__TS7pj"}},5777:function(e){e.exports={_:"input____fc5J9",label:"input_label__e5_K4",input_label:"input_input_label__BRGcu",_input:"input__input__PIwFM",with_label:"input_with_label__yOxYO",chevron:"input_chevron__AhoTk",password_show:"input_password_show__Mk8QU",number:"input_number__oYL0_",input:"input_input__jeroS",icon:"input_icon__NMIum",with_icon:"input_with_icon__jxvcI",xs:"input_xs__ZBgEf",sm:"input_sm__A9GQf",md:"input_md__w_jv7",lg:"input_lg__ZRAD9",_info:"input__info___TmJT",info:"input_info__o1xT1",error:"input_error__H_Ieh",input_error:"input_input_error__JH47l",number_sm:"input_number_sm__yvM84",number_md:"input_number_md___nEqK",number_lg:"input_number_lg__X8NvC",textarea:"input_textarea__9B2w0",textarea_lg:"input_textarea_lg__Vead9",color:"input_color__F_dFr",color_handle:"input_color_handle__muymo",picker:"input_picker__wQvLX",color_picker:"input_color_picker__bMYXK","no-border":"input_no-border__BdLLt","no-margin":"input_no-margin__vjYJe",bold:"input_bold__oF3hH","font-15":"input_font-15__UEd_V"}}}]);