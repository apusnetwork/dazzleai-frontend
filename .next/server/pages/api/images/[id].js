"use strict";
(() => {
var exports = {};
exports.id = 7615;
exports.ids = [7615,5899,6806];
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

/***/ 8752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "transformGetImageResponse": () => (/* binding */ transformGetImageResponse)
/* harmony export */ });
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2378);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9110);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6319);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__, _images__WEBPACK_IMPORTED_MODULE_2__]);
([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__, _images__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function transformGetImageResponse(res) {
    return (0,_images__WEBPACK_IMPORTED_MODULE_2__.mapRemoteImageToGeneratedImage)(res[0]);
}
async function handler(req, res) {
    try {
        const token = (0,_frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .getCookie */ .ej)(req, _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .AuthHeaderKey */ .qf);
        let headersConfig = {};
        if (token) {
            headersConfig["Authorization"] = `Bearer ${token}`;
        }
        if (req.method === "GET") {
            const imagesRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get("/api/images", {
                params: {
                    ids: req.query.id,
                    limit: req.query.take,
                    offset: req.query.skip
                },
                headers: headersConfig
            });
            if (imagesRes.data.length === 0) {
                res.status(404).json({
                    message: "Image not found"
                });
                return;
            }
            res.status(200).json(transformGetImageResponse(imagesRes.data));
        } else if (req.method === "PUT") {
            console.log({
                image_id: req.query.id,
                ...req.body
            });
            await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post("/api/images/update", {
                image_id: req.query.id,
                ...req.body
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            res.status(200).json({
                messgage: "ok"
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
var __webpack_exports__ = __webpack_require__.X(0, [2378,6319], () => (__webpack_exec__(8752)));
module.exports = __webpack_exports__;

})();