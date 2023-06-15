exports.id = 9279;
exports.ids = [9279];
exports.modules = {

/***/ 9755:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "image_image__el7xn",
	"loading": "image_loading__sb7il",
	"img": "image_img__LPrPB",
	"img_hover": "image_img_hover__RhCpi",
	"hoverable": "image_hoverable__KYVDh",
	"img_hover_row": "image_img_hover_row__xU7dd",
	"btn_group": "image_btn_group__hRuQR",
	"_overlay": "image__overlay__BkxIA",
	"overlay": "image_overlay__F614B",
	"fade-in": "image_fade-in__lnnI9",
	"_modal": "image__modal__PAd8e",
	"modal": "image_modal__NMlg1",
	"slide-in": "image_slide-in__vD2UD",
	"modal_image": "image_modal_image__fngk2",
	"close": "image_close__kTHQ5",
	"view": "image_view__8hiTc",
	"view_head": "image_view_head__mQ5UF",
	"title": "image_title__0LC6Q",
	"view_buttons": "image_view_buttons___GlqX",
	"_view_image": "image__view_image__3YbrV",
	"view_image_bg": "image_view_image_bg__LuKXc",
	"view_image": "image_view_image__zLrnK",
	"content": "image_content__cI9cP",
	"prompt": "image_prompt__pfwoS",
	"params": "image_params__jnsPO",
	"param": "image_param__Q2u78",
	"label": "image_label__QDuZz",
	"value": "image_value__7m2OA",
	"sharer": "image_sharer__vqTxI",
	"_sharer_image": "image__sharer_image__z4JS0",
	"sharer_image": "image_sharer_image__rdeTo",
	"sharer_body": "image_sharer_body__LKjx8",
	"sharer_links": "image_sharer_links__edr2R",
	"sharer_link": "image_sharer_link__xn4RY",
	"fb": "image_fb__zN4RF",
	"pi": "image_pi__7V5xp",
	"tw": "image_tw__LPiQF",
	"re": "image_re__Bcs7P",
	"china_attention": "image_china_attention__i2K1H",
	"copy_btn": "image_copy_btn__2Lst_",
	"mobile_sharer": "image_mobile_sharer__g1Hn0",
	"_user_menu": "image__user_menu__3B4od",
	"user_menu": "image_user_menu__L_7vs",
	"user_menu_name": "image_user_menu_name__TdEBm",
	"shimmer": "image_shimmer__TS7pj"
};


/***/ }),

