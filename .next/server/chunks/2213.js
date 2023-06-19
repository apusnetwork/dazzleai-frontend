exports.id = 2213;
exports.ids = [2213];
exports.modules = {

/***/ 9755:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "image_image__el7xn",
	"loading": "image_loading__sb7il",
	"img": "image_img__LPrPB",
	"img_hover": "image_img_hover__RhCpi",
	"hoverable": "image_hoverable__KYVDh",
	"img_hover_row": "image_img_hover_row__xU7dd",
	"btn_group": "image_btn_group__hRuQR",
	"_overlay": "image__overlay__BkxIA",
	"overlay": "image_overlay__F614B",
	"fade-in": "image_fade-in__lnnI9",
	"_modal": "image__modal__PAd8e",
	"modal": "image_modal__NMlg1",
	"slide-in": "image_slide-in__vD2UD",
	"modal_image": "image_modal_image__fngk2",
	"close": "image_close__kTHQ5",
	"view": "image_view__8hiTc",
	"view_head": "image_view_head__mQ5UF",
	"title": "image_title__0LC6Q",
	"view_buttons": "image_view_buttons___GlqX",
	"_view_image": "image__view_image__3YbrV",
	"view_image_bg": "image_view_image_bg__LuKXc",
	"view_image": "image_view_image__zLrnK",
	"content": "image_content__cI9cP",
	"prompt": "image_prompt__pfwoS",
	"params": "image_params__jnsPO",
	"param": "image_param__Q2u78",
	"label": "image_label__QDuZz",
	"value": "image_value__7m2OA",
	"sharer": "image_sharer__vqTxI",
	"_sharer_image": "image__sharer_image__z4JS0",
	"sharer_image": "image_sharer_image__rdeTo",
	"sharer_body": "image_sharer_body__LKjx8",
	"sharer_links": "image_sharer_links__edr2R",
	"sharer_link": "image_sharer_link__xn4RY",
	"fb": "image_fb__zN4RF",
	"pi": "image_pi__7V5xp",
	"tw": "image_tw__LPiQF",
	"re": "image_re__Bcs7P",
	"china_attention": "image_china_attention__i2K1H",
	"copy_btn": "image_copy_btn__2Lst_",
	"mobile_sharer": "image_mobile_sharer__g1Hn0",
	"_user_menu": "image__user_menu__3B4od",
	"user_menu": "image_user_menu__L_7vs",
	"user_menu_name": "image_user_menu_name__TdEBm",
	"shimmer": "image_shimmer__TS7pj"
};


/***/ }),

/***/ 3892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports AuthHeaderKey, setCookie, getCookie, deleteCookie */
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
    res.setHeader("Set-Cookie", serialize(name, stringValue, options));
};
const getCookie = (req, name)=>{
    const cookies = parse(req.headers.cookie || "");
    return cookies[name];
};
const deleteCookie = (res, name)=>{
    res.setHeader("Set-Cookie", serialize(name, "", {
        maxAge: -1
    }));
};


/***/ }),

/***/ 2718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mk": () => (/* binding */ transformGetImagesResponse),
/* harmony export */   "uX": () => (/* binding */ mapRemoteImageToGeneratedImage)
/* harmony export */ });
/* unused harmony exports config, default */
/* harmony import */ var _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4969);
/* harmony import */ var _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3892);
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
        const token = getCookie(req, AuthHeaderKey);
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
            const imagesRes = await axiosInstance.get("/api/images", {
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
            await axiosInstance.post(`/api/images/del`, {
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