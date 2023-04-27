exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 3728:
/***/ ((module) => {

// Exports
module.exports = {
	"_overlay": "modal__overlay__ph4hv",
	"overlay": "modal_overlay__Ov44Z",
	"_": "modal____tHZUv",
	"modal": "modal_modal__vJQNF",
	"auth": "modal_auth__tSecr",
	"xl": "modal_xl__lJSam",
	"body": "modal_body__Stgfq",
	"foot": "modal_foot__55Ahj",
	"lg": "modal_lg__XK3uI",
	"md": "modal_md__GeYqU",
	"head": "modal_head__hDp7w",
	"title": "modal_title__2Aufa",
	"close": "modal_close__CvYnK",
	"slide-in": "modal_slide-in__EzFhf",
	"fade-in": "modal_fade-in__fME2i"
};


/***/ }),

/***/ 3907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ AuthModal),
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2279);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7337);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3728);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modal_module_scss__WEBPACK_IMPORTED_MODULE_5__);






function Modal({ show , size , title , onClose , children , actions  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (show) {
            document.body.classList.add("noscroll");
        } else {
            document.body.classList.remove("noscroll");
        }
        return ()=>{
            document.body.classList.remove("noscroll");
        };
    }, [
        show
    ]);
    if (typeof document === "undefined") {
        return null;
    }
    const modal = show ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._overlay),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().overlay)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onOutsideClick: onClose,
                    display: "contents",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: [
                            (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modal),
                            size ? (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[size] : ""
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().head),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                        children: title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().close),
                                        onClick: onClose,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_4__/* .XCloseDelete */ .Ch3, {
                                            size: 14
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().body),
                                children: children
                            }),
                            actions ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().foot),
                                children: actions
                            }) : null
                        ]
                    })
                })
            })
        ]
    }) : null;
    return /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modal, document.body);
}
function AuthModal({ show , size , title , onClose , children , actions  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (show) {
            document.body.classList.add("noscroll");
        } else {
            document.body.classList.remove("noscroll");
        }
        return ()=>{
            document.body.classList.remove("noscroll");
        };
    }, [
        show
    ]);
    if (typeof document === "undefined") {
        return null;
    }
    const modal = show ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._overlay),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().overlay)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onOutsideClick: onClose,
                    display: "contents",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: [
                            (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modal),
                            size ? (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[size] : "",
                            (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().auth)
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().body),
                                children: children
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().close),
                                onClick: onClose,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_4__/* .XCloseDelete */ .Ch3, {
                                    size: 14
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }) : null;
    return /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modal, document.body);
}


/***/ })

};
;