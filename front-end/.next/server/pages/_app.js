/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Components/Info.jsx":
/*!*****************************!*\
  !*** ./Components/Info.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Info)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"react-moralis\");\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Constants_address_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants/address.json */ \"./Constants/address.json\");\n/* harmony import */ var _Constants_abi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants/abi.json */ \"./Constants/abi.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _web3uikit_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3uikit/web3 */ \"./node_modules/@web3uikit/web3/dist/index.es.js\");\n/* harmony import */ var _web3uikit_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3uikit/core */ \"./node_modules/@web3uikit/core/dist/index.es.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"ethers\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_5__]);\nethers__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nfunction Info() {\n    const { isWeb3Enabled, chainId: chainIdHex } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)();\n    const chainId = parseInt(chainIdHex);\n    const lockAddress = chainId in _Constants_address_json__WEBPACK_IMPORTED_MODULE_2__ ? _Constants_address_json__WEBPACK_IMPORTED_MODULE_2__[chainId][0] : null;\n    const [structData, setStructData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        name: \"\",\n        age: 0\n    });\n    const dispatch = (0,_web3uikit_core__WEBPACK_IMPORTED_MODULE_6__.useNotification)();\n    function handleChange(event) {\n        setStructData((prevData)=>{\n            return {\n                ...prevData,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    const { runContractFunction: addInfo } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useWeb3Contract)({\n        abi: _Constants_abi_json__WEBPACK_IMPORTED_MODULE_3__,\n        contractAddress: lockAddress,\n        functionName: \"addInfo\",\n        params: {\n            _age: structData.age,\n            _name: structData.name\n        }\n    });\n    const handleSuccess = async (tx)=>{\n        try {\n            await tx.wait(1);\n            handleSuccessNotification(tx);\n        } catch (error) {\n            console.log(tx);\n        }\n    };\n    const handleSuccessNotification = ()=>{\n        dispatch({\n            type: \"success\",\n            message: \"Info Added succesfully\",\n            title: \"Success\",\n            icon: \"bell\",\n            position: \"topR\"\n        });\n    };\n    const handleError = async (tx)=>{\n        // await tx.wait(1);\n        handleErrorNotification(tx);\n    };\n    const handleErrorNotification = (tx)=>{\n        dispatch({\n            type: \"error\",\n            message: `something went wrong ${tx}`,\n            title: \"Error\",\n            position: \"topR\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"name--age\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"username\",\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"username\",\n                        children: \"Age\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"age\",\n                        name: \"age\",\n                        pattern: \"[0-9]*\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"button--container\",\n                children: isWeb3Enabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3uikit_core__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    icon: null,\n                    onClick: async ()=>{\n                        await addInfo({\n                            onSuccess: handleSuccess,\n                            onError: handleError\n                        });\n                    },\n                    size: \"large\",\n                    text: \"Enter Info\",\n                    theme: \"primary\",\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 30\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3uikit_web3__WEBPACK_IMPORTED_MODULE_7__.ConnectButton, {}, void 0, false, {\n                    fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: chainId\n            }, void 0, false, {\n                fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/graph-ql-practice/front-end/Components/Info.jsx\",\n        lineNumber: 70,\n        columnNumber: 13\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0luZm8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDWjtBQUNQO0FBQ2tCO0FBQ1Y7QUFDUDtBQUNWO0FBQ21CO0FBR25DLFNBQVNXO0lBQ3BCLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxTQUFTQyxVQUFVLEVBQUUsR0FBR2QseURBQVVBO0lBQ3pELE1BQU1hLFVBQVVFLFNBQVNEO0lBQ3pCLE1BQU1FLGNBQWNILFdBQVdYLG9EQUFPQSxHQUFHQSxvREFBTyxDQUFDVyxRQUFRLENBQUMsRUFBRSxHQUFHO0lBQy9ELE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQztRQUN6Q2UsTUFBTTtRQUNOQyxLQUFLO0lBQ1Q7SUFDQSxNQUFNQyxXQUFXWCxnRUFBZUE7SUFFaEMsU0FBU1ksYUFBYUMsS0FBSztRQUN2QkwsY0FBY00sQ0FBQUE7WUFDVixPQUFPO2dCQUNILEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ0QsTUFBTUUsTUFBTSxDQUFDTixJQUFJLENBQUMsRUFBRUksTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1lBQzNDO1FBQ0o7SUFDSjtJQUVBLE1BQU0sRUFBQ0MscUJBQXFCQyxPQUFPLEVBQUMsR0FBRzNCLDhEQUFlQSxDQUFDO1FBQ25ERSxLQUFLQSxnREFBR0E7UUFDUjBCLGlCQUFpQmI7UUFDakJjLGNBQWM7UUFDZEMsUUFBUTtZQUFDQyxNQUFNZixXQUFXRyxHQUFHO1lBQUVhLE9BQU9oQixXQUFXRSxJQUFJO1FBQUE7SUFDekQ7SUFFQSxNQUFNZSxnQkFBZ0IsT0FBT0M7UUFDekIsSUFBSTtZQUNBLE1BQU1BLEdBQUdDLElBQUksQ0FBQztZQUNkQywwQkFBMEJGO1FBQzlCLEVBQUUsT0FBT0csT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNMO1FBQ2hCO0lBQ0o7SUFFQSxNQUFNRSw0QkFBNEI7UUFDOUJoQixTQUFTO1lBQ0xvQixNQUFNO1lBQ05DLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVM7UUFDYjtJQUNKO0lBRUEsTUFBTUMsY0FBYyxPQUFPWDtRQUN2QixvQkFBb0I7UUFDcEJZLHdCQUF3Qlo7SUFDNUI7SUFFQSxNQUFNWSwwQkFBMEIsQ0FBQ1o7UUFDN0JkLFNBQVM7WUFDTG9CLE1BQU07WUFDTkMsU0FBUyxDQUFDLHFCQUFxQixFQUFFUCxHQUFHLENBQUM7WUFDckNRLE9BQU87WUFDUEUsVUFBVTtRQUNkO0lBQ0o7SUFFQSxxQkFBUSw4REFBQ0c7OzBCQUNMLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNQyxLQUFJO2tDQUFXOzs7Ozs7a0NBQ3RCLDhEQUFDQzt3QkFBTVgsTUFBSzt3QkFBT1ksSUFBRzt3QkFBT2xDLE1BQUs7d0JBQU9tQyxVQUFVaEM7Ozs7OztrQ0FDbkQsOERBQUM0Qjt3QkFBTUMsS0FBSTtrQ0FBVzs7Ozs7O2tDQUN0Qiw4REFBQ0M7d0JBQU1YLE1BQUs7d0JBQU9ZLElBQUc7d0JBQU1sQyxNQUFLO3dCQUFNb0MsU0FBUTt3QkFBU0QsVUFBVWhDOzs7Ozs7Ozs7Ozs7MEJBRXRFLDhEQUFDMEI7Z0JBQUlDLFdBQVU7MEJBQ1ZyQyw4QkFBZ0IsOERBQUNKLG1EQUFNQTtvQkFDcEJvQyxNQUFNO29CQUNOWSxTQUFTO3dCQUNMLE1BQU01QixRQUFROzRCQUNWNkIsV0FBV3ZCOzRCQUNYd0IsU0FBU1o7d0JBQ2I7b0JBQ0o7b0JBQ0FhLE1BQUs7b0JBQ0xDLE1BQUs7b0JBQ0xDLE9BQU07b0JBQ05wQixNQUFLOzs7Ozt5Q0FDSiw4REFBQ2xDLDBEQUFhQTs7Ozs7Ozs7OzswQkFFdkIsOERBQUN1RDswQkFBR2pEOzs7Ozs7Ozs7Ozs7QUFFWiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL0NvbXBvbmVudHMvSW5mby5qc3g/MGRjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNb3JhbGlzLCB1c2VXZWIzQ29udHJhY3QgfSBmcm9tIFwicmVhY3QtbW9yYWxpc1wiXG5pbXBvcnQgYWRkcmVzcyBmcm9tIFwiLi4vQ29uc3RhbnRzL2FkZHJlc3MuanNvblwiXG5pbXBvcnQgYWJpIGZyb20gXCIuLi9Db25zdGFudHMvYWJpLmpzb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gXCJAd2ViM3Vpa2l0L3dlYjNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAd2ViM3Vpa2l0L2NvcmVcIjtcbmltcG9ydCB7IGV0aGVyc30gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSBcIkB3ZWIzdWlraXQvY29yZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm8oKSB7XG4gICAgY29uc3QgeyBpc1dlYjNFbmFibGVkLCBjaGFpbklkOiBjaGFpbklkSGV4IH0gPSB1c2VNb3JhbGlzKCk7XG4gICAgY29uc3QgY2hhaW5JZCA9IHBhcnNlSW50KGNoYWluSWRIZXgpO1xuICAgIGNvbnN0IGxvY2tBZGRyZXNzID0gY2hhaW5JZCBpbiBhZGRyZXNzID8gYWRkcmVzc1tjaGFpbklkXVswXSA6IG51bGw7XG4gICAgY29uc3QgW3N0cnVjdERhdGEsIHNldFN0cnVjdERhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBhZ2U6IDBcbiAgICB9KTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZU5vdGlmaWNhdGlvbigpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldFN0cnVjdERhdGEocHJldkRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2RGF0YSxcbiAgICAgICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qge3J1bkNvbnRyYWN0RnVuY3Rpb246IGFkZEluZm99ID0gdXNlV2ViM0NvbnRyYWN0KHtcbiAgICAgICAgYWJpOiBhYmksXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzczogbG9ja0FkZHJlc3MsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhZGRJbmZvXCIsXG4gICAgICAgIHBhcmFtczoge19hZ2U6IHN0cnVjdERhdGEuYWdlLCBfbmFtZTogc3RydWN0RGF0YS5uYW1lfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlU3VjY2VzcyA9IGFzeW5jICh0eCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdHgud2FpdCgxKTtcbiAgICAgICAgICAgIGhhbmRsZVN1Y2Nlc3NOb3RpZmljYXRpb24odHgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2codHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VjY2Vzc05vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiAnSW5mbyBBZGRlZCBzdWNjZXNmdWxseScsXG4gICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgaWNvbjogXCJiZWxsXCIsXG4gICAgICAgICAgICBwb3NpdGlvbjondG9wUicsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IGFzeW5jICh0eCkgPT4ge1xuICAgICAgICAvLyBhd2FpdCB0eC53YWl0KDEpO1xuICAgICAgICBoYW5kbGVFcnJvck5vdGlmaWNhdGlvbih0eCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3JOb3RpZmljYXRpb24gPSAodHgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogYHNvbWV0aGluZyB3ZW50IHdyb25nICR7dHh9YCxcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3BSJyxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS0tYWdlXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPkFnZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFnZVwiIG5hbWU9XCJhZ2VcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtpc1dlYjNFbmFibGVkID8gPEJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249e251bGx9XG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBhZGRJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogaGFuZGxlU3VjY2VzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgdGV4dD1cIkVudGVyIEluZm9cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAvPiA6IDxDb25uZWN0QnV0dG9uIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+e2NoYWluSWR9PC9wPlxuICAgIDwvZGl2Pik7XG59Il0sIm5hbWVzIjpbInVzZU1vcmFsaXMiLCJ1c2VXZWIzQ29udHJhY3QiLCJhZGRyZXNzIiwiYWJpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdEVsZW1lbnQiLCJDb25uZWN0QnV0dG9uIiwiQnV0dG9uIiwiZXRoZXJzIiwidXNlTm90aWZpY2F0aW9uIiwiSW5mbyIsImlzV2ViM0VuYWJsZWQiLCJjaGFpbklkIiwiY2hhaW5JZEhleCIsInBhcnNlSW50IiwibG9ja0FkZHJlc3MiLCJzdHJ1Y3REYXRhIiwic2V0U3RydWN0RGF0YSIsIm5hbWUiLCJhZ2UiLCJkaXNwYXRjaCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicHJldkRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJ1bkNvbnRyYWN0RnVuY3Rpb24iLCJhZGRJbmZvIiwiY29udHJhY3RBZGRyZXNzIiwiZnVuY3Rpb25OYW1lIiwicGFyYW1zIiwiX2FnZSIsIl9uYW1lIiwiaGFuZGxlU3VjY2VzcyIsInR4Iiwid2FpdCIsImhhbmRsZVN1Y2Nlc3NOb3RpZmljYXRpb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwibWVzc2FnZSIsInRpdGxlIiwiaWNvbiIsInBvc2l0aW9uIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVFcnJvck5vdGlmaWNhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwicGF0dGVybiIsIm9uQ2xpY2siLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwic2l6ZSIsInRleHQiLCJ0aGVtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Info.jsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moralis */ \"react-moralis\");\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3uikit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3uikit/core */ \"./node_modules/@web3uikit/core/dist/index.es.js\");\n/* harmony import */ var _Components_Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Info */ \"./Components/Info.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Info__WEBPACK_IMPORTED_MODULE_3__]);\n_Components_Info__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_moralis__WEBPACK_IMPORTED_MODULE_2__.MoralisProvider, {\n        initializeOnMount: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3uikit_core__WEBPACK_IMPORTED_MODULE_4__.NotificationProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Info__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/graph-ql-practice/front-end/src/pages/_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/workspaces/graph-ql-practice/front-end/src/pages/_app.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/graph-ql-practice/front-end/src/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/graph-ql-practice/front-end/src/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2tCO0FBQ087QUFDZDtBQUUxQixTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDTCwwREFBZUE7UUFBQ00sbUJBQW1CO2tCQUNsQyw0RUFBQ0wsaUVBQW9CQTs7OEJBQ25CLDhEQUFDQyx3REFBSUE7Ozs7OzhCQUNQLDhEQUFDRTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IE1vcmFsaXNQcm92aWRlciB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Qcm92aWRlciB9IGZyb20gXCJAd2ViM3Vpa2l0L2NvcmVcIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0luZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxNb3JhbGlzUHJvdmlkZXIgaW5pdGlhbGl6ZU9uTW91bnQ9e2ZhbHNlfT5cbiAgICAgIDxOb3RpZmljYXRpb25Qcm92aWRlcj5cbiAgICAgICAgPEluZm8gLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTm90aWZpY2F0aW9uUHJvdmlkZXI+XG4gICAgPC9Nb3JhbGlzUHJvdmlkZXI+XG4gIFxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1vcmFsaXNQcm92aWRlciIsIk5vdGlmaWNhdGlvblByb3ZpZGVyIiwiSW5mbyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXRpYWxpemVPbk1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-moralis":
/*!********************************!*\
  !*** external "react-moralis" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-moralis");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("ethers");;

/***/ }),

/***/ "./Constants/abi.json":
/*!****************************!*\
  !*** ./Constants/abi.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"components":[{"internalType":"uint32","name":"age","type":"uint32"},{"internalType":"string","name":"name","type":"string"}],"indexed":true,"internalType":"struct Lock.Dude","name":"","type":"tuple"}],"name":"InfoAdded","type":"event"},{"inputs":[{"internalType":"uint32","name":"_age","type":"uint32"},{"internalType":"string","name":"_name","type":"string"}],"name":"addInfo","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ "./Constants/address.json":
/*!********************************!*\
  !*** ./Constants/address.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"11155111":["0x604Ae76248fABC1F3A2e3aD99D912a1e7336102D"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@web3uikit"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();