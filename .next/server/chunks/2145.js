"use strict";
exports.id = 2145;
exports.ids = [2145];
exports.modules = {

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
    const { model , prompt , negative_prompt , seed , width , height , steps , sampler , cfg_scale , lora , checkpoint  } = param;
    const { progress , status_msg  } = extra;
    const createdAt = new Date().toISOString();
    const startedAt = new Date().toISOString();
    const finishedAt = new Date().toISOString();
    const _model = {
        id: lora || checkpoint || model,
        userId: user_id,
        name: lora || checkpoint || model,
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
        console.log(image);
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
            jpegUrl: image_url,
            seed: image.seed
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
            scheduler: sampler,
            num_images: 1,
            started_at: startedAt,
            enhance_face: false,
            guidance_scale: cfg_scale,
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
        const nodeRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get("/api/nodes", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const createRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get("/api/tasks", {
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