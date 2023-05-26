"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["groceryList"],{

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

/***/ "./src/selectedRecipes/selectedRecipes.js":
/*!************************************************!*\
  !*** ./src/selectedRecipes/selectedRecipes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectedRecipes: () => (/* binding */ selectedRecipes)
/* harmony export */ });
/* harmony import */ var _utils_createHTMLSkel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHTMLSkel.js */ "./src/utils/createHTMLSkel.js");
/* harmony import */ var _recipeLibrary_recipeLibrary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipeLibrary/recipeLibrary.js */ "./src/recipeLibrary/recipeLibrary.js");
/* harmony import */ var _utils_saveLoadLocStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/saveLoadLocStorage.js */ "./src/utils/saveLoadLocStorage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");







function addBtnHandler() {
    //what happens on this.createBtn Click
    //find recipe in recipe library, add to selectedRecipes
    let temp = this.parentElement
    let temp1 = _recipeLibrary_recipeLibrary_js__WEBPACK_IMPORTED_MODULE_1__.recipeLibrary.findByName(temp.children[2].textContent) //recipeListHTMLItems[index of recipe Name]
    selectedRecipes.selectedRecipes.push(temp1);

    selectedRecipes.setSelectedRecipe()
    _utils_saveLoadLocStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveLoadLocalStorage.saveTo(selectedRecipes.selectedRecipes, 'JSONselectedRecipes')


}


