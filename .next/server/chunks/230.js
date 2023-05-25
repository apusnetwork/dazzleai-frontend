exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 3499:
/***/ ((module) => {

// Exports
module.exports = {
	"_hero": "website__hero__49ENh",
	"hero": "website_hero__ssYjU",
	"content": "website_content__DPLzT",
	"title": "website_title__lStXQ",
	"hero_subtitle": "website_hero_subtitle__syX5G",
	"subtitle": "website_subtitle__igLVp",
	"cta": "website_cta__vuIFI",
	"social_proof": "website_social_proof__zvY01",
	"feature_row": "website_feature_row__xIMTc",
	"caption": "website_caption__5qgsO",
	"text": "website_text__9_aXE",
	"_visual": "website__visual__tMsSn",
	"reverse": "website_reverse__1_ZKr",
	"features_grid": "website_features_grid__i8RTU",
	"heading": "website_heading__MIP9r",
	"grid": "website_grid__MYDkl",
	"feature_card": "website_feature_card__cgxF6",
	"icon": "website_icon__Gue5X",
	"image_grid_visual": "website_image_grid_visual__A9KrT",
	"column": "website_column__6Z67w",
	"image_wrapper": "website_image_wrapper__JDScv",
	"image_badge": "website_image_badge__o4ekU",
	"_large_cta": "website__large_cta__JWVIc",
	"large_cta": "website_large_cta__7nFVV",
	"faq": "website_faq__a5XCs",
	"questions": "website_questions__hJhPl",
	"faq_question": "website_faq_question__bHtwU",
	"question": "website_question__XBqiI",
	"answer": "website_answer__Ag0J3",
	"open": "website_open__3Goe4"
};


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

/***/ 3230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GN": () => (/* reexport */ FeatureRow),
  "mw": () => (/* reexport */ ImageGridVisual)
});

// UNUSED EXPORTS: FeatureCard, FeaturesGrid, SmallSocialProof, SocialProof

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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./frontend/components/website/visuals.tsx




function ImageGridVisual({ images , columns =4  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (website_module_default()).image_grid_visual,
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_masonry_css_default()), {
            breakpointCols: {
                default: columns,
                1100: 2,
                800: 2
            },
            className: (website_module_default()).grid,
            columnClassName: (website_module_default()).column,
            children: images.map((model)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/generate?img=${model.params.images[0].split("/").pop()}&shared=true`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (website_module_default()).image_wrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (website_module_default()).image_badge,
                                children: [
                                    model.useCount,
                                    " runs"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: model.params.images[0],
                                alt: "",
                                className: (website_module_default()).image
                            }, model.id)
                        ]
                    })
                }))
        })
    });
}

;// CONCATENATED MODULE: ./frontend/components/website/index.tsx






/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ })

};
;