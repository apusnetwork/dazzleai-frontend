exports.id = 8613;
exports.ids = [8613];
exports.modules = {

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
                                        (onShare || onDelete) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                                                                    image.is_shared ? "UnPublic" : "Public"
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


/***/ })

};
;