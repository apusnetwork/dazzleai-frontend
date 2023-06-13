"use strict";
(() => {
var exports = {};
exports.id = 5244;
exports.ids = [5244,6806];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 9110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d8": () => (/* binding */ setCookie),
/* harmony export */   "ej": () => (/* binding */ getCookie),
/* harmony export */   "kT": () => (/* binding */ deleteCookie),
/* harmony export */   "qf": () => (/* binding */ AuthHeaderKey)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
// utils/cookies.ts

const AuthHeaderKey = "getimgauth";
/**
 * This sets `cookie` using the `res` object
 */ const setCookie = (res, name, value, options = {})=>{
    const stringValue = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
    if (typeof options.maxAge === "number") {
        options.expires = new Date(Date.now() + options.maxAge * 1000);
    }
    res.setHeader("Set-Cookie", (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(name, stringValue, options));
};
const getCookie = (req, name)=>{
    const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(req.headers.cookie || "");
    return cookies[name];
};
const deleteCookie = (res, name)=>{
    res.setHeader("Set-Cookie", (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(name, "", {
        maxAge: -1
    }));
};


/***/ }),

/***/ 1759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2378);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9110);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6544);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2781);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__, node_fetch__WEBPACK_IMPORTED_MODULE_2__]);
([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__, node_fetch__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    try {
        const token = (0,_frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .getCookie */ .ej)(req, _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .AuthHeaderKey */ .qf);
        const imagesRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get("/api/images", {
            params: {
                ids: req.query.id,
                limit: req.query.take,
                offset: req.query.skip
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (imagesRes.data.length === 0) {
            res.status(404).json({
                message: "Image not found"
            });
            return;
        }
        const fileUrl = imagesRes.data[0].image_url;
        res.setHeader("Content-Disposition", `attachment; filename="${fileUrl.split("/").pop() ?? "default"}.png"`);
        res.setHeader("Content-Type", "image/jpeg");
        // Stream the file to the response
        const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_2__["default"])(fileUrl);
        if (response.body != null) {
            await new Promise((resolve, reject)=>{
                stream__WEBPACK_IMPORTED_MODULE_3___default().pipeline(response.body, res, (err)=>{
                    if (err) reject(err);
                    else resolve();
                });
            });
        }
    } catch (e) {
        const { status , message  } = (0,_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .handleApiError */ .zG)(e);
        res.status(status).json({
            message
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2378], () => (__webpack_exec__(1759)));
module.exports = __webpack_exports__;

})();