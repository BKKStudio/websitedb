"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Swiper/NewProduct.jsx":
/*!**********************************************!*\
  !*** ./app/components/Swiper/NewProduct.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewProductSwiper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var _public_Images_Product_1_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/public/Images/Product/1.webp */ \"(app-pages-browser)/./public/Images/Product/1.webp\");\n/* harmony import */ var _public_Images_Product_2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/public/Images/Product/2.png */ \"(app-pages-browser)/./public/Images/Product/2.png\");\n/* harmony import */ var _public_Images_Product_3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/public/Images/Product/3.png */ \"(app-pages-browser)/./public/Images/Product/3.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction NewProductSwiper() {\n    _s();\n    const product = [\n        {\n            id: 1,\n            img: _public_Images_Product_1_webp__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            Title: \"[พร้อมส่ง] Farland (TH/EN) ฟาร์แลนด์\",\n            detail: \"eiei\",\n            price: 5890\n        },\n        {\n            id: 2,\n            img: _public_Images_Product_2_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            Title: \"[พร้อมส่ง] Farland (TH/EN) ฟาร์แลนด์\",\n            detail: \"eiei\",\n            price: 2890\n        },\n        {\n            id: 3,\n            img: _public_Images_Product_3_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n            Title: \"[พร้อมส่ง] Farland (TH/EN) ฟาร์แลนด์\",\n            detail: \"eiei\",\n            price: 1890\n        }\n    ];\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedCart = localStorage.getItem(\"cart\");\n        if (savedCart) {\n            setCart(JSON.parse(savedCart));\n        }\n    }, []);\n    const addToCart = (productId, productimg, pr)=>{\n        setCart((prevCart)=>{\n            const newItem = {\n                id: productId,\n                img: _public_Images_Product_1_webp__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                Title: \"[พร้อมส่ง] Farland (TH/EN) ฟาร์แลนด์\",\n                detail: \"eiei\",\n                price: 5890\n            };\n            const updatedCart = [\n                ...prevCart,\n                newItem\n            ];\n            localStorage.setItem(\"cart\", JSON.stringify(updatedCart));\n            return updatedCart;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        slidesPerView: \"auto\",\n        spaceBetween: 20,\n        freeMode: true,\n        modules: [\n            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.FreeMode,\n            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Pagination\n        ],\n        className: \"mySwiper !z-0   !pt-5 !pb-10  \",\n        children: product.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                className: \" !flex !w-[320px] gap-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-xl shadow-xl  hover:shadow-3xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-col-3 items-center rounded-xl  duration-500 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        src: data.img,\n                                        alt: \"\",\n                                        className: \"rounded-t-xl w-full\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex  px-7  \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col  w-full h-auto\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-md  font-bold pt-4\",\n                                                    children: data.Title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-md text-gray-500  pb-4 \",\n                                                    children: [\n                                                        \"฿\",\n                                                        data.price\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4 bg-yellow-500 text-white font-bold text-center rounded-b-xl cursor-pointer\",\n                                        onClick: ()=>addToCart(),\n                                        children: \"หยิบใส่รถเข็น\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this)\n            }, data.id, false, {\n                fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Seksak Aranchot\\\\Desktop\\\\cpe499\\\\final\\\\app\\\\components\\\\Swiper\\\\NewProduct.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(NewProductSwiper, \"5+HPoxSo1E/C3go3F1eDhM/DDhE=\");\n_c = NewProductSwiper;\nvar _c;\n$RefreshReg$(_c, \"NewProductSwiper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1N3aXBlci9OZXdQcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDQTtBQUN0QjtBQUNUO0FBQ1c7QUFDQTtBQUN1QjtBQUNMO0FBQ0Q7QUFDQTtBQUNqQyxTQUFTWTs7SUFDdEIsTUFBTUMsVUFBVTtRQUNkO1lBQ0VDLElBQUk7WUFDSkMsS0FBS04scUVBQUlBO1lBQ1RPLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFSixJQUFJO1lBQ0pDLEtBQUtMLG9FQUFJQTtZQUNUTSxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsT0FBTztRQUNUO1FBQ0E7WUFDRUosSUFBSTtZQUNKQyxLQUFLSixxRUFBSUE7WUFDVEssT0FBTztZQUNQQyxRQUFRO1lBQ1JDLE9BQU87UUFDVDtLQUNEO0lBRUQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUduQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1tQixZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFDdkMsSUFBSUYsV0FBVztZQUNiRCxRQUFRSSxLQUFLQyxLQUFLLENBQUNKO1FBQ3JCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssWUFBWSxDQUFDQyxXQUFVQyxZQUFXQztRQUN0Q1QsUUFBUVUsQ0FBQUE7WUFFSixNQUFNQyxVQUFVO2dCQUNkakIsSUFBSWE7Z0JBQ0paLEtBQUtOLHFFQUFJQTtnQkFDVE8sT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsT0FBTztZQUNUO1lBQ0EsTUFBTWMsY0FBYzttQkFBSUY7Z0JBQVVDO2FBQVE7WUFDMUNULGFBQWFXLE9BQU8sQ0FBQyxRQUFRVCxLQUFLVSxTQUFTLENBQUNGO1lBQzVDLE9BQU9BO1FBRVg7SUFDRjtJQUVBLHFCQUNFLDhEQUFDN0IsZ0RBQU1BO1FBQ0xnQyxlQUFlO1FBQ2ZDLGNBQWM7UUFDZEMsVUFBVTtRQUNWQyxTQUFTO1lBQUMvQixvREFBUUE7WUFBRUMsc0RBQVVBO1NBQUM7UUFDL0IrQixXQUFZO2tCQUVYMUIsUUFBUTJCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWiw4REFBQ3JDLHFEQUFXQTtnQkFBQ21DLFdBQVU7MEJBQ3JCLDRFQUFDRzs4QkFDQyw0RUFBQ0E7d0JBQUlILFdBQVU7a0NBQ2IsNEVBQUNHOzRCQUFJSCxXQUFVO3NDQUNiLDRFQUFDRztnQ0FBSUgsV0FBVTs7a0RBQ2IsOERBQUNqQyxrREFBS0E7d0NBQUNxQyxLQUFLRixLQUFLMUIsR0FBRzt3Q0FBRTZCLEtBQUk7d0NBQUdMLFdBQVU7Ozs7OztrREFDdkMsOERBQUNHO3dDQUFJSCxXQUFVO2tEQUNiLDRFQUFDRzs0Q0FBSUgsV0FBVTs7OERBQ2IsOERBQUNNO29EQUFLTixXQUFVOzhEQUNiRSxLQUFLekIsS0FBSzs7Ozs7OzhEQUViLDhEQUFDNkI7b0RBQUtOLFdBQVU7O3dEQUErQjt3REFDM0NFLEtBQUt2QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSWxCLDhEQUFDd0I7d0NBQ0NILFdBQVU7d0NBQ1ZPLFNBQVMsSUFBTXBCO2tEQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBbkIyQ2UsS0FBSzNCLEVBQUU7Ozs7Ozs7Ozs7QUE4QnJFO0dBMUZ3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU3dpcGVyL05ld1Byb2R1Y3QuanN4PzIxZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgRnJlZU1vZGUsIFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyL21vZHVsZXNcIjtcclxuaW1wb3J0IEltZzEgZnJvbSBcIkAvcHVibGljL0ltYWdlcy9Qcm9kdWN0LzEud2VicFwiXHJcbmltcG9ydCBJbWcyIGZyb20gXCJAL3B1YmxpYy9JbWFnZXMvUHJvZHVjdC8yLnBuZ1wiXHJcbmltcG9ydCBJbWczIGZyb20gXCJAL3B1YmxpYy9JbWFnZXMvUHJvZHVjdC8zLnBuZ1wiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Byb2R1Y3RTd2lwZXIoKSB7XHJcbiAgY29uc3QgcHJvZHVjdCA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZzogSW1nMSxcclxuICAgICAgVGl0bGU6IFwiW+C4nuC4o+C5ieC4reC4oeC4quC5iOC4h10gRmFybGFuZCAoVEgvRU4pIOC4n+C4suC4o+C5jOC5geC4peC4meC4lOC5jFwiLFxyXG4gICAgICBkZXRhaWw6IFwiZWllaVwiLFxyXG4gICAgICBwcmljZTogNTg5MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBpbWc6IEltZzIsXHJcbiAgICAgIFRpdGxlOiBcIlvguJ7guKPguYnguK3guKHguKrguYjguIddIEZhcmxhbmQgKFRIL0VOKSDguJ/guLLguKPguYzguYHguKXguJnguJTguYxcIixcclxuICAgICAgZGV0YWlsOiBcImVpZWlcIixcclxuICAgICAgcHJpY2U6IDI4OTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgaW1nOiBJbWczLFxyXG4gICAgICBUaXRsZTogXCJb4Lie4Lij4LmJ4Lit4Lih4Liq4LmI4LiHXSBGYXJsYW5kIChUSC9FTikg4Lif4Liy4Lij4LmM4LmB4Lil4LiZ4LiU4LmMXCIsXHJcbiAgICAgIGRldGFpbDogXCJlaWVpXCIsXHJcbiAgICAgIHByaWNlOiAxODkwLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZENhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIik7XHJcbiAgICBpZiAoc2F2ZWRDYXJ0KSB7XHJcbiAgICAgIHNldENhcnQoSlNPTi5wYXJzZShzYXZlZENhcnQpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0SWQscHJvZHVjdGltZyxwcikgPT4ge1xyXG4gICAgc2V0Q2FydChwcmV2Q2FydCA9PiB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICAgICAgaWQ6IHByb2R1Y3RJZCxcclxuICAgICAgICAgIGltZzogSW1nMSxcclxuICAgICAgICAgIFRpdGxlOiBcIlvguJ7guKPguYnguK3guKHguKrguYjguIddIEZhcmxhbmQgKFRIL0VOKSDguJ/guLLguKPguYzguYHguKXguJnguJTguYxcIixcclxuICAgICAgICAgIGRldGFpbDogXCJlaWVpXCIsXHJcbiAgICAgICAgICBwcmljZTogNTg5MCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0ID0gWy4uLnByZXZDYXJ0LCBuZXdJdGVtXTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhcnQpKTtcclxuICAgICAgICByZXR1cm4gdXBkYXRlZENhcnQ7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTd2lwZXJcclxuICAgICAgc2xpZGVzUGVyVmlldz17XCJhdXRvXCJ9XHJcbiAgICAgIHNwYWNlQmV0d2Vlbj17MjB9XHJcbiAgICAgIGZyZWVNb2RlPXt0cnVlfVxyXG4gICAgICBtb2R1bGVzPXtbRnJlZU1vZGUsIFBhZ2luYXRpb25dfVxyXG4gICAgICBjbGFzc05hbWU9e2BteVN3aXBlciAhei0wICAgIXB0LTUgIXBiLTEwICBgfVxyXG4gICAgPlxyXG4gICAgICB7cHJvZHVjdC5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiICFmbGV4ICF3LVszMjBweF0gZ2FwLTRcIiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBzaGFkb3cteGwgIGhvdmVyOnNoYWRvdy0zeGxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2wtMyBpdGVtcy1jZW50ZXIgcm91bmRlZC14bCAgZHVyYXRpb24tNTAwIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhLmltZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwicm91bmRlZC10LXhsIHctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgcHgtNyAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICB3LWZ1bGwgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1kICBmb250LWJvbGQgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTUwMCAgcGItNCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4Li/e2RhdGEucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IGJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1jZW50ZXIgcm91bmRlZC1iLXhsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRUb0NhcnQoKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4q+C4ouC4tOC4muC5g+C4quC5iOC4o+C4luC5gOC4guC5h+C4mVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Td2lwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiTGluayIsIkltYWdlIiwiRnJlZU1vZGUiLCJQYWdpbmF0aW9uIiwiSW1nMSIsIkltZzIiLCJJbWczIiwiTmV3UHJvZHVjdFN3aXBlciIsInByb2R1Y3QiLCJpZCIsImltZyIsIlRpdGxlIiwiZGV0YWlsIiwicHJpY2UiLCJjYXJ0Iiwic2V0Q2FydCIsInNhdmVkQ2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJhZGRUb0NhcnQiLCJwcm9kdWN0SWQiLCJwcm9kdWN0aW1nIiwicHIiLCJwcmV2Q2FydCIsIm5ld0l0ZW0iLCJ1cGRhdGVkQ2FydCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJtb2R1bGVzIiwiY2xhc3NOYW1lIiwibWFwIiwiZGF0YSIsImRpdiIsInNyYyIsImFsdCIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Swiper/NewProduct.jsx\n"));

/***/ })

});