exports.id = 6776;
exports.ids = [6776];
exports.modules = {

/***/ 760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GN": () => (/* binding */ FeatureRow)
/* harmony export */ });
/* unused harmony exports FeatureCard, FeaturesGrid */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _website_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3499);
/* harmony import */ var _website_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_website_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function FeatureRow({ title , caption , text , visual , reverse  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: [
            (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().feature_row),
            reverse ? (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().reverse) : ""
        ].join(" "),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().content),
                children: [
                    caption ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().caption),
                        children: caption
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().text),
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default()._visual),
                children: visual
            })
        ]
    });
}
function FeatureCard({ title , text , icon  }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: [
            styles.feature_card
        ].join(" "),
        children: [
            icon ? /*#__PURE__*/ _jsx("div", {
                className: styles.icon,
                children: icon
            }) : null,
            /*#__PURE__*/ _jsx("h2", {
                className: styles.title,
                children: title
            }),
            /*#__PURE__*/ _jsx("p", {
                className: styles.text,
                children: text
            })
        ]
    });
}
function FeaturesGrid({ title , children  }) {
    return /*#__PURE__*/ _jsxs("section", {
        className: styles.features_grid,
        children: [
            /*#__PURE__*/ _jsx("h2", {
                className: styles.heading,
                children: title
            }),
            /*#__PURE__*/ _jsx("div", {
                className: styles.grid,
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 9974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _website_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3499);
/* harmony import */ var _website_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_website_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Hero({ title , subtitle , subtitle2 , visual , socialProof , cta  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default()._hero),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().hero),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().hero_subtitle),
                            style: {
                                marginTop: 20
                            },
                            children: subtitle2
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().cta),
                            children: cta
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().hero_subtitle),
                            children: subtitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().social_proof),
                            children: socialProof
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().visual),
                    children: visual
                })
            ]
        })
    });
};


/***/ }),

/***/ 6776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "El": () => (/* reexport safe */ _visuals__WEBPACK_IMPORTED_MODULE_3__.E),
/* harmony export */   "GN": () => (/* reexport safe */ _features__WEBPACK_IMPORTED_MODULE_0__.GN),
/* harmony export */   "mw": () => (/* reexport safe */ _visuals__WEBPACK_IMPORTED_MODULE_3__.m)
/* harmony export */ });
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9974);
/* harmony import */ var _social_proof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
/* harmony import */ var _visuals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_visuals__WEBPACK_IMPORTED_MODULE_3__]);
_visuals__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports SocialProof, SmallSocialProof */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);



function SocialProof({ title ="See what our customers are saying about us"  }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.social_proof,
        children: [
            /*#__PURE__*/ _jsx("h3", {
                className: styles.title,
                children: title
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "senja-frame-embed",
                "data-id": "60066c6a-b033-4b08-a2b4-d4bc64a75be4"
            }),
            /*#__PURE__*/ _jsx(Script, {
                defer: true,
                type: "text/javascript",
                src: "https://widget.senja.io/embed/frame.js"
            })
        ]
    });
}
function SmallSocialProof() {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "senja-frame-embed",
                "data-id": "6e099b7f-6264-4bb3-a78a-ebb8a55f151c"
            }),
            /*#__PURE__*/ _jsx(Script, {
                defer: true,
                type: "text/javascript",
                src: "https://widget.senja.io/embed/frame.js"
            })
        ]
    });
}


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ })

};
;