/***/ 5903:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageSharer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3464);
/* harmony import */ var _frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3137);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2279);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_cloudflare__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4201);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7337);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4820);
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1061);
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9580);
/* harmony import */ var _image_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9755);
/* harmony import */ var _image_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_image_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_10__]);
_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function ImageSharer({ id , url , imageSrc , imageWidth , imageHeight , type ="icon" , size ="md"  }) {
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const { 0: modal , 1: setModal  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    function handleCopy() {
        window && window?.gtag("event", "copy", {
            "event_category": "spread",
            "event_label": ""
        });
        if (!navigator.clipboard) {
            const textArea = document.getElementById("link-copy");
            if (!textArea) return;
            try {
                textArea.focus();
                document.execCommand("copy");
                (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .message */ .yw)(dispatch, {
                    type: "success",
                    "text": "Copied link to clipboard!"
                });
                textArea.blur();
            } catch  {
                (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .message */ .yw)(dispatch, {
                    type: "danger",
                    "text": "Error while copying link to clipboard!"
                });
            }
        }
        navigator.clipboard.writeText(url).then(function() {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .message */ .yw)(dispatch, {
                type: "success",
                "text": "Copied link to clipboard!"
            });
        }, function() {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .message */ .yw)(dispatch, {
                type: "danger",
                "text": "Error while copying link to clipboard!"
            });
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                size: size,
                type: type,
                onClick: ()=>{
                    setModal(true);
                    window && window?.gtag("event", "share", {
                        "event_category": "spread",
                        "event_label": ""
                    });
                    _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_10__/* .oapi.post */ .xP.post(`/images/update`, {
                        image_id: id,
                        is_shared: true
                    });
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_6__/* .ShareAlt */ .rsq, {}),
                    "Share"
                ]
            }),
            modal === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default()._overlay),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default().overlay)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default()._modal),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default().modal),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default().close),
                                    onClick: ()=>setModal(false),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_6__/* .XCloseDelete */ .Ch3, {
                                        size: 14
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    onOutsideClick: ()=>setModal(false),
                                    display: "contents",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sharer),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default()._sharer_image),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sharer_image),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: imageSrc,
                                                        width: imageWidth,
                                                        height: imageHeight,
                                                        alt: "",
                                                        loader: _utils_cloudflare__WEBPACK_IMPORTED_MODULE_12__/* .cloudflareLoader */ .O
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sharer_body),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default().china_attention),
                                                            children: "Attention: Our service is not currently available for users in China due to technical limitations."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_form_form__WEBPACK_IMPORTED_MODULE_8__/* .InputRow */ .Aq, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_input_input__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                id: "link-copy",
                                                                label: "",
                                                                value: url,
                                                                disableInfo: true
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_11___default().copy_btn),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                    onClick: handleCopy,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_6__/* .CopyDuplicate */ .J4M, {}),
                                                                        " Copy"
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }) : null
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9279:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_components_basic_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7337);
/* harmony import */ var _frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3464);
/* harmony import */ var _frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3137);
/* harmony import */ var _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3779);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4820);
/* harmony import */ var _image_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9755);
/* harmony import */ var _image_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_image_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sharer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5903);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4969);
/* harmony import */ var _pages_api_images_id___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__, _sharer__WEBPACK_IMPORTED_MODULE_9__, _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_11__, _pages_api_images_id___WEBPACK_IMPORTED_MODULE_12__]);
([_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__, _sharer__WEBPACK_IMPORTED_MODULE_9__, _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_11__, _pages_api_images_id___WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const modelsMap = {
    "stable-diffusion-v1.5": "Stable Diffusion v1.5",
    "stable-diffusion-v2": "Stable Diffusion v2",
    "stable-diffusion-v2.1": "Stable Diffusion v2.1",
    "stable-diffusion-txt2img-v1.5": "Stable Diffusion v1.5 (Text to Image)",
    "stable-diffusion-txt2img-v2": "Stable Diffusion v2 (Text to Image)",
    "stable-diffusion-txt2img-v2.1": "Stable Diffusion v2.1 (Text to Image)",
    "stable-diffusion-img2img-v1.5": "Stable Diffusion v1.5 (Text to Image)",
    "stable-diffusion-img2img-v2": "Stable Diffusion v2 (Text to Image)",
    "stable-diffusion-img2img-v2.1": "Stable Diffusion v2.1 (Text to Image)",
    "stable-diffusion-inpaint-v1.5": "Stable Diffusion Inpainting v1.5",
    "real-esrgan": "Real-ESRGAN ",
    "gfpgan": "GFPGAN ",
    "image-mixer": "Image Mixer",
    "instruct-pix2pix": "Instruct Pix2Pix"
};
function ImageView(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const isSharing = router.pathname.indexOf("/img/") != -1;
    const shareParam = isSharing ? "&shared=true" : "";
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(props);
    const user = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__/* .selectUser */ .dy);
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    async function getImage() {
        const res = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_11__/* .oapi.get */ .xP.get(`/image?ids=${props.id}`);
        setState({
            ...state,
            ...(0,_pages_api_images_id___WEBPACK_IMPORTED_MODULE_12__/* .transformGetImageResponse */ .a)(res.data)
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (!props.url) {
            getImage();
        }
    }, []);
    function handleEditorOpen(e) {
        if (!user.id) {
            e.preventDefault();
            dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_3__/* .updateAuthState */ .FA)("register"));
        }
    }
    const { id , modelTask , width , height , url , createdAt  } = state;
    const { model , params , _model  } = modelTask;
    let prompt = modelTask && params && params.prompt ? params.prompt || "" : "";
    if (_model && _model.id) {
        prompt = prompt.replace(_model.params.instance_prompt + ", ", "");
    }
    const splitted = (prompt || "").split(/[,|.]/gi);
    let h = splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1) + ".";
    if (props.modelTask.model === "real-esrgan" || props.modelTask.model === "gfpgan") {
        h = "Enhanced image.";
    }
    if (model === "image-mixer") {
        h = "Mixed Image.";
    }
    const { 0: websiteHost , 1: setWebsiteHost  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (window) {
            setWebsiteHost(window.location.protocol + "//" + window.location.host);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().view),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().view_head),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                        children: h
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().view_buttons),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                type: "icon",
                                title: "Download",
                                href: `/api/download/${props.id}`,
                                download: `getimg_ai_${props.id}.${props.format.toLowerCase()}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_basic_icons__WEBPACK_IMPORTED_MODULE_1__/* .Download */ .UWx, {})
                            }),
                            prompt ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                type: "default",
                                title: "Generate similar",
                                href: `/generate?img=${id}${shareParam}`,
                                openInNewTab: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Repeat, {
                                        strokeWidth: 1.5
                                    }),
                                    "Reuse parameters"
                                ]
                            }) : null,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sharer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                id: id,
                                url: `${websiteHost}/img/${id}`,
                                imageSrc: url,
                                imageWidth: width,
                                imageHeight: height,
                                type: "primary"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default()._view_image),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().view_image_bg),
                        style: {
                            backgroundImage: `url(${url})`
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().view_image),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                            src: url,
                            width: width,
                            height: height,
                            alt: prompt,
                            className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().view_img),
                            unoptimized: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().mobile_sharer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        size: "xs",
                        type: "icon",
                        title: "Download",
                        href: `/api/download/${props.id}`,
                        download: `getimg_ai_${props.id}.${props.format.toLowerCase()}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_basic_icons__WEBPACK_IMPORTED_MODULE_1__/* .Download */ .UWx, {})
                    }),
                    prompt ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        size: "sm",
                        type: "default",
                        title: "Generate similar",
                        href: `/generate?img=${id}${shareParam}`,
                        openInNewTab: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Repeat, {
                                strokeWidth: 1.5
                            }),
                            "Reuse parameters"
                        ]
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sharer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        size: "sm",
                        id: id,
                        type: "primary",
                        url: `${websiteHost}/img/${id}`,
                        imageSrc: url,
                        imageWidth: width,
                        imageHeight: height
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().content),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().params),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                        style: {
                            justifyContent: "flex-end"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                children: "Generated with nodes of the community"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_basic_icons__WEBPACK_IMPORTED_MODULE_1__/* .QuestionCircle */ .I1x, {
                                    style: {
                                        width: 16,
                                        height: 16
                                    },
                                    color: "#999999",
                                    fill: "#999999"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().prompt),
                        children: prompt
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().params),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Size:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: [
                                            width,
                                            " \xd7 ",
                                            height
                                        ]
                                    })
                                ]
                            }),
                            params.guidance_scale ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "CFG Scale:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: modelTask.params.guidance_scale
                                    })
                                ]
                            }) : null,
                            params.image_guidance_scale ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Image guidance:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: modelTask.params.image_guidance_scale
                                    })
                                ]
                            }) : null,
                            params.strength !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Strength:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: params.strength
                                    })
                                ]
                            }) : null,
                            params.num_inference_steps ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Steps:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: params.num_inference_steps
                                    })
                                ]
                            }) : null,
                            params.seed > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Seed:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: params.seed
                                    })
                                ]
                            }) : null,
                            params.negative_prompt ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Negative prompt:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: params.negative_prompt
                                    })
                                ]
                            }) : null,
                            params.inpaint_prompt ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Inpaint prompt:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: params.inpaint_prompt
                                    })
                                ]
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Diffusion sampler:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: params.scheduler
                                    })
                                ]
                            }),
                            params.upscale || params.enhance_face ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Enhancements:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: [
                                            params.enhance_face ? "Faces" : "",
                                            params.upscale ? params.upscale + "x Upscale" : ""
                                        ].filter((x)=>x).join(", ")
                                    })
                                ]
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().param),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                        children: "Model:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_13___default().value),
                                        children: _model && _model.name
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports AuthHeaderKey, setCookie, getCookie, deleteCookie */
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
// utils/cookies.ts

const AuthHeaderKey = "getimgauth";
/**
 * This sets `cookie` using the `res` object
 */ const setCookie = (res, name, value, options = {})=>{
    const stringValue = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
    if (typeof options.maxAge === "number") {
        options.expires = new Date(Date.now() + options.maxAge * 1000);
    }
    res.setHeader("Set-Cookie", serialize(name, stringValue, options));
};
const getCookie = (req, name)=>{
    const cookies = parse(req.headers.cookie || "");
    return cookies[name];
};
const deleteCookie = (res, name)=>{
    res.setHeader("Set-Cookie", serialize(name, "", {
        maxAge: -1
    }));
};


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ transformGetImageResponse)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4969);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3892);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__, _images__WEBPACK_IMPORTED_MODULE_2__]);
([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__, _images__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function transformGetImageResponse(res) {
    return (0,_images__WEBPACK_IMPORTED_MODULE_2__/* .mapRemoteImageToGeneratedImage */ .uX)(res[0]);
}
async function handler(req, res) {
    try {
        const token = getCookie(req, AuthHeaderKey);
        let headersConfig = {};
        if (token) {
            headersConfig["Authorization"] = `Bearer ${token}`;
        }
        if (req.method === "GET") {
            const imagesRes = await axiosInstance.get("/api/images", {
                params: {
                    ids: req.query.id,
                    limit: req.query.take,
                    offset: req.query.skip
                },
                headers: headersConfig
            });
            if (imagesRes.data.length === 0) {
                res.status(404).json({
                    message: "Image not found"
                });
                return;
            }
            res.status(200).json(transformGetImageResponse(imagesRes.data));
        } else if (req.method === "PUT") {
            console.log({
                image_id: req.query.id,
                ...req.body
            });
            await axiosInstance.post("/api/images/update", {
                image_id: req.query.id,
                ...req.body
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            res.status(200).json({
                messgage: "ok"
            });
        }
    } catch (e) {
        const { status , message  } = handleApiError(e);
        res.status(status).json({
            message
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mk": () => (/* binding */ transformGetImagesResponse),
/* harmony export */   "uX": () => (/* binding */ mapRemoteImageToGeneratedImage)
/* harmony export */ });
/* unused harmony exports config, default */
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4969);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);
_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const defaultParam = {
    batch_count: 1,
    cfg_scale: 1,
    denoising_strength: 0,
    height: 512,
    width: 512,
    image: "",
    model: "",
    lora: "",
    checkpoint: "",
    negative_prompt: "",
    prompt: "",
    sampler: "",
    seed: 0,
    steps: 0
};
function mapRemoteImageToGeneratedImage(image) {
    const { task , model_id , seed , image_id  } = image;
    let { param =defaultParam  } = task;
    if (param == null) {
        param = defaultParam;
    }
    // const { _model } = task.task_id;
    return {
        ...image,
        id: image.image_id,
        modelTaskId: task.task_id,
        userId: image.user_id,
        hosting: "remote",
        path: "",
        jpegPath: "",
        width: param.width,
        height: param.height,
        format: "jpg",
        liked: false,
        isShared: image.is_shared,
        createdAt: "",
        modelTask: {
            id: task.task_id,
            model: param.lora || param.checkpoint || param.model || "",
            params: {
                seed: seed,
                tool: param.sampler,
                width: param.width,
                height: param.height,
                prompt: param.prompt,
                scheduler: param.sampler,
                num_images: param.batch_count,
                started_at: "",
                enhance_face: false,
                guidance_scale: param.cfg_scale,
                negative_prompt: param.negative_prompt,
                num_inference_steps: param.steps
            },
            _model: {
                id: "",
                name: (param.model ?? model_id) ?? "",
                params: {
                    author: "",
                    images: [],
                    author_url: "",
                    description: "",
                    instance_prompt: ""
                }
            }
        },
        url: image.image_url,
        jpegUrl: ""
    };
}
// export const config = getConfig()
const config = {
    api: {
        bodyParser: false
    }
};
function transformGetImagesResponse(res) {
    return res?.map(mapRemoteImageToGeneratedImage) ?? [];
}
async function handler(req, res) {
    try {
        const token = getCookie(req, AuthHeaderKey);
        if (req.method === "POST") {
        // const form = new multiparty.Form();
        // const reqData: any = await new Promise((resolve, reject) => {
        //   form.parse(req, function (err: any, fields: any, files: any) {
        //     if (err) reject({ err });
        //     resolve({ fields, files });
        //   });
        // });
        // if (!reqData.files.file) {
        //   res.status(400).json({ message: 'No file' })
        //   return
        // }
        // const uploadRes = await axiosInstance.post<RemoteUploadImage>('/api/upload/image', {
        //   file: fs.createReadStream(reqData.files.file[0].path)
        // }, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //     "Content-Type": "multipart/form-data",
        //   }
        // })
        // const resData: ImageInfo = {
        //   id: '',
        //   userId: '',
        //   format: '',
        //   width: 0,
        //   height: 0,
        //   path: '',
        //   hosting: '',
        //   modelTaskId: null,
        //   jpegPath: null,
        //   liked: false,
        //   isShared: false,
        //   createdAt: '',
        //   url: uploadRes.data.Url,
        // }
        // res.status(200).json(resData)
        } else if (req.method === "GET") {
            const imagesRes = await axiosInstance.get("/api/images", {
                params: {
                    limit: req.query.take,
                    offset: req.query.skip
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            res.status(200).json(transformGetImagesResponse(imagesRes.data));
        } else if (req.method === "DELETE") {
            await axiosInstance.post(`/api/images/del`, {
                ids: req.query.ids
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            res.status(200).json({
                success: true
            });
        } else {
            res.status(405).json({
                message: "Method not allowed"
            });
        }
    } catch (e) {
        const { status , message  } = handleApiError(e);
        res.status(status).json({
            message
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ cloudflareLoader)
/* harmony export */ });
const cloudflareLoader = ({ src , width , quality  })=>{
    const params = [
        `width=${width}`
    ];
    if (quality) {
        params.push(`quality=${quality}`);
    }
    const paramsString = params.join(",");
    return src;
};


/***/ })

};
;