exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 9477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ LargeCTA)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _website_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3499);
/* harmony import */ var _website_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_website_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function LargeCTA({ title =/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "Ready to get started?"
}) , text ="Explore our tools, or create an account." , button  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default()._large_cta),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().large_cta),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().text),
                        children: text
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().cta),
                        children: button
                    })
                ]
            })
        })
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


function Hero({ title , subtitle , visual , socialProof , cta  }) {
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
                            className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subtitle),
                            children: subtitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_website_module_scss__WEBPACK_IMPORTED_MODULE_1___default().cta),
                            children: cta
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

/***/ 3230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TT": () => (/* reexport */ FeatureCard),
  "GN": () => (/* reexport */ FeatureRow),
  "O1": () => (/* reexport */ FeaturesGrid),
  "mw": () => (/* reexport */ ImageGridVisual)
});

// UNUSED EXPORTS: SmallSocialProof, SocialProof

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./frontend/components/website/website.module.scss
var website_module = __webpack_require__(3499);
var website_module_default = /*#__PURE__*/__webpack_require__.n(website_module);
;// CONCATENATED MODULE: ./frontend/components/website/features.tsx


function FeatureRow({ title , caption , text , visual , reverse  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: [
            (website_module_default()).feature_row,
            reverse ? (website_module_default()).reverse : ""
        ].join(" "),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (website_module_default()).content,
                children: [
                    caption ? /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (website_module_default()).caption,
                        children: caption
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (website_module_default()).title,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (website_module_default()).text,
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (website_module_default())._visual,
                children: visual
            })
        ]
    });
}
function FeatureCard({ title , text , icon  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: [
            (website_module_default()).feature_card
        ].join(" "),
        children: [
            icon ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (website_module_default()).icon,
                children: icon
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (website_module_default()).title,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (website_module_default()).text,
                children: text
            })
        ]
    });
}
function FeaturesGrid({ title , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (website_module_default()).features_grid,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (website_module_default()).heading,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (website_module_default()).grid,
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./frontend/components/website/hero.tsx
var hero = __webpack_require__(9974);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
;// CONCATENATED MODULE: ./frontend/components/website/social-proof.tsx



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

// EXTERNAL MODULE: external "react-masonry-css"
var external_react_masonry_css_ = __webpack_require__(7125);
var external_react_masonry_css_default = /*#__PURE__*/__webpack_require__.n(external_react_masonry_css_);
// EXTERNAL MODULE: ./utils/cloudflare.ts
var cloudflare = __webpack_require__(4201);
;// CONCATENATED MODULE: ./frontend/components/website/visuals.tsx




function ImageGridVisual({ images , columns =4  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (website_module_default()).image_grid_visual,
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_masonry_css_default()), {
            breakpointCols: {
                default: columns
            },
            className: (website_module_default()).grid,
            columnClassName: (website_module_default()).column,
            children: images.map((i, id)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: (0,cloudflare/* cloudflareLoader */.O)({
                        src: i,
                        quality: 75,
                        width: 356
                    }),
                    alt: "",
                    className: (website_module_default()).image
                }, id))
        })
    });
}

;// CONCATENATED MODULE: ./frontend/components/website/index.tsx






/***/ }),

/***/ 4201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ cloudflareLoader)
/* harmony export */ });
const cloudflareLoader = ({ src , width , quality  })=>{
    const params = [
        `width=${width}`
    ];
    if (quality) {
        params.push(`quality=${quality}`);
    }
    const paramsString = params.join(",");
    return `https://getimg.ai/cdn-cgi/image/${paramsString}/${src}`;
};


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ })

};
;