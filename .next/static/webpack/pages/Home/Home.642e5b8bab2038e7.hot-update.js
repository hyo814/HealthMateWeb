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

/***/ "./src/components/Walk/Walk.tsx":
/*!**************************************!*\
  !*** ./src/components/Walk/Walk.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"./node_modules/@mui/material/CircularProgress/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mockups_prototypes_walkPoint_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mockups/prototypes/walkPoint.json */ \"./mockups/prototypes/walkPoint.json\");\n/* harmony import */ var _walk_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@walk.module.css */ \"./src/components/Walk/@walk.module.css\");\n/* harmony import */ var _walk_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_walk_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ProgressCircle = function(param) {\n    var value = param.value, label = param.label;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        position: \"relative\",\n        display: \"inline-flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                variant: \"determinate\",\n                value: value\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                top: 0,\n                left: 0,\n                bottom: 0,\n                right: 0,\n                position: \"absolute\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"caption\",\n                    component: \"div\",\n                    color: \"textPrimary\",\n                    children: \"\".concat(Math.round(value), \"%\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                variant: \"caption\",\n                component: \"div\",\n                color: \"textSecondary\",\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, _this);\n};\n_c = ProgressCircle;\nvar Walk = function() {\n    _s();\n    var userId = localStorage.getItem(\"userId\");\n    var walkPoint = _mockups_prototypes_walkPoint_json__WEBPACK_IMPORTED_MODULE_2__[0];\n    var percentage = (walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.dailySteps) / (walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.targetSteps) * 100;\n    var pointsPerSteps = 100;\n    var pointsEarned = Math.floor((walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.dailySteps) / 1000 * pointsPerSteps);\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.currentPoints), 2), totalPoints = _useState[0], setTotalPoints = _useState[1];\n    var convertPoints = function() {\n        var previousPoints = totalPoints;\n        var newPoints = pointsEarned;\n        var updatedTotalPoints = previousPoints + newPoints;\n        // 실제 서버 요청 및 응답 처리를 시뮬레이션합니다.\n        // 여기에서는 setTimeout을 사용하여 비동기적으로 처리합니다.\n        simulateServerRequest(updatedTotalPoints);\n    };\n    var simulateServerRequest = function(updatedTotalPoints) {\n        var today = new Date().toDateString();\n        var lastConversionDate = localStorage.setItem(\"lastConversionDate\", today);\n        setTimeout(function() {\n            // 서버 요청을 시뮬레이션하고 성공 또는 실패 여부에 따라 처리합니다.\n            var success = true; // 가정: 요청 성공\n            if (success) {\n                if (lastConversionDate !== null && localStorage.getItem(\"lastConversionDate\") === today) {\n                    alert(\"오늘은 이미 포인트를 전환했습니다. 하루에 한 번만 가능합니다.\");\n                    return; // 이미 전환한 경우 더 이상 동작하지 않도록 종료\n                }\n                setTotalPoints(updatedTotalPoints); // 서버 응답이 성공한 경우, 클라이언트 상태를 업데이트합니다.\n                alert(\"포인트를 성공적으로 전환하였습니다. 현재 포인트: \".concat(updatedTotalPoints, \"개\"));\n            } else {\n                alert(\"서버 요청에 실패했습니다. 다시 시도해주세요.\");\n            }\n        }, 1000); // 1초 후에 응답을 시뮬레이션합니다.\n    };\n    var shareData = function() {\n        var shareText = \"목표 걸음 수: \".concat(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.targetSteps, \", 현재 걸음 수: \").concat(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.dailySteps, \", 1주 간 걸음 평균 수: \").concat(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.averageWeeklySteps, \", 상위 \").concat(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.rankingPercent, \"% 걷기 천재: hyo814\");\n        if (navigator.share) {\n            navigator.share({\n                title: \"걷기 운동 카드 공유\",\n                text: shareText\n            }).then(function() {\n                console.log(\"데이터 공유 완료\");\n            })[\"catch\"](function(error) {\n                console.error(\"데이터 공유 실패:\", error);\n            });\n        } else {\n            var shareLink = document.createElement(\"a\");\n            shareLink.href = \"mailto:?subject=걷기 운동 카드 공유&body=\" + encodeURIComponent(shareText);\n            shareLink.click();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_walk_module_css__WEBPACK_IMPORTED_MODULE_7___default().walk_layer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_walk_module_css__WEBPACK_IMPORTED_MODULE_7___default().walk_detail_layer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"걷기 운동 카드\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            onClick: convertPoints,\n                            children: [\n                                \"포인트 전환하기 (\",\n                                pointsEarned,\n                                \"걸음 당 \",\n                                pointsPerSteps,\n                                \" 포인트)\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            onClick: shareData,\n                            children: \"공유하기\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"목표 걸음 수: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: \"targetSteps\",\n                            children: walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.targetSteps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"현재 걸음 수: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: \"dailySteps\",\n                            children: walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.dailySteps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"1주 간 걸음 평균 수: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: \"averageSteps\",\n                            children: walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.averageWeeklySteps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 22\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"현재 포인트: \",\n                        totalPoints,\n                        \" POINT \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"진행률: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: \"progress\",\n                            children: [\n                                percentage.toFixed(2),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"상위 \",\n                        walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.rankingPercent,\n                        \"% 걷기 : \",\n                        userId\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressCircle, {\n                    value: percentage,\n                    label: \"일일 목표 달성률\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 5\n                }, _this),\n                \"\\xa0\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressCircle, {\n                    value: walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.rankingPercent,\n                    label: \"상위 퍼센트\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n            lineNumber: 97,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n        lineNumber: 96,\n        columnNumber: 3\n    }, _this);\n};\n_s(Walk, \"+wy80wkaw1XVX/dj4OR9hEp5J54=\");\n_c1 = Walk;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Walk);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProgressCircle\");\n$RefreshReg$(_c1, \"Walk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9vQjtvQkFBWW5CLE9BQU07Ozs7OztnQkFBYzs4QkFDakQsOERBQUNGO29CQUFlQyxLQUFLLEVBQUVtQixzQkFBQUEsZ0NBQUFBLFVBQVcwQixjQUFjO29CQUFFNUMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEU7R0FqRk1jO01BQUFBO0FBbUZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dhbGsvV2Fsay50c3g/MzRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgd2Fsa1BvaW50RGF0YSBmcm9tIFwiLi4vLi4vLi4vbW9ja3Vwcy9wcm90b3R5cGVzL3dhbGtQb2ludC5qc29uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQHdhbGsubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5cclxuY29uc3QgUHJvZ3Jlc3NDaXJjbGUgPSAoeyB2YWx1ZSwgbGFiZWwgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIj5cclxuXHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e3ZhbHVlfSAvPlxyXG5cdFx0XHQ8Qm94XHJcblx0XHRcdFx0dG9wPXswfVxyXG5cdFx0XHRcdGxlZnQ9ezB9XHJcblx0XHRcdFx0Ym90dG9tPXswfVxyXG5cdFx0XHRcdHJpZ2h0PXswfVxyXG5cdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG5cdFx0XHRcdGRpc3BsYXk9XCJmbGV4XCJcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbXBvbmVudD1cImRpdlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuXHRcdFx0XHRcdHtgJHtNYXRoLnJvdW5kKHZhbHVlKX0lYH1cclxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbXBvbmVudD1cImRpdlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG5cdFx0XHRcdHtsYWJlbH1cclxuXHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFdhbGsgPSAoKSA9PiB7XHJcblx0Y29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcblx0Y29uc3Qgd2Fsa1BvaW50ID0gd2Fsa1BvaW50RGF0YSBbMF1cclxuXHRjb25zdCBwZXJjZW50YWdlID0gKHdhbGtQb2ludD8uZGFpbHlTdGVwcyAvIHdhbGtQb2ludD8udGFyZ2V0U3RlcHMpICogMTAwO1xyXG5cdFxyXG5cdGNvbnN0IHBvaW50c1BlclN0ZXBzID0gMTAwO1xyXG5cdGNvbnN0IHBvaW50c0Vhcm5lZCA9IE1hdGguZmxvb3IoKHdhbGtQb2ludD8uZGFpbHlTdGVwcyAvIDEwMDApICogcG9pbnRzUGVyU3RlcHMpO1xyXG5cdFxyXG5cdGNvbnN0IFt0b3RhbFBvaW50cywgc2V0VG90YWxQb2ludHNdID0gdXNlU3RhdGUod2Fsa1BvaW50Py5jdXJyZW50UG9pbnRzKTtcclxuXHRcclxuXHRjb25zdCBjb252ZXJ0UG9pbnRzID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgcHJldmlvdXNQb2ludHMgPSB0b3RhbFBvaW50cztcclxuXHRcdGNvbnN0IG5ld1BvaW50cyA9IHBvaW50c0Vhcm5lZDtcclxuXHRcdGNvbnN0IHVwZGF0ZWRUb3RhbFBvaW50cyA9IHByZXZpb3VzUG9pbnRzICsgbmV3UG9pbnRzO1xyXG5cdFx0XHJcblx0XHQvLyDsi6TsoJwg7ISc67KEIOyalOyyrSDrsI8g7J2R64u1IOyymOumrOulvCDsi5zrrqzroIjsnbTshZjtlanri4jri6QuXHJcblx0XHQvLyDsl6zquLDsl5DshJzripQgc2V0VGltZW91dOydhCDsgqzsmqntlZjsl6wg67mE64+Z6riw7KCB7Jy866GcIOyymOumrO2VqeuLiOuLpC5cclxuXHRcdHNpbXVsYXRlU2VydmVyUmVxdWVzdCh1cGRhdGVkVG90YWxQb2ludHMpO1xyXG5cdH07XHJcblx0XHJcblx0Y29uc3Qgc2ltdWxhdGVTZXJ2ZXJSZXF1ZXN0ID0gKHVwZGF0ZWRUb3RhbFBvaW50cykgPT4ge1xyXG5cdFx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xyXG5cdFx0Y29uc3QgbGFzdENvbnZlcnNpb25EYXRlID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0Q29udmVyc2lvbkRhdGVcIiwgdG9kYXkpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdC8vIOyEnOuyhCDsmpTssq3snYQg7Iuc666s66CI7J207IWY7ZWY6rOgIOyEseqztSDrmJDripQg7Iuk7YyoIOyXrOu2gOyXkCDrlLDrnbwg7LKY66as7ZWp64uI64ukLlxyXG5cdFx0XHRjb25zdCBzdWNjZXNzID0gdHJ1ZTsgLy8g6rCA7KCVOiDsmpTssq0g7ISx6rO1XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc3VjY2Vzcykge1xyXG5cdFx0XHRcdGlmICgobGFzdENvbnZlcnNpb25EYXRlICE9PSBudWxsKSAmJiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXN0Q29udmVyc2lvbkRhdGVcIikgPT09IHRvZGF5KSkge1xyXG5cdFx0XHRcdFx0YWxlcnQoXCLsmKTripjsnYAg7J2066+4IO2PrOyduO2KuOulvCDsoITtmZjtlojsirXri4jri6QuIO2VmOujqOyXkCDtlZwg67KI66eMIOqwgOuKpe2VqeuLiOuLpC5cIik7XHJcblx0XHRcdFx0XHRyZXR1cm47IC8vIOydtOuvuCDsoITtmZjtlZwg6rK97JqwIOuNlCDsnbTsg4Eg64+Z7J6R7ZWY7KeAIOyViuuPhOuhnSDsooXro4xcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2V0VG90YWxQb2ludHModXBkYXRlZFRvdGFsUG9pbnRzKTsgLy8g7ISc67KEIOydkeuLteydtCDshLHqs7XtlZwg6rK97JqwLCDtgbTrnbzsnbTslrjtirgg7IOB7YOc66W8IOyXheuNsOydtO2KuO2VqeuLiOuLpC5cclxuXHRcdFx0XHRhbGVydChg7Y+s7J247Yq466W8IOyEseqzteyggeycvOuhnCDsoITtmZjtlZjsmIDsirXri4jri6QuIO2YhOyerCDtj6zsnbjtirg6ICR7dXBkYXRlZFRvdGFsUG9pbnRzfeqwnGApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGFsZXJ0KCfshJzrsoQg7JqU7LKt7JeQIOyLpO2MqO2WiOyKteuLiOuLpC4g64uk7IucIOyLnOuPhO2VtOyjvOyEuOyalC4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMTAwMCk7IC8vIDHstIgg7ZuE7JeQIOydkeuLteydhCDsi5zrrqzroIjsnbTshZjtlanri4jri6QuXHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBzaGFyZURhdGEgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBzaGFyZVRleHQgPSBg66qp7ZGcIOqxuOydjCDsiJg6ICR7d2Fsa1BvaW50Py50YXJnZXRTdGVwc30sIO2YhOyerCDqsbjsnYwg7IiYOiAke3dhbGtQb2ludD8uZGFpbHlTdGVwc30sIDHso7wg6rCEIOqxuOydjCDtj4nqt6Ag7IiYOiAke3dhbGtQb2ludD8uYXZlcmFnZVdlZWtseVN0ZXBzfSwg7IOB7JyEICR7d2Fsa1BvaW50Py5yYW5raW5nUGVyY2VudH0lIOqxt+q4sCDsspzsnqw6IGh5bzgxNGA7XHJcblx0XHRcclxuXHRcdGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcclxuXHRcdFx0bmF2aWdhdG9yLnNoYXJlKHtcclxuXHRcdFx0XHR0aXRsZTogJ+qxt+q4sCDsmrTrj5kg7Lm065OcIOqzteycoCcsXHJcblx0XHRcdFx0dGV4dDogc2hhcmVUZXh0LFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfrjbDsnbTthLAg6rO17JygIOyZhOujjCcpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcign642w7J207YSwIOqzteycoCDsi6TtjKg6JywgZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgc2hhcmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdFx0XHRzaGFyZUxpbmsuaHJlZiA9ICdtYWlsdG86P3N1YmplY3Q96rG36riwIOyatOuPmSDsubTrk5wg6rO17JygJmJvZHk9JyArIGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVRleHQpO1xyXG5cdFx0XHRzaGFyZUxpbmsuY2xpY2soKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhbGtfbGF5ZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhbGtfZGV0YWlsX2xheWVyfT5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGgxPuqxt+q4sCDsmrTrj5kg7Lm065OcPC9oMT5cclxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17Y29udmVydFBvaW50c30+7Y+s7J247Yq4IOyghO2ZmO2VmOq4sCAoe3BvaW50c0Vhcm5lZH3qsbjsnYwg64u5IHtwb2ludHNQZXJTdGVwc30g7Y+s7J247Yq4KTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtzaGFyZURhdGF9PuqzteycoO2VmOq4sDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0XHRcdFx0PHA+66qp7ZGcIOqxuOydjCDsiJg6IDxzcGFuIGlkPVwidGFyZ2V0U3RlcHNcIj57d2Fsa1BvaW50Py50YXJnZXRTdGVwc308L3NwYW4+PC9wPlxyXG5cdFx0XHRcdDxwPu2YhOyerCDqsbjsnYwg7IiYOiA8c3BhbiBpZD1cImRhaWx5U3RlcHNcIj57d2Fsa1BvaW50Py5kYWlseVN0ZXBzfTwvc3Bhbj48L3A+XHJcblx0XHRcdFx0PHA+MeyjvCDqsIQg6rG47J2MIO2Pieq3oCDsiJg6IDxzcGFuIGlkPVwiYXZlcmFnZVN0ZXBzXCI+e3dhbGtQb2ludD8uYXZlcmFnZVdlZWtseVN0ZXBzfTwvc3Bhbj48L3A+XHJcblx0XHRcdFx0PHA+7ZiE7J6sIO2PrOyduO2KuDoge3RvdGFsUG9pbnRzfSBQT0lOVCA8L3A+XHJcblx0XHRcdFx0PHA+7KeE7ZaJ66WgOiA8c3BhbiBpZD1cInByb2dyZXNzXCI+e3BlcmNlbnRhZ2UudG9GaXhlZCgyKX0lPC9zcGFuPjwvcD5cclxuXHRcdFx0XHQ8cD7sg4HsnIQge3dhbGtQb2ludD8ucmFua2luZ1BlcmNlbnR9JSDqsbfquLAgOiB7dXNlcklkfTwvcD5cclxuXHRcdFx0XHQ8UHJvZ3Jlc3NDaXJjbGUgdmFsdWU9e3BlcmNlbnRhZ2V9IGxhYmVsPVwi7J287J28IOuqqe2RnCDri6zshLHrpaBcIiAvPlxyXG5cdFx0XHRcdCZuYnNwOzxQcm9ncmVzc0NpcmNsZSB2YWx1ZT17d2Fsa1BvaW50Py5yYW5raW5nUGVyY2VudH0gbGFiZWw9XCLsg4HsnIQg7Y287IS87Yq4XCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYWxrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJUeXBvZ3JhcGh5IiwiQm94Iiwid2Fsa1BvaW50RGF0YSIsInN0eWxlcyIsIkJ1dHRvbiIsIlByb2dyZXNzQ2lyY2xlIiwidmFsdWUiLCJsYWJlbCIsInBvc2l0aW9uIiwiZGlzcGxheSIsInZhcmlhbnQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb21wb25lbnQiLCJjb2xvciIsIk1hdGgiLCJyb3VuZCIsIldhbGsiLCJ1c2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2Fsa1BvaW50IiwicGVyY2VudGFnZSIsImRhaWx5U3RlcHMiLCJ0YXJnZXRTdGVwcyIsInBvaW50c1BlclN0ZXBzIiwicG9pbnRzRWFybmVkIiwiZmxvb3IiLCJjdXJyZW50UG9pbnRzIiwidG90YWxQb2ludHMiLCJzZXRUb3RhbFBvaW50cyIsImNvbnZlcnRQb2ludHMiLCJwcmV2aW91c1BvaW50cyIsIm5ld1BvaW50cyIsInVwZGF0ZWRUb3RhbFBvaW50cyIsInNpbXVsYXRlU2VydmVyUmVxdWVzdCIsInRvZGF5IiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsImxhc3RDb252ZXJzaW9uRGF0ZSIsInNldEl0ZW0iLCJzZXRUaW1lb3V0Iiwic3VjY2VzcyIsImFsZXJ0Iiwic2hhcmVEYXRhIiwic2hhcmVUZXh0IiwiYXZlcmFnZVdlZWtseVN0ZXBzIiwicmFua2luZ1BlcmNlbnQiLCJuYXZpZ2F0b3IiLCJzaGFyZSIsInRpdGxlIiwidGV4dCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInNoYXJlTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjbGljayIsImRpdiIsImNsYXNzTmFtZSIsIndhbGtfbGF5ZXIiLCJ3YWxrX2RldGFpbF9sYXllciIsImgxIiwib25DbGljayIsInAiLCJzcGFuIiwiaWQiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Walk/Walk.tsx\n"));

/***/ })

});