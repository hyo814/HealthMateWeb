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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mockups_prototypes_walkPoint_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mockups/prototypes/walkPoint.json */ \"./mockups/prototypes/walkPoint.json\");\n/* harmony import */ var _walk_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@walk.module.css */ \"./src/components/Walk/@walk.module.css\");\n/* harmony import */ var _walk_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walk_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ProgressCircle = function(param) {\n    var value = param.value, label = param.label;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n        position: \"relative\",\n        display: \"inline-flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CircularProgress, {\n                variant: \"determinate\",\n                value: value\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                top: 0,\n                left: 0,\n                bottom: 0,\n                right: 0,\n                position: \"absolute\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                    variant: \"caption\",\n                    component: \"div\",\n                    color: \"textPrimary\",\n                    children: \"\".concat(Math.round(value), \"%\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                variant: \"caption\",\n                component: \"div\",\n                color: \"textSecondary\",\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, _this);\n};\n_c = ProgressCircle;\nvar Walk = function() {\n    _s();\n    var userId = localStorage.getItem(\"userId\");\n    var walkPoint = _mockups_prototypes_walkPoint_json__WEBPACK_IMPORTED_MODULE_2__[0];\n    var percentage = (walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.dailySteps) / (walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.targetSteps) * 100;\n    var pointsPerSteps = 100;\n    var pointsEarned = Math.floor((walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.dailySteps) / 1000 * pointsPerSteps);\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.currentPoints), 2), totalPoints = _useState[0], setTotalPoints = _useState[1];\n    var convertPoints = function() {\n        var previousPoints = totalPoints;\n        var newPoints = pointsEarned;\n        var updatedTotalPoints = previousPoints + newPoints;\n        // 실제 서버 요청 및 응답 처리를 시뮬레이션합니다.\n        // 여기에서는 setTimeout을 사용하여 비동기적으로 처리합니다.\n        simulateServerRequest(updatedTotalPoints);\n    };\n    var simulateServerRequest = function(updatedTotalPoints) {\n        var today = new Date().toDateString();\n        var lastConversionDate = localStorage.setItem(\"lastConversionDate\", today);\n        setTimeout(function() {\n            // 서버 요청을 시뮬레이션하고 성공 또는 실패 여부에 따라 처리합니다.\n            var success = true; // 가정: 요청 성공\n            if (success) {\n                if (lastConversionDate !== null && localStorage.getItem(\"lastConversionDate\") === today) {\n                    alert(\"오늘은 이미 포인트를 전환했습니다. 하루에 한 번만 가능합니다.\");\n                    return; // 이미 전환한 경우 더 이상 동작하지 않도록 종료\n                }\n                setTotalPoints(updatedTotalPoints); // 서버 응답이 성공한 경우, 클라이언트 상태를 업데이트합니다.\n                alert(\"포인트를 성공적으로 전환하였습니다. 현재 포인트: \".concat(updatedTotalPoints, \"개\"));\n            } else {\n                alert(\"서버 요청에 실패했습니다. 다시 시도해주세요.\");\n            }\n        }, 1000); // 1초 후에 응답을 시뮬레이션합니다.\n    };\n    var shareData = function() {\n        var shareText = \"목표 걸음 수: \".concat(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.targetSteps, \", 현재 걸음 수: \").concat(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.dailySteps, \", 1주 간 걸음 평균 수: \").concat(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.averageWeeklySteps, \", 상위 \").concat(walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.rankingPercent, \"% 걷기 천재: hyo814\");\n        if (navigator.share) {\n            navigator.share({\n                title: \"걷기 운동 카드 공유\",\n                text: shareText\n            }).then(function() {\n                console.log(\"데이터 공유 완료\");\n            })[\"catch\"](function(error) {\n                console.error(\"데이터 공유 실패:\", error);\n            });\n        } else {\n            var shareLink = document.createElement(\"a\");\n            shareLink.href = \"mailto:?subject=걷기 운동 카드 공유&body=\" + encodeURIComponent(shareText);\n            shareLink.click();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_walk_module_css__WEBPACK_IMPORTED_MODULE_4___default().walk_layer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_walk_module_css__WEBPACK_IMPORTED_MODULE_4___default().walk_detail_layer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"걷기 운동 카드\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"목표 걸음 수: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: \"targetSteps\",\n                            children: walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.targetSteps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"현재 걸음 수: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: \"dailySteps\",\n                            children: walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.dailySteps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"1주 간 걸음 평균 수: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: \"averageSteps\",\n                            children: walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.averageWeeklySteps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 22\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"진행률: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: \"progress\",\n                            children: [\n                                percentage.toFixed(2),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"현재 포인트: \",\n                        totalPoints,\n                        \" POINT \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    onClick: convertPoints,\n                    children: [\n                        \"포인트 전환하기 (\",\n                        pointsEarned,\n                        \"걸음 당 \",\n                        pointsPerSteps,\n                        \" 포인트)\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    onClick: shareData,\n                    children: \"공유하기\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"상위 \",\n                        walkPoint === null || walkPoint === void 0 ? void 0 : walkPoint.rankingPercent,\n                        \"% 걷기 : \",\n                        userId\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n            lineNumber: 95,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\WebstormProjects\\\\healthmatewebgood\\\\src\\\\components\\\\Walk\\\\Walk.tsx\",\n        lineNumber: 94,\n        columnNumber: 3\n    }, _this);\n};\n_s(Walk, \"+wy80wkaw1XVX/dj4OR9hEp5J54=\");\n_c1 = Walk;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Walk);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProgressCircle\");\n$RefreshReg$(_c1, \"Walk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHMvV2Fsay9XYWxrLnRzeD8zNGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB3YWxrUG9pbnREYXRhIGZyb20gXCIuLi8uLi8uLi9tb2NrdXBzL3Byb3RvdHlwZXMvd2Fsa1BvaW50Lmpzb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ad2Fsay5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcblxyXG5jb25zdCBQcm9ncmVzc0NpcmNsZSA9ICh7IHZhbHVlLCBsYWJlbCB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiPlxyXG5cdFx0XHQ8Q2lyY3VsYXJQcm9ncmVzcyB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT17dmFsdWV9IC8+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHR0b3A9ezB9XHJcblx0XHRcdFx0bGVmdD17MH1cclxuXHRcdFx0XHRib3R0b209ezB9XHJcblx0XHRcdFx0cmlnaHQ9ezB9XHJcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcblx0XHRcdFx0ZGlzcGxheT1cImZsZXhcIlxyXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29tcG9uZW50PVwiZGl2XCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG5cdFx0XHRcdFx0e2Ake01hdGgucm91bmQodmFsdWUpfSVgfVxyXG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29tcG9uZW50PVwiZGl2XCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcblx0XHRcdFx0e2xhYmVsfVxyXG5cdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV2FsayA9ICgpID0+IHtcclxuXHRjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcclxuXHRjb25zdCB3YWxrUG9pbnQgPSB3YWxrUG9pbnREYXRhIFswXVxyXG5cdGNvbnN0IHBlcmNlbnRhZ2UgPSAod2Fsa1BvaW50Py5kYWlseVN0ZXBzIC8gd2Fsa1BvaW50Py50YXJnZXRTdGVwcykgKiAxMDA7XHJcblx0XHJcblx0Y29uc3QgcG9pbnRzUGVyU3RlcHMgPSAxMDA7XHJcblx0Y29uc3QgcG9pbnRzRWFybmVkID0gTWF0aC5mbG9vcigod2Fsa1BvaW50Py5kYWlseVN0ZXBzIC8gMTAwMCkgKiBwb2ludHNQZXJTdGVwcyk7XHJcblx0XHJcblx0Y29uc3QgW3RvdGFsUG9pbnRzLCBzZXRUb3RhbFBvaW50c10gPSB1c2VTdGF0ZSh3YWxrUG9pbnQ/LmN1cnJlbnRQb2ludHMpO1xyXG5cdFxyXG5cdGNvbnN0IGNvbnZlcnRQb2ludHMgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBwcmV2aW91c1BvaW50cyA9IHRvdGFsUG9pbnRzO1xyXG5cdFx0Y29uc3QgbmV3UG9pbnRzID0gcG9pbnRzRWFybmVkO1xyXG5cdFx0Y29uc3QgdXBkYXRlZFRvdGFsUG9pbnRzID0gcHJldmlvdXNQb2ludHMgKyBuZXdQb2ludHM7XHJcblx0XHRcclxuXHRcdC8vIOyLpOygnCDshJzrsoQg7JqU7LKtIOuwjyDsnZHri7Ug7LKY66as66W8IOyLnOuurOugiOydtOyFmO2VqeuLiOuLpC5cclxuXHRcdC8vIOyXrOq4sOyXkOyEnOuKlCBzZXRUaW1lb3V07J2EIOyCrOyaqe2VmOyXrCDruYTrj5nquLDsoIHsnLzroZwg7LKY66as7ZWp64uI64ukLlxyXG5cdFx0c2ltdWxhdGVTZXJ2ZXJSZXF1ZXN0KHVwZGF0ZWRUb3RhbFBvaW50cyk7XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBzaW11bGF0ZVNlcnZlclJlcXVlc3QgPSAodXBkYXRlZFRvdGFsUG9pbnRzKSA9PiB7XHJcblx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XHJcblx0XHRjb25zdCBsYXN0Q29udmVyc2lvbkRhdGUgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3RDb252ZXJzaW9uRGF0ZVwiLCB0b2RheSk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0Ly8g7ISc67KEIOyalOyyreydhCDsi5zrrqzroIjsnbTshZjtlZjqs6Ag7ISx6rO1IOuYkOuKlCDsi6TtjKgg7Jes67aA7JeQIOuUsOudvCDsspjrpqztlanri4jri6QuXHJcblx0XHRcdGNvbnN0IHN1Y2Nlc3MgPSB0cnVlOyAvLyDqsIDsoJU6IOyalOyyrSDshLHqs7VcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzdWNjZXNzKSB7XHJcblx0XHRcdFx0aWYgKChsYXN0Q29udmVyc2lvbkRhdGUgIT09IG51bGwpICYmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RDb252ZXJzaW9uRGF0ZVwiKSA9PT0gdG9kYXkpKSB7XHJcblx0XHRcdFx0XHRhbGVydChcIuyYpOuKmOydgCDsnbTrr7gg7Y+s7J247Yq466W8IOyghO2ZmO2WiOyKteuLiOuLpC4g7ZWY66Oo7JeQIO2VnCDrsojrp4wg6rCA64ql7ZWp64uI64ukLlwiKTtcclxuXHRcdFx0XHRcdHJldHVybjsgLy8g7J2066+4IOyghO2ZmO2VnCDqsr3smrAg642UIOydtOyDgSDrj5nsnpHtlZjsp4Ag7JWK64+E66GdIOyiheujjFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzZXRUb3RhbFBvaW50cyh1cGRhdGVkVG90YWxQb2ludHMpOyAvLyDshJzrsoQg7J2R64u17J20IOyEseqzte2VnCDqsr3smrAsIO2BtOudvOydtOyWuO2KuCDsg4Htg5zrpbwg7JeF642w7J207Yq47ZWp64uI64ukLlxyXG5cdFx0XHRcdGFsZXJ0KGDtj6zsnbjtirjrpbwg7ISx6rO17KCB7Jy866GcIOyghO2ZmO2VmOyYgOyKteuLiOuLpC4g7ZiE7J6sIO2PrOyduO2KuDogJHt1cGRhdGVkVG90YWxQb2ludHN96rCcYCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YWxlcnQoJ+yEnOuyhCDsmpTssq3sl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukLiDri6Tsi5wg7Iuc64+E7ZW07KO87IS47JqULicpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAxMDAwKTsgLy8gMey0iCDtm4Tsl5Ag7J2R64u17J2EIOyLnOuurOugiOydtOyFmO2VqeuLiOuLpC5cclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IHNoYXJlRGF0YSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHNoYXJlVGV4dCA9IGDrqqntkZwg6rG47J2MIOyImDogJHt3YWxrUG9pbnQ/LnRhcmdldFN0ZXBzfSwg7ZiE7J6sIOqxuOydjCDsiJg6ICR7d2Fsa1BvaW50Py5kYWlseVN0ZXBzfSwgMeyjvCDqsIQg6rG47J2MIO2Pieq3oCDsiJg6ICR7d2Fsa1BvaW50Py5hdmVyYWdlV2Vla2x5U3RlcHN9LCDsg4HsnIQgJHt3YWxrUG9pbnQ/LnJhbmtpbmdQZXJjZW50fSUg6rG36riwIOyynOyerDogaHlvODE0YDtcclxuXHRcdFxyXG5cdFx0aWYgKG5hdmlnYXRvci5zaGFyZSkge1xyXG5cdFx0XHRuYXZpZ2F0b3Iuc2hhcmUoe1xyXG5cdFx0XHRcdHRpdGxlOiAn6rG36riwIOyatOuPmSDsubTrk5wg6rO17JygJyxcclxuXHRcdFx0XHR0ZXh0OiBzaGFyZVRleHQsXHJcblx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+uNsOydtO2EsCDqs7XsnKAg7JmE66OMJyk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCfrjbDsnbTthLAg6rO17JygIOyLpO2MqDonLCBlcnJvcik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBzaGFyZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0XHRcdHNoYXJlTGluay5ocmVmID0gJ21haWx0bzo/c3ViamVjdD3qsbfquLAg7Jq064+ZIOy5tOuTnCDqs7XsnKAmYm9keT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVGV4dCk7XHJcblx0XHRcdHNoYXJlTGluay5jbGljaygpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2Fsa19sYXllcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2Fsa19kZXRhaWxfbGF5ZXJ9PlxyXG5cdFx0XHRcdDxoMT7qsbfquLAg7Jq064+ZIOy5tOuTnDwvaDE+XHJcblx0XHRcdFx0PHA+66qp7ZGcIOqxuOydjCDsiJg6IDxzcGFuIGlkPVwidGFyZ2V0U3RlcHNcIj57d2Fsa1BvaW50Py50YXJnZXRTdGVwc308L3NwYW4+PC9wPlxyXG5cdFx0XHRcdDxwPu2YhOyerCDqsbjsnYwg7IiYOiA8c3BhbiBpZD1cImRhaWx5U3RlcHNcIj57d2Fsa1BvaW50Py5kYWlseVN0ZXBzfTwvc3Bhbj48L3A+XHJcblx0XHRcdFx0PHA+MeyjvCDqsIQg6rG47J2MIO2Pieq3oCDsiJg6IDxzcGFuIGlkPVwiYXZlcmFnZVN0ZXBzXCI+e3dhbGtQb2ludD8uYXZlcmFnZVdlZWtseVN0ZXBzfTwvc3Bhbj48L3A+XHJcblx0XHRcdFx0PHA+7KeE7ZaJ66WgOiA8c3BhbiBpZD1cInByb2dyZXNzXCI+e3BlcmNlbnRhZ2UudG9GaXhlZCgyKX0lPC9zcGFuPjwvcD5cclxuXHRcdFx0XHQ8cD7tmITsnqwg7Y+s7J247Yq4OiB7dG90YWxQb2ludHN9IFBPSU5UIDwvcD5cclxuXHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e2NvbnZlcnRQb2ludHN9Pu2PrOyduO2KuCDsoITtmZjtlZjquLAgKHtwb2ludHNFYXJuZWR96rG47J2MIOuLuSB7cG9pbnRzUGVyU3RlcHN9IO2PrOyduO2KuCk8L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3NoYXJlRGF0YX0+6rO17Jyg7ZWY6riwPC9CdXR0b24+XHJcblx0XHRcdFx0PHA+7IOB7JyEIHt3YWxrUG9pbnQ/LnJhbmtpbmdQZXJjZW50fSUg6rG36riwIDoge3VzZXJJZH08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2FsaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ3YWxrUG9pbnREYXRhIiwic3R5bGVzIiwiQnV0dG9uIiwiUHJvZ3Jlc3NDaXJjbGUiLCJ2YWx1ZSIsImxhYmVsIiwiQm94IiwicG9zaXRpb24iLCJkaXNwbGF5IiwiQ2lyY3VsYXJQcm9ncmVzcyIsInZhcmlhbnQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiY29tcG9uZW50IiwiY29sb3IiLCJNYXRoIiwicm91bmQiLCJXYWxrIiwidXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndhbGtQb2ludCIsInBlcmNlbnRhZ2UiLCJkYWlseVN0ZXBzIiwidGFyZ2V0U3RlcHMiLCJwb2ludHNQZXJTdGVwcyIsInBvaW50c0Vhcm5lZCIsImZsb29yIiwiY3VycmVudFBvaW50cyIsInRvdGFsUG9pbnRzIiwic2V0VG90YWxQb2ludHMiLCJjb252ZXJ0UG9pbnRzIiwicHJldmlvdXNQb2ludHMiLCJuZXdQb2ludHMiLCJ1cGRhdGVkVG90YWxQb2ludHMiLCJzaW11bGF0ZVNlcnZlclJlcXVlc3QiLCJ0b2RheSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJsYXN0Q29udmVyc2lvbkRhdGUiLCJzZXRJdGVtIiwic2V0VGltZW91dCIsInN1Y2Nlc3MiLCJhbGVydCIsInNoYXJlRGF0YSIsInNoYXJlVGV4dCIsImF2ZXJhZ2VXZWVrbHlTdGVwcyIsInJhbmtpbmdQZXJjZW50IiwibmF2aWdhdG9yIiwic2hhcmUiLCJ0aXRsZSIsInRleHQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJzaGFyZUxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiY2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ3YWxrX2xheWVyIiwid2Fsa19kZXRhaWxfbGF5ZXIiLCJoMSIsInAiLCJzcGFuIiwiaWQiLCJ0b0ZpeGVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Walk/Walk.tsx\n"));

/***/ })

});