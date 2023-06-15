"use strict";
exports.id = 6319;
exports.ids = [6319];
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

/***/ 6319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "mapRemoteImageToGeneratedImage": () => (/* binding */ mapRemoteImageToGeneratedImage),
/* harmony export */   "transformGetImagesResponse": () => (/* binding */ transformGetImagesResponse)
/* harmony export */ });
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2378);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9110);
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
    let { param =defaultParam  } = task;
    if (param == null) {
        param = defaultParam;
    }
    // const { _model } = task.task_id;
    return {
        ...image,
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
            model: param.lora || param.checkpoint || param.model || "",
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
function transformGetImagesResponse(res) {
    return res?.map(mapRemoteImageToGeneratedImage) ?? [];
}
async function handler(req, res) {
    try {
        const token = (0,_frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .getCookie */ .ej)(req, _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .AuthHeaderKey */ .qf);
        if (req.method === "POST") {
        // const form = new multiparty.Form();
        // const reqData: any = await new Promise((resolve, reject) => {
        //   form.parse(req, function (err: any, fields: any, files: any) {
        //     if (err) reject({ err });
        //     resolve({ fields, files });
        //   });
        // });
        // if (!reqData.files.file) {
        //   res.status(400).json({ message: 'No file' })
        //   return
        // }
        // const uploadRes = await axiosInstance.post<RemoteUploadImage>('/api/upload/image', {
        //   file: fs.createReadStream(reqData.files.file[0].path)
        // }, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //     "Content-Type": "multipart/form-data",
        //   }
        // })
        // const resData: ImageInfo = {
        //   id: '',
        //   userId: '',
        //   format: '',
        //   width: 0,
        //   height: 0,
        //   path: '',
        //   hosting: '',
        //   modelTaskId: null,
        //   jpegPath: null,
        //   liked: false,
        //   isShared: false,
        //   createdAt: '',
        //   url: uploadRes.data.Url,
        // }
        // res.status(200).json(resData)
        } else if (req.method === "GET") {
            const imagesRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get("/api/images", {
                params: {
                    limit: req.query.take,
                    offset: req.query.skip
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            res.status(200).json(transformGetImagesResponse(imagesRes.data));
        } else if (req.method === "DELETE") {
            await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post(`/api/images/del`, {
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