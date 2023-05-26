exports.id = 1061;
exports.ids = [1061];
exports.modules = {

/***/ 8430:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "form_form__TxUZP",
	"title": "form_title__dpazE",
	"body": "form_body__KAW4H",
	"inline_input": "form_inline_input__sXUpG",
	"label": "form_label__7yZDI",
	"input": "form_input__eEEkj",
	"btn": "form_btn__WIjry",
	"left": "form_left__l_inl",
	"right": "form_right__geMKV",
	"center": "form_center__FByHZ",
	"input_row": "form_input_row___bPgK"
};


/***/ }),

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aq": () => (/* binding */ InputRow),
/* harmony export */   "VR": () => (/* binding */ ButtonRow)
/* harmony export */ });
/* unused harmony export InlineInput */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8430);
/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function InlineInput({ children , label  }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.inline_input,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: styles.label,
                children: label
            }),
            /*#__PURE__*/ _jsx("div", {
                className: styles.input,
                children: children
            })
        ]
    });
}
function ButtonRow({ children , align ="left"  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            (_form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().btn),
            (_form_module_scss__WEBPACK_IMPORTED_MODULE_1___default())[align]
        ].join(" ").trim(),
        children: children
    });
}
function InputRow({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            (_form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().input_row)
        ].join(" ").trim(),
        children: children
    });
}


/***/ })

};
;