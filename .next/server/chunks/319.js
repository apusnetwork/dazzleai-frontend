"use strict";
exports.id = 319;
exports.ids = [319];
exports.modules = {

/***/ 6319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "mapRemoteImageToGeneratedImage": () => (/* binding */ mapRemoteImageToGeneratedImage)
/* harmony export */ });
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2378);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9110);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(165);
/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);
_frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const defaultParam = {
    batch_count: 1,
    cfg_scale: 1,
    denoising_strength: 0,
    height: 512,
    width: 512,
    image: "",
    model: "",
    lora: "",
    checkpoint: "",
    negative_prompt: "",
    prompt: "",
    sampler: "",
    seed: 0,
    steps: 0
};
function mapRemoteImageToGeneratedImage(image) {
    const { task , model_id , seed , image_id  } = image;
    const { param =defaultParam  } = task;
    // const { _model } = task.task_id;
    return {
        id: image.image_id,
        modelTaskId: task.task_id,
        userId: image.user_id,
        hosting: "remote",
        path: "",
        jpegPath: "",
        width: param.width,
        height: param.height,
        format: "jpg",
        liked: false,
        isShared: image.is_shared,
        createdAt: "",
        modelTask: {
            id: task.task_id,
            model: param.checkpoint || param.lora || param.model || "",
            params: {
                seed: seed,
                tool: param.sampler,
                width: param.width,
                height: param.height,
                prompt: param.prompt,
                scheduler: param.sampler,
                num_images: param.batch_count,
                started_at: "",
                enhance_face: false,
                guidance_scale: param.cfg_scale,
                negative_prompt: param.negative_prompt,
                num_inference_steps: param.steps
            },
            _model: {
                id: "",
                name: (param.model ?? model_id) ?? "",
                params: {
                    author: "",
                    images: [],
                    author_url: "",
                    description: "",
                    instance_prompt: ""
                }
            }
        },
        url: image.image_url,
        jpegUrl: ""
    };
}
// export const config = getConfig()
const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    try {
        const token = (0,_frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .getCookie */ .ej)(req, _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .AuthHeaderKey */ .qf);
        if (req.method === "POST") {
            const form = new (multiparty__WEBPACK_IMPORTED_MODULE_3___default().Form)();
            const reqData = await new Promise((resolve, reject)=>{
                form.parse(req, function(err, fields, files) {
                    if (err) reject({
                        err
                    });
                    resolve({
                        fields,
                        files
                    });
                });
            });
            if (!reqData.files.file) {
                res.status(400).json({
                    message: "No file"
                });
                return;
            }
            const uploadRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/api/upload/image", {
                file: fs__WEBPACK_IMPORTED_MODULE_2___default().createReadStream(reqData.files.file[0].path)
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            const resData = {
                id: "",
                userId: "",
                format: "",
                width: 0,
                height: 0,
                path: "",
                hosting: "",
                modelTaskId: null,
                jpegPath: null,
                liked: false,
                isShared: false,
                createdAt: "",
                url: uploadRes.data.Url
            };
            res.status(200).json(resData);
        } else if (req.method === "GET") {
            const imagesRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/api/images", {
                params: {
                    limit: req.query.take,
                    offset: req.query.skip
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            res.status(200).json(imagesRes.data?.map(mapRemoteImageToGeneratedImage));
        } else if (req.method === "DELETE") {
            await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/api/images/del`, {
                ids: req.query.ids
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            res.status(200).json({
                success: true
            });
        } else {
            res.status(405).json({
                message: "Method not allowed"
            });
        }
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