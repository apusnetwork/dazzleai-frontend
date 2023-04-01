"use strict";
(() => {
var exports = {};
exports.id = 572;
exports.ids = [572];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

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
    console.error("Response error:", error);
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

/***/ 3894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);
_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    try {
        res.status(200).json([
            {
                id: "1",
                name: "gpu-iqrk0b0p.apus.network"
            },
            {
                id: "2",
                name: "gpu-hwvgffet.apus.network"
            },
            {
                id: "3",
                name: "gpu-suku5n9v.apus.network"
            },
            {
                id: "4",
                name: "gpu-c6n1fd7w.apus.network"
            },
            {
                id: "5",
                name: "gpu-k4yuifup.apus.network"
            }, 
        ]);
    } catch (e) {
        const { status , message  } = (0,_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .handleApiError */ .z)(e);
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3894));
module.exports = __webpack_exports__;

})();