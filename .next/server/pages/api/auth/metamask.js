"use strict";
(() => {
var exports = {};
exports.id = 9124;
exports.ids = [9124,6806];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

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

/***/ 6277:
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
        const remoteReq = {
            "metamask_address": req.body.address,
            "metamask_message": req.body.nonce,
            "login_type": "metamask",
            "metamask_signature": req.body.signature
        };
        if ("from_img" in req.body) {
            remoteReq["from_img"] = req.body.from_img;
        }
        if ("from_url" in req.body) {
            remoteReq["from_url"] = req.body.from_url;
        }
        const loginRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/login", remoteReq);
        const userRes = await _frontend_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/api/userinfo", {
            headers: {
                Authorization: `Bearer ${loginRes.data.token}`
            }
        });
        (0,_frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .setCookie */ .d8)(res, _frontend_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .AuthHeaderKey */ .qf, loginRes.data.token, {
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
            sameSite: "lax"
        });
        const resData = {
            id: userRes.data.user_id,
            referralCode: "",
            additionalCredits: 0,
            monthlyCredits: 0,
            plan: "",
            billingPeriod: "",
            currentPeriodStartAt: "",
            currentPeriodEndAt: "",
            subscriptionStatus: "",
            cancelAtEnd: false,
            name: userRes.data.nickname,
            hasBetaAccess: false,
            status: "active",
            createdAt: "",
            email: "",
            firstName: "",
            credits: 0,
            isPaid: false
        };
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2378], () => (__webpack_exec__(6277)));
module.exports = __webpack_exports__;

})();