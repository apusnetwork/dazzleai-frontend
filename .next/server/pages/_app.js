(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _info_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3137);
/* harmony import */ var _user_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_slice__WEBPACK_IMPORTED_MODULE_2__]);
_user_slice__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let loggerMiddleware = (/* unused pure expression or super */ null && (undefined));
if (false) {}
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        info: _info_slice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        user: _user_slice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP
    },
    middleware: (getDefaultMiddleware)=> true ? getDefaultMiddleware() : 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8315);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(posthog_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _frontend_components_button_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4820);
/* harmony import */ var _frontend_components_modal_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3907);
/* harmony import */ var _frontend_components_plans_plans__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2970);
/* harmony import */ var _frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3464);
/* harmony import */ var _frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3137);
/* harmony import */ var _frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2080);
/* harmony import */ var _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3779);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_redux_store__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_7__, _frontend_components_plans_plans__WEBPACK_IMPORTED_MODULE_12__, _frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_15__, _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_16__]);
([_frontend_redux_store__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_7__, _frontend_components_plans_plans__WEBPACK_IMPORTED_MODULE_12__, _frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_15__, _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























dayjs__WEBPACK_IMPORTED_MODULE_8___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_9___default()));
function App({ children  }) {
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const authState = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useAppSelector */ .C)(_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .selectAuthState */ ._9);
    const user = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_16__/* .selectUser */ .dy);
    const status = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_16__/* .selectUserStatus */ .ss);
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        name: "",
        email: "",
        password: ""
    });
    const { 0: referral , 1: setReferral  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    function initGoogle() {
        const google = window.google;
        if (!window.google) return;
        google.accounts.id.initialize({
            // client_id: "1089732682872-c6fieght7qb8su25cdfr5isi506v01lg.apps.googleusercontent.com",
            client_id: "1080163930978-2885m14p291dt08tej4p7f4bldtbpsj7.apps.googleusercontent.com",
            callback: googleLogin
        });
        google.accounts.id.renderButton(document.getElementById("google-login"), {
            theme: "filled_blue",
            size: "large",
            text: "continue_with",
            locale: "en_US",
            width: 260
        });
    }
    function handleChange(e) {
        setState({
            ...state,
            [e.target.id]: e.target.value
        });
    }
    async function googleLogin(response) {
        const res = await dispatch((0,_frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_15__/* .loginGoogle */ .z3)({
            token: response.credential
        }));
        if (res.meta.requestStatus === "fulfilled") {
            dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)(undefined));
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                type: "success",
                text: "Sucesfully Logged In!"
            });
            window.scrollTo({
                top: 0
            });
        }
    }
    // async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    //   e.preventDefault();
    //   const res = await dispatch(loginUser({ ...state }))
    //   if (res.meta.requestStatus === 'fulfilled') {
    //     dispatch(updateAuthState(undefined))
    //     posthog.capture('Login', { provider: 'email' })
    //     posthog.identify(res.payload.id, {
    //       email: res.payload.email,
    //       name: res.payload.name,
    //       plan: res.payload.plan,
    //       status: res.payload.status,
    //       subscriptionStatus: res.payload.subscriptionStatus
    //     })
    //     window.scrollTo({ top: 0 })
    //   }
    // }
    // async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    //   e.preventDefault();
    //   const res = await dispatch(registerUser({ ...state }))
    //   if (res.meta.requestStatus === 'fulfilled') {
    //     dispatch(updateAuthState(undefined))
    //     posthog.capture('Login', { provider: 'email' })
    //     posthog.capture('Regsiter', { provider: 'email' })
    //     posthog.identify(res.payload.id, {
    //       email: res.payload.email,
    //       name: res.payload.name,
    //       plan: res.payload.plan,
    //       status: res.payload.status,
    //       subscriptionStatus: res.payload.subscriptionStatus
    //     })
    //     window.scrollTo({ top: 0 })
    //   }
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (authState === "login" || authState === "register" || !user.id) initGoogle();
    }, [
        authState
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        // Add a response interceptor
        axios__WEBPACK_IMPORTED_MODULE_7__["default"].interceptors.response.use(function(response) {
            return response;
        }, function(error) {
            if (error && error.code === "ERR_NETWORK") {
                (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .message */ .yw)(dispatch, {
                    text: "Network error! Check your connection.",
                    type: "info"
                });
            }
            return Promise.reject(error);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.onload = ()=>{
            const google = window.google // Now you can access window.google
            ;
            initGoogle() // Assuming this is defined somewhere else
            ;
        };
        document.body.appendChild(script);
        if (user.requestStatus === "idle" || user.requestStatus === "failed") {
            dispatch((0,_frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_15__/* .getUser */ .PR)()).then((res)=>{
                if (res.meta.requestStatus === "fulfilled") {
                    posthog_js__WEBPACK_IMPORTED_MODULE_3___default().identify(res.payload.id, {
                        email: res.payload.email,
                        name: res.payload.name,
                        plan: res.payload.plan,
                        status: res.payload.status,
                        subscriptionStatus: res.payload.subscriptionStatus
                    });
                }
            });
        }
        // posthog.init('phc_UZBRYEnPfTrmBlX04oJZ0OaQdnpXrU5ZrpGgWrMEEuH', {
        //   api_host: 'https://app.posthog.com',
        //   loaded: (posthog) => {
        //     if (process.env.NODE_ENV !== 'production' || window.location.hostname !== 'getimg.ai') posthog.opt_out_capturing()
        //   },
        //   autocapture: false,
        // })
        function handleRouteChange() {
            posthog_js__WEBPACK_IMPORTED_MODULE_3___default().capture("$pageview");
        }
        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeComplete", handleRouteChange);
        if (router.asPath && router.asPath.includes("#signup")) {
            dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)("register"));
        }
        return ()=>{
            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off("routeChangeComplete", handleRouteChange);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_modal_modal__WEBPACK_IMPORTED_MODULE_11__/* .AuthModal */ .Q, {
                show: authState === "login",
                onClose: ()=>dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)(undefined)),
                actions: [],
                title: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "login",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "login-h",
                            children: "Log in to continue"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "login-p",
                            children: [
                                "Don't have an account?",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    onClick: ()=>dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)("register")),
                                    children: "Create it now"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "google-login"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mobile_link_cta",
                            style: {
                                marginTop: 14
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_button_button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                size: "md",
                                type: "primary",
                                fullWidth: true,
                                children: "MetaMask"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_modal_modal__WEBPACK_IMPORTED_MODULE_11__/* .AuthModal */ .Q, {
                show: authState === "register",
                onClose: ()=>dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)(undefined)),
                actions: [],
                title: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "login",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "login-h",
                            children: "Create an account"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "login-p",
                            children: "Get 100 image credits every month for free!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "google-login"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mobile_link_cta",
                            style: {
                                marginTop: 14
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_button_button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                size: "md",
                                type: "primary",
                                fullWidth: true,
                                children: "MetaMask"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                            className: "license",
                            children: [
                                "By signing up, you agree to our ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/legal/terms-of-service",
                                    target: "_blank",
                                    children: "Terms of Service"
                                }),
                                " and ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/legal/privacy-policy",
                                    target: "_blank",
                                    children: "Privacy Policy"
                                }),
                                "."
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_modal_modal__WEBPACK_IMPORTED_MODULE_11__/* .AuthModal */ .Q, {
                show: authState === "credits",
                onClose: ()=>dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)(undefined)),
                actions: [],
                title: "",
                size: "xl",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "login",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "login-h",
                                    children: "Upgrade your plan"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "login-p",
                                    children: "You're out of credits. Upgrade your plan and start creating more."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                height: 9
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_plans_plans__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            type: "pricing"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "login-foot center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Don't want to upgrade?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_18___default()), {
                                    href: "/referrals",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        onClick: ()=>dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)(undefined)),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_17__.Gift, {
                                                size: 14,
                                                strokeWidth: 1
                                            }),
                                            "Earn credits by sharing dazzle.ai with friends."
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: `/api/billing/checkout${referral ? `?referral=${referral}` : ""}`,
                                    onClick: ()=>dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_14__/* .updateAuthState */ .FA)(undefined)),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_17__.Coins, {
                                            size: 14,
                                            strokeWidth: 1
                                        }),
                                        "Top up with more credits."
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function Frontend({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
        store: _frontend_redux_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: "https://accounts.google.com/gsi/client",
                defer: true,
                async: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Frontend);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/relativeTime");

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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("posthog-js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,758,907,970], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();