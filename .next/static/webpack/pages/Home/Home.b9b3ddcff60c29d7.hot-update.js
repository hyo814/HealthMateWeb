"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Home/Home",{

/***/ "./src/components/NavigationBar/BottomNavigation.tsx":
/*!***********************************************************!*\
  !*** ./src/components/NavigationBar/BottomNavigation.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/BottomNavigation */ \"./node_modules/@mui/material/BottomNavigation/index.js\");\n/* harmony import */ var _mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/BottomNavigationAction */ \"./node_modules/@mui/material/BottomNavigationAction/index.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _Nutrient_Nutrient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Nutrient/Nutrient */ \"./src/components/Nutrient/Nutrient.tsx\");\n/* harmony import */ var _Supplement_Supplement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Supplement/Supplement */ \"./src/components/Supplement/Supplement.tsx\");\n/* harmony import */ var _Center_Center__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Center/Center */ \"./src/components/Center/Center.tsx\");\n/* harmony import */ var _Fitness_Fitness__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Fitness/Fitness */ \"./src/components/Fitness/Fitness.tsx\");\n/* harmony import */ var _Walk_Walk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Walk/Walk */ \"./src/components/Walk/Walk.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar BottomNavigationBar = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2), 2), tabIndex = _useState[0], setTabIndex = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isMobile = _useState1[0], setIsMobile = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            setIsMobile(window.innerWidth <= 768);\n        };\n        // Set the initial value\n        handleResize();\n        // Add event listener\n        window.addEventListener(\"resize\", handleResize);\n        // Remove event listener on cleanup\n        return function() {\n            return window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    var renderTabContent = function() {\n        switch(tabIndex){\n            case 0:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nutrient_Nutrient__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 12\n                }, _this);\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Supplement_Supplement__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 12\n                }, _this);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Center_Center__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 12\n                }, _this);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Fitness_Fitness__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 12\n                }, _this);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Walk_Walk__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 12\n                }, _this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"선택된 탭이 없습니다.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 12\n                }, _this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                renderTabContent(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    sx: {\n                        width: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        showLabels: true,\n                        value: tabIndex,\n                        onChange: function(event, newValue) {\n                            setTabIndex(newValue);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"영양제\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"영양보조식품\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"나\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faHouse\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 42\n                                    }, _this),\n                                    \"r\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"피트니스\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"걷기카드\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 8\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 6\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    sx: {\n                        width: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        showLabels: true,\n                        value: tabIndex,\n                        onChange: function(event, newValue) {\n                            setTabIndex(newValue);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"영양제\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"영양보조식품\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"나\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"피트니스\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                label: \"걷기카드\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 8\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 6\n                }, _this),\n                renderTabContent()\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\NavigationBar\\\\BottomNavigation.tsx\",\n        lineNumber: 52,\n        columnNumber: 3\n    }, _this);\n};\n_s(BottomNavigationBar, \"bDmTaxHbRiZI9/L3gAYJiAbFvjQ=\");\n_c = BottomNavigationBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BottomNavigationBar);\nvar _c;\n$RefreshReg$(_c, \"BottomNavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyL0JvdHRvbU5hdmlnYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBRWI7QUFDMEI7QUFDWTtBQUNoQjtBQUNLO0FBRW5CO0FBQ007QUFDWjtBQUNHO0FBQ1Q7QUFFaEMsSUFBTWEsc0JBQXNCOztJQUMzQixJQUFnQ1osWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQWxDYSxXQUF5QmIsY0FBZmMsY0FBZWQ7SUFDaEMsSUFBZ0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUFsQ2UsV0FBeUJmLGVBQWZnQixjQUFlaEI7SUFFaENDLGdEQUFTQSxDQUFDO1FBQ1QsSUFBTWdCLGVBQWU7WUFDcEJELFlBQVlFLE9BQU9DLFVBQVUsSUFBSTtRQUNsQztRQUVBLHdCQUF3QjtRQUN4QkY7UUFFQSxxQkFBcUI7UUFDckJDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLG1DQUFtQztRQUNuQyxPQUFPO21CQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjs7SUFDbkQsR0FBRyxFQUFFO0lBRUwsSUFBTUssbUJBQW1CO1FBQ3hCLE9BQVFUO1lBQ1AsS0FBSztnQkFDSixxQkFBTyw4REFBQ04sMERBQVFBOzs7OztZQUNqQixLQUFLO2dCQUNKLHFCQUFPLDhEQUFDQyw4REFBVUE7Ozs7O1lBQ25CLEtBQUs7Z0JBQ0oscUJBQU8sOERBQUNDLHNEQUFNQTs7Ozs7WUFDZixLQUFLO2dCQUNKLHFCQUFPLDhEQUFDQyx3REFBT0E7Ozs7O1lBQ2hCLEtBQUs7Z0JBQ0oscUJBQU8sOERBQUNDLGtEQUFJQTs7Ozs7WUFDYjtnQkFDQyxxQkFBTyw4REFBQ1k7OEJBQUk7Ozs7OztRQUNkO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQ0E7a0JBQ0NSLHlCQUNBOztnQkFDRU87OEJBQ0QsOERBQUNwQix5REFBR0E7b0JBQUNzQixJQUFJO3dCQUFDQyxPQUFPO29CQUFNOzhCQUN0Qiw0RUFBQ3RCLHVFQUFnQkE7d0JBQ2hCdUIsVUFBVTt3QkFDVkMsT0FBT2Q7d0JBQ1BlLFVBQVUsU0FBQ0MsT0FBT0M7NEJBQ2pCaEIsWUFBWWdCO3dCQUNiOzswQ0FFQSw4REFBQzFCLDZFQUFzQkE7Z0NBQUMyQixPQUFNOzs7Ozs7MENBQzlCLDhEQUFDM0IsNkVBQXNCQTtnQ0FBQzJCLE9BQU07Ozs7OzswQ0FDOUIsOERBQUMzQiw2RUFBc0JBO2dDQUFDMkIsT0FBTTs7a0RBQUksOERBQUN6QiwyRUFBZUE7d0NBQUMwQixNQUFNM0IsdUVBQU9BOzs7Ozs7b0NBQUk7Ozs7Ozs7MENBQ3BFLDhEQUFDRCw2RUFBc0JBO2dDQUFDMkIsT0FBTTs7Ozs7OzBDQUM5Qiw4REFBQzNCLDZFQUFzQkE7Z0NBQUMyQixPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBS2pDOzs4QkFDQyw4REFBQzdCLHlEQUFHQTtvQkFBQ3NCLElBQUk7d0JBQUNDLE9BQU87b0JBQU07OEJBQ3RCLDRFQUFDdEIsdUVBQWdCQTt3QkFDaEJ1QixVQUFVO3dCQUNWQyxPQUFPZDt3QkFDUGUsVUFBVSxTQUFDQyxPQUFPQzs0QkFDakJoQixZQUFZZ0I7d0JBQ2I7OzBDQUVBLDhEQUFDMUIsNkVBQXNCQTtnQ0FBQzJCLE9BQU07Ozs7OzswQ0FDOUIsOERBQUMzQiw2RUFBc0JBO2dDQUFDMkIsT0FBTTs7Ozs7OzBDQUM5Qiw4REFBQzNCLDZFQUFzQkE7Z0NBQUMyQixPQUFNOzs7Ozs7MENBQzlCLDhEQUFDM0IsNkVBQXNCQTtnQ0FBQzJCLE9BQU07Ozs7OzswQ0FDOUIsOERBQUMzQiw2RUFBc0JBO2dDQUFDMkIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRy9CVDs7Ozs7Ozs7QUFLTjtHQS9FTVY7S0FBQUE7QUFpRk4sK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyL0JvdHRvbU5hdmlnYXRpb24udHN4PzIwNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm90dG9tTmF2aWdhdGlvbic7XHJcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm90dG9tTmF2aWdhdGlvbkFjdGlvbic7XHJcbmltcG9ydCB7ZmFIb3VzZX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuaW1wb3J0IE51dHJpZW50IGZyb20gXCIuLi9OdXRyaWVudC9OdXRyaWVudFwiO1xyXG5pbXBvcnQgU3VwcGxlbWVudCBmcm9tIFwiLi4vU3VwcGxlbWVudC9TdXBwbGVtZW50XCI7XHJcbmltcG9ydCBDZW50ZXIgZnJvbSBcIi4uL0NlbnRlci9DZW50ZXJcIjtcclxuaW1wb3J0IEZpdG5lc3MgZnJvbSBcIi4uL0ZpdG5lc3MvRml0bmVzc1wiO1xyXG5pbXBvcnQgV2FsayBmcm9tIFwiLi4vV2Fsay9XYWxrXCI7XHJcblxyXG5jb25zdCBCb3R0b21OYXZpZ2F0aW9uQmFyID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt0YWJJbmRleCwgc2V0VGFiSW5kZXhdID0gdXNlU3RhdGUoMik7XHJcblx0Y29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuXHRcdFx0c2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPD0gNzY4KTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCB2YWx1ZVxyXG5cdFx0aGFuZGxlUmVzaXplKCk7XHJcblx0XHRcclxuXHRcdC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblx0XHRcclxuXHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcblx0XHRyZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblx0fSwgW10pO1xyXG5cdFxyXG5cdGNvbnN0IHJlbmRlclRhYkNvbnRlbnQgPSAoKSA9PiB7XHJcblx0XHRzd2l0Y2ggKHRhYkluZGV4KSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRyZXR1cm4gPE51dHJpZW50Lz47XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRyZXR1cm4gPFN1cHBsZW1lbnQvPjtcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHJldHVybiA8Q2VudGVyLz47XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRyZXR1cm4gPEZpdG5lc3MvPjtcclxuXHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdHJldHVybiA8V2Fsay8+O1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiA8ZGl2PuyEoO2DneuQnCDtg63snbQg7JeG7Iq164uI64ukLjwvZGl2PjtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHR7aXNNb2JpbGUgP1xyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHR7cmVuZGVyVGFiQ29udGVudCgpfVxyXG5cdFx0XHRcdFx0PEJveCBzeD17e3dpZHRoOiBcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0XHQ8Qm90dG9tTmF2aWdhdGlvblxyXG5cdFx0XHRcdFx0XHRcdHNob3dMYWJlbHNcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGFiSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCwgbmV3VmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFRhYkluZGV4KG5ld1ZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCLsmIHslpHsoJxcIi8+XHJcblx0XHRcdFx0XHRcdFx0PEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCLsmIHslpHrs7TsobDsi53tkohcIi8+XHJcblx0XHRcdFx0XHRcdFx0PEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCLrgphcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG91c2V9IC8+cjwvQm90dG9tTmF2aWdhdGlvbkFjdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIu2UvO2KuOuLiOyKpFwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIuqxt+q4sOy5tOuTnFwiLz5cclxuXHRcdFx0XHRcdFx0PC9Cb3R0b21OYXZpZ2F0aW9uPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdFx0OlxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8Qm94IHN4PXt7d2lkdGg6IFwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdDxCb3R0b21OYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRcdFx0c2hvd0xhYmVsc1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0YWJJbmRleH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGFiSW5kZXgobmV3VmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIuyYgeyWkeygnFwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIuyYgeyWkeuztOyhsOyLne2SiFwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIuuCmFwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIu2UvO2KuOuLiOyKpFwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIuqxt+q4sOy5tOuTnFwiLz5cclxuXHRcdFx0XHRcdFx0PC9Cb3R0b21OYXZpZ2F0aW9uPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHR7cmVuZGVyVGFiQ29udGVudCgpfVxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHR9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b21OYXZpZ2F0aW9uQmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkJvdHRvbU5hdmlnYXRpb24iLCJCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIiwiZmFIb3VzZSIsIkZvbnRBd2Vzb21lSWNvbiIsIk51dHJpZW50IiwiU3VwcGxlbWVudCIsIkNlbnRlciIsIkZpdG5lc3MiLCJXYWxrIiwiQm90dG9tTmF2aWdhdGlvbkJhciIsInRhYkluZGV4Iiwic2V0VGFiSW5kZXgiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyVGFiQ29udGVudCIsImRpdiIsInN4Iiwid2lkdGgiLCJzaG93TGFiZWxzIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJsYWJlbCIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavigationBar/BottomNavigation.tsx\n"));

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


/***/ })

});