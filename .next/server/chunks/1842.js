"use strict";
exports.id = 1842;
exports.ids = [1842];
exports.modules = {

/***/ 1842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_$": () => (/* binding */ useMetaMask),
/* harmony export */   "e4": () => (/* binding */ MetaMaskContextProvider)
/* harmony export */ });
/* unused harmony exports formatBalance, formatChainAsNum, formatAddress */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3427);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @typescript-eslint/no-explicit-any */ 

const formatBalance = (rawBalance)=>{
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
    return balance;
};
const formatChainAsNum = (chainIdHex)=>{
    const chainIdNum = parseInt(chainIdHex);
    return chainIdNum;
};
const formatAddress = (addr)=>{
    return `${addr.substring(0, 8)}...`;
};
const disconnectedState = {
    accounts: [],
    balance: "",
    chainId: ""
};
const MetaMaskContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const MetaMaskContextProvider = ({ children  })=>{
    const { 0: hasProvider , 1: setHasProvider  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isConnecting , 1: setIsConnecting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const clearError = ()=>setErrorMessage("");
    const { 0: wallet , 1: setWallet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(disconnectedState);
    // useCallback ensures that you don't uselessly recreate the _updateWallet function on every render
    const _updateWallet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (providedAccounts)=>{
        const accounts = providedAccounts || await window.ethereum.request({
            method: "eth_accounts"
        });
        if (accounts.length === 0) {
            // If there are no accounts, then the user is disconnected
            setWallet(disconnectedState);
            return;
        }
        const balance = formatBalance(await window.ethereum.request({
            method: "eth_getBalance",
            params: [
                accounts[0],
                "latest"
            ]
        }));
        const chainId = await window.ethereum.request({
            method: "eth_chainId"
        });
        setWallet({
            accounts,
            balance,
            chainId
        });
    }, []);
    const updateWalletAndAccounts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>_updateWallet(), [
        _updateWallet
    ]);
    const updateWallet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((accounts)=>_updateWallet(accounts), [
        _updateWallet
    ]);
    /**
   * This logic checks if MetaMask is installed. If it is, some event handlers are set up
   * to update the wallet state when MetaMask changes. The function returned by useEffect
   * is used as a "cleanup": it removes the event handlers whenever the MetaMaskProvider
   * is unmounted.
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getProvider = async ()=>{
            const provider = await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default()({
                silent: true
            });
            setHasProvider(Boolean(provider));
            if (provider) {
                updateWalletAndAccounts();
                window.ethereum.on("accountsChanged", updateWallet);
                window.ethereum.on("chainChanged", updateWalletAndAccounts);
            }
        };
        getProvider();
        return ()=>{
            window.ethereum?.removeListener("accountsChanged", updateWallet);
            window.ethereum?.removeListener("chainChanged", updateWalletAndAccounts);
        };
    }, [
        updateWallet,
        updateWalletAndAccounts
    ]);
    const connectMetaMask = async ()=>{
        setIsConnecting(true);
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            clearError();
            updateWallet(accounts);
        } catch (err) {
            setErrorMessage(err.message);
        }
        setIsConnecting(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetaMaskContext.Provider, {
        value: {
            wallet,
            hasProvider,
            error: !!errorMessage,
            errorMessage,
            isConnecting,
            connectMetaMask,
            clearError
        },
        children: children
    });
};
const useMetaMask = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MetaMaskContext);
    if (context === undefined) {
        throw new Error('useMetaMask must be used within a "MetaMaskContextProvider"');
    }
    return context;
};


/***/ })

};
;