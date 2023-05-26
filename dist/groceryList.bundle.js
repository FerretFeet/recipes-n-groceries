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
            removeButton.classList = 'remove-selected-recipe'
            removeButton.addEventListener('click', () => {
                let temp = removeButton.parentElement

                let elemIndex = this.selectedRecipes.findIndex((el) => {
                    return el.name == temp.textContent
                })
                console.log(elemIndex)
                this.selectedRecipes.splice(elemIndex, 1)
                console.log(this.selectedRecipes)
                _utils_saveLoadLocStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveLoadLocalStorage.saveTo(this.selectedRecipes, 'JSONselectedRecipes')

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
/******/ __webpack_require__.O(0, ["src_recipeLibrary_recipeHTML_js-src_recipeLibrary_recipeLibrary_js"], () => (__webpack_exec__("./src/groceryList/groceryList.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeUxpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ051RDtBQUNjO0FBQzlDO0FBQ29CO0FBQ0M7Ozs7Ozs7QUFPNUMsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyRUFBd0I7QUFDNUM7QUFDQTtBQUNBLFlBQVksb0dBQXNDO0FBQ2xEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksb0dBQXNDLEVBQUU7QUFDcEUsc0JBQXNCLDZGQUErQjtBQUNyRDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLHFCQUFxQix1REFBTztBQUM1QjtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBVztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SDBEO0FBQ087QUFDSztBQUMvQzs7OztBQUl2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRkFBd0I7QUFDeEM7O0FBRUE7QUFDQSxJQUFJLHFGQUEyQjs7O0FBRy9COzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrRkFBNEI7QUFDakQsb0JBQW9CLDBFQUFvQjs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDtBQUNBLGdCQUFnQixtRkFBeUI7QUFDekM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBLHdCQUF3QixxQ0FBcUM7QUFDN0Q7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFGQUEyQjs7QUFFM0M7QUFDQSxhQUFhOzs7QUFHYjtBQUNBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvZ3JvY2VyeUxpc3QvZ3JvY2VyeUl0ZW0uanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9ncm9jZXJ5TGlzdC9ncm9jZXJ5TGlzdC5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3NlbGVjdGVkUmVjaXBlcy9zZWxlY3RlZFJlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy91dGlscy9ncm91cEJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBncm9jZXJ5SXRlbSB7XG4gICAgY29uc3RydWN0b3IoaW5ncmVkaWVudCwgYW1vdW50LCBtZWFzdXJlKSB7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudCA9IGluZ3JlZGllbnQ7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50XG4gICAgICAgIHRoaXMubWVhc3VyZSA9IG1lYXN1cmVcbiAgICB9XG59IiwiaW1wb3J0IHsgSFRNTFNrZWxldG9uIH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlSFRNTFNrZWwnO1xuaW1wb3J0IHsgc2VsZWN0ZWRSZWNpcGVzIH0gZnJvbSAnLi4vc2VsZWN0ZWRSZWNpcGVzL3NlbGVjdGVkUmVjaXBlcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ3JvdXBCeSB9IGZyb20gJy4uL3V0aWxzL2dyb3VwQnknO1xuaW1wb3J0IHsgZ3JvY2VyeUl0ZW0gfSBmcm9tICcuL2dyb2NlcnlJdGVtJztcblxuXG5cblxuXG5cbiBleHBvcnQgY29uc3QgZ3JvY2VyeUxpc3QgPSB7XG4gICAgLy9pbXBvcnQgZ3JvdXBCeSwgU2VsZWN0ZWRSZWNpcGVzXFxcbiAgICAvL2ltcG9ydCBncm9jZXJ5SXRlbVxuICAgIGdyb2NlcnlMaXN0OiBbXSxcbiAgICBncm9jZXJ5U2VjdGlvbjogSFRNTFNrZWxldG9uLmdyb2NlcnlMaXN0LFxuICAgIC8vaW1wb3J0IHNlbGVjdGVkUmVjaXBlc1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlcy5sZW5ndGggPiAwKSB0aGlzLnJlbmRlcigpXG4gICAgICAgIHRoaXMucmVsb2FkR3JvY2VyeSgpXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QgPSB0aGlzLmNvbWJpbmVHcm9jZXJ5SXRlbXMoKVxuICAgICAgICB0aGlzLmdyb2NlcnlTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuc2V0R3JvY2VyeUhUTUwoKSlcbiAgICB9LFxuICAgIC8vdGFrZSBzZWxlY3RlZFJlY2lwZXMsIGV4dHJhY3Qgb25seSBncm9jZXJpZXMsIHBsYWNlIGludG8gMWQgYXJyYXlcbiAgICBwdWxsR3JvY2VyaWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IG5ldyBBcnJheSgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcC5wdXNoKHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXNbaV0uaW5ncmVkaWVudHMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXAuZmxhdCgpXG4gICAgfSxcblxuLy9BZGQgZ3JvY2VyaWVzIHRvZ2V0aGVyXG5cbiAgICBjb21iaW5lR3JvY2VyeUl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBncm91cEJ5KHRoaXMucHVsbEdyb2NlcmllcygpLCAnaW5ncmVkaWVudCcpXG4gICAgICAgIGNvbnN0IHRlbXBLZXlzID0gT2JqZWN0LmtleXModGVtcClcbiAgICAgICAgY29uc3QgcmV0dXJuVmFsID0gW11cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGVtcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vZm9yIGVhY2gga2V5XG4gICAgICAgICAgICBsZXQgdG90YWwgPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8dGVtcFt0ZW1wS2V5c1tpXV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvL3VudGlsIDEgdmFsdWUgbGVmdFxuICAgICAgICAgICAgICAgIHRvdGFsICs9IE51bWJlcih0ZW1wW3RlbXBLZXlzW2ldXVtqXS5hbW91bnQpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgeCA9IG5ldyBncm9jZXJ5SXRlbSgodGVtcFt0ZW1wS2V5c1tpXV1bMF0pLmluZ3JlZGllbnQsIHRvdGFsLCAodGVtcFt0ZW1wS2V5c1tpXV1bMF0pLm1lYXN1cmVtZW50KVxuICAgICAgICAgICAgcmV0dXJuVmFsLnB1c2goeClcblxuICAgICAgICAgICAgLy8gdGVtcFt0ZW1wS2V5c1tpXV0uc3BsaWNlKDEsIEluZmluaXR5KVxuICAgICAgICAgICAgLy8gLy9tYWtlcyBhbW91bnQgb2YgYWxsIGVxdWFsIHRvIHRvdGFsXG4gICAgICAgICAgICAvLyB0ZW1wW3RlbXBLZXlzW2ldXVswXS5hbW91bnQgPSB0b3RhbFxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbFxuICAgIH0sIFxuXG4vLyAvL2FkZCBsaXN0IG9mIGdyb2NlcmllcyB0byBib3R0b20gaW4gc2VjdGlvblxuXG5cbiAgICBjcmVhdGVHcm9jZXJ5SFRNTDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgbGV0IF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIC8vdG8gdHJhY2sgZWFjaCBpdGVtLCBuZWVkZWQgZm9yIGRlbGV0aW9uIGJ1dHRvbiBtdXN0IGJlIGZpcnN0IGNoaWxkXG4gICAgICAgIC8vbXVzdCBiZSByaWdodCBhZnRlciBjb250YWluZXJJRFxuXG4gICAgICAgIGxldCBpbmdyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBpbmdyTmFtZS5jbGFzc0xpc3QgPSAnaW5nci1uYW1lJ1xuICAgICAgICBpbmdyTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0uaW5ncmVkaWVudFxuXG4gICAgICAgIGxldCBpbmdyQW1udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBpbmdyQW1udC5jbGFzc0xpc3QgPSAnaW5nci1hbW50J1xuICAgICAgICBpbmdyQW1udC50ZXh0Q29udGVudCA9IGl0ZW0uYW1vdW50XG5cbiAgICAgICAgbGV0IGluZ3JNc3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgaW5nck1zci5jbGFzc0xpc3QgPSAnaW5nci1tc3InXG4gICAgICAgIGluZ3JNc3IudGV4dENvbnRlbnQgPSBpdGVtLm1lYXN1cmVtZW50XG4gICAgICAgIFxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JOYW1lKVxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JBbW50KVxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JNc3IpXG5cbiAgICAgICAgcmV0dXJuIF9jb250YWluZXJcbiAgICB9LFxuXG4gICAgc2V0R3JvY2VyeUhUTUw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuZ3JvY2VyeVNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5ncm9jZXJ5U2VjdGlvbi5yZW1vdmVDaGlsZCh0aGlzLmdyb2NlcnlTZWN0aW9uLmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdHcm9jZXJpZXMnXG4gICAgICAgIHRoaXMuZ3JvY2VyeVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcilcbiAgICAgICAgXG4gICAgICAgIGxldCBfZ3JvY2VyeUhUTUxMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICB0aGlzLmdyb2NlcnlTZWN0aW9uLmFwcGVuZENoaWxkKF9ncm9jZXJ5SFRNTExpc3QpXG4gICAgICAgIGxldCB0ZW1wS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZ3JvY2VyeUxpc3QpXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ3JvY2VyeUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9ncm9jZXJ5SFRNTExpc3QuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVHcm9jZXJ5SFRNTCh0aGlzLmdyb2NlcnlMaXN0W2ldKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2dyb2NlcnlIVE1MTGlzdFxuICAgIH0sXG5cbiAgICByZWxvYWRHcm9jZXJ5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24ucmVtb3ZlLXNlbGVjdGVkLXJlY2lwZScpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMucmVuZGVyKCksIDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLnNlbGVjdC1yZWNpcGUtYnRuJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcDJbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlbmRlcigpLCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBIVE1MU2tlbGV0b24gfSBmcm9tICcuLi91dGlscy9jcmVhdGVIVE1MU2tlbC5qcyc7XG5pbXBvcnQgeyByZWNpcGVMaWJyYXJ5IH0gZnJvbSAnLi4vcmVjaXBlTGlicmFyeS9yZWNpcGVMaWJyYXJ5LmpzJ1xuaW1wb3J0IHsgc2F2ZUxvYWRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9zYXZlTG9hZExvY1N0b3JhZ2UuanMnO1xuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJztcblxuXG5cbmZ1bmN0aW9uIGFkZEJ0bkhhbmRsZXIoKSB7XG4gICAgLy93aGF0IGhhcHBlbnMgb24gdGhpcy5jcmVhdGVCdG4gQ2xpY2tcbiAgICAvL2ZpbmQgcmVjaXBlIGluIHJlY2lwZSBsaWJyYXJ5LCBhZGQgdG8gc2VsZWN0ZWRSZWNpcGVzXG4gICAgbGV0IHRlbXAgPSB0aGlzLnBhcmVudEVsZW1lbnRcbiAgICBsZXQgdGVtcDEgPSByZWNpcGVMaWJyYXJ5LmZpbmRCeU5hbWUodGVtcC5jaGlsZHJlblsyXS50ZXh0Q29udGVudCkgLy9yZWNpcGVMaXN0SFRNTEl0ZW1zW2luZGV4IG9mIHJlY2lwZSBOYW1lXVxuICAgIHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMucHVzaCh0ZW1wMSk7XG5cbiAgICBzZWxlY3RlZFJlY2lwZXMuc2V0U2VsZWN0ZWRSZWNpcGUoKVxuICAgIHNhdmVMb2FkTG9jYWxTdG9yYWdlLnNhdmVUbyhzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzLCAnSlNPTnNlbGVjdGVkUmVjaXBlcycpXG5cblxufVxuXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZFJlY2lwZXMgPSB7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1dJUC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vaW1wb3J0IHJlY2lwZUxpYnJhcnlcbiAgICAvL2ltcG9ydCBzYXZlTG9hZFxuXG4gICAgc2VsZWN0ZWRSZWNpcGVzOiBuZXcgQXJyYXksXG4gICAgc2VsZWN0ZWRTZWN0aW9uOiBIVE1MU2tlbGV0b24uc2VsZWN0ZWRSZWNpcGVzLFxuICAgIHJlY2lwZXNTZWN0aW9uOiBIVE1MU2tlbGV0b24ucmVjaXBlcyxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9sb2FkIHNlbGVjdGVkIHJlY2lwZXNcbiAgICAgICAgdGhpcy5yZWNpcGVMaXN0SFRNTEl0ZW1zID0gdGhpcy5yZWNpcGVzU2VjdGlvbi5sYXN0Q2hpbGQuY2hpbGRyZW4sXG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlY2lwZXMgPSB0aGlzLmxvYWRMb2NhbFN0b3JhZ2UoKVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFJlY2lwZXMgPT09dW5kZWZpbmVkKSB0aGlzLnNlbGVjdGVkUmVjaXBlcyA9IG5ldyBBcnJheVxuICAgICAgICB0aGlzLnJlbmRlcigpXG5cblxuICAgIH0sXG5cbiAgICBsb2FkTG9jYWxTdG9yYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHggPSBzYXZlTG9hZExvY2FsU3RvcmFnZS5sb2FkKCdKU09Oc2VsZWN0ZWRSZWNpcGVzJylcbiAgICAgICAgcmV0dXJuIHggXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vaWYgc2VsZWN0ZWRSZWNpcGVzIGlzIGVtcHR5LCBub3RoaW5nLCBlbHNlIGxvYWQgSFRNTFxuICAgICAgICAvL2NyZWF0ZSBzZWN0aW9uIGFuZCBodG1sIGZvciBzZWxlY3RlZCByZWNpcGVzXG4gICAgICAgIHRoaXMuYWRkQnRucygpXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRSZWNpcGUoKVxuXG4gICAgfSxcblxuICAgIGFkZEJ0bnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVjaXBlTGlzdEhUTUxJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZWNpcGVMaXN0SFRNTEl0ZW1zW2ldLnByZXBlbmQodGhpcy5jcmVhdGVCdG4oKSlcbiAgICAgICAgfVxuICAgIH0sXG5cblxuLy9hZGQgbGlzdCBvZiBzZWxlY3RlZCByZWNpcGVzIHRvIHRvcCBhYm92ZSByZWNpcGVzXG4vLy8vLy8vLy8vLy8vLy8vLy9ORVhUTkVYVE5FWFQgU1RBUlQgSEVSRSBTVEFSVCBIRVJFIFNUQVJUIEhFUkUgKioqKiMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgIHNldFNlbGVjdGVkUmVjaXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vcmVtb3ZlIGFsbCBjaGlsZHJlbiwgc3RhcnQgZnJvbSBibGFua1xuICAgICAgICB3aGlsZSAodGhpcy5zZWxlY3RlZFNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlY3Rpb24ucmVtb3ZlQ2hpbGQodGhpcy5zZWxlY3RlZFNlY3Rpb24ubGFzdENoaWxkKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGxldCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ1NlbGVjdGVkIFJlY2lwZXMnXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpXG5cbiAgICAgICAgbGV0IF9zZWxlY3RlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFJlY2lwZXMpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8dGhpcy5zZWxlY3RlZFJlY2lwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQgPSB0aGlzLnNlbGVjdGVkUmVjaXBlc1tpXS5uYW1lXG4gICAgICAgICAgICBfc2VsZWN0ZWRMaXN0LmFwcGVuZENoaWxkKHNlbGVjdGVkSXRlbSlcblxuICAgICAgICAgICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0ID0gJ3JlbW92ZS1zZWxlY3RlZC1yZWNpcGUnXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSByZW1vdmVCdXR0b24ucGFyZW50RWxlbWVudFxuXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRSZWNpcGVzLmZpbmRJbmRleCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLm5hbWUgPT0gdGVtcC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbUluZGV4KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWNpcGVzLnNwbGljZShlbGVtSW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFJlY2lwZXMpXG4gICAgICAgICAgICAgICAgc2F2ZUxvYWRMb2NhbFN0b3JhZ2Uuc2F2ZVRvKHRoaXMuc2VsZWN0ZWRSZWNpcGVzLCAnSlNPTnNlbGVjdGVkUmVjaXBlcycpXG5cbiAgICAgICAgICAgICAgICB0ZW1wLnJlbW92ZSgpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbi5hcHBlbmRDaGlsZChfc2VsZWN0ZWRMaXN0KVxuXG4gICAgfSxcblxuICAgIFxuXG5cbiAgICBjcmVhdGVCdG46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QgPSAnc2VsZWN0LXJlY2lwZS1idG4nO1xuICAgIFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRCdG5IYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gKGl0ZW1zLCBrZXkpID0+IGl0ZW1zLnJlZHVjZShcbiAgICAvL2ZvciBzb3J0ZWRHcm9jZXJ5IExpc3RcbiAgICAocmVzdWx0LCBpdGVtKSA9PiAoe1xuICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgIFtpdGVtW2tleV1dOiBbXG4gICAgICAgICAgICAuLi4ocmVzdWx0W2l0ZW1ba2V5XV0gfHwgW10pLFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgXSxcbiAgICB9KSxcbiAgICB7fSxcbikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=