const selectedRecipes = {
///////////////////////////////////WIP///////////////////////////////////////////////////
    //import recipeLibrary
    //import saveLoad

    selectedRecipes: new Array,
    selectedSection: _utils_createHTMLSkel_js__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.selectedRecipes,
    recipesSection: _utils_createHTMLSkel_js__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.recipes,

    init: function () {
        //load selected recipes
        this.recipeListHTMLItems = this.recipesSection.lastChild.children,

        this.selectedRecipes = this.loadLocalStorage()
        if (this.selectedRecipes ===undefined) this.selectedRecipes = new Array
        this.render()


    },

    loadLocalStorage: function() {
        let x = _utils_saveLoadLocStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveLoadLocalStorage.load('JSONselectedRecipes')
        return x 
    },

    render: function() {
        //if selectedRecipes is empty, nothing, else load HTML
        //create section and html for selected recipes
        this.addBtns()
        this.setSelectedRecipe()

    },

    addBtns: function() {
        for (let i = 0; i < this.recipeListHTMLItems.length; i++) {
            this.recipeListHTMLItems[i].prepend(this.createBtn())
        }
    },


//add list of selected recipes to top above recipes
//////////////////NEXTNEXTNEXT START HERE START HERE START HERE ****#####################
    setSelectedRecipe: function () {
        //remove all children, start from blank
        while (this.selectedSection.firstChild) {
            this.selectedSection.removeChild(this.selectedSection.lastChild)
        }

        
        let sectionHeader = document.createElement('h2')
        sectionHeader.textContent = 'Selected Recipes'
        this.selectedSection.appendChild(sectionHeader)

        let _selectedList = document.createElement('ul')

        console.log(this.selectedRecipes)

        for (let i = 0; i<this.selectedRecipes.length; i++) {
            let selectedItem = document.createElement('li')
            selectedItem.textContent = this.selectedRecipes[i].name
            _selectedList.appendChild(selectedItem)

            let removeButton = document.createElement('button')
            removeButton.textContent = 'x'
            removeButton.classList = 'remove-selected-recipe'
            removeButton.addEventListener('click', () => {
                let temp = removeButton.parentElement

                let elemIndex = this.selectedRecipes.findIndex((el) => {
                    return el.name == temp.textContent
                })
                this.selectedRecipes.splice(elemIndex)
                temp.remove()
            })


            selectedItem.appendChild(removeButton)
        }

        this.selectedSection.appendChild(_selectedList)

    },

    


    createBtn: function () {
        let btn = document.createElement('button');
        btn.textContent = '+';
        btn.classList = 'select-recipe-btn';
    
        btn.addEventListener('click', addBtnHandler);
        return btn;
    }
}


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
/******/ __webpack_require__.O(0, ["src_recipeLibrary_recipeLibrary_js"], () => (__webpack_exec__("./src/groceryList/groceryList.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeUxpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ051RDtBQUNjO0FBQzlDO0FBQ29CO0FBQ0M7Ozs7Ozs7QUFPNUMsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyRUFBd0I7QUFDNUM7QUFDQTtBQUNBLFlBQVksb0dBQXNDO0FBQ2xEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksb0dBQXNDLEVBQUU7QUFDcEUsc0JBQXNCLDZGQUErQjtBQUNyRDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLHFCQUFxQix1REFBTztBQUM1QjtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBVztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SDBEO0FBQ087QUFDSztBQUMvQzs7OztBQUl2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRkFBd0I7QUFDeEM7O0FBRUE7QUFDQSxJQUFJLHFGQUEyQjs7O0FBRy9COzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrRkFBNEI7QUFDakQsb0JBQW9CLDBFQUFvQjs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDtBQUNBLGdCQUFnQixtRkFBeUI7QUFDekM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBLHdCQUF3QixxQ0FBcUM7QUFDN0Q7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL2dyb2NlcnlMaXN0L2dyb2NlcnlJdGVtLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvZ3JvY2VyeUxpc3QvZ3JvY2VyeUxpc3QuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9zZWxlY3RlZFJlY2lwZXMvc2VsZWN0ZWRSZWNpcGVzLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvdXRpbHMvZ3JvdXBCeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgZ3JvY2VyeUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGluZ3JlZGllbnQsIGFtb3VudCwgbWVhc3VyZSkge1xuICAgICAgICB0aGlzLmluZ3JlZGllbnQgPSBpbmdyZWRpZW50O1xuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudFxuICAgICAgICB0aGlzLm1lYXN1cmUgPSBtZWFzdXJlXG4gICAgfVxufSIsImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJztcbmltcG9ydCB7IHNlbGVjdGVkUmVjaXBlcyB9IGZyb20gJy4uL3NlbGVjdGVkUmVjaXBlcy9zZWxlY3RlZFJlY2lwZXMnO1xuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGdyb3VwQnkgfSBmcm9tICcuLi91dGlscy9ncm91cEJ5JztcbmltcG9ydCB7IGdyb2NlcnlJdGVtIH0gZnJvbSAnLi9ncm9jZXJ5SXRlbSc7XG5cblxuXG5cblxuXG4gZXhwb3J0IGNvbnN0IGdyb2NlcnlMaXN0ID0ge1xuICAgIC8vaW1wb3J0IGdyb3VwQnksIFNlbGVjdGVkUmVjaXBlc1xcXG4gICAgLy9pbXBvcnQgZ3JvY2VyeUl0ZW1cbiAgICBncm9jZXJ5TGlzdDogW10sXG4gICAgZ3JvY2VyeVNlY3Rpb246IEhUTUxTa2VsZXRvbi5ncm9jZXJ5TGlzdCxcbiAgICAvL2ltcG9ydCBzZWxlY3RlZFJlY2lwZXNcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMubGVuZ3RoID4gMCkgdGhpcy5yZW5kZXIoKVxuICAgICAgICB0aGlzLnJlbG9hZEdyb2NlcnkoKVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0ID0gdGhpcy5jb21iaW5lR3JvY2VyeUl0ZW1zKClcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLnNldEdyb2NlcnlIVE1MKCkpXG4gICAgfSxcbiAgICAvL3Rha2Ugc2VsZWN0ZWRSZWNpcGVzLCBleHRyYWN0IG9ubHkgZ3JvY2VyaWVzLCBwbGFjZSBpbnRvIDFkIGFycmF5XG4gICAgcHVsbEdyb2NlcmllczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBuZXcgQXJyYXkoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAucHVzaChzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzW2ldLmluZ3JlZGllbnRzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wLmZsYXQoKVxuICAgIH0sXG5cbi8vQWRkIGdyb2NlcmllcyB0b2dldGhlclxuXG4gICAgY29tYmluZUdyb2NlcnlJdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0ZW1wID0gZ3JvdXBCeSh0aGlzLnB1bGxHcm9jZXJpZXMoKSwgJ2luZ3JlZGllbnQnKVxuICAgICAgICBjb25zdCB0ZW1wS2V5cyA9IE9iamVjdC5rZXlzKHRlbXApXG4gICAgICAgIGNvbnN0IHJldHVyblZhbCA9IFtdXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRlbXBLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIGtleVxuICAgICAgICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHRlbXBbdGVtcEtleXNbaV1dLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy91bnRpbCAxIHZhbHVlIGxlZnRcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBOdW1iZXIodGVtcFt0ZW1wS2V5c1tpXV1bal0uYW1vdW50KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHggPSBuZXcgZ3JvY2VyeUl0ZW0oKHRlbXBbdGVtcEtleXNbaV1dWzBdKS5pbmdyZWRpZW50LCB0b3RhbCwgKHRlbXBbdGVtcEtleXNbaV1dWzBdKS5tZWFzdXJlbWVudClcbiAgICAgICAgICAgIHJldHVyblZhbC5wdXNoKHgpXG5cbiAgICAgICAgICAgIC8vIHRlbXBbdGVtcEtleXNbaV1dLnNwbGljZSgxLCBJbmZpbml0eSlcbiAgICAgICAgICAgIC8vIC8vbWFrZXMgYW1vdW50IG9mIGFsbCBlcXVhbCB0byB0b3RhbFxuICAgICAgICAgICAgLy8gdGVtcFt0ZW1wS2V5c1tpXV1bMF0uYW1vdW50ID0gdG90YWxcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5WYWxcbiAgICB9LCBcblxuLy8gLy9hZGQgbGlzdCBvZiBncm9jZXJpZXMgdG8gYm90dG9tIGluIHNlY3Rpb25cblxuXG4gICAgY3JlYXRlR3JvY2VyeUhUTUw6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGxldCBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAvL3RvIHRyYWNrIGVhY2ggaXRlbSwgbmVlZGVkIGZvciBkZWxldGlvbiBidXR0b24gbXVzdCBiZSBmaXJzdCBjaGlsZFxuICAgICAgICAvL211c3QgYmUgcmlnaHQgYWZ0ZXIgY29udGFpbmVySURcblxuICAgICAgICBsZXQgaW5nck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgaW5nck5hbWUuY2xhc3NMaXN0ID0gJ2luZ3ItbmFtZSdcbiAgICAgICAgaW5nck5hbWUudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRcblxuICAgICAgICBsZXQgaW5nckFtbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgaW5nckFtbnQuY2xhc3NMaXN0ID0gJ2luZ3ItYW1udCdcbiAgICAgICAgaW5nckFtbnQudGV4dENvbnRlbnQgPSBpdGVtLmFtb3VudFxuXG4gICAgICAgIGxldCBpbmdyTXNyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGluZ3JNc3IuY2xhc3NMaXN0ID0gJ2luZ3ItbXNyJ1xuICAgICAgICBpbmdyTXNyLnRleHRDb250ZW50ID0gaXRlbS5tZWFzdXJlbWVudFxuICAgICAgICBcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyTmFtZSlcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyQW1udClcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyTXNyKVxuXG4gICAgICAgIHJldHVybiBfY29udGFpbmVyXG4gICAgfSxcblxuICAgIHNldEdyb2NlcnlIVE1MOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmdyb2NlcnlTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvY2VyeVNlY3Rpb24ucmVtb3ZlQ2hpbGQodGhpcy5ncm9jZXJ5U2VjdGlvbi5sYXN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnR3JvY2VyaWVzJ1xuICAgICAgICB0aGlzLmdyb2NlcnlTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpXG4gICAgICAgIFxuICAgICAgICBsZXQgX2dyb2NlcnlIVE1MTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VjdGlvbi5hcHBlbmRDaGlsZChfZ3JvY2VyeUhUTUxMaXN0KVxuICAgICAgICBsZXQgdGVtcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmdyb2NlcnlMaXN0KVxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdyb2NlcnlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfZ3JvY2VyeUhUTUxMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlR3JvY2VyeUhUTUwodGhpcy5ncm9jZXJ5TGlzdFtpXSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9ncm9jZXJ5SFRNTExpc3RcbiAgICB9LFxuXG4gICAgcmVsb2FkR3JvY2VyeTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLnJlbW92ZS1zZWxlY3RlZC1yZWNpcGUnKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlbmRlcigpLCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCB0ZW1wMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5zZWxlY3QtcmVjaXBlLWJ0bicpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcDIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAyW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5yZW5kZXIoKSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgSFRNTFNrZWxldG9uIH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlSFRNTFNrZWwuanMnO1xuaW1wb3J0IHsgcmVjaXBlTGlicmFyeSB9IGZyb20gJy4uL3JlY2lwZUxpYnJhcnkvcmVjaXBlTGlicmFyeS5qcydcbmltcG9ydCB7IHNhdmVMb2FkTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vdXRpbHMvc2F2ZUxvYWRMb2NTdG9yYWdlLmpzJztcbmltcG9ydCAnLi4vc3R5bGVzLmNzcyc7XG5cblxuXG5mdW5jdGlvbiBhZGRCdG5IYW5kbGVyKCkge1xuICAgIC8vd2hhdCBoYXBwZW5zIG9uIHRoaXMuY3JlYXRlQnRuIENsaWNrXG4gICAgLy9maW5kIHJlY2lwZSBpbiByZWNpcGUgbGlicmFyeSwgYWRkIHRvIHNlbGVjdGVkUmVjaXBlc1xuICAgIGxldCB0ZW1wID0gdGhpcy5wYXJlbnRFbGVtZW50XG4gICAgbGV0IHRlbXAxID0gcmVjaXBlTGlicmFyeS5maW5kQnlOYW1lKHRlbXAuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQpIC8vcmVjaXBlTGlzdEhUTUxJdGVtc1tpbmRleCBvZiByZWNpcGUgTmFtZV1cbiAgICBzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzLnB1c2godGVtcDEpO1xuXG4gICAgc2VsZWN0ZWRSZWNpcGVzLnNldFNlbGVjdGVkUmVjaXBlKClcbiAgICBzYXZlTG9hZExvY2FsU3RvcmFnZS5zYXZlVG8oc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlcywgJ0pTT05zZWxlY3RlZFJlY2lwZXMnKVxuXG5cbn1cblxuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRSZWNpcGVzID0ge1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9XSVAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvL2ltcG9ydCByZWNpcGVMaWJyYXJ5XG4gICAgLy9pbXBvcnQgc2F2ZUxvYWRcblxuICAgIHNlbGVjdGVkUmVjaXBlczogbmV3IEFycmF5LFxuICAgIHNlbGVjdGVkU2VjdGlvbjogSFRNTFNrZWxldG9uLnNlbGVjdGVkUmVjaXBlcyxcbiAgICByZWNpcGVzU2VjdGlvbjogSFRNTFNrZWxldG9uLnJlY2lwZXMsXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vbG9hZCBzZWxlY3RlZCByZWNpcGVzXG4gICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUxJdGVtcyA9IHRoaXMucmVjaXBlc1NlY3Rpb24ubGFzdENoaWxkLmNoaWxkcmVuLFxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZWNpcGVzID0gdGhpcy5sb2FkTG9jYWxTdG9yYWdlKClcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRSZWNpcGVzID09PXVuZGVmaW5lZCkgdGhpcy5zZWxlY3RlZFJlY2lwZXMgPSBuZXcgQXJyYXlcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuXG5cbiAgICB9LFxuXG4gICAgbG9hZExvY2FsU3RvcmFnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB4ID0gc2F2ZUxvYWRMb2NhbFN0b3JhZ2UubG9hZCgnSlNPTnNlbGVjdGVkUmVjaXBlcycpXG4gICAgICAgIHJldHVybiB4IFxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2lmIHNlbGVjdGVkUmVjaXBlcyBpcyBlbXB0eSwgbm90aGluZywgZWxzZSBsb2FkIEhUTUxcbiAgICAgICAgLy9jcmVhdGUgc2VjdGlvbiBhbmQgaHRtbCBmb3Igc2VsZWN0ZWQgcmVjaXBlc1xuICAgICAgICB0aGlzLmFkZEJ0bnMoKVxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkUmVjaXBlKClcblxuICAgIH0sXG5cbiAgICBhZGRCdG5zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlY2lwZUxpc3RIVE1MSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUxJdGVtc1tpXS5wcmVwZW5kKHRoaXMuY3JlYXRlQnRuKCkpXG4gICAgICAgIH1cbiAgICB9LFxuXG5cbi8vYWRkIGxpc3Qgb2Ygc2VsZWN0ZWQgcmVjaXBlcyB0byB0b3AgYWJvdmUgcmVjaXBlc1xuLy8vLy8vLy8vLy8vLy8vLy8vTkVYVE5FWFRORVhUIFNUQVJUIEhFUkUgU1RBUlQgSEVSRSBTVEFSVCBIRVJFICoqKiojIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgICBzZXRTZWxlY3RlZFJlY2lwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL3JlbW92ZSBhbGwgY2hpbGRyZW4sIHN0YXJ0IGZyb20gYmxhbmtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLnJlbW92ZUNoaWxkKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmxhc3RDaGlsZClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBsZXQgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdTZWxlY3RlZCBSZWNpcGVzJ1xuICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKVxuXG4gICAgICAgIGxldCBfc2VsZWN0ZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRSZWNpcGVzKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPHRoaXMuc2VsZWN0ZWRSZWNpcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50ID0gdGhpcy5zZWxlY3RlZFJlY2lwZXNbaV0ubmFtZVxuICAgICAgICAgICAgX3NlbGVjdGVkTGlzdC5hcHBlbmRDaGlsZChzZWxlY3RlZEl0ZW0pXG5cbiAgICAgICAgICAgIGxldCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLnRleHRDb250ZW50ID0gJ3gnXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0ID0gJ3JlbW92ZS1zZWxlY3RlZC1yZWNpcGUnXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSByZW1vdmVCdXR0b24ucGFyZW50RWxlbWVudFxuXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRSZWNpcGVzLmZpbmRJbmRleCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLm5hbWUgPT0gdGVtcC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJlY2lwZXMuc3BsaWNlKGVsZW1JbmRleClcbiAgICAgICAgICAgICAgICB0ZW1wLnJlbW92ZSgpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbi5hcHBlbmRDaGlsZChfc2VsZWN0ZWRMaXN0KVxuXG4gICAgfSxcblxuICAgIFxuXG5cbiAgICBjcmVhdGVCdG46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QgPSAnc2VsZWN0LXJlY2lwZS1idG4nO1xuICAgIFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRCdG5IYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gKGl0ZW1zLCBrZXkpID0+IGl0ZW1zLnJlZHVjZShcbiAgICAvL2ZvciBzb3J0ZWRHcm9jZXJ5IExpc3RcbiAgICAocmVzdWx0LCBpdGVtKSA9PiAoe1xuICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgIFtpdGVtW2tleV1dOiBbXG4gICAgICAgICAgICAuLi4ocmVzdWx0W2l0ZW1ba2V5XV0gfHwgW10pLFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgXSxcbiAgICB9KSxcbiAgICB7fSxcbikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=