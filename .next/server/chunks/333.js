exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 7428:
/***/ ((module) => {

// Exports
module.exports = {
	"_": "avatar____TgKJZ",
	"initial": "avatar_initial__8F6dt"
};


/***/ }),

/***/ 2171:
/***/ ((module) => {

// Exports
module.exports = {
	"new": "layout_new__UJYjf",
	"guide_layout": "layout_guide_layout__rw1jb",
	"top_banner": "layout_top_banner___2k5X",
	"top_banner_layout": "layout_top_banner_layout__dUjIZ",
	"sidebar": "layout_sidebar__GebhM",
	"app_loader": "layout_app_loader__qkcHc",
	"_sidebar": "layout__sidebar__scXhY",
	"_sidebar_open": "layout__sidebar_open__PjkZN",
	"mobile_btn": "layout_mobile_btn__27Ms1",
	"sidebar_close": "layout_sidebar_close__XR7mv",
	"guide_links": "layout_guide_links__2Yz7o",
	"guide_links_title": "layout_guide_links_title___LJH9",
	"guide_link": "layout_guide_link__qq6z0",
	"guide_link_active": "layout_guide_link_active__4BHRe",
	"guide_main": "layout_guide_main__w6O0F",
	"guide_content": "layout_guide_content__gCcwi",
	"guide_title": "layout_guide_title__mrg7v",
	"guide_description": "layout_guide_description__XDJmR",
	"guide_article": "layout_guide_article__s9PUl",
	"guide_article_content": "layout_guide_article_content__OY_2j",
	"guide_footer": "layout_guide_footer__N7hJl",
	"header_right": "layout_header_right__S_Ys8",
	"hamburger": "layout_hamburger__nRUJ4",
	"website_header": "layout_website_header__89Kp6",
	"mobile_menu": "layout_mobile_menu__3Jk9K",
	"header_link": "layout_header_link__K8l0U",
	"mobile_header": "layout_mobile_header__YjsFp",
	"mobile_link_cta": "layout_mobile_link_cta__RT0iR",
	"active": "layout_active__k1qos",
	"auth_layout": "layout_auth_layout__FqvAP",
	"auth_layout_head": "layout_auth_layout_head__BwsJw",
	"auth_layout_foot": "layout_auth_layout_foot__ZqEfi",
	"auth_center": "layout_auth_center__No79r",
	"auth_center2": "layout_auth_center2__A1LNW",
	"auth_head": "layout_auth_head__A0SVw",
	"auth_logo": "layout_auth_logo__2BqOn",
	"auth_card": "layout_auth_card___7R2k",
	"auth_card2": "layout_auth_card2__NK1OO",
	"auth_divider": "layout_auth_divider__5OrHQ",
	"fixed": "layout_fixed__Gn7d3",
	"website_logo": "layout_website_logo__lLLun",
	"header_logo": "layout_header_logo__nO81Y",
	"website": "layout_website__nZhGD",
	"secondary_links": "layout_secondary_links__0arKZ",
	"secondary_link": "layout_secondary_link__s3LVH",
	"legal": "layout_legal__FAiTk",
	"legal_nav": "layout_legal_nav__hO0Qb",
	"nav_links": "layout_nav_links__n0VDd",
	"nav_link": "layout_nav_link__g_sNj",
	"nav_link_active": "layout_nav_link_active__iNR9h",
	"legal_content": "layout_legal_content__vpPpJ",
	"_website_footer": "layout__website_footer__3ZFY7",
	"website_footer": "layout_website_footer__ufKvT",
	"footer_branding": "layout_footer_branding__zTWbp",
	"footer_copy": "layout_footer_copy__DwHxT",
	"socials": "layout_socials__nL7w5",
	"footer_column": "layout_footer_column__Kdt1N",
	"footer_title": "layout_footer_title__vYRRY",
	"footer_list": "layout_footer_list__7hseg",
	"no_mobile": "layout_no_mobile__ummnk",
	"settings_title": "layout_settings_title__WDdAb",
	"settings_description": "layout_settings_description__X8gxr",
	"layout_banner": "layout_layout_banner__0OSig",
	"app_content": "layout_app_content__7jU57",
	"banner": "layout_banner__W3TkV",
	"banner_danger": "layout_banner_danger__hw4FC",
	"_header_user": "layout__header_user__jeUCt",
	"header_user": "layout_header_user__ZdScv",
	"name": "layout_name__2mSu_",
	"credits": "layout_credits__cG_E8",
	"header_avatar": "layout_header_avatar__wIk3N",
	"_user_menu": "layout__user_menu__Ae_Yz",
	"user_menu": "layout_user_menu__5d86o",
	"user_menu_name": "layout_user_menu_name__t5PDn"
};


/***/ }),

/***/ 8990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const ActiveLink = ({ children , activeClassName , href , ...props })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const child = react__WEBPACK_IMPORTED_MODULE_3__.Children.only(children);
    const childClassName = child.props.className || "";
    const { 0: className , 1: setClassName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(childClassName);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (router.isReady) {
            if (router.asPath === href || props.as && router.asPath === props.as) {
                setClassName(`${childClassName} ${activeClassName}`.trim());
            } else {
                setClassName(childClassName);
            }
        }
    }, [
        router.isReady,
        activeClassName,
        childClassName,
        href,
        props.as,
        router.asPath
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        ...props,
        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(child, {
            className: className || null
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActiveLink);


/***/ }),

/***/ 3227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7428);
/* harmony import */ var _avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function getColor(char) {
    const code = char.charCodeAt(0) % 24 + 1;
    return `hsl(${Math.round(15 * code)}, ${80}%, ${74}%)`;
}
function Avatar({ image , name , size =30  }) {
    let initial = "";
    let color = "";
    if (name) {
        initial = name.substring(0, 1).toUpperCase();
        color = getColor(initial);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            width: size,
            height: size,
            background: color,
            color: color.replace("74", "30")
        },
        className: (_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default()._),
        children: image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: image,
            width: size,
            height: size
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default().initial),
            children: initial
        })
    });
};


/***/ }),

/***/ 4333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ WebsiteHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3464);
/* harmony import */ var _frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3137);
/* harmony import */ var _frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2080);
/* harmony import */ var _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3779);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2279);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _active_link_active_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8990);
/* harmony import */ var _avatar_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3227);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7337);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4820);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2171);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_3__, _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_13__]);
([_frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_3__, _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function WebsiteHeader({ fixed =false  }) {
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const user = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__/* .selectUser */ .dy);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: [
            open ? (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().mobile_header) : ""
        ].join(" "),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().website_header) + (fixed ? " " + (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fixed) : ""),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().website_logo),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/logo-blue.png",
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().header_logo),
                                alt: "",
                                height: 20,
                                width: 104
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().hamburger),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        type: "icon",
                        size: "lg",
                        onClick: ()=>setOpen((o)=>!o),
                        children: !open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_11__/* .MenuHambuger */ .kX7, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_11__/* .XCloseDelete */ .Ch3, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: [
                        (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().header_right),
                        open ? (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().mobile_menu) : ""
                    ].join(" "),
                    children: user.id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().mobile_link_cta),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    href: "/pricing",
                                    children: "Upgrade now"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderUser, {})
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link_active_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                activeClassName: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().active),
                                href: "/pricing",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().header_link),
                                    children: "Pricing"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: ()=>dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .updateAuthState */ .FA)("login")),
                                href: "#",
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().header_link),
                                children: "Log in"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().mobile_link_cta),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    onClick: ()=>dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .updateAuthState */ .FA)("register")),
                                    children: "Create free account"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function HeaderUser() {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const user = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__/* .selectUser */ .dy);
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default()._header_user),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().header_user),
                onClick: (e)=>{
                    e.stopPropagation();
                    setOpen(!open);
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().name),
                                children: user.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().credits),
                                children: [
                                    "Credits: ",
                                    user.credits
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().header_avatar),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_avatar_avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            name: user.name,
                            size: 36
                        })
                    })
                ]
            }),
            open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_8___default()), {
                onOutsideClick: (e)=>{
                    e.stopPropagation();
                    setOpen(false);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default()._user_menu),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().user_menu_name),
                            children: user.name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_14___default().user_menu),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: "/legal/privacy-policy",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_11__/* .SecurityShield */ .ZuD, {
                                                    size: 16
                                                }),
                                                "Privacy Policy"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: "/legal/terms-of-service",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_11__/* .PaperFileText */ .Bee, {
                                                    size: 16
                                                }),
                                                "Terms of service"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        onClick: ()=>{
                                            js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].remove("getimgauth");
                                            dispatch((0,_frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .logoutUser */ .TX)());
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_11__/* .LogoutExit */ .wEM, {
                                                size: 16
                                            }),
                                            "Log Out"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: "/referrals",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            style: {
                                                background: "#5858e6",
                                                color: "#ffffff"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Coins, {
                                                    size: 16
                                                }),
                                                "Invite friends & Earn credits"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }) : null
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;