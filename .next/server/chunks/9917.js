exports.id = 9917;
exports.ids = [9917];
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
	"image_name": "website_image_name__OitrX",
	"image_badge": "website_image_badge__o4ekU",
	"image_18_badge": "website_image_18_badge__B9iOJ",
	"image_avatar_url": "website_image_avatar_url__TIcKv",
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

/***/ 9917:
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

// EXTERNAL MODULE: external "@mui/lab/Masonry"
var Masonry_ = __webpack_require__(1584);
var Masonry_default = /*#__PURE__*/__webpack_require__.n(Masonry_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@ant-design/icons/EyeOutlined"
var EyeOutlined_ = __webpack_require__(8683);
var EyeOutlined_default = /*#__PURE__*/__webpack_require__.n(EyeOutlined_);
// EXTERNAL MODULE: external "@ant-design/icons/EyeInvisibleOutlined"
var EyeInvisibleOutlined_ = __webpack_require__(8768);
var EyeInvisibleOutlined_default = /*#__PURE__*/__webpack_require__.n(EyeInvisibleOutlined_);
// EXTERNAL MODULE: ./frontend/context/18puls.tsx
var _18puls = __webpack_require__(4993);
;// CONCATENATED MODULE: ./frontend/components/website/default_avatar.webp
/* harmony default export */ const default_avatar = ({"src":"/_next/static/media/default_avatar.765939bc.webp","height":120,"width":120,"blurDataURL":"data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAgAAkA4JaQAAp3NNVkYAAD++uFxGhP12LBx5g3tA3WgqONZM5UFAn8AAA=="});
;// CONCATENATED MODULE: ./frontend/components/website/visuals.tsx

// import Masonry from "react-masonry-css";








const Image = ({ model  })=>{
    const { show18Plus: gloablShow18Plus  } = (0,_18puls/* useGlobal18Plus */.W)();
    const { 0: show18Plus , 1: setShow18Plus  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setShow18Plus(gloablShow18Plus);
    }, [
        gloablShow18Plus
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/generate?img=${model.reuse_img}&shared=true`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (website_module_default()).column,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (website_module_default()).image_wrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://s3.apus.network/" + model.reuse_img,
                        alt: "",
                        style: {
                            filter: model.nsfw && !show18Plus ? "blur(10px)" : ""
                        },
                        className: "z-0"
                    }, model.id),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (website_module_default()).image_badge,
                        children: [
                            model.useCount,
                            " runs"
                        ]
                    }),
                    model.nsfw && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (website_module_default()).image_18_badge,
                        onClick: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            setShow18Plus((show)=>!show);
                        },
                        children: [
                            "18+ ",
                            show18Plus ? /*#__PURE__*/ jsx_runtime_.jsx((EyeInvisibleOutlined_default()), {
                                className: "leading-0 ml-1",
                                rev: ""
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((EyeOutlined_default()), {
                                className: "leading-0 ml-1",
                                rev: ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (website_module_default()).image_name,
                        children: model.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (website_module_default()).image_avatar_url,
                        src: model.params.author_avatar || default_avatar.src
                    })
                ]
            })
        })
    });
};
const ImageGridVisual = /*#__PURE__*/ (0,external_react_.forwardRef)(function ImageGridVisual({ images  }, ref) {
    const { 0: columns , 1: setColumns  } = (0,external_react_.useState)(4);
    (0,external_react_.useEffect)(()=>{
        const handleResize = ()=>{
            if (window.innerWidth > 768) {
                setColumns(4);
            } else {
                setColumns(2);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (website_module_default()).image_grid_visual,
        ref: ref,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Masonry_default()), {
            columns: columns,
            spacing: 2,
            children: images.map((model, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Image, {
                    model: model
                }, index))
        })
    });
});

;// CONCATENATED MODULE: ./frontend/components/website/index.tsx






/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ })

};
;