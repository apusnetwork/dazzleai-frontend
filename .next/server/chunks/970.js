exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 2874:
/***/ ((module) => {

// Exports
module.exports = {
	"_": "divider____yROcq",
	"line": "divider_line__u_m59",
	"text": "divider_text__Zwecn"
};


/***/ }),

/***/ 4693:
/***/ ((module) => {

// Exports
module.exports = {
	"checkout": "plans_checkout__vOto3",
	"pricing": "plans_pricing__8t819",
	"plans": "plans_plans__pPJCF",
	"plan": "plans_plan__i1bYt",
	"name": "plans_name__vkXxF",
	"price": "plans_price__S9dYE",
	"value": "plans_value__r3Im5",
	"decimal": "plans_decimal__82QSw",
	"features": "plans_features__0LyJR",
	"credits": "plans_credits__8Lbes",
	"feature": "plans_feature__uAFsf",
	"period": "plans_period__v_rFp",
	"check": "plans_check__Kds87",
	"x": "plans_x__BKVq_",
	"popular": "plans_popular__2ZyO2",
	"_once": "plans__once__cbhxf",
	"once": "plans_once__AJb9c",
	"title": "plans_title__osbnH"
};


/***/ }),

/***/ 3294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Divider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2874);
/* harmony import */ var _divider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divider_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Divider({ text  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_divider_module_scss__WEBPACK_IMPORTED_MODULE_1___default()._),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_divider_module_scss__WEBPACK_IMPORTED_MODULE_1___default().line),
            children: text ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_divider_module_scss__WEBPACK_IMPORTED_MODULE_1___default().text),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: text
                })
            }) : null
        })
    });
};


/***/ }),

