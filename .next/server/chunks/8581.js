"use strict";
exports.id = 8581;
exports.ids = [8581];
exports.modules = {

/***/ 8581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ transformModelsResponse)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4969);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);
_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function transformModelsResponse(models) {
    return models.filter((v)=>v.type === "checkpoint" || v.type === "lora").map((model)=>({
            ...model,
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
                instance_prompt: "",
                author_avatar: model.author_avatar
            },
            createdAt: "",
            trainingStartedAt: null,
            trainingFinishedAt: null,
            lastUsedAt: "",
            useCount: model.use_count,
            nsfw: model.nsfw,
            reuse_img: model.reuse_img
        }));
}
async function handler(req, res) {
    try {
        const token = getCookie(req, AuthHeaderKey);
        const modelRes = await axiosInstance.get("/api/models", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const resData = transformModelsResponse(modelRes.data);
        res.status(200).json(resData);
    } catch (e) {
        const { status , message  } = handleApiError(e);
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