"use strict";
exports.id = 2378;
exports.ids = [2378];
exports.modules = {

/***/ 2378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "zG": () => (/* binding */ handleApiError)
/* harmony export */ });
/* unused harmony export oapi */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const oapi = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    // baseURL: 'http://dazzleapi.ap-southeast-1.elasticbeanstalk.com',
    // baseURL: '/oapi',
    baseURL:  true ? "https://test-api.dazzleai.network/api" : 0
});
oapi.interceptors.request.use(function(config) {
    console.log("Request:", config.method?.toUpperCase(), config.url, config.params, config.data);
    if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("getimgauth")) {
        config.headers["Authorization"] = `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("getimgauth")}`;
    }
    return config;
}, function(error) {
    console.log("Request error:", error);
    return Promise.reject(error);
});
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    // baseURL: 'http://dazzleapi.ap-southeast-1.elasticbeanstalk.com',
    baseURL: "https://test-api.dazzleai.network"
});
axiosInstance.interceptors.request.use(function(config) {
    if (config.url !== "/api/userinfo") {
        console.log("Request:", config.method?.toUpperCase(), config.url, config.params, config.data);
    }
    return config;
}, function(error) {
    console.log("Request error:", error);
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use((response)=>{
    if (response.config.url !== "/api/userinfo") {
        console.log(response.data);
    }
    return response;
}, (error)=>{
    console.error("Response error:", error?.response?.status, error?.response?.data);
    return Promise.reject(error);
});
function handleApiError(error) {
    const status = error?.response ? error?.response?.status : 500;
    let message = error?.response?.data ? error?.response?.data : error?.stack ?? "Unknown Error";
    return {
        status,
        message
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;