/***/ 2970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Plans)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3464);
/* harmony import */ var _frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3137);
/* harmony import */ var _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3779);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8315);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(posthog_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2492);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4820);
/* harmony import */ var _divider_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3294);
/* harmony import */ var _plans_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4693);
/* harmony import */ var _plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_plans_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_3__]);
_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function Plans({ type ="pricing"  }) {
    const user = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_3__/* .selectUser */ .dy);
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const { 0: referral , 1: setReferral  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const { 0: cta , 1: setCta  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("Subscribe now");
    const { 0: checkoutMethod , 1: setCheckoutMethod  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("stripe");
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (user.requestStatus === "idle" || user.requestStatus === "loading") return;
        if (user.id && user.plan !== "free") {
            setCta("Upgrade now");
        }
    }, [
        user
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (user.requestStatus === "idle" || user.requestStatus === "loading") return;
        if (user.id && user.plan !== "free") {
            setCta("Upgrade now");
        }
        posthog_js__WEBPACK_IMPORTED_MODULE_5___default().onFeatureFlags(()=>{
            if (posthog_js__WEBPACK_IMPORTED_MODULE_5___default().getFeatureFlag("checkout-method") === "getimg") {
                setCheckoutMethod("getimg");
            } else {
                setCheckoutMethod("stripe");
            }
        });
    }, [
        user
    ]);
    function href(plan) {
        if (checkoutMethod === "getimg") {
            return user.plan === "free" || !user.plan || user.plan.includes("appsumo-") ? `/billing/checkout?plan=${plan}${referral ? `&referral=${referral}` : ""}` : "/api/billing/portal";
        } else {
            return user.plan === "free" || !user.plan || user.plan.includes("appsumo-") ? `/api/billing/checkout?plan=${plan}${referral ? `&referral=${referral}` : ""}` : "/api/billing/portal";
        }
    }
    function handleClick(e, plan) {
        if (!user.id) {
            e.preventDefault();
            dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .updateAuthState */ .FA)("login"));
            return;
        }
        (posthog_js__WEBPACK_IMPORTED_MODULE_5___default()) && posthog_js__WEBPACK_IMPORTED_MODULE_5___default().capture("Checkout", {
            plan: plan
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default())[type],
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().plans),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: [
                            (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().plan)
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().name),
                                children: "Basic"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().value),
                                    children: "$12/mo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                disabled: user.plan === "basic",
                                size: "md",
                                type: "default",
                                href: href("basic"),
                                onClick: (e)=>handleClick(e, "basic"),
                                fullWidth: true,
                                children: user.plan === "basic" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_7__/* .CheckGoodYes */ .y$4, {
                                            size: 14
                                        }),
                                        " Active"
                                    ]
                                }) : cta
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().features),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().credits),
                                        children: "3 000 images /mo"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 2 active DreamBooth models"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Text To Image"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " AI Editor"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 20+ AI models"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Quality up to 1M pixels"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 4x Upscaling"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Premium GPUs"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: [
                            (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().plan)
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().name),
                                children: "Starter"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().value),
                                    children: "$29/mo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                disabled: user.plan === "starter",
                                size: "md",
                                type: "default",
                                href: href("starter"),
                                onClick: (e)=>handleClick(e, "starter"),
                                fullWidth: true,
                                children: user.plan === "starter" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_7__/* .CheckGoodYes */ .y$4, {
                                            size: 14
                                        }),
                                        " Active"
                                    ]
                                }) : cta
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().features),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().credits),
                                        children: "12 000 images /mo"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 6 active DreamBooth models"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Text To Image"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " AI Editor"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 20+ AI models"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Quality up to 1M pixels"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 4x Upscaling"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Premium GPUs"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: [
                            (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().plan),
                            (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().popular)
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().name),
                                children: "Hobby"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().value),
                                    children: "$49/mo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                type: user.plan === "hobby" ? "default" : "primary",
                                disabled: user.plan === "hobby",
                                size: "md",
                                href: href("hobby"),
                                onClick: (e)=>handleClick(e, "hobby"),
                                fullWidth: true,
                                children: user.plan === "hobby" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_7__/* .CheckGoodYes */ .y$4, {
                                            size: 14
                                        }),
                                        " Active"
                                    ]
                                }) : cta
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().features),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().credits),
                                        children: "24 000 images /mo"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 12 active DreamBooth models"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Text To Image"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " AI Editor"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 20+ AI models"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Quality up to 1M pixels"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 4x Upscaling"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Premium GPUs"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: [
                            (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().plan)
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().name),
                                children: "Pro"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().value),
                                    children: "$99/mo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                disabled: user.plan === "pro",
                                size: "md",
                                href: href("pro"),
                                onClick: (e)=>handleClick(e, "pro"),
                                type: "default",
                                fullWidth: true,
                                children: user.plan === "pro" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_7__/* .CheckGoodYes */ .y$4, {
                                            size: 14
                                        }),
                                        " Active"
                                    ]
                                }) : cta
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().features),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().credits),
                                        children: "60 000 images /mo"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 30 active DreamBooth models"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Text To Image"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " AI Editor"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 20+ AI models"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Quality up to 1M pixels"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 4x Upscaling"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Premium GPUs"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const Check = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_7__/* .CheckGoodYes */ .y$4, {
        size: 16,
        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_10___default().check),
        strokeWidth: 2
    });
const NoCheck = ()=>/*#__PURE__*/ _jsx(X, {
        size: 16,
        className: styles.x,
        strokeWidth: 2
    });
const Section = ({ title  })=>/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: [
                    styles.cell,
                    styles.section
                ].join(" "),
                children: title
            }),
            /*#__PURE__*/ _jsx("div", {
                className: [
                    styles.cell,
                    styles.section
                ].join(" ")
            }),
            /*#__PURE__*/ _jsx("div", {
                className: [
                    styles.cell,
                    styles.section,
                    styles.popular
                ].join(" ")
            }),
            /*#__PURE__*/ _jsx("div", {
                className: [
                    styles.cell,
                    styles.section
                ].join(" ")
            })
        ]
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;