"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["groupBy"],{

/***/ "./src/utils/groupBy.js":
/*!******************************!*\
  !*** ./src/utils/groupBy.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groupBy: () => (/* binding */ groupBy)
/* harmony export */ });

const groupBy = (items, key) => items.reduce(
    //for sortedGrocery List
    (result, item) => ({
        ...result,
        [item[key]]: [
            ...(result[item[key]] || []),
            item,
        ],
    }),
    {},
)

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/utils/groupBy.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBCeS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvdXRpbHMvZ3JvdXBCeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gKGl0ZW1zLCBrZXkpID0+IGl0ZW1zLnJlZHVjZShcbiAgICAvL2ZvciBzb3J0ZWRHcm9jZXJ5IExpc3RcbiAgICAocmVzdWx0LCBpdGVtKSA9PiAoe1xuICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgIFtpdGVtW2tleV1dOiBbXG4gICAgICAgICAgICAuLi4ocmVzdWx0W2l0ZW1ba2V5XV0gfHwgW10pLFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgXSxcbiAgICB9KSxcbiAgICB7fSxcbikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=