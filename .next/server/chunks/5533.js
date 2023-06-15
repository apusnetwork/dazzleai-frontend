exports.id = 5533;
exports.ids = [5533];
exports.modules = {

/***/ 3746:
/***/ ((module) => {

// Exports
module.exports = {
	"_": "message____00fOW",
	"right": "message_right__1WgXZ",
	"message": "message_message__B0ov4",
	"slide-in-right": "message_slide-in-right___LxHX",
	"left": "message_left__1Oovl",
	"slide-in-left": "message_slide-in-left__3rj2S",
	"icon": "message_icon__YhFJy",
	"info": "message_info__FVtXy",
	"danger": "message_danger__CeYoS",
	"success": "message_success__TSmML",
	"text": "message_text__qCkh_"
};


/***/ }),

/***/ 3919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Messages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3464);
/* harmony import */ var _frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3137);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7337);
/* harmony import */ var _message_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3746);
/* harmony import */ var _message_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_message_module_scss__WEBPACK_IMPORTED_MODULE_4__);





function Message({ type , text  }) {
    let Icon = _basic_icons__WEBPACK_IMPORTED_MODULE_3__/* .Info */ .kIV;
    if (type === "success") {
        Icon = _basic_icons__WEBPACK_IMPORTED_MODULE_3__/* .CheckGoodYes */ .y$4;
    } else if (type === "danger") {
        Icon = _basic_icons__WEBPACK_IMPORTED_MODULE_3__/* .AlertError */ .neR;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_message_module_scss__WEBPACK_IMPORTED_MODULE_4___default().message)
        ].join(" ").trim(),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: [
                    (_message_module_scss__WEBPACK_IMPORTED_MODULE_4___default().accent),
                    (_message_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[type]
                ].join(" ").trim()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_message_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                        size: 16,
                        className: [
                            (_message_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon),
                            (_message_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[type]
                        ].join(" ").trim()
                    }),
                    text
                ]
            })
        ]
    });
}
function Messages({ type ="right"  }) {
    const messages = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .selectMessages */ .AZ);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            (_message_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._),
            (_message_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[type]
        ].join(" "),
        style: {
            zIndex: 99999999
        },
        children: messages.map((m, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Message, {
                ...m
            }, m.id || i))
    });
};


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ })

};
;