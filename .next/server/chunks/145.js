"use strict";
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 2145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "mapRemoteTaskToTaskInfo": () => (/* binding */ mapRemoteTaskToTaskInfo)
/* harmony export */ });
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2378);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);
_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function mapRemoteTaskToTaskInfo(remoteTask) {
    const { task_id , user_id , param , status , extra , images , node  } = remoteTask;
    const { model , prompt , negative_prompt , seed , width , height , steps , sampler  } = param;
    const { progress , status_msg  } = extra;
    const createdAt = new Date().toISOString();
    const startedAt = new Date().toISOString();
    const finishedAt = new Date().toISOString();
    const _model = {
        id: model,
        userId: user_id,
        name: model,
        status: status_msg,
        public: false,
        params: {
            author: "unknown",
            images: [],
            author_url: "unknown",
            description: "unknown",
            instance_prompt: "unknown"
        },
        createdAt,
        trainingStartedAt: null,
        trainingFinishedAt: null,
        lastUsedAt: createdAt
    };
    const imagesInfo = images?.map((image)=>{
        const { image_id , image_url , is_shared  } = image;
        return {
            id: image_id,
            modelTaskId: task_id,
            userId: user_id,
            hosting: node,
            path: image_url,
            jpegPath: image_url,
            width,
            height,
            format: "jpg",
            liked: false,
            isShared: is_shared,
            createdAt,
            url: image_url,
            jpegUrl: image_url
        };
    }) ?? [];
    return {
        id: task_id,
        userId: user_id,
        acceptedImageId: null,
        model,
        tool: sampler,
        status,
        params: {
            seed,
            tool: sampler,
            width,
            height,
            prompt,
            scheduler: "none",
            num_images: 1,
            started_at: startedAt,
            enhance_face: false,
            guidance_scale: 1,
            negative_prompt,
            num_inference_steps: steps
        },
        createdAt,
        startedAt,
        finishedAt,
        images: imagesInfo,
        _model
    };
}
async function handler(req, res) {
    try {
        const token = (0,_frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .getCookie */ .ej)(req, _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .AuthHeaderKey */ .qf);
        const nodeRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/api/nodes", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const createRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/api/tasks", {
            params: {
                ids: req.query.ids
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const resData = createRes.data.map(mapRemoteTaskToTaskInfo);
        res.status(200).json(resData);
    } catch (e) {
        const { status , message  } = (0,_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .handleApiError */ .z)(e);
        res.status(status).json({
            message
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;