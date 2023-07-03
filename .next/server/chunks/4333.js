exports.id = 4333;
exports.ids = [4333];
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
	"image_18_badge": "layout_image_18_badge__EZ9r4",
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2279);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _active_link_active_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8990);
/* harmony import */ var _avatar_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3227);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7337);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4820);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2171);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9915);
/* harmony import */ var _frontend_context_18puls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4993);
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8768);
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8683);
/* harmony import */ var _ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3907);
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4969);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4449);
/* harmony import */ var _mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_3__, _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_12__, _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_18__]);
([_frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_3__, _frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_12__, _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























function WebsiteHeader({ fixed =false  }) {
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const user = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__/* .selectUser */ .dy);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { setShow18Plus , show18Plus  } = (0,_frontend_context_18puls__WEBPACK_IMPORTED_MODULE_13__/* .useGlobal18Plus */ .W)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: [
            open ? (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().mobile_header) : ""
        ].join(" "),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().website_header) + (fixed ? " " + (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().fixed) : ""),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().website_logo),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/logo-blue.png",
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().header_logo),
                                alt: "",
                                height: 20,
                                width: 104
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().hamburger),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        type: "icon",
                        size: "lg",
                        onClick: ()=>setOpen((o)=>!o),
                        children: !open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_10__/* .MenuHambuger */ .kX7, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_10__/* .XCloseDelete */ .Ch3, {})
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: [
                        (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().header_right),
                        open ? (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().mobile_menu) : ""
                    ].join(" "),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link_active_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            activeClassName: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().active),
                            href: "/models",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().header_link),
                                children: "Model List"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link_active_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            activeClassName: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().active),
                            href: "/generate",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().header_link),
                                children: "Generate Image"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().image_18_badge),
                            onClick: (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                setShow18Plus((t)=>!t);
                            },
                            children: [
                                "18+",
                                " ",
                                show18Plus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                                    className: "leading-0 ml-1",
                                    rev: ""
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    className: "leading-0 ml-1",
                                    rev: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().header_link),
                            href: "https://discord.gg/BxXM6qfmwp",
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 71 / 3.2,
                                height: 55 / 3.2,
                                viewBox: "0 0 71 55",
                                fill: "#000000",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                        clipPath: "url(#clip0)",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",
                                            fill: "#000000",
                                            opacity: 0.9
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                            id: "clip0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                width: "71",
                                                height: "55",
                                                fill: "white"
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        user.id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().mobile_link_cta),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        href: "/pricing",
                                        children: "Upgrade now"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderUser, {})
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link_active_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    activeClassName: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().active),
                                    href: "/pricing",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().header_link),
                                        children: "Pricing"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .updateAuthState */ .FA)("login")),
                                    href: "#",
                                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().header_link),
                                    children: "Log in"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().mobile_link_cta),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        onClick: ()=>{
                                            dispatch((0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .updateAuthState */ .FA)("register"));
                                        },
                                        children: "Create free account"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function getUTCMidnightLocaleTimeString() {
    // Create a new date object for the current date
    var now = new Date();
    // Get the UTC time by subtracting the local timezone offset
    var utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    // Set the time to 00:00
    utcTime.setUTCHours(0, 0, 0, 0);
    // Format the UTC time as a localized string
    var localeTimeString = utcTime.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    return localeTimeString; // Output: "00:00"
}
function HeaderUser() {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_20__.useRouter)();
    const user = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_frontend_redux_user_slice__WEBPACK_IMPORTED_MODULE_4__/* .selectUser */ .dy);
    const hasCheckedIn = user.extra?.checkin_exp && dayjs__WEBPACK_IMPORTED_MODULE_19___default().unix(Number(user.extra?.checkin_exp)).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_19___default()());
    const dispatch = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const userNameSliced = user.name?.startsWith("0x") ? user.name.length > 10 ? `${user.name.substring(0, 6)}...${user.name.substring(user.name.length - 4)}` : user.name : user.name;
    const { 0: showTasksModal , 1: setShowTasksModal  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: hasAutoPrompted , 1: setHasAutoPrompted  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (router.query.showTasksModal !== undefined && !hasAutoPrompted) {
            setShowTasksModal(true);
            setHasAutoPrompted(true);
        }
    }, [
        hasAutoPrompted,
        showTasksModal
    ]);
    const checkIn = async ()=>{
        if (hasCheckedIn) {
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .message */ .yw)(dispatch, {
                text: "You have already checked in today",
                type: "danger"
            });
            return;
        }
        try {
            const res = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_18__/* .oapi.post */ .xP.post("/user/checkin");
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .message */ .yw)(dispatch, {
                text: "Check-In successfully +2 Credits",
                type: "success"
            });
            dispatch((0,_frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .updateUser */ .Nq)());
        } catch (error) {
            console.log(error?.response?.status, error?.response?.data);
            (0,_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .message */ .yw)(dispatch, {
                text: "Check-In Failed",
                type: "danger"
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default()._header_user),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().header_user),
                onClick: (e)=>{
                    e.stopPropagation();
                    setOpen(!open);
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().name),
                                children: userNameSliced
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().credits),
                                children: [
                                    "Credits: ",
                                    user.credits
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().header_avatar),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_avatar_avatar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            name: user.name,
                            size: 36
                        })
                    })
                ]
            }),
            open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_7___default()), {
                onOutsideClick: (e)=>{
                    e.stopPropagation();
                    setOpen(false);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default()._user_menu),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().user_menu_name),
                            children: user.name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().user_menu),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/user/profile",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                    style: {
                                                        fontSize: 16
                                                    }
                                                }),
                                                "Profile"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/legal/privacy-policy",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_10__/* .SecurityShield */ .ZuD, {
                                                    size: 16
                                                }),
                                                "Privacy Policy"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/legal/terms-of-service",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_10__/* .PaperFileText */ .Bee, {
                                                    size: 16
                                                }),
                                                "Terms of service"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "cursor-pointer",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setShowTasksModal(true);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_16__.CheckSquare, {
                                                size: 16
                                            }),
                                            "Tasks"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "cursor-pointer",
                                        onClick: ()=>{
                                            js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].remove("getimgauth");
                                            dispatch((0,_frontend_redux_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .logoutUser */ .TX)());
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_10__/* .LogoutExit */ .wEM, {
                                                size: 16
                                            }),
                                            "Log Out"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/referrals",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            style: {
                                                background: "#5858e6",
                                                color: "#ffffff"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Coins, {
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
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_22___default().body_wrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_modal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    title: "Tasks",
                    show: showTasksModal,
                    onClose: ()=>setShowTasksModal(false),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                style: {
                                    marginBottom: 12
                                },
                                children: "Earn Credits Daily with Dazzle AI's Sign-In Bonus!"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Simply sign in every day and receive",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            fontWeight: 500,
                                            color: "#000"
                                        },
                                        children: "2 Credits"
                                    }),
                                    " ",
                                    "as a reward."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Remember, you can check in once every 24 hours."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Keep an eye on the clock, as a new day starts at",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            fontWeight: 500,
                                            color: "#000"
                                        },
                                        children: getUTCMidnightLocaleTimeString()
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    marginBottom: 12
                                },
                                children: "Don't miss out on your daily dose of credits - sign in and rack up those rewards today!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                id: "ga_btn_checkin",
                                onClick: checkIn,
                                type: hasCheckedIn ? "default" : "primary",
                                children: hasCheckedIn ? "Completed" : "Claim"
                            })
                        ]
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ useGlobal18Plus),
/* harmony export */   "y": () => (/* binding */ Global18PlusContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable @typescript-eslint/no-explicit-any */ 
const Global18PlusContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const Global18PlusContextProvider = ({ children  })=>{
    const { 0: show18Plus , 1: setShow18Plus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Global18PlusContext.Provider, {
        value: {
            show18Plus,
            setShow18Plus
        },
        children: children
    });
};
const useGlobal18Plus = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Global18PlusContext);
    if (context === undefined) {
        throw new Error('useGlobal18Plus must be used within a "Global18PlusContextProvider"');
    }
    return context;
};


/***/ })

};
;