"use strict";
(() => {
var exports = {};
exports.id = 855;
exports.ids = [855,5899,6806];
exports.modules = {

/***/ 4045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Model),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_components_layout_website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6950);
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4969);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7125);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _frontend_components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4820);
/* harmony import */ var _frontend_components_tools_ai_generator_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3381);
/* harmony import */ var _frontend_components_tools_ai_generator_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_frontend_components_tools_ai_generator_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2718);
/* harmony import */ var _frontend_components_website_visuals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9718);
/* harmony import */ var _frontend_components_website_default_avatar_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4836);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_layout_website__WEBPACK_IMPORTED_MODULE_1__, _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_2__, _api_images__WEBPACK_IMPORTED_MODULE_8__]);
([_frontend_components_layout_website__WEBPACK_IMPORTED_MODULE_1__, _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_2__, _api_images__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Model({ model  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: images , 1: setImages  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: pagination , 1: setPagination  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        loading: false,
        hasMore: true
    });
    async function getImages() {
        if (!model) return;
        if (!pagination.hasMore) return;
        let hasMore = true;
        try {
            setPagination({
                ...pagination,
                loading: true
            });
            const res = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .oapi.get */ .xP.get("/shared/images/list", {
                params: {
                    limit: 24,
                    offset: images.length,
                    model: model.model_file_name,
                    order: "desc",
                    nsfw_types: [
                        "none",
                        "18+"
                    ].join(",")
                }
            });
            setImages([
                ...images,
                ...(0,_api_images__WEBPACK_IMPORTED_MODULE_8__/* .transformGetImagesResponse */ .Mk)(res.data)
            ]);
            hasMore = res.data.length > 0;
        } catch (e) {
            console.error(e);
            setImages([]);
        } finally{
            setPagination({
                loading: false,
                hasMore: hasMore
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        getImages();
    }, [
        model
    ]);
    if (!model) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_layout_website__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Everything you need to create images with AI",
        description: "Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more.",
        canonical: "/",
        footer: false,
        children: ""
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_layout_website__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: model.id,
        description: model.description,
        canonical: "/",
        footer: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "py-1 px-2 md:py-2 md:px-12 lg:py-4 lg:px-24",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-2 md:p-4 lg:p-8 flex justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-end flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden h-auto md: h-96",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_website_visuals__WEBPACK_IMPORTED_MODULE_9__/* .SimpleImage */ .E, {
                                model: model
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-full flex flex-col justify-between w-full pl-4 py-4",
                                style: {
                                    alignItems: "start"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "w-12 h-12 rounded-full mr-4",
                                                src: model.author_avatar || _frontend_components_website_default_avatar_webp__WEBPACK_IMPORTED_MODULE_10__/* ["default"].src */ .Z.src
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-2xl font-semibold text-slate-600",
                                                children: model.author
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-col pl-2 py-8 w-full gap-4",
                                        style: {
                                            alignItems: "start"
                                        },
                                        children: [
                                            {
                                                label: "Type",
                                                value: model.type
                                            },
                                            {
                                                label: "Run Count",
                                                value: model.use_count
                                            },
                                            {
                                                label: "Base Model",
                                                value: model.checkpoint_file_name
                                            }, 
                                        ].map(({ label , value  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col justify-start",
                                                style: {
                                                    alignItems: "flex-start"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-24 flex-shrink-0 text-sm text-gray-600",
                                                        children: label
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "",
                                                        children: value
                                                    })
                                                ]
                                            }, label))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_button_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        size: "lg",
                                        fullWidth: true,
                                        href: `/generate?img=${model.reuse_img}&shared=true`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-20 text-center",
                                            children: "Run"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center text-3xl font-medium text-gray-800 mt-8 md:mt-0",
                    children: "Explore Related"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_frontend_components_tools_ai_generator_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_11___default().images),
                    id: "images",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5___default()), {
                        dataLength: images.length,
                        next: getImages,
                        hasMore: pagination.hasMore,
                        loader: true,
                        className: (_frontend_components_tools_ai_generator_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_11___default().infinite),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_css__WEBPACK_IMPORTED_MODULE_6___default()), {
                                breakpointCols: {
                                    default: 8,
                                    2400: 6,
                                    1700: 4,
                                    1260: 3,
                                    1024: 2,
                                    840: 1,
                                    760: 2
                                },
                                className: (_frontend_components_tools_ai_generator_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_11___default().grid),
                                columnClassName: (_frontend_components_tools_ai_generator_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_11___default().column),
                                children: images.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: i.id,
                                        className: (_frontend_components_tools_ai_generator_ai_generator_module_scss__WEBPACK_IMPORTED_MODULE_11___default().img),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_website_visuals__WEBPACK_IMPORTED_MODULE_9__/* .SimpleImage */ .E, {
                                            model: {
                                                id: i.id,
                                                reuse_img_url: i.image_url,
                                                nsfw: i.nsfw === "18+",
                                                reuse_img: i.image_id
                                            },
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                e.preventDefault();
                                                router.push(`/img/${i.id}`);
                                            },
                                            showRun: true
                                        })
                                    }, i.id))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    height: 24
                                }
                            }),
                            pagination.hasMore ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_button_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
                })
            ]
        })
    });
};
async function getStaticProps({ params  }) {
    if (!params) return {
        notFound: true
    };
    const modelRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .ZP.get("/api/models/list", {
        params: {
            ids: params.id
        }
    });
    if (!modelRes.data.length) return {
        notFound: true
    };
    return {
        props: {
            model: modelRes.data[0]
        }
    };
}
function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking"
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@ant-design/icons/EyeInvisibleOutlined");

/***/ }),

/***/ 8683:
/***/ ((module) => {

module.exports = require("@ant-design/icons/EyeOutlined");

/***/ }),

/***/ 1584:
/***/ ((module) => {

module.exports = require("@mui/lab/Masonry");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("lucide-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 7125:
/***/ ((module) => {

module.exports = require("react-masonry-css");

/***/ }),

/***/ 2279:
/***/ ((module) => {

module.exports = require("react-outside-click-handler");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1664,7444,4333,6950,9718,2718,3381], () => (__webpack_exec__(4045)));
module.exports = __webpack_exports__;

})();