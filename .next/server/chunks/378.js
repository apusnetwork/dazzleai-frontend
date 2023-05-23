"use strict";
exports.id = 378;
exports.ids = [378];
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
    // baseURL: 'http://dazzleapi.ap-southeast-1.elasticbeanstalk.com',
    baseURL: "https://test-api.dazzleai.network"
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
    // window && (window as any)?.gtag('event', 'apierror', {
    //   'event_category': 'error',
    //   'event_label': (error as AxiosError)?.config?.url,
    // });
    console.error("Response error:", error.response.status, error.response.data);
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