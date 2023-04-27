exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 9475:
/***/ ((module) => {

// Exports
module.exports = {
	"_": "input____fc5J9",
	"label": "input_label__e5_K4",
	"input_label": "input_input_label__BRGcu",
	"_input": "input__input__PIwFM",
	"with_label": "input_with_label__yOxYO",
	"chevron": "input_chevron__AhoTk",
	"password_show": "input_password_show__Mk8QU",
	"number": "input_number__oYL0_",
	"input": "input_input__jeroS",
	"icon": "input_icon__NMIum",
	"with_icon": "input_with_icon__jxvcI",
	"xs": "input_xs__ZBgEf",
	"sm": "input_sm__A9GQf",
	"md": "input_md__w_jv7",
	"lg": "input_lg__ZRAD9",
	"_info": "input__info___TmJT",
	"info": "input_info__o1xT1",
	"error": "input_error__H_Ieh",
	"input_error": "input_input_error__JH47l",
	"number_sm": "input_number_sm__yvM84",
	"number_md": "input_number_md___nEqK",
	"number_lg": "input_number_lg__X8NvC",
	"textarea": "input_textarea__9B2w0",
	"textarea_lg": "input_textarea_lg__Vead9",
	"color": "input_color__F_dFr",
	"color_handle": "input_color_handle__muymo",
	"picker": "input_picker__wQvLX",
	"color_picker": "input_color_picker__bMYXK",
	"no-border": "input_no-border__BdLLt",
	"no-margin": "input_no-margin__vjYJe",
	"bold": "input_bold__oF3hH",
	"font-15": "input_font-15__UEd_V"
};


/***/ }),

/***/ 9580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3464);
/* harmony import */ var _frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3137);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _basic_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7337);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9475);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_input_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4319);







function Input({ size ="md" , placeholder , label , id , name , error , type ="text" , value , onChange , autoFocus , info , autoComplete ="off" , pattern , disabled , required , Icon , customStyles =[] , disableInfo =false , step , onBlur , onFocus  }) {
    const errors = (0,_frontend_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_frontend_redux_info_slice__WEBPACK_IMPORTED_MODULE_2__/* .selectErrors */ .i2);
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    error = error || errors && errors[id];
    const hasError = error && (!error.value && !value || error.value && error.value === value);
    const className = [
        (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),
        (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[size],
        Icon ? (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default().with_icon) : "",
        customStyles.map((s)=>(_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[s]).join(" "),
        hasError ? (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input_error) : "", 
    ].join(" ").trim();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (autoFocus) {
            document.getElementById(id)?.focus();
        }
    }, [
        autoFocus
    ]);
    // function handleNumber(v: number) {
    //   onChange && onChange({ target: { id: id, value: (parseFloat(value) + v).toString() } } as ChangeEvent<HTMLInputElement>)
    // }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default()._),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: [
                    (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default()._input),
                    label ? (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default().with_label) : ""
                ].join(" ").trim(),
                children: [
                    Icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                        className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
                        size: 14
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: id,
                        name: name || id,
                        className: className,
                        value: value || "",
                        onChange: onChange,
                        type: showPassword ? "text" : type,
                        autoComplete: autoComplete,
                        placeholder: placeholder,
                        autoFocus: autoFocus,
                        pattern: pattern,
                        disabled: disabled,
                        required: required !== undefined,
                        onBlur: onBlur,
                        onFocus: onFocus,
                        step: step
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_label__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        htmlFor: id,
                        className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input_label),
                        children: label
                    }),
                    type === "password" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default().password_show),
                        onClick: ()=>setShowPassword(!showPassword),
                        children: showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_4__/* .EyePasswordHide */ .pqo, {
                            size: 16
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_basic_icons__WEBPACK_IMPORTED_MODULE_4__/* .EyePasswordShow */ .djZ, {
                            size: 16
                        })
                    }) : null
                ]
            }),
            !disableInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default()._info),
                children: hasError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error),
                    children: error.msg
                }) : info ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info),
                    children: info
                }) : null
            }) : null
        ]
    });
}


/***/ }),

/***/ 4319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9475);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Label({ className , children , htmlFor  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        htmlFor: htmlFor,
        className: [
            (_input_module_scss__WEBPACK_IMPORTED_MODULE_1___default().label),
            className
        ].join(" ").trim(),
        children: children
    });
}


/***/ })

};
;