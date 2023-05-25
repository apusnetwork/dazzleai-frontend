"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327,806];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 8880:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2378);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);
_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    try {
        const token = (0,_frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .getCookie */ .ej)(req, _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .AuthHeaderKey */ .qf);
        const modelRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/api/models", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const resData = modelRes.data.filter((v)=>v.type === "checkpoint" || v.type === "lora").map((model)=>({
                id: model.type === "checkpoint" || model.type === "lora" ? model.model_file_name : model.model_id,
                userId: null,
                name: model.name,
                type: model.type,
                checkpoint: model.checkpoint_file_name,
                status: "",
                public: false,
                params: {
                    author: model.author,
                    images: model.images.split(","),
                    author_url: model.author_url,
                    description: model.description,
                    instance_prompt: ""
                },
                createdAt: "",
                trainingStartedAt: null,
                trainingFinishedAt: null,
                lastUsedAt: "",
                useCount: model.use_count
            }));
        res.status(200).json(resData);
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
var __webpack_exports__ = __webpack_require__.X(0, [725], () => (__webpack_exec__(8880)));
module.exports = __webpack_exports__;

})();