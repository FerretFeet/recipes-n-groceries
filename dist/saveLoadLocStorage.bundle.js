"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["saveLoadLocStorage"],{

/***/ "./src/saveLoadLocStorage.js":
/*!***********************************!*\
  !*** ./src/saveLoadLocStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveLoadLocalStorage: () => (/* binding */ saveLoadLocalStorage)
/* harmony export */ });
const saveLoadLocalStorage = {
    
    load: function (address) {
        let temp = localStorage.getItem(address)
        console.log(temp)
        console.log(address)
        if (temp === null) return;
        let el = JSON.parse(temp)
        return el
        
    },

    saveTo: function (el, address) {
        let temp = JSON.stringify(el)
        localStorage.setItem(address, temp)
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/saveLoadLocStorage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUxvYWRMb2NTdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3NhdmVMb2FkTG9jU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2F2ZUxvYWRMb2NhbFN0b3JhZ2UgPSB7XG4gICAgXG4gICAgbG9hZDogZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhZGRyZXNzKVxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKVxuICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKVxuICAgICAgICBpZiAodGVtcCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBsZXQgZWwgPSBKU09OLnBhcnNlKHRlbXApXG4gICAgICAgIHJldHVybiBlbFxuICAgICAgICBcbiAgICB9LFxuXG4gICAgc2F2ZVRvOiBmdW5jdGlvbiAoZWwsIGFkZHJlc3MpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBKU09OLnN0cmluZ2lmeShlbClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWRkcmVzcywgdGVtcClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9