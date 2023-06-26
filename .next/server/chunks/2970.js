exports.id = 2970;
exports.ids = [2970];
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7337);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4820);
/* harmony import */ var _divider_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3294);
/* harmony import */ var _plans_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4693);
/* harmony import */ var _plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plans_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var _frontend_context_metamask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1842);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_9__]);
([_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function href(productitemname) {
    return axios__WEBPACK_IMPORTED_MODULE_9__["default"].post("/api/billing/checkout", {
        currency: "usd",
        productitemname,
        quantity: "1"
    }).then((r)=>r.data.Url);
}
function Plans({ type ="pricing"  }) {
    const user = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_3__/* .selectUser */ .dy);
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const { 0: cta , 1: setCta  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Buy now");
    const { wallet  } = (0,_frontend_context_metamask__WEBPACK_IMPORTED_MODULE_10__/* .useMetaMask */ ._$)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (user.requestStatus === "idle" || user.requestStatus === "loading") return;
        if (user.id && user.plan !== "free") {
            setCta("Upgrade now");
        }
    }, [
        user
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (user.requestStatus === "idle" || user.requestStatus === "loading") return;
        if (user.id && user.plan !== "free") {
            setCta("Upgrade now");
        }
    }, [
        user
    ]);
    async function handleClick(e, plan) {
        window && typeof window.gtag === "function" && window?.gtag("event", "begin_checkout", {
            "event_category": "ecommerce",
            "event_label": plan
        });
        if (!user.id) {
            e.preventDefault();
            dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .updateAuthState */ .FA)("login"));
            return;
        }
    }
    async function handleUSDTPay(e, plan) {
        window && typeof window.gtag === "function" && window?.gtag("event", "begin_checkout", {
            "event_category": "USDT payment",
            "event_label": plan
        });
        if (!user.id || !wallet.accounts[0]) {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .message */ .yw)(dispatch, {
                type: "danger",
                text: "Please connect your wallet first"
            });
            e.preventDefault();
            e.stopPropagation();
            dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .updateAuthState */ .FA)("login"));
            return;
        }
    }
    const { 0: href500 , 1: setHref500  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: href1050 , 1: setHref1050  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        href("500Credits").then(setHref500);
        href("1050Credits").then(setHref1050);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default())[type],
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().plans),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: [
                            (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().plan)
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().name),
                                children: "Free"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().value),
                                    children: "$0/mo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                disabled: user.plan === "basic",
                                size: "md",
                                type: "default",
                                fullWidth: true,
                                children: user.credits != 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_6__/* .CheckGoodYes */ .y$4, {
                                            size: 14
                                        }),
                                        "Received!"
                                    ]
                                }) : "Signup now"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().features),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().credits),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 25 credits new user"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Use images commercially"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: [
                            (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().plan)
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().name),
                                children: "500 Credits"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().value),
                                    children: "$4.9/500 Credits"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                size: "md",
                                type: "primary",
                                href: href500,
                                onClick: (e)=>handleClick(e, "500Credits"),
                                fullWidth: true,
                                children: cta
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    height: "12px",
                                    display: "block"
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                type: "primary",
                                size: "md",
                                href: `/usdt/500Credits`,
                                fullWidth: true,
                                onClick: (e)=>handleUSDTPay(e, "500Credits"),
                                children: [
                                    "USDT Pay ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "font-500",
                                        children: [
                                            "+5%",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                                children: "Bonus"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().features),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().credits),
                                        children: "<$0.01 per image"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().credits),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 25 credits new user"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Use images commercially"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: [
                            (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().plan),
                            (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().popular)
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().name),
                                children: "1050 Credits"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().value),
                                    children: "$9.9/1050 Credits"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                type: "primary",
                                disabled: user.plan === "hobby",
                                size: "md",
                                href: href1050,
                                onClick: (e)=>handleClick(e, "1050Credits"),
                                fullWidth: true,
                                children: cta
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    height: "12px",
                                    display: "block"
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                type: "primary",
                                size: "md",
                                href: `/usdt/1050Credits`,
                                fullWidth: true,
                                onClick: (e)=>handleUSDTPay(e, "1050Credits"),
                                children: [
                                    "USDT Pay ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "font-500",
                                        children: [
                                            "+5%",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                                children: "Bonus"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().features),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().credits),
                                        children: "<$0.01 per image"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().credits),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " 25 credits new user"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().feature),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Check, {}),
                                            " Use images commercially"
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
const Check = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_6__/* .CheckGoodYes */ .y$4, {
        size: 16,
        className: (_plans_module_scss__WEBPACK_IMPORTED_MODULE_11___default().check),
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