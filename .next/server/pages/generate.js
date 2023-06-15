(() => {
var exports = {};
exports.id = 1343;
exports.ids = [1343,5899,6806];
exports.modules = {

/***/ 6239:
/***/ ((module) => {

// Exports
module.exports = {
	"_": "collapse____TMebO",
	"plain": "collapse_plain__QdLTn",
	"title": "collapse_title__5v17S",
	"_content": "collapse__content__UCI81",
	"_head": "collapse__head__WuwXI",
	"head": "collapse_head__DeVhb",
	"_open": "collapse__open__2oBUh",
	"chevron": "collapse_chevron___zsmw",
	"left": "collapse_left__H983u",
	"center": "collapse_center__zC28f",
	"right": "collapse_right__BUdkI",
	"open": "collapse_open__DLM6y",
	"tag": "collapse_tag__0SLu3"
};


/***/ }),

/***/ 5551:
/***/ ((module) => {

// Exports
module.exports = {
	"tip": "onboarding_tip__kgn_R",
	"tip_title": "onboarding_tip_title__Y5gwv",
	"tip_close": "onboarding_tip_close__t_rD8",
	"title_close": "onboarding_title_close__pRMmJ",
	"overlay": "onboarding_overlay__fKQo5",
	"modal": "onboarding_modal__xgfgh",
	"body": "onboarding_body__rmKC0",
	"image": "onboarding_image__pdRz3",
	"content": "onboarding_content__qA2yh",
	"title": "onboarding_title__9E5Qv",
	"text": "onboarding_text__SLvPC",
	"footer": "onboarding_footer__XgQ_K",
	"dots": "onboarding_dots__D6rE_",
	"dot": "onboarding_dot__r_BoM",
	"active": "onboarding_active__FqNIz",
	"actions": "onboarding_actions__ozDNJ",
	"actions1": "onboarding_actions1__D5KXw",
	"checkbox": "onboarding_checkbox__54Ssi",
	"close": "onboarding_close__2PFxR"
};


/***/ }),

/***/ 3381:
/***/ ((module) => {

// Exports
module.exports = {
	"_": "ai-generator____v_yms",
	"_controls": "ai-generator__controls___8Piq",
	"controls": "ai-generator_controls__ArQ54",
	"_tabs": "ai-generator__tabs__Jn0T3",
	"tabs": "ai-generator_tabs__MP411",
	"_parameters": "ai-generator__parameters__YgHmr",
	"parameters": "ai-generator_parameters__vio9v",
	"random": "ai-generator_random__f2t2a",
	"sliders2": "ai-generator_sliders2__vf0XO",
	"mixer_images": "ai-generator_mixer_images__VU5CX",
	"mixer_image": "ai-generator_mixer_image__VmVkB",
	"_dropzone": "ai-generator__dropzone__w7cHT",
	"upload": "ai-generator_upload__yT_nG",
	"dropzone": "ai-generator_dropzone__EevXg",
	"dropzone_image": "ai-generator_dropzone_image__KpiLA",
	"image_loader": "ai-generator_image_loader__KrUaw",
	"upload_delete": "ai-generator_upload_delete__Ezf91",
	"actions": "ai-generator_actions__gA_Xn",
	"keyboard": "ai-generator_keyboard__5Jrgg",
	"images": "ai-generator_images___x2l6",
	"images_head": "ai-generator_images_head__DNtWS",
	"infinite": "ai-generator_infinite__9oyQm",
	"grid": "ai-generator_grid__YK64A",
	"column": "ai-generator_column__U_i5_",
	"img": "ai-generator_img__EKyK3",
	"img_dragging": "ai-generator_img_dragging__qha8C",
	"_overlay": "ai-generator__overlay__N3jJA",
	"overlay": "ai-generator_overlay__QERFA",
	"fade-in": "ai-generator_fade-in__S3aCC",
	"_modal": "ai-generator__modal__a3O5t",
	"modal": "ai-generator_modal__6guHM",
	"slide-in": "ai-generator_slide-in__y8Ds1",
	"modal_image": "ai-generator_modal_image__3tswV",
	"close": "ai-generator_close__O05CU"
};


/***/ }),

/***/ 340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Collapse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_components_basic_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7337);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _collapse_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6239);
/* harmony import */ var _collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function Collapse({ title , children , icon , align ="left" , style ="default" , openByDefault =false , tag  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(openByDefault);
    function handleOpen() {
        setOpen(!open);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default()._),
            (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[style],
            (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[align],
            open ? (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default()._open) : ""
        ].join(" "),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default()._head),
                onClick: handleOpen,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default().head),
                        children: [
                            icon ? icon : "",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: title
                            }),
                            tag ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tag),
                                children: tag
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default().chevron),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_basic_icons__WEBPACK_IMPORTED_MODULE_1__/* .ChevronDownArrow */ .zgq, {
                            size: 16,
                            strokeWidth: 3
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: [
                    (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default()._content),
                    open ? (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default().open) : ""
                ].join(" "),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_collapse_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                    children: children
                })
            })
        ]
    });
};


/***/ }),

/***/ 6665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4820);
/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7551);
/* harmony import */ var _image_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9755);
/* harmony import */ var _image_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_image_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2279);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_6__);








function GeneratedImage({ image , onCopyParams , onCopyImage , onSelect , onDelete , onShare , onUpscale , onEnhanceFace , actions =[
    "like",
    "delete",
    "upscale",
    "enhance_faces",
    "copy_params",
    "copy_image"
] , imageLoader , hoverable =true  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: timer , 1: setTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: liked , 1: setLiked  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(image.liked);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setTimer(0);
    }, []);
    // async function likeImage() {
    //   setLiked(l => !l);
    //   await axios.post(`/api/images/${image.id}/like`);
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (image.loading) {
            setTimeout(()=>{
                setTimer(timer + 0.1);
            }, 100);
        }
    }, [
        image.loading,
        timer
    ]);
    if (image.loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image),
            style: {
                paddingBottom: image.height / image.width * 100 + "%"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().loading),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loader_loader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    text: `${(Math.round(timer * 10) / 10).toFixed(1)}s`
                })
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: [
                (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().img)
            ].join(" "),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: image.url,
                    alt: "",
                    width: image.width,
                    height: image.height,
                    loader: imageLoader,
                    unoptimized: !imageLoader && image.width <= 1024 && image.height <= 1024
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: [
                        (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().img_hover),
                        hoverable ? (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hoverable) : ""
                    ].join(" "),
                    onClick: ()=>onSelect && onSelect(image),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().img_hover_row),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn_group)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn_group),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                    className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default()._header_user),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                setOpen(!open);
                                            },
                                            size: "md",
                                            type: "transparent",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_1__.MoreVertical, {
                                                strokeWidth: 1.5
                                            })
                                        }),
                                        open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            onOutsideClick: (e)=>{
                                                e.stopPropagation();
                                                setOpen(false);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default()._user_menu),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: (_image_module_scss__WEBPACK_IMPORTED_MODULE_7___default().user_menu),
                                                    children: [
                                                        onShare && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    onShare(image);
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_1__.Share2, {
                                                                        size: 16
                                                                    }),
                                                                    "Public"
                                                                ]
                                                            })
                                                        }),
                                                        onDelete && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    onDelete(image);
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_1__.Trash2, {
                                                                        size: 16
                                                                    }),
                                                                    "Delete"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }) : null
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(GeneratedImage));


/***/ }),

/***/ 5430:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _onboarding_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5551);
/* harmony import */ var _onboarding_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_onboarding_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Tip({ children , title , id  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    function handleClose() {
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set(id + "-tip", dayjs__WEBPACK_IMPORTED_MODULE_1___default()().unix().toString(), {
            expires: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(24, "months").toDate()
        });
        setOpen(false);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get(id + "-tip")) {
            setOpen(true);
        }
    }, []);
    if (!open) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_onboarding_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tip),
        children: [
            title ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_onboarding_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tip_title),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Lightbulb, {
                        size: 18
                    }),
                    title
                ]
            }) : null,
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: [
                    (_onboarding_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tip_close),
                    title ? (_onboarding_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title_close) : ""
                ].join(" "),
                onClick: handleClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.X, {
                    size: 14
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModelSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_cloudflare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4201);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7337);
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9580);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3907);
/* harmony import */ var _select_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5024);
/* harmony import */ var _select_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_select_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _frontend_context_18puls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4993);
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8768);
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8683);
/* harmony import */ var _ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_9__);












const Model = ({ v , modelID , value , handleChange  })=>{
    const { show18Plus: gloablShow18Plus  } = (0,_frontend_context_18puls__WEBPACK_IMPORTED_MODULE_7__/* .useGlobal18Plus */ .W)();
    const { 0: show18Plus , 1: setShow18Plus  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setShow18Plus(gloablShow18Plus);
    }, [
        gloablShow18Plus
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        htmlFor: modelID + v.id,
        className: [
            (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default()._model),
            v.id.toString() === value ? (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().checked) : ""
        ].join(" "),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().model),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().model_images),
                    children: v.params.images && v.params.images?.map((im, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: im,
                            width: 100,
                            height: 100,
                            loader: utils_cloudflare__WEBPACK_IMPORTED_MODULE_11__/* .cloudflareLoader */ .O,
                            objectFit: "cover",
                            style: {
                                filter: v.nsfw && !show18Plus ? "blur(10px)" : ""
                            }
                        }, i))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().model_info),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                v.nsfw && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().image_18_badge),
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setShow18Plus((show)=>!show);
                                    },
                                    children: [
                                        "18+ ",
                                        show18Plus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            className: "leading-0 ml-1",
                                            rev: ""
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            className: "leading-0 ml-1",
                                            rev: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().model_name),
                                    children: v.name
                                })
                            ]
                        }),
                        v.params.author_url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().model_author),
                            children: [
                                "by ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    onClick: (e)=>e.stopPropagation(),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: v.params.author_url,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            size: 13
                                        }),
                                        v.params.author
                                    ]
                                })
                            ]
                        }) : null
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    name: modelID,
                    id: modelID + v.id,
                    type: "radio",
                    value: v.id,
                    checked: v.id === value,
                    onChange: handleChange,
                    className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().model_input)
                }),
                v.id === value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().checked_icon),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_4__/* .CheckGoodYes */ .y$4, {
                        size: 10,
                        strokeWidth: 4
                    })
                }) : null
            ]
        })
    }, v.id);
};
function ModelSelect({ onChange , models , value , id  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: textFilter , 1: setTextFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    function handleChange(e) {
        onChange(e);
        setOpen(false);
    }
    const allModels = [
        ...models
    ];
    const selected = allModels.find((m)=>m.id === value);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default()._model_select),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setOpen(true),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: [
                        (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().selected_model)
                    ].join(" "),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: selected && selected.params.images[2],
                            width: 16,
                            height: 16,
                            loader: utils_cloudflare__WEBPACK_IMPORTED_MODULE_11__/* .cloudflareLoader */ .O
                        }),
                        "Model: ",
                        selected ? selected.name : "Undefined",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().tag),
                            children: [
                                Math.floor(allModels.length / 10) * 10,
                                "+"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().arrow),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_4__/* .ChevronDownArrow */ .zgq, {
                                size: 16,
                                strokeWidth: 3
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    onClose: ()=>setOpen(false),
                    title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().model_search),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Select Model"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().search),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_input_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    size: "sm",
                                    id: "textFilter",
                                    value: textFilter,
                                    onChange: (e)=>setTextFilter(e.target.value),
                                    placeholder: "Search",
                                    Icon: lucide_react__WEBPACK_IMPORTED_MODULE_1__.Search,
                                    disableInfo: true,
                                    customStyles: [
                                        "no-margin"
                                    ]
                                })
                            })
                        ]
                    }),
                    show: open,
                    size: "lg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_10___default().models_list),
                        children: allModels.filter((v)=>(v.name + " " + v.params.description).toLowerCase().search(textFilter.toLowerCase()) > -1).map((v)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Model, {
                                v: v,
                                modelID: id,
                                value: value,
                                handleChange: handleChange
                            }))
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 1695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NodesSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7337);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3907);
/* harmony import */ var _select_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5024);
/* harmony import */ var _select_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_select_module_scss__WEBPACK_IMPORTED_MODULE_4__);





function NodesSelect({ onChange , models , value , id  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: textFilter , 1: setTextFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    function handleChange(e) {
        onChange(e);
        setOpen(false);
    }
    const allModels = [
        ...models
    ];
    const selected = allModels.find((m)=>m.id === value);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._model_select),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setOpen(true),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: [
                        (_select_module_scss__WEBPACK_IMPORTED_MODULE_4___default().selected_model)
                    ].join(" "),
                    children: [
                        "Node: ",
                        selected ? selected.name : "All",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrow),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_2__/* .ChevronDownArrow */ .zgq, {
                                size: 16,
                                strokeWidth: 3
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    onClose: ()=>setOpen(false),
                    title: "Select Node",
                    show: open,
                    size: "lg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nodes_list),
                        children: allModels.map((v)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: id + v.id,
                                className: [
                                    (_select_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._node),
                                    v.id.toString() === value ? (_select_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checked) : ""
                                ].join(" "),
                                children: [
                                    v.name,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        name: id,
                                        id: id + v.id,
                                        type: "radio",
                                        value: v.id,
                                        checked: v.id === value,
                                        onChange: handleChange,
                                        className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_4___default().model_input)
                                    }),
                                    v.id === value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_select_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checked_icon),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_2__/* .CheckGoodYes */ .y$4, {
                                            size: 10,
                                            strokeWidth: 4
                                        })
                                    }) : null
                                ]
                            }, v.id))
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 8523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Slider)
});

// UNUSED EXPORTS: VerticalSlider

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "rc-slider"
const external_rc_slider_namespaceObject = require("rc-slider");
var external_rc_slider_default = /*#__PURE__*/__webpack_require__.n(external_rc_slider_namespaceObject);
// EXTERNAL MODULE: ./frontend/components/input/input.tsx
var input = __webpack_require__(9580);
// EXTERNAL MODULE: ./frontend/components/input/label.tsx
var label = __webpack_require__(4319);
;// CONCATENATED MODULE: ./frontend/components/slider/slider.tsx




function Slider(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            props.label ? /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                children: props.label
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx((external_rc_slider_default()), {
                min: props.min,
                max: props.max,
                step: props.step,
                value: props.value,
                onChange: props.onChange,
                railStyle: {
                    background: "rgb(60, 63, 68)"
                },
                trackStyle: {
                    backgroundColor: "#5866e6",
                    opacity: 0.8
                },
                handleStyle: {
                    borderWidth: 3,
                    borderColor: "#5866e6",
                    backgroundColor: "rgb(60, 63, 68)",
                    width: 14,
                    height: 14,
                    marginTop: -5,
                    marginLeft: 0,
                    opacity: 1
                }
            }),
            props.info ? /*#__PURE__*/ jsx_runtime_.jsx("small", {
                className: "small",
                children: props.info
            }) : null
        ]
    });
};
function VerticalSlider(props) {
    return /*#__PURE__*/ _jsxs("div", {
        style: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: [
            props.label ? /*#__PURE__*/ _jsx(Label, {
                children: /*#__PURE__*/ _jsx("small", {
                    style: {
                        fontSize: 11,
                        display: "block",
                        marginTop: -3
                    },
                    children: props.label
                })
            }) : null,
            /*#__PURE__*/ _jsx(RcSlider, {
                min: props.min,
                max: props.max,
                step: props.step,
                value: props.value,
                onChange: props.onChange,
                railStyle: {
                    background: "rgb(60, 63, 68)"
                },
                trackStyle: {
                    backgroundColor: "#5866e6",
                    opacity: 0.8
                },
                handleStyle: {
                    borderWidth: 3,
                    borderColor: "#5866e6",
                    backgroundColor: "rgb(60, 63, 68)",
                    width: 14,
                    height: 14,
                    marginTop: 0,
                    marginLeft: -5,
                    opacity: 1
                },
                vertical: true
            }),
            /*#__PURE__*/ _jsx("div", {
                style: {
                    height: 36,
                    paddingTop: 12
                },
                children: /*#__PURE__*/ _jsx(Input, {
                    id: "",
                    type: "number",
                    size: "xs",
                    value: props.value,
                    onChange: (e)=>props.onChange(parseFloat(e.target.value)),
                    disableInfo: true,
                    customStyles: [
                        "no-margin"
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3464);
/* harmony import */ var _frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3137);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_input_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9475);
/* harmony import */ var _input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _input_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4319);






function Textarea({ height =90 , placeholder , label , id , name , error , value , onChange , autoFocus , info , autoComplete ="off" , disabled , customStyles =[] , size , noInfo , onBlur , onFocus  }) {
    const errors = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .selectErrors */ .i2);
    error = error || errors && errors[id];
    const hasError = error && (!error.value && !value || error.value && error.value === value);
    const ref = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createRef)();
    const className = [
        (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default().input),
        (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default().textarea),
        (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default())["textarea_" + size],
        hasError ? (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default().input_error) : "",
        customStyles.map((s)=>(_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[s]).join(" "), 
    ].join(" ").trim();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (autoFocus) {
            document.getElementById(id)?.focus();
        }
    }, [
        autoFocus
    ]);
    function resize() {
        const e = ref.current;
        if (!e) return;
        e.style.height = "inherit";
        e.style.height = `${e.scrollHeight + 9}px`;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        resize();
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: [
                    (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._input),
                    label ? (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default().with_label) : ""
                ].join(" ").trim(),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        id: id,
                        name: name || id,
                        className: className,
                        value: value || "",
                        onChange: onChange,
                        autoComplete: autoComplete,
                        placeholder: placeholder,
                        autoFocus: autoFocus,
                        disabled: disabled,
                        ref: ref,
                        style: {
                            minHeight: height
                        },
                        onBlur: onBlur,
                        onFocus: onFocus
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_input_label__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        htmlFor: id,
                        className: (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default().input_label),
                        children: label
                    })
                ]
            }),
            !noInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._info),
                children: hasError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default().error),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M12 8V12",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M12 16.0195V16",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        }),
                        error.msg
                    ]
                }) : info ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_input_input_module_scss__WEBPACK_IMPORTED_MODULE_5___default().info),
                    children: info
                }) : null
            }) : null
        ]
    });
};


/***/ }),

/***/ 3965:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AiGenerator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_components_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4820);
/* harmony import */ var _frontend_components_collapse_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(340);
/* harmony import */ var _frontend_components_image_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6665);
/* harmony import */ var _frontend_components_image_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9279);
/* harmony import */ var _frontend_components_input_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9580);
/* harmony import */ var _frontend_components_onboarding_tip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5430);
/* harmony import */ var _frontend_components_select_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3984);
/* harmony import */ var _frontend_components_select_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6422);
/* harmony import */ var _frontend_components_slider_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8523);
/* harmony import */ var _frontend_components_textarea_textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2911);
/* harmony import */ var _frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3464);
/* harmony import */ var _frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3137);
/* harmony import */ var _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3779);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9915);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7125);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2279);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(3381);
/* harmony import */ var _ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _select_nodes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1695);
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4969);
/* harmony import */ var _pages_api_models_id___WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9337);
/* harmony import */ var _pages_api_nodes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7487);
/* harmony import */ var _pages_api_tasks__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9135);
/* harmony import */ var _pages_api_images__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2718);
/* harmony import */ var _pages_api_images_id___WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(8510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _frontend_components_image_view__WEBPACK_IMPORTED_MODULE_6__, _frontend_components_onboarding_tip__WEBPACK_IMPORTED_MODULE_8__, _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_15__, js_cookie__WEBPACK_IMPORTED_MODULE_16__, _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__, _pages_api_models_id___WEBPACK_IMPORTED_MODULE_25__, _pages_api_nodes__WEBPACK_IMPORTED_MODULE_26__, _pages_api_tasks__WEBPACK_IMPORTED_MODULE_27__, _pages_api_images__WEBPACK_IMPORTED_MODULE_28__, _pages_api_images_id___WEBPACK_IMPORTED_MODULE_29__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _frontend_components_image_view__WEBPACK_IMPORTED_MODULE_6__, _frontend_components_onboarding_tip__WEBPACK_IMPORTED_MODULE_8__, _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_15__, js_cookie__WEBPACK_IMPORTED_MODULE_16__, _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__, _pages_api_models_id___WEBPACK_IMPORTED_MODULE_25__, _pages_api_nodes__WEBPACK_IMPORTED_MODULE_26__, _pages_api_tasks__WEBPACK_IMPORTED_MODULE_27__, _pages_api_images__WEBPACK_IMPORTED_MODULE_28__, _pages_api_images_id___WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































function AiGenerator() {
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .T)();
    const user = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_15__/* .selectUser */ .dy);
    const { 0: images , 1: setImages  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]);
    const { 0: selectedImage , 1: setSelectedImage  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(undefined);
    const { 0: mode , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)("generate");
    const { 0: pagination , 1: setPagination  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)({
        loading: false,
        hasMore: true
    });
    const { 0: dragging , 1: setDragging  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(undefined);
    const { 0: loader , 1: setLoader  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false);
    const { 0: models , 1: setModels  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]);
    const { 0: nodes , 1: setNodes  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]);
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)({
        model: "",
        node: "all",
        prompt: "",
        negativePrompt: "Disfigured, cartoon, blurry",
        steps: 25,
        guidanceScale: 9,
        imageGuidance: 1.5,
        seed: undefined,
        numImages: 1,
        enhanceFace: "false",
        upscale: "false",
        width: 512,
        height: 512,
        scheduler: "DPM2",
        strength: 0.5,
        controlnet: "none",
        skipControlnetProcessing: "false",
        image: {
            url: ""
        },
        images: [
            {
                url: "",
                strength: 1.0
            },
            {
                url: "",
                strength: 1.0
            }, 
        ]
    });
    async function getModels() {
        const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/models?status=active&public=true");
        setModels([
            ...res.data
        ]);
        // const res = await oapi.get('/models?status=active&public=true');
        // const modelsRes = transformModelsResponse(res.data);
        // setModels(modelsRes);
        if (res.data?.length) {
            setState((s)=>{
                if (s.model === "") {
                    return {
                        ...s,
                        model: res.data[0].id
                    };
                }
                return s;
            });
        }
    }
    async function getNodes() {
        const res = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__/* .oapi.get */ .xP.get("/nodes?status=active");
        const resNodes = (0,_pages_api_nodes__WEBPACK_IMPORTED_MODULE_26__/* .transformNodesResponse */ .w)(res.data);
        setNodes([
            {
                id: "all",
                name: "All",
                domain: ""
            },
            ...resNodes
        ]);
    // if (res.data?.length && state.node === "") {
    //   setState(s => ({ ...s, node: res.data[0].id }))
    // }
    }
    async function getImages() {
        if (!pagination.hasMore) return;
        let hasMore = true;
        try {
            setPagination({
                ...pagination,
                loading: true
            });
            const res = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__/* .oapi.get */ .xP.get("/images?tool=generator&limit=24&offset=" + images.length);
            setImages([
                ...images,
                ...(0,_pages_api_images__WEBPACK_IMPORTED_MODULE_28__/* .transformGetImagesResponse */ .Mk)(res.data)
            ]);
            hasMore = res.data.length > 0;
        } catch  {
            setImages([]);
        } finally{
            setPagination({
                loading: false,
                hasMore: hasMore
            });
        }
    }
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    function allowDrop(e) {
        e.preventDefault();
    }
    function handleDragStart(e) {
        //@ts-ignore
        const id = e.target.id;
        e.dataTransfer.setData("text", id);
        setDragging(id);
    }
    function handleDragEnd(e) {
        setDragging(undefined);
    }
    function handleDrop(e, id) {
        e.preventDefault();
        const source = e.dataTransfer.getData("text");
        const img = images.find((im)=>im.id === source);
        if (!img) return;
        // set image
        setState((s)=>({
                ...lodash__WEBPACK_IMPORTED_MODULE_17___default().set(s, id, {
                    ...img,
                    strength: 1.0
                })
            }));
    }
    // async function handleUpload(id: string, files: File[]) {
    //   if (!user.id) {
    //     dispatch(updateAuthState('login'));
    //     return
    //   }
    //   if (!files || _.get(state, id).loading) return
    //   if (files[0] && files[0].size > 2.5e7) {
    //     message(dispatch, { "type": "danger", text: "File too large! Max. file size is 25MB." })
    //     return
    //   }
    //   // upload file
    //   try {
    //     // set loader
    //     setState(s => ({ ..._.set<StateI>(s, id + '.loading', true) }))
    //     const data = new FormData();
    //     data.append('file', files[0]);
    //     const res = await axios.post('/api/images', data);
    //     const img = res.data
    //     img.strength = 1.0;
    //     // set image
    //     setState(s => ({ ..._.set<StateI>(s, id, img) }))
    //   } catch (e: any) {
    //     e && e.response && e.response.data && dispatch(addErrors(e.response.data))
    //     message(dispatch, { "type": "danger", text: "Please try uploading again!" })
    //   } finally {
    //     // set loader
    //     setState(s => ({ ..._.set<StateI>(s, id + '.loading', false) }))
    //   }
    // }
    // async function getRandomPrompt() {
    //   const res = await axios.get('/api/prompts/random');
    //   setState({
    //     ...state,
    //     prompt: res.data.prompt
    //   })
    // }
    async function importCivitai() {
        // read from clipboard
        const text = await navigator.clipboard.readText();
        /* map
a cute kitten made out of metal, (cyborg:1.1), ([tail | detailed wire]:1.3), (intricate details), hdr, (intricate details, hyperdetailed:1.2), cinematic shot, vignette, centered
Negative prompt: (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, (mutated hands and fingers:1.4), disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation, flowers, human, man, woman
ENSD: 31337, Size: 768x1024, Seed: 1791574510, Model: Deliberate, Steps: 26, Sampler: Euler a, CFG scale: 6.5, Model hash: 9aba26abdf
into state
*/ try {
            const lines = text.split("\n");
            const prompt = lines[0].trim();
            const negativePrompt = lines[1].replace("Negative prompt: ", "").trim();
            const configLine = lines[lines.length - 1];
            const keyValuePairs = configLine.split(", ");
            setState((s)=>{
                const newState = {};
                const UnSupportedKey = [];
                keyValuePairs.forEach((pair)=>{
                    const [key, value] = pair.split(": ");
                    switch(key){
                        // case "Model":
                        //   state.model = value;
                        //   break;
                        case "Seed":
                            if (Number.isNaN(value)) {
                                newState.seed = undefined;
                                return;
                            }
                            newState.seed = Number(value) > 0 ? value : undefined;
                            break;
                        case "Size":
                            const [width, height] = value.split("x");
                            newState.width = parseInt(width);
                            if (Number.isNaN(newState.width)) {
                                newState.width = 512;
                            } else if (newState.width > 1024) {
                                newState.width = 1024;
                            } else if (newState.width < 0) {
                                newState.width = 0;
                            }
                            newState.height = parseInt(height);
                            if (Number.isNaN(newState.height)) {
                                newState.height = 512;
                            } else if (newState.height > 1024) {
                                newState.height = 1024;
                            } else if (newState.height < 0) {
                                newState.height = 0;
                            }
                            break;
                        case "Steps":
                            newState.steps = parseInt(value);
                            if (Number.isNaN(newState.steps)) {
                                newState.steps = 25;
                            } else if (newState.steps > 75) {
                                newState.steps = 75;
                            } else if (newState.steps < 1) {
                                newState.steps = 1;
                            }
                            break;
                        case "CFG scale":
                            newState.guidanceScale = parseFloat(value);
                            if (Number.isNaN(newState.guidanceScale)) {
                                newState.guidanceScale = 9;
                            } else if (newState.guidanceScale > 20) {
                                newState.guidanceScale = 20;
                            } else if (newState.guidanceScale < 0) {
                                newState.guidanceScale = 0;
                            }
                            break;
                        case "Sampler":
                            if (![
                                "Euler a",
                                "Euler",
                                "LMS",
                                "Heun",
                                "DPM2",
                                "DPM2 a",
                                "DPM++ 2S a",
                                "DPM++ 2M",
                                "DPM++ SDE",
                                "DPM fast",
                                "DPM adaptive",
                                "LMS Karras",
                                "DPM2 Karras",
                                "DPM2 a Karras",
                                "DPM++ 2S a Karras",
                                "DPM++ 2M Karras",
                                "DPM++ SDE Karras",
                                "DDIM"
                            ].includes(value)) {
                                newState.scheduler = "DPM++ 2M Karras";
                            } else {
                                newState.scheduler = value;
                            }
                        // Add more cases for the other keys
                        default:
                            UnSupportedKey.push(key);
                    }
                });
                if (UnSupportedKey.length > 3) {
                    (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                        type: "info",
                        text: `${UnSupportedKey.length} params are unsupport.`
                    });
                } else if (UnSupportedKey.length > 0) {
                    (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                        type: "info",
                        text: `Params ${UnSupportedKey.join(", ")} are unsupport.`
                    });
                }
                return {
                    ...s,
                    ...newState,
                    prompt,
                    negativePrompt
                };
            });
        } catch (e) {
            dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .addErrors */ .YW)({
                message: "Invalid civitai config"
            }));
        }
    }
    async function upscale(image) {
        if (loader) {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                "type": "danger",
                text: "Please wait until current task is completed!"
            });
            return;
        }
        generate(undefined, "upscale", image);
    }
    async function enhanceFace(image) {
        if (loader) {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                "type": "danger",
                text: "Please wait until current task is completed!"
            });
            return;
        }
        generate(undefined, "enhance-face", image);
    }
    async function copyImage(image) {
        // @ts-ignore
        setState((s)=>({
                ...s,
                image: {
                    ...s.image,
                    ...image
                },
                width: Math.min(image.width, 1024),
                height: Math.min(image.height, 1024)
            }));
        (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
            text: "Copied init image.",
            type: "success"
        });
    }
    async function copyParams(image) {
        const task = image.modelTask;
        const params = image.modelTask.params;
        const _model = image.modelTask._model;
        setState((s)=>{
            const newState = {
                ...s
            };
            if (task.model === "instruct-pix2pix") {
                setMode("edit");
            } else if (task.model === "image-mixer") {
                setMode("mix");
            } else {
                newState.model = task.model.replace("-img2img", "").replace("-inpaint", "").replace("-txt2img", "");
                setMode("generate");
            }
            if (params.prompt) newState.prompt = params.prompt;
            // if (_model && !_model.id.includes('/')) newState.prompt = newState.prompt.replace(_model.params.instance_prompt + ', ', '')
            if (params.guidance_scale) newState.guidanceScale = params.guidance_scale;
            if (params.image_guidance_scale) newState.imageGuidance = params.image_guidance_scale;
            if (params.width) newState.width = params.width;
            if (params.height) newState.height = params.height;
            if (params.scheduler) newState.scheduler = params.scheduler;
            if (params.num_inference_steps) newState.steps = params.num_inference_steps;
            if (params.negative_prompt) newState.negativePrompt = params.negative_prompt;
            if (params.strength) newState.strength = params.strength;
            if (params.controlnet) newState.controlnet = params.controlnet;
            if (params.seed) newState.seed = params.seed;
            if (params.image_url) {
                newState.image = {
                    ...s.image,
                    url: params.image_url
                };
            }
            if (params.images && params.images.length) {
                newState.images = [
                    ...params.images
                ];
            }
            console.log("copy Params", dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format("HH:mm:ss:SSS"));
            return newState;
        });
        (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
            text: "Copied parameters.",
            type: "success"
        });
    }
    async function deleteImage(image) {
        try {
            _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__/* .oapi.post */ .xP.post("/images/del?ids=" + image.id);
            setImages((im)=>im.filter((im)=>im.id !== image.id));
        } catch  {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                type: "danger",
                text: "Unexpected Error!"
            });
        }
    }
    async function shareImage(image) {
        try {
            _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__/* .oapi.post */ .xP.post("/images/del?ids=" + image.id);
            setImages((im)=>im.filter((im)=>im.id !== image.id));
        } catch  {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                type: "danger",
                text: "Unexpected Error!"
            });
        }
    }
    async function generate(e, forceMode, initImage) {
        e && e.preventDefault();
        dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .clearErrors */ .b9)());
        let pipeline = forceMode || mode;
        const taskCount = pipeline === "upscale" || pipeline === "enhance-face" ? 1 : state.numImages;
        const credits = pipeline === "upscale" || pipeline === "enhance-face" ? 1 : state.numImages * (1 + (state.upscale === "true" ? 1 : 0) + (state.enhanceFace === "true" ? 1 : 0));
        if (loader) {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                "type": "danger",
                text: "Please wait until current task is completed!"
            });
            return;
        }
        if (user && user.credits < state.numImages) {
            dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)("credits"));
            return;
        }
        // if (!user.id) {
        //   dispatch(updateAuthState('register'));
        //   return
        // }
        // if (user.status !== 'active') {
        //   message(dispatch, { text: 'Please verify your account!', type: 'info' })
        //   return
        // }
        if (state.image && state.image.loading) {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                text: "Please wait until image is fully loaded!",
                type: "info"
            });
            return;
        }
        try {
            setLoader(true);
            const body = {
                tool: "generator"
            };
            let model = state.model;
            if (pipeline === "generate" || pipeline === "edit" || pipeline === "mix") {
                // generation params
                body.num_inference_steps = state.steps;
                body.guidance_scale = state.guidanceScale;
                body.num_images = parseInt(state.numImages.toString());
                body.width = state.width;
                body.height = state.height;
                body.enhance_face = state.enhanceFace;
                body.scheduler = state.scheduler;
                if (state.upscale === "true") body.upscale = 4;
                if (state.enhanceFace === "true") body.enhance_face = true;
            }
            if (pipeline === "generate" || pipeline === "edit") {
                body.prompt = state.prompt;
                if (!body.prompt) {
                    (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                        text: "Text prompt is required for generation!",
                        type: "danger"
                    });
                    return;
                }
                if (pipeline === "edit" && (!state.image || !state.image.url)) {
                    (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                        text: "Image is required for Editing!",
                        type: "danger"
                    });
                    return;
                }
                // if (state.model.startsWith('model')) {
                //   const m = models.find(x => x.id === state.model);
                //   if (!m) return
                //   if (m.params.instance_prompt && !body.prompt.includes(m.params.instance_prompt)) body.prompt = m.params.instance_prompt + ', ' + body.prompt;
                // }
                if (state.negativePrompt) body.negative_prompt = state.negativePrompt;
                if (state.seed) body.seed = state.seed;
                if (pipeline === "edit") {
                    body.image_guidance_scale = state.imageGuidance;
                    body.scheduler = "euler_a";
                }
                if (state.image && state.image.url) {
                    body.image_url = state.image.url;
                }
                if (body.image_url && pipeline === "generate") {
                    body.strength = state.strength;
                    if (Math.floor(body.strength * body.num_inference_steps) === 0) {
                        (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                            text: "Strength \xd7 Steps should be greater than 0",
                            type: "danger"
                        });
                        return;
                    }
                    const sm = models.find((m)=>m.id === state.model);
                    if (state.controlnet !== "none" && state.model !== "stable-diffusion-v2.1" && (sm && sm.params.base_model && sm.params.base_model.startsWith("stabilityai/stable-diffusion-2-1") ? false : true)) {
                        body.controlnet = state.controlnet;
                        body.skip_controlnet_processing = state.skipControlnetProcessing;
                    }
                }
                if (pipeline === "edit") {
                    model = "instruct-pix2pix";
                }
            } else if (pipeline === "mix") {
                body.images = [];
                for (const im of state.images){
                    if (im.loading) {
                        (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                            text: "Please wait until all images are loaded!",
                            type: "danger"
                        });
                        return;
                    }
                    if (!im.strength || !im.url) continue;
                    body.images.push({
                        url: im.url,
                        strength: im.strength
                    });
                }
                if (body.images.length < 1) {
                    (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                        text: "Please upload at least 1 image!",
                        type: "danger"
                    });
                    return;
                }
                model = "image-mixer";
            } else if (pipeline === "upscale") {
                body.upscale = 4;
                body.image_url = initImage && initImage.url;
                model = "real-esrgan";
            } else if (pipeline === "enhance-face") {
                body.enhance_face = true;
                body.image_url = initImage && initImage.url;
                model = "gfpgan";
            }
            //@ts-ignore
            setImages((s)=>[
                    ...Array(taskCount).fill(1).map((_, i)=>({
                            ...s.length ? s[0] : {},
                            id: Math.random().toString(),
                            loading: true,
                            seed: parseInt(body.seed) + i,
                            width: initImage ? initImage.width : state.width,
                            height: initImage ? initImage.height : state.height
                        })),
                    ...s
                ]);
            window.scrollTo({
                top: window.innerWidth < 700 ? window.innerHeight : 0,
                behavior: "smooth"
            });
            body.node = nodes.find((v)=>v.id === state.node)?.domain || state.node;
            body.type = models.find((v)=>v.id === state.model)?.type;
            body.checkpoint = models.find((v)=>v.id === state.model)?.checkpoint;
            const pendingTasksRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__/* .oapi.post */ .xP.post("/tasks/create", (0,_pages_api_models_id___WEBPACK_IMPORTED_MODULE_25__/* .transformRequest */ .Sw)(body, model));
            let pendingIds = [
                (0,_pages_api_models_id___WEBPACK_IMPORTED_MODULE_25__/* .transformResponse */ .m5)(pendingTasksRes.data).id
            ];
            while(pendingIds.length > 0){
                const tasksRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__/* .oapi.get */ .xP.get("/tasks?ids=" + pendingIds.join(","));
                const tasks = (0,_pages_api_tasks__WEBPACK_IMPORTED_MODULE_27__/* .transformTasksResponse */ .Pc)(tasksRes.data);
                const generatedImages = [];
                for (const task of tasks){
                    if (task.status === "succeed" && task.images && task.images.length) {
                        generatedImages.push(...task.images.map((im)=>({
                                ...im,
                                modelTask: {
                                    ...task,
                                    params: {
                                        ...task.params,
                                        seed: im.seed
                                    }
                                }
                            })));
                    }
                    if (task.status === "failed") {
                        throw new Error("Something went wrong!");
                    }
                }
                setImages((v)=>{
                    const im = [
                        ...v
                    ];
                    let modelTasks = [];
                    for(let i = 0; i < generatedImages.length; i++){
                        const image = generatedImages[i];
                        // if (body.seed) {
                        //   const seedIndex = im.findIndex(i => i.seed && image.modelTask.params.seed && i.seed.toString() === image.modelTask.params.seed.toString());
                        //   if (seedIndex > -1) {
                        //     im[seedIndex] = image
                        //   }
                        // } else {
                        im[pendingIds.length + i - 1] = image;
                        // }
                        modelTasks.push(image.modelTask);
                    }
                    pendingIds = pendingIds.filter((id)=>{
                        return !modelTasks.find((t)=>t.id === id);
                    });
                    return [
                        ...im
                    ];
                });
                await new Promise((r)=>setTimeout(r, 300));
            }
            dispatch((0,_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_15__/* .updateCredits */ .FA)(-1 * credits));
        } catch (e1) {
            console.log(e1);
            if (e1 && e1.response && e1.response.status === 401) {
                dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)("register"));
            } else {
                if (e1 && e1.response && e1.response.data) dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .addErrors */ .YW)(e1.response.data));
                (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                    text: "Something went wrong!",
                    type: "danger"
                });
            }
            setImages((im)=>im.filter((i)=>!i.loading));
        } finally{
            setLoader(false);
        }
    }
    async function init() {
        const urlParams = new URLSearchParams(window.location.search);
        // init state from cookies
        const cookieState = js_cookie__WEBPACK_IMPORTED_MODULE_16__["default"].get("text-to-image-state");
        if (cookieState) {
            const json = JSON.parse(cookieState);
            if (json["image"]) delete json["image"];
            if (json["images"]) delete json["images"];
            console.log("setting Cookies", dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format("HH:mm:ss:SSS"));
            setState((s)=>({
                    ...s,
                    ...json
                }));
        }
        //init model
        const m = urlParams.get("model");
        if (m) {
            setState((s)=>({
                    ...s,
                    model: m
                }));
        }
        // remember source of signup
        const from_user = urlParams.get("ref");
        if (from_user) {
            sessionStorage.setItem("from_user", from_user);
        }
        const model_version_id = urlParams.get("model_version_id");
        const utm_source = urlParams.get("utm_source");
        if (model_version_id != null && model_version_id !== "") {
            window && window?.gtag("event", "model_version_id", {
                event_category: "model_version_id",
                event_label: model_version_id,
                value: 1
            });
        }
        if (utm_source != null && utm_source !== "") {
            window && window?.gtag("event", "utm_source", {
                event_category: "utm_source",
                event_label: utm_source,
                value: 1
            });
        }
        const img = urlParams.get("img") || urlParams.get("init-img");
        if (!img) return;
        if (img) {
            sessionStorage.setItem("from_img", img);
        }
        const isShared = urlParams.get("shared") !== null;
        try {
            const res = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_24__/* .oapi.get */ .xP.get(`${isShared ? "/shared/images" : "/image"}?ids=${img}`);
            const imageRes = (0,_pages_api_images_id___WEBPACK_IMPORTED_MODULE_29__/* .transformGetImageResponse */ .a)(res.data);
            if (urlParams.has("img")) {
                copyParams(imageRes);
            } else if (urlParams.has("init-img")) {
                copyImage(imageRes);
            }
        } catch  {}
    }
    (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(()=>{
        getModels();
        getNodes();
        init();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(()=>{
        if (!user.id) return;
        getImages();
    }, [
        user.id
    ]);
    // useEffect(() => {
    //   const s = { ...state };
    //   let baseSize = s.width;
    //   const model = s.model;
    //   if (!model) return
    //   if (mode === 'edit') {
    //     s.negativePrompt = !s.negativePrompt || s.negativePrompt === 'Disfigured, cartoon, blurry' ? '' : s.negativePrompt
    //     baseSize = 512;
    //   } else if (mode === 'mix') {
    //     baseSize = 640
    //   } else {
    //     s.negativePrompt = s.negativePrompt || 'Disfigured, cartoon, blurry'
    //     if (model.startsWith('model-')) {
    //       const m = models.find(x => x.id === model);
    //       if (m) {
    //         baseSize = m.params.resolution || 512
    //       }
    //     } else if (model.endsWith('v2.1')) {
    //       baseSize = 768
    //     } else {
    //       baseSize = 512
    //     }
    //   }
    //   const ratio = s.width / s.height;
    //   if (ratio > 1) {
    //     // horizontal
    //     s.width = baseSize;
    //     s.height = Math.round(baseSize / ratio / 64) * 64;
    //   } else {
    //     // vertical
    //     s.height = baseSize
    //     s.width = Math.round(ratio * s.height / 64) * 64
    //   }
    //   setState(x => ({ ...x, ...s }))
    // }, [state.model, mode])
    // useEffect(() => {
    //   if (1 / state.steps > state.strength) {
    //     setState(s => ({
    //       ...s,
    //       strength: Math.round(1 / state.steps * 100) / 100
    //     }))
    //   }
    // }, [state.steps, state.strength])
    (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(()=>{
        if (!state.model) return;
        js_cookie__WEBPACK_IMPORTED_MODULE_16__["default"].set("text-to-image-state", JSON.stringify(state), {
            expires: dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(24, "months").toDate()
        });
    }, [
        state
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(()=>{
        function handleKey(e) {
            if ((e.altKey || e.metaKey) && (e.key === "g" || e.key === "Enter")) {
                e.preventDefault();
                generate();
            }
            if (selectedImage && e.key === "ArrowRight") {
                // find next
                const next = images.findIndex((i)=>i.id === selectedImage.id) + 1;
                if (next < images.length) {
                    setSelectedImage(images[next]);
                }
                if (next > images.length * 0.7 && pagination.hasMore) {
                    getImages();
                }
            }
            if (selectedImage && e.key === "ArrowLeft") {
                // find prev
                const prev = images.findIndex((i)=>i.id === selectedImage.id) - 1;
                if (prev > -1) {
                    setSelectedImage(images[prev]);
                }
            }
            if (selectedImage && e.key === "Escape") {
                setSelectedImage(undefined);
            }
        }
        window.addEventListener("keydown", handleKey);
        return ()=>{
            window.removeEventListener("keydown", handleKey);
        };
    }, [
        user.id,
        state,
        selectedImage,
        images,
        pagination,
        loader
    ]);
    // const selectedModel: ModelI | undefined = models.find(m => m.id === state.model)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default()._),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default()._controls),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().controls),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default()._parameters),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().parameters),
                                children: [
                                    mode === "generate" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_select_model__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        id: "model",
                                        models: models,
                                        value: state.model,
                                        onChange: handleChange
                                    }) : null,
                                    mode === "generate" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_select_nodes__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                        id: "node",
                                        models: nodes,
                                        value: state.node,
                                        onChange: handleChange
                                    }) : null,
                                    mode === "generate" || mode === "edit" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_collapse_collapse__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_18__.Edit3, {}),
                                        title: mode === "edit" ? "Instruction" : "Prompt",
                                        style: "plain",
                                        openByDefault: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_textarea_textarea__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                label: mode === "edit" ? "Instruction" : "Prompt",
                                                id: "prompt",
                                                placeholder: mode === "edit" ? "Use natural language to edit the image e.g. make it a miro painting, add fireworks to the sky, what if it was an anime ..." : "Describe something you'd like to see generated. Experiment with different words and styles...",
                                                value: state.prompt,
                                                onChange: handleChange,
                                                autoFocus: true,
                                                size: "md",
                                                noInfo: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().random),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_button_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    htmlType: "button",
                                                    size: "xs",
                                                    type: "default",
                                                    onClick: importCivitai,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_18__.Shuffle, {}),
                                                        " Import Civitai"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_input_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                label: "Negative prompt",
                                                id: "negativePrompt",
                                                placeholder: "Describe what you don't want in your image",
                                                value: state.negativePrompt,
                                                onChange: handleChange,
                                                disableInfo: true
                                            })
                                        ]
                                    }) : null,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_collapse_collapse__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_18__.SlidersHorizontal, {}),
                                        title: "Generation Parameters",
                                        style: "plain",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    height: 12
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_slider_slider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                label: `Number of images: ${state.numImages}`,
                                                min: 1,
                                                max: 4,
                                                step: 1,
                                                value: state.numImages,
                                                onChange: (n)=>setState({
                                                        ...state,
                                                        numImages: n
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    height: 24
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().sliders2),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_slider_slider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                        label: `Width: ${state.width}`,
                                                        min: 256,
                                                        max: 1024,
                                                        step: 64,
                                                        value: state.width,
                                                        onChange: (n)=>setState({
                                                                ...state,
                                                                width: n
                                                            })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_slider_slider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                        label: `Height: ${state.height}`,
                                                        min: 256,
                                                        max: 1024,
                                                        step: 64,
                                                        value: state.height,
                                                        onChange: (n)=>setState({
                                                                ...state,
                                                                height: n
                                                            })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    height: 24
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().sliders2),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_slider_slider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                        label: `Steps: ${state.steps}`,
                                                        min: 1,
                                                        max: 75,
                                                        step: 1,
                                                        value: state.steps,
                                                        onChange: (n)=>setState({
                                                                ...state,
                                                                steps: n
                                                            })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_slider_slider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                        label: `CFG Scale: ${state.guidanceScale}`,
                                                        min: 0,
                                                        max: 20,
                                                        step: 1,
                                                        value: state.guidanceScale,
                                                        onChange: (n)=>setState({
                                                                ...state,
                                                                guidanceScale: n
                                                            })
                                                    })
                                                ]
                                            }),
                                            state.steps > 35 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_onboarding_tip__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                id: "steps-high",
                                                title: "Steps",
                                                children: [
                                                    "High number of steps may take a while to generate. For fast generations we recommend 20-25 steps. Learn more ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "/guides/interactive-guide-to-stable-diffusion-steps-parameter",
                                                        target: "_blank",
                                                        children: "here"
                                                    }),
                                                    "."
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                            state.steps < 14 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_onboarding_tip__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                id: "steps-low",
                                                title: "Steps",
                                                children: [
                                                    "Low number of steps may result in bad image quality or noise. We recommend 20-25 steps. Learn more ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "/guides/interactive-guide-to-stable-diffusion-steps-parameter",
                                                        target: "_blank",
                                                        children: "here"
                                                    }),
                                                    "."
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                            state.guidanceScale > 14 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_onboarding_tip__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                id: "guidance-scale-low",
                                                title: "CFG scale",
                                                children: [
                                                    "High cfg scale may result in a loss of quality. We recommend values in 7-12 range. Learn more ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter",
                                                        target: "_blank",
                                                        children: "here"
                                                    }),
                                                    "."
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                            state.guidanceScale < 6 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_onboarding_tip__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                id: "guidance-scale-hight",
                                                title: "CFG scale",
                                                children: [
                                                    "Low cfg scale value may result in bad prompt interpretation. We recommend values in 7-12 range. Learn more ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter",
                                                        target: "_blank",
                                                        children: "here"
                                                    }),
                                                    "."
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                            mode !== "mix" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            height: 12
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_input_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        label: "Seed",
                                                        id: "seed",
                                                        placeholder: "Blank for random",
                                                        value: state.seed,
                                                        onChange: handleChange,
                                                        type: "number",
                                                        disableInfo: true
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_collapse_collapse__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_18__.Settings, {}),
                                        title: "Advanced",
                                        style: "plain",
                                        children: mode === "generate" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_select_select__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                label: "Sampler",
                                                id: "scheduler",
                                                options: [
                                                    {
                                                        key: "Euler a",
                                                        value: "Euler a"
                                                    },
                                                    {
                                                        key: "Euler",
                                                        value: "Euler"
                                                    },
                                                    {
                                                        key: "LMS",
                                                        value: "LMS"
                                                    },
                                                    {
                                                        key: "Heun",
                                                        value: "Heun"
                                                    },
                                                    {
                                                        key: "DPM2",
                                                        value: "DPM2"
                                                    },
                                                    {
                                                        key: "DPM2 a",
                                                        value: "DPM2 a"
                                                    },
                                                    {
                                                        key: "DPM++ 2S a",
                                                        value: "DPM++ 2S a"
                                                    },
                                                    {
                                                        key: "DPM++ 2M",
                                                        value: "DPM++ 2M"
                                                    },
                                                    {
                                                        key: "DPM++ SDE",
                                                        value: "DPM++ SDE"
                                                    },
                                                    {
                                                        key: "DPM fast",
                                                        value: "DPM fast"
                                                    },
                                                    {
                                                        key: "DPM adaptive",
                                                        value: "DPM adaptive"
                                                    },
                                                    {
                                                        key: "LMS Karras",
                                                        value: "LMS Karras"
                                                    },
                                                    {
                                                        key: "DPM2 Karras",
                                                        value: "DPM2 Karras"
                                                    },
                                                    {
                                                        key: "DPM2 a Karras",
                                                        value: "DPM2 a Karras"
                                                    },
                                                    {
                                                        key: "DPM++ 2S a Karras",
                                                        value: "DPM++ 2S a Karras"
                                                    },
                                                    {
                                                        key: "DPM++ 2M Karras",
                                                        value: "DPM++ 2M Karras"
                                                    },
                                                    {
                                                        key: "DPM++ SDE Karras",
                                                        value: "DPM++ SDE Karras"
                                                    },
                                                    {
                                                        key: "DDIM",
                                                        value: "DDIM"
                                                    }, 
                                                ],
                                                value: state.scheduler,
                                                onChange: handleChange,
                                                noInfo: true
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().actions),
                            onSubmit: generate,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                    className: "small",
                                    style: {
                                        marginBottom: 6
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "Need ",
                                            state.numImages * (1 + (state.upscale === "true" ? 1 : 0) + (state.enhanceFace === "true" ? 1 : 0)),
                                            " credit",
                                            state.numImages + (1 + (state.upscale === "true" ? 1 : 0) + (state.enhanceFace === "true" ? 1 : 0)) === 1 ? "" : "s",
                                            " for this generation."
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_button_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    fullWidth: true,
                                    loading: loader,
                                    size: "lg",
                                    errorFor: [
                                        "prompt"
                                    ],
                                    onClick: (e)=>{
                                        window && window?.gtag("event", "generate", {
                                            "event_category": "consume",
                                            "event_label": ""
                                        });
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            "Generat",
                                            loader ? "ing" : "e " + state.numImages + (state.numImages === 1 ? " image" : " images"),
                                            "\xa0  ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().keyboard),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_18__.Command, {}),
                                                    " + G"
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().images),
                id: "images",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_20___default()), {
                    dataLength: images.length,
                    next: getImages,
                    hasMore: pagination.hasMore,
                    loader: true,
                    className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().infinite),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_masonry_css__WEBPACK_IMPORTED_MODULE_21___default()), {
                            breakpointCols: {
                                default: 8,
                                2400: 6,
                                1700: 4,
                                1260: 3,
                                1024: 2,
                                840: 1,
                                760: 2
                            },
                            className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().grid),
                            columnClassName: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().column),
                            children: [
                                images.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: i.id,
                                        className: [
                                            (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().img),
                                            dragging === i.id ? (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().img_dragging) : ""
                                        ].join(" "),
                                        draggable: true,
                                        onDragStart: handleDragStart,
                                        onDragEnd: handleDragEnd,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_image_image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onCopyParams: copyParams,
                                            onCopyImage: copyImage,
                                            onSelect: setSelectedImage,
                                            onDelete: deleteImage,
                                            onUpscale: upscale,
                                            onEnhanceFace: enhanceFace,
                                            image: i,
                                            hoverable: dragging !== i.id
                                        })
                                    }, i.id)),
                                images.length == 0 && Array(24).fill(1).map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().image),
                                        style: {
                                            paddingBottom: "100%"
                                        }
                                    }, i))
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                height: 24
                            }
                        }),
                        user.id && pagination.hasMore ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_button_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            type: "default",
                            loading: pagination.loading,
                            onClick: getImages,
                            fullWidth: true,
                            children: [
                                "Load",
                                pagination.loading ? "ing" : "",
                                " more images"
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                height: 24
                            }
                        })
                    ]
                })
            }),
            selectedImage !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default()._overlay),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().overlay)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default()._modal),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().modal),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().close),
                                    onClick: ()=>setSelectedImage(undefined),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_18__.X, {
                                        size: 14
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_30___default().modal_image),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_22___default()), {
                                        onOutsideClick: ()=>setSelectedImage(undefined),
                                        display: "contents",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_image_view__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            ...selectedImage
                                        }, selectedImage.id)
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

/***/ 9337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sw": () => (/* binding */ transformRequest),
/* harmony export */   "m5": () => (/* binding */ transformResponse)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4969);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3892);
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__, _tasks__WEBPACK_IMPORTED_MODULE_2__]);
([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__, _tasks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function mapParamsToRequest(params, model) {
    if (![
        "Euler a",
        "Euler",
        "LMS",
        "Heun",
        "DPM2",
        "DPM2 a",
        "DPM++ 2S a",
        "DPM++ 2M",
        "DPM++ SDE",
        "DPM fast",
        "DPM adaptive",
        "LMS Karras",
        "DPM2 Karras",
        "DPM2 a Karras",
        "DPM++ 2S a Karras",
        "DPM++ 2M Karras",
        "DPM++ SDE Karras",
        "DDIM"
    ].includes(params.scheduler)) {
        params.scheduler = "DPM++ 2M Karras";
    }
    const req = {
        batch_count: params.num_images,
        cfg_scale: params.guidance_scale,
        denoising_strength: 0,
        height: params.height,
        image: params.image_url,
        model,
        checkpoint: "",
        lora: "",
        negative_prompt: params.negative_prompt,
        node: params.node,
        prompt: params.prompt,
        sampler: params.scheduler,
        seed: Number.isNaN(params.seed) ? 0 : Number(params.seed),
        steps: params.num_inference_steps,
        width: params.width
    };
    if (params.type === "checkpoint") {
        req.checkpoint = model;
    } else if (params.type === "lora") {
        req.checkpoint = params.checkpoint;
        req.lora = model;
    }
    return req;
}
function transformRequest(req, modelID) {
    return mapParamsToRequest(req, modelID);
}
function transformResponse(res) {
    return (0,_tasks__WEBPACK_IMPORTED_MODULE_2__/* .mapRemoteTaskToTaskInfo */ .Z4)(res);
}
// {"task_id":"task-cgjs3693bbtp4v5e1360","user_id":"1909b3ed-5a68-4a96-b648-9a00cca78f5a","node":"","status":"pending"}
async function handler(req, res) {
    try {
        const token = getCookie(req, AuthHeaderKey);
        if (req.body.node === "all") {
            req.body.node = "";
        }
        const createRes = await axiosInstance.post("/api/tasks/create", mapParamsToRequest(req.body, req.query.id), {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        res.status(200).json([
            mapRemoteTaskToTaskInfo(createRes.data)
        ]);
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

/***/ 7487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ transformNodesResponse)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4969);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);
_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function transformNodesResponse(res) {
    return res.map((node)=>({
            ...node,
            id: node.id + "",
            name: node.name || node.domain || "",
            domain: node.domain
        }));
}
async function handler(req, res) {
    try {
        const token = getCookie(req, AuthHeaderKey);
        const nodeRes = await axiosInstance.get("/api/nodes", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const resData = transformNodesResponse(nodeRes.data);
        res.status(200).json(resData);
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

/***/ 9135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pc": () => (/* binding */ transformTasksResponse),
/* harmony export */   "Z4": () => (/* binding */ mapRemoteTaskToTaskInfo)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4969);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);
_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function mapRemoteTaskToTaskInfo(remoteTask) {
    const { task_id , user_id , param , status , extra , images , node  } = remoteTask;
    const { model , prompt , negative_prompt , seed , width , height , steps , sampler , cfg_scale , lora , checkpoint  } = param;
    const { progress , status_msg  } = extra;
    const createdAt = new Date().toISOString();
    const startedAt = new Date().toISOString();
    const finishedAt = new Date().toISOString();
    const _model = {
        id: lora || checkpoint || model,
        userId: user_id,
        name: lora || checkpoint || model,
        status: status_msg,
        public: false,
        params: {
            author: "unknown",
            images: [],
            author_url: "unknown",
            description: "unknown",
            instance_prompt: "unknown"
        },
        createdAt,
        trainingStartedAt: null,
        trainingFinishedAt: null,
        lastUsedAt: createdAt
    };
    const imagesInfo = images instanceof Array ? images?.map((image)=>{
        const { image_id , image_url , is_shared  } = image;
        return {
            ...image,
            id: image_id,
            modelTaskId: task_id,
            userId: user_id,
            hosting: node,
            path: image_url,
            jpegPath: image_url,
            width,
            height,
            format: "jpg",
            liked: false,
            isShared: is_shared,
            createdAt,
            url: image_url,
            jpegUrl: image_url,
            seed: image.seed
        };
    }) ?? [] : [];
    return {
        ...remoteTask,
        id: task_id,
        userId: user_id,
        acceptedImageId: null,
        model,
        tool: sampler,
        status,
        params: {
            seed,
            tool: sampler,
            width,
            height,
            prompt,
            scheduler: sampler,
            num_images: 1,
            started_at: startedAt,
            enhance_face: false,
            guidance_scale: cfg_scale,
            negative_prompt,
            num_inference_steps: steps
        },
        createdAt,
        startedAt,
        finishedAt,
        images: imagesInfo,
        _model
    };
}
function transformTasksResponse(remoteTasks) {
    return remoteTasks.map(mapRemoteTaskToTaskInfo);
}
async function handler(req, res) {
    try {
        const token = getCookie(req, AuthHeaderKey);
        const createRes = await axiosInstance.get("/api/tasks", {
            params: {
                ids: req.query.ids
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const resData = transformTasksResponse(createRes.data);
        res.status(200).json(resData);
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

/***/ 1786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AiGeneratorPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_components_layout_website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6950);
/* harmony import */ var _frontend_components_tools_ai_generator_ai_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_layout_website__WEBPACK_IMPORTED_MODULE_1__, _frontend_components_tools_ai_generator_ai_generator__WEBPACK_IMPORTED_MODULE_2__]);
([_frontend_components_layout_website__WEBPACK_IMPORTED_MODULE_1__, _frontend_components_tools_ai_generator_ai_generator__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function AiGeneratorPage() {
    // useEffect(() => {
    //   if ((userState === 'failed' || userState === 'completed') && !user.id) {
    //     dispatch(updateAuthState('register'));
    //   }
    // }, [userState, user.id]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_layout_website__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Generate photo-realistic images from text using Stable Diffusion",
        description: "We provide simple access to Stable Diffusion model, which enables generating photo-realistic images with given text input.",
        canonical: "/text-to-image",
        image: "/social-image-generator.png",
        footer: false,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_tools_ai_generator_ai_generator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons/EyeInvisibleOutlined");

/***/ }),

/***/ 8683:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons/EyeOutlined");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4802:
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 2423:
/***/ ((module) => {

"use strict";
module.exports = require("lucide-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 4336:
/***/ ((module) => {

"use strict";
module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 7125:
/***/ ((module) => {

"use strict";
module.exports = require("react-masonry-css");

/***/ }),

/***/ 2279:
/***/ ((module) => {

"use strict";
module.exports = require("react-outside-click-handler");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1664,5675,7444,4333,6950,1061,9580,9279,6422], () => (__webpack_exec__(1786)));
module.exports = __webpack_exports__;

})();