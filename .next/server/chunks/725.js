"use strict";
exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 2378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "z": () => (/* binding */ handleApiError)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://dazzleapi.ap-southeast-1.elasticbeanstalk.com"
});
axiosInstance.interceptors.request.use(function(config) {
    console.log("Request:", config.method?.toUpperCase(), config.url, config.params, config.data);
    return config;
}, function(error) {
    console.log("Request error:", error);
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use((response)=>{
    console.log(response.data);
    return response;
}, (error)=>{
    console.error("Response error:", error.response.status, error.response.data);
    return Promise.reject(error);
});
function handleApiError(error) {
    const status = error.response ? error.response.status : 500;
    let message = error.response?.data ? error.response?.data : error.stack ?? "Unknown Error";
    return {
        status,
        message
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ })

};
;