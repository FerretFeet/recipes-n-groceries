"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["index"],{

/***/ "./src/groceryList/groceryItem.js":
/*!****************************************!*\
  !*** ./src/groceryList/groceryItem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groceryItem: () => (/* binding */ groceryItem)
/* harmony export */ });
class groceryItem {
    constructor(ingredient, amount, measure) {
        this.ingredient = ingredient;
        this.amount = amount
        this.measure = measure
    }
}

/***/ }),

/***/ "./src/groceryList/groceryList.js":
/*!****************************************!*\
  !*** ./src/groceryList/groceryList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groceryList: () => (/* binding */ groceryList)
/* harmony export */ });
/* harmony import */ var _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHTMLSkel */ "./src/utils/createHTMLSkel.js");
/* harmony import */ var _selectedRecipes_selectedRecipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectedRecipes/selectedRecipes */ "./src/selectedRecipes/selectedRecipes.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _utils_groupBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/groupBy */ "./src/utils/groupBy.js");
/* harmony import */ var _groceryItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groceryItem */ "./src/groceryList/groceryItem.js");











 const groceryList = {
    //import groupBy, SelectedRecipes\
    //import groceryItem
    groceryList: [],
    grocerySection: _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.groceryList,
    //import selectedRecipes
    init: function() {
        if (_selectedRecipes_selectedRecipes__WEBPACK_IMPORTED_MODULE_1__.selectedRecipes.selectedRecipes.length > 0) this.render()
        this.reloadGrocery()
    },

    render: function() {
        this.groceryList = this.combineGroceryItems()
        this.grocerySection.appendChild(this.setGroceryHTML())
    },
    //take selectedRecipes, extract only groceries, place into 1d array
    pullGroceries: function() {
        const temp = new Array()
        for (let i = 0; i < _selectedRecipes_selectedRecipes__WEBPACK_IMPORTED_MODULE_1__.selectedRecipes.selectedRecipes.length; i++) {
            temp.push(_selectedRecipes_selectedRecipes__WEBPACK_IMPORTED_MODULE_1__.selectedRecipes.selectedRecipes[i].ingredients)
        }
        return temp.flat()
    },

//Add groceries together

    combineGroceryItems: function () {
        const temp = (0,_utils_groupBy__WEBPACK_IMPORTED_MODULE_3__.groupBy)(this.pullGroceries(), 'ingredient')
        const tempKeys = Object.keys(temp)
        const returnVal = []
        for (let i=0; i < tempKeys.length; i++) {
            //for each key
            let total = 0
            for (let j=0; j<temp[tempKeys[i]].length; j++) {
                //until 1 value left
                total += Number(temp[tempKeys[i]][j].amount)
                
            }
            let x = new _groceryItem__WEBPACK_IMPORTED_MODULE_4__.groceryItem((temp[tempKeys[i]][0]).ingredient, total, (temp[tempKeys[i]][0]).measurement)
            returnVal.push(x)

            // temp[tempKeys[i]].splice(1, Infinity)
            // //makes amount of all equal to total
            // temp[tempKeys[i]][0].amount = total

        }
        return returnVal
    }, 

// //add list of groceries to bottom in section


    createGroceryHTML: function (item) {
        let _container = document.createElement('li')
        //to track each item, needed for deletion button must be first child
        //must be right after containerID

        let ingrName = document.createElement('span')
        ingrName.classList = 'ingr-name'
        ingrName.textContent = item.ingredient

        let ingrAmnt = document.createElement('span')
        ingrAmnt.classList = 'ingr-amnt'
        ingrAmnt.textContent = item.amount

        let ingrMsr = document.createElement('span')
        ingrMsr.classList = 'ingr-msr'
        ingrMsr.textContent = item.measurement
        
        _container.appendChild(ingrName)
        _container.appendChild(ingrAmnt)
        _container.appendChild(ingrMsr)

        return _container
    },

    setGroceryHTML: function () {
        while (this.grocerySection.firstChild) {
            this.grocerySection.removeChild(this.grocerySection.lastChild)
        }
        let sectionHeader = document.createElement('h2')
        sectionHeader.textContent = 'Groceries'
        this.grocerySection.appendChild(sectionHeader)
        
        let _groceryHTMLList = document.createElement('ul')
        this.grocerySection.appendChild(_groceryHTMLList)
        let tempKeys = Object.keys(this.groceryList)
        for (let i=0; i < this.groceryList.length; i++) {
            _groceryHTMLList.appendChild(this.createGroceryHTML(this.groceryList[i]))
        }
        return _groceryHTMLList
    },

    reloadGrocery: function() {
        let temp = document.querySelectorAll('button.remove-selected-recipe')
        for (let i = 0; i < temp.length; i++) {
            temp[i].addEventListener('click', () => {
                setTimeout(this.render(), 500)
            })
        }
        let temp2 = document.querySelectorAll('button.select-recipe-btn')
        for (let i = 0; i < temp2.length; i++) {
            temp2[i].addEventListener('click', () => {
                setTimeout(this.render(), 500)
            })
        }
    }

}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createHTMLSkel */ "./src/utils/createHTMLSkel.js");
/* harmony import */ var _recipeLibrary_recipeLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipeLibrary/recipeLibrary */ "./src/recipeLibrary/recipeLibrary.js");
/* harmony import */ var _selectedRecipes_selectedRecipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectedRecipes/selectedRecipes */ "./src/selectedRecipes/selectedRecipes.js");
/* harmony import */ var _groceryList_groceryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groceryList/groceryList */ "./src/groceryList/groceryList.js");



_utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_1__.HTMLSkeleton.init()

;



fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Eggs', {mode: 'cors'})
    .then(function(response) {
        console.log(response.json())
        let x = JSON.parse(response.json())
        console.log(x)
        console.log(x.foods[0].foodNutrients)
    }
)



function onStart() {

    setTimeout(_recipeLibrary_recipeLibrary__WEBPACK_IMPORTED_MODULE_2__.recipeLibrary.init(), 500)
    setTimeout(_selectedRecipes_selectedRecipes__WEBPACK_IMPORTED_MODULE_3__.selectedRecipes.init(), 500)
    setTimeout(_groceryList_groceryList__WEBPACK_IMPORTED_MODULE_4__.groceryList.init(), 500)
}

window.addEventListener('load', onStart)









// //recipe form submit, override default submit behavior with 2 event listeners 





// //create inset carousel ############################





                       









// function onStartRecipeToList(recipeLibrary, recipeListHTML) {
//     for(let i = 0; i < recipeLibrary.length; i++) {
//         recipeListHTML.appendChild(createObjtoList(recipeLibrary[i]), 'grocery-list');
//     }
// }
                


// //add save button or move save function to form submit

// let formSaveSection = document.querySelector('section.add-recipe')
// let saveChangesButton = document.createElement('button')
// saveChangesButton.textContent = 'Save Changes'
// saveChangesButton.addEventListener('click', () => {
//     saveToLocalStorage(recipeLibrary)
//     saveToLocalStorage(groceryList)

// })
// formSaveSection.appendChild(saveChangesButton)








/***/ }),

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
/******/ __webpack_require__.O(0, ["src_recipeLibrary_recipeForm_js","src_selectedRecipes_selectedRecipes_js"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ051RDtBQUNjO0FBQzlDO0FBQ29CO0FBQ0M7Ozs7Ozs7QUFPNUMsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyRUFBd0I7QUFDNUM7QUFDQTtBQUNBLFlBQVksb0dBQXNDO0FBQ2xEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksb0dBQXNDLEVBQUU7QUFDcEUsc0JBQXNCLDZGQUErQjtBQUNyRDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLHFCQUFxQix1REFBTztBQUM1QjtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBVztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhzQjtBQUNnQzs7QUFFdEQsb0VBQWlCOztBQUVqQixDQUE4RDtBQUNNO0FBQ1o7O0FBRXhELG1GQUFtRixhQUFhO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEsZUFBZSw0RUFBa0I7QUFDakMsZUFBZSxrRkFBb0I7QUFDbkMsZUFBZSxzRUFBZ0I7QUFDL0I7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7O0FBTUE7Ozs7OztBQU1BOzs7Ozs7Ozs7O0FBVUE7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9ncm9jZXJ5TGlzdC9ncm9jZXJ5SXRlbS5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL2dyb2NlcnlMaXN0L2dyb2NlcnlMaXN0LmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy91dGlscy9ncm91cEJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBncm9jZXJ5SXRlbSB7XG4gICAgY29uc3RydWN0b3IoaW5ncmVkaWVudCwgYW1vdW50LCBtZWFzdXJlKSB7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudCA9IGluZ3JlZGllbnQ7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50XG4gICAgICAgIHRoaXMubWVhc3VyZSA9IG1lYXN1cmVcbiAgICB9XG59IiwiaW1wb3J0IHsgSFRNTFNrZWxldG9uIH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlSFRNTFNrZWwnO1xuaW1wb3J0IHsgc2VsZWN0ZWRSZWNpcGVzIH0gZnJvbSAnLi4vc2VsZWN0ZWRSZWNpcGVzL3NlbGVjdGVkUmVjaXBlcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ3JvdXBCeSB9IGZyb20gJy4uL3V0aWxzL2dyb3VwQnknO1xuaW1wb3J0IHsgZ3JvY2VyeUl0ZW0gfSBmcm9tICcuL2dyb2NlcnlJdGVtJztcblxuXG5cblxuXG5cbiBleHBvcnQgY29uc3QgZ3JvY2VyeUxpc3QgPSB7XG4gICAgLy9pbXBvcnQgZ3JvdXBCeSwgU2VsZWN0ZWRSZWNpcGVzXFxcbiAgICAvL2ltcG9ydCBncm9jZXJ5SXRlbVxuICAgIGdyb2NlcnlMaXN0OiBbXSxcbiAgICBncm9jZXJ5U2VjdGlvbjogSFRNTFNrZWxldG9uLmdyb2NlcnlMaXN0LFxuICAgIC8vaW1wb3J0IHNlbGVjdGVkUmVjaXBlc1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlcy5sZW5ndGggPiAwKSB0aGlzLnJlbmRlcigpXG4gICAgICAgIHRoaXMucmVsb2FkR3JvY2VyeSgpXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QgPSB0aGlzLmNvbWJpbmVHcm9jZXJ5SXRlbXMoKVxuICAgICAgICB0aGlzLmdyb2NlcnlTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuc2V0R3JvY2VyeUhUTUwoKSlcbiAgICB9LFxuICAgIC8vdGFrZSBzZWxlY3RlZFJlY2lwZXMsIGV4dHJhY3Qgb25seSBncm9jZXJpZXMsIHBsYWNlIGludG8gMWQgYXJyYXlcbiAgICBwdWxsR3JvY2VyaWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IG5ldyBBcnJheSgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcC5wdXNoKHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXNbaV0uaW5ncmVkaWVudHMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXAuZmxhdCgpXG4gICAgfSxcblxuLy9BZGQgZ3JvY2VyaWVzIHRvZ2V0aGVyXG5cbiAgICBjb21iaW5lR3JvY2VyeUl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBncm91cEJ5KHRoaXMucHVsbEdyb2NlcmllcygpLCAnaW5ncmVkaWVudCcpXG4gICAgICAgIGNvbnN0IHRlbXBLZXlzID0gT2JqZWN0LmtleXModGVtcClcbiAgICAgICAgY29uc3QgcmV0dXJuVmFsID0gW11cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGVtcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vZm9yIGVhY2gga2V5XG4gICAgICAgICAgICBsZXQgdG90YWwgPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8dGVtcFt0ZW1wS2V5c1tpXV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvL3VudGlsIDEgdmFsdWUgbGVmdFxuICAgICAgICAgICAgICAgIHRvdGFsICs9IE51bWJlcih0ZW1wW3RlbXBLZXlzW2ldXVtqXS5hbW91bnQpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgeCA9IG5ldyBncm9jZXJ5SXRlbSgodGVtcFt0ZW1wS2V5c1tpXV1bMF0pLmluZ3JlZGllbnQsIHRvdGFsLCAodGVtcFt0ZW1wS2V5c1tpXV1bMF0pLm1lYXN1cmVtZW50KVxuICAgICAgICAgICAgcmV0dXJuVmFsLnB1c2goeClcblxuICAgICAgICAgICAgLy8gdGVtcFt0ZW1wS2V5c1tpXV0uc3BsaWNlKDEsIEluZmluaXR5KVxuICAgICAgICAgICAgLy8gLy9tYWtlcyBhbW91bnQgb2YgYWxsIGVxdWFsIHRvIHRvdGFsXG4gICAgICAgICAgICAvLyB0ZW1wW3RlbXBLZXlzW2ldXVswXS5hbW91bnQgPSB0b3RhbFxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbFxuICAgIH0sIFxuXG4vLyAvL2FkZCBsaXN0IG9mIGdyb2NlcmllcyB0byBib3R0b20gaW4gc2VjdGlvblxuXG5cbiAgICBjcmVhdGVHcm9jZXJ5SFRNTDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgbGV0IF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIC8vdG8gdHJhY2sgZWFjaCBpdGVtLCBuZWVkZWQgZm9yIGRlbGV0aW9uIGJ1dHRvbiBtdXN0IGJlIGZpcnN0IGNoaWxkXG4gICAgICAgIC8vbXVzdCBiZSByaWdodCBhZnRlciBjb250YWluZXJJRFxuXG4gICAgICAgIGxldCBpbmdyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBpbmdyTmFtZS5jbGFzc0xpc3QgPSAnaW5nci1uYW1lJ1xuICAgICAgICBpbmdyTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0uaW5ncmVkaWVudFxuXG4gICAgICAgIGxldCBpbmdyQW1udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBpbmdyQW1udC5jbGFzc0xpc3QgPSAnaW5nci1hbW50J1xuICAgICAgICBpbmdyQW1udC50ZXh0Q29udGVudCA9IGl0ZW0uYW1vdW50XG5cbiAgICAgICAgbGV0IGluZ3JNc3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgaW5nck1zci5jbGFzc0xpc3QgPSAnaW5nci1tc3InXG4gICAgICAgIGluZ3JNc3IudGV4dENvbnRlbnQgPSBpdGVtLm1lYXN1cmVtZW50XG4gICAgICAgIFxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JOYW1lKVxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JBbW50KVxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JNc3IpXG5cbiAgICAgICAgcmV0dXJuIF9jb250YWluZXJcbiAgICB9LFxuXG4gICAgc2V0R3JvY2VyeUhUTUw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuZ3JvY2VyeVNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5ncm9jZXJ5U2VjdGlvbi5yZW1vdmVDaGlsZCh0aGlzLmdyb2NlcnlTZWN0aW9uLmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdHcm9jZXJpZXMnXG4gICAgICAgIHRoaXMuZ3JvY2VyeVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcilcbiAgICAgICAgXG4gICAgICAgIGxldCBfZ3JvY2VyeUhUTUxMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICB0aGlzLmdyb2NlcnlTZWN0aW9uLmFwcGVuZENoaWxkKF9ncm9jZXJ5SFRNTExpc3QpXG4gICAgICAgIGxldCB0ZW1wS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZ3JvY2VyeUxpc3QpXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ3JvY2VyeUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9ncm9jZXJ5SFRNTExpc3QuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVHcm9jZXJ5SFRNTCh0aGlzLmdyb2NlcnlMaXN0W2ldKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2dyb2NlcnlIVE1MTGlzdFxuICAgIH0sXG5cbiAgICByZWxvYWRHcm9jZXJ5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24ucmVtb3ZlLXNlbGVjdGVkLXJlY2lwZScpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMucmVuZGVyKCksIDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLnNlbGVjdC1yZWNpcGUtYnRuJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcDJbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlbmRlcigpLCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBIVE1MU2tlbGV0b24gfSBmcm9tICcuL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJztcblxuSFRNTFNrZWxldG9uLmluaXQoKVxuXG5pbXBvcnQgeyByZWNpcGVMaWJyYXJ5IH0gZnJvbSAnLi9yZWNpcGVMaWJyYXJ5L3JlY2lwZUxpYnJhcnknO1xuaW1wb3J0IHsgc2VsZWN0ZWRSZWNpcGVzIH0gZnJvbSAnLi9zZWxlY3RlZFJlY2lwZXMvc2VsZWN0ZWRSZWNpcGVzJztcbmltcG9ydCB7IGdyb2NlcnlMaXN0IH0gZnJvbSAnLi9ncm9jZXJ5TGlzdC9ncm9jZXJ5TGlzdCc7XG5cbmZldGNoKCdodHRwczovL2FwaS5uYWwudXNkYS5nb3YvZmRjL3YxL2Zvb2RzL3NlYXJjaD9hcGlfa2V5PURFTU9fS0VZJnF1ZXJ5PUVnZ3MnLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpXG4gICAgICAgIGxldCB4ID0gSlNPTi5wYXJzZShyZXNwb25zZS5qc29uKCkpXG4gICAgICAgIGNvbnNvbGUubG9nKHgpXG4gICAgICAgIGNvbnNvbGUubG9nKHguZm9vZHNbMF0uZm9vZE51dHJpZW50cylcbiAgICB9XG4pXG5cblxuXG5mdW5jdGlvbiBvblN0YXJ0KCkge1xuXG4gICAgc2V0VGltZW91dChyZWNpcGVMaWJyYXJ5LmluaXQoKSwgNTAwKVxuICAgIHNldFRpbWVvdXQoc2VsZWN0ZWRSZWNpcGVzLmluaXQoKSwgNTAwKVxuICAgIHNldFRpbWVvdXQoZ3JvY2VyeUxpc3QuaW5pdCgpLCA1MDApXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25TdGFydClcblxuXG5cblxuXG5cblxuXG5cbi8vIC8vcmVjaXBlIGZvcm0gc3VibWl0LCBvdmVycmlkZSBkZWZhdWx0IHN1Ym1pdCBiZWhhdmlvciB3aXRoIDIgZXZlbnQgbGlzdGVuZXJzIFxuXG5cblxuXG5cbi8vIC8vY3JlYXRlIGluc2V0IGNhcm91c2VsICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgIFxuXG5cblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gb25TdGFydFJlY2lwZVRvTGlzdChyZWNpcGVMaWJyYXJ5LCByZWNpcGVMaXN0SFRNTCkge1xuLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZWNpcGVMaWJyYXJ5Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgIHJlY2lwZUxpc3RIVE1MLmFwcGVuZENoaWxkKGNyZWF0ZU9ianRvTGlzdChyZWNpcGVMaWJyYXJ5W2ldKSwgJ2dyb2NlcnktbGlzdCcpO1xuLy8gICAgIH1cbi8vIH1cbiAgICAgICAgICAgICAgICBcblxuXG4vLyAvL2FkZCBzYXZlIGJ1dHRvbiBvciBtb3ZlIHNhdmUgZnVuY3Rpb24gdG8gZm9ybSBzdWJtaXRcblxuLy8gbGV0IGZvcm1TYXZlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uYWRkLXJlY2lwZScpXG4vLyBsZXQgc2F2ZUNoYW5nZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuLy8gc2F2ZUNoYW5nZXNCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSBDaGFuZ2VzJ1xuLy8gc2F2ZUNoYW5nZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHJlY2lwZUxpYnJhcnkpXG4vLyAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKGdyb2NlcnlMaXN0KVxuXG4vLyB9KVxuLy8gZm9ybVNhdmVTZWN0aW9uLmFwcGVuZENoaWxkKHNhdmVDaGFuZ2VzQnV0dG9uKVxuXG5cblxuXG5cblxuIiwiXG5leHBvcnQgY29uc3QgZ3JvdXBCeSA9IChpdGVtcywga2V5KSA9PiBpdGVtcy5yZWR1Y2UoXG4gICAgLy9mb3Igc29ydGVkR3JvY2VyeSBMaXN0XG4gICAgKHJlc3VsdCwgaXRlbSkgPT4gKHtcbiAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICBbaXRlbVtrZXldXTogW1xuICAgICAgICAgICAgLi4uKHJlc3VsdFtpdGVtW2tleV1dIHx8IFtdKSxcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgIF0sXG4gICAgfSksXG4gICAge30sXG4pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9