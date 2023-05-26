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
/******/ __webpack_require__.O(0, ["src_recipeLibrary_recipeLibrary_js"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ051RDtBQUNjO0FBQzlDO0FBQ29CO0FBQ0M7Ozs7Ozs7QUFPNUMsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyRUFBd0I7QUFDNUM7QUFDQTtBQUNBLFlBQVksb0dBQXNDO0FBQ2xEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksb0dBQXNDLEVBQUU7QUFDcEUsc0JBQXNCLDZGQUErQjtBQUNyRDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLHFCQUFxQix1REFBTztBQUM1QjtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBVztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhzQjtBQUNnQzs7QUFFdEQsb0VBQWlCOztBQUVqQixDQUE4RDtBQUNNO0FBQ1o7Ozs7QUFJeEQ7O0FBRUEsZUFBZSw0RUFBa0I7QUFDakMsZUFBZSxrRkFBb0I7QUFDbkMsZUFBZSxzRUFBZ0I7QUFDL0I7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7O0FBTUE7Ozs7OztBQU1BOzs7Ozs7Ozs7O0FBVUE7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEUwRDtBQUNPO0FBQ0s7QUFDL0M7Ozs7QUFJdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUZBQXdCO0FBQ3hDOztBQUVBO0FBQ0EsSUFBSSxxRkFBMkI7OztBQUcvQjs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0ZBQTRCO0FBQ2pELG9CQUFvQiwwRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQSxnQkFBZ0IsbUZBQXlCO0FBQ3pDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQSx3QkFBd0IscUNBQXFDO0FBQzdEO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9ncm9jZXJ5TGlzdC9ncm9jZXJ5SXRlbS5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL2dyb2NlcnlMaXN0L2dyb2NlcnlMaXN0LmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9zZWxlY3RlZFJlY2lwZXMvc2VsZWN0ZWRSZWNpcGVzLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvdXRpbHMvZ3JvdXBCeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgZ3JvY2VyeUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGluZ3JlZGllbnQsIGFtb3VudCwgbWVhc3VyZSkge1xuICAgICAgICB0aGlzLmluZ3JlZGllbnQgPSBpbmdyZWRpZW50O1xuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudFxuICAgICAgICB0aGlzLm1lYXN1cmUgPSBtZWFzdXJlXG4gICAgfVxufSIsImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJztcbmltcG9ydCB7IHNlbGVjdGVkUmVjaXBlcyB9IGZyb20gJy4uL3NlbGVjdGVkUmVjaXBlcy9zZWxlY3RlZFJlY2lwZXMnO1xuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGdyb3VwQnkgfSBmcm9tICcuLi91dGlscy9ncm91cEJ5JztcbmltcG9ydCB7IGdyb2NlcnlJdGVtIH0gZnJvbSAnLi9ncm9jZXJ5SXRlbSc7XG5cblxuXG5cblxuXG4gZXhwb3J0IGNvbnN0IGdyb2NlcnlMaXN0ID0ge1xuICAgIC8vaW1wb3J0IGdyb3VwQnksIFNlbGVjdGVkUmVjaXBlc1xcXG4gICAgLy9pbXBvcnQgZ3JvY2VyeUl0ZW1cbiAgICBncm9jZXJ5TGlzdDogW10sXG4gICAgZ3JvY2VyeVNlY3Rpb246IEhUTUxTa2VsZXRvbi5ncm9jZXJ5TGlzdCxcbiAgICAvL2ltcG9ydCBzZWxlY3RlZFJlY2lwZXNcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMubGVuZ3RoID4gMCkgdGhpcy5yZW5kZXIoKVxuICAgICAgICB0aGlzLnJlbG9hZEdyb2NlcnkoKVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0ID0gdGhpcy5jb21iaW5lR3JvY2VyeUl0ZW1zKClcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLnNldEdyb2NlcnlIVE1MKCkpXG4gICAgfSxcbiAgICAvL3Rha2Ugc2VsZWN0ZWRSZWNpcGVzLCBleHRyYWN0IG9ubHkgZ3JvY2VyaWVzLCBwbGFjZSBpbnRvIDFkIGFycmF5XG4gICAgcHVsbEdyb2NlcmllczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBuZXcgQXJyYXkoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAucHVzaChzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzW2ldLmluZ3JlZGllbnRzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wLmZsYXQoKVxuICAgIH0sXG5cbi8vQWRkIGdyb2NlcmllcyB0b2dldGhlclxuXG4gICAgY29tYmluZUdyb2NlcnlJdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0ZW1wID0gZ3JvdXBCeSh0aGlzLnB1bGxHcm9jZXJpZXMoKSwgJ2luZ3JlZGllbnQnKVxuICAgICAgICBjb25zdCB0ZW1wS2V5cyA9IE9iamVjdC5rZXlzKHRlbXApXG4gICAgICAgIGNvbnN0IHJldHVyblZhbCA9IFtdXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRlbXBLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIGtleVxuICAgICAgICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHRlbXBbdGVtcEtleXNbaV1dLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy91bnRpbCAxIHZhbHVlIGxlZnRcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBOdW1iZXIodGVtcFt0ZW1wS2V5c1tpXV1bal0uYW1vdW50KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHggPSBuZXcgZ3JvY2VyeUl0ZW0oKHRlbXBbdGVtcEtleXNbaV1dWzBdKS5pbmdyZWRpZW50LCB0b3RhbCwgKHRlbXBbdGVtcEtleXNbaV1dWzBdKS5tZWFzdXJlbWVudClcbiAgICAgICAgICAgIHJldHVyblZhbC5wdXNoKHgpXG5cbiAgICAgICAgICAgIC8vIHRlbXBbdGVtcEtleXNbaV1dLnNwbGljZSgxLCBJbmZpbml0eSlcbiAgICAgICAgICAgIC8vIC8vbWFrZXMgYW1vdW50IG9mIGFsbCBlcXVhbCB0byB0b3RhbFxuICAgICAgICAgICAgLy8gdGVtcFt0ZW1wS2V5c1tpXV1bMF0uYW1vdW50ID0gdG90YWxcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5WYWxcbiAgICB9LCBcblxuLy8gLy9hZGQgbGlzdCBvZiBncm9jZXJpZXMgdG8gYm90dG9tIGluIHNlY3Rpb25cblxuXG4gICAgY3JlYXRlR3JvY2VyeUhUTUw6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGxldCBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAvL3RvIHRyYWNrIGVhY2ggaXRlbSwgbmVlZGVkIGZvciBkZWxldGlvbiBidXR0b24gbXVzdCBiZSBmaXJzdCBjaGlsZFxuICAgICAgICAvL211c3QgYmUgcmlnaHQgYWZ0ZXIgY29udGFpbmVySURcblxuICAgICAgICBsZXQgaW5nck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgaW5nck5hbWUuY2xhc3NMaXN0ID0gJ2luZ3ItbmFtZSdcbiAgICAgICAgaW5nck5hbWUudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRcblxuICAgICAgICBsZXQgaW5nckFtbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgaW5nckFtbnQuY2xhc3NMaXN0ID0gJ2luZ3ItYW1udCdcbiAgICAgICAgaW5nckFtbnQudGV4dENvbnRlbnQgPSBpdGVtLmFtb3VudFxuXG4gICAgICAgIGxldCBpbmdyTXNyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGluZ3JNc3IuY2xhc3NMaXN0ID0gJ2luZ3ItbXNyJ1xuICAgICAgICBpbmdyTXNyLnRleHRDb250ZW50ID0gaXRlbS5tZWFzdXJlbWVudFxuICAgICAgICBcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyTmFtZSlcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyQW1udClcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyTXNyKVxuXG4gICAgICAgIHJldHVybiBfY29udGFpbmVyXG4gICAgfSxcblxuICAgIHNldEdyb2NlcnlIVE1MOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmdyb2NlcnlTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvY2VyeVNlY3Rpb24ucmVtb3ZlQ2hpbGQodGhpcy5ncm9jZXJ5U2VjdGlvbi5sYXN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnR3JvY2VyaWVzJ1xuICAgICAgICB0aGlzLmdyb2NlcnlTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpXG4gICAgICAgIFxuICAgICAgICBsZXQgX2dyb2NlcnlIVE1MTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VjdGlvbi5hcHBlbmRDaGlsZChfZ3JvY2VyeUhUTUxMaXN0KVxuICAgICAgICBsZXQgdGVtcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmdyb2NlcnlMaXN0KVxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdyb2NlcnlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfZ3JvY2VyeUhUTUxMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlR3JvY2VyeUhUTUwodGhpcy5ncm9jZXJ5TGlzdFtpXSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9ncm9jZXJ5SFRNTExpc3RcbiAgICB9LFxuXG4gICAgcmVsb2FkR3JvY2VyeTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLnJlbW92ZS1zZWxlY3RlZC1yZWNpcGUnKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlbmRlcigpLCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCB0ZW1wMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5zZWxlY3QtcmVjaXBlLWJ0bicpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcDIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAyW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5yZW5kZXIoKSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgSFRNTFNrZWxldG9uIH0gZnJvbSAnLi91dGlscy9jcmVhdGVIVE1MU2tlbCc7XG5cbkhUTUxTa2VsZXRvbi5pbml0KClcblxuaW1wb3J0IHsgcmVjaXBlTGlicmFyeSB9IGZyb20gJy4vcmVjaXBlTGlicmFyeS9yZWNpcGVMaWJyYXJ5JztcbmltcG9ydCB7IHNlbGVjdGVkUmVjaXBlcyB9IGZyb20gJy4vc2VsZWN0ZWRSZWNpcGVzL3NlbGVjdGVkUmVjaXBlcyc7XG5pbXBvcnQgeyBncm9jZXJ5TGlzdCB9IGZyb20gJy4vZ3JvY2VyeUxpc3QvZ3JvY2VyeUxpc3QnO1xuXG5cblxuZnVuY3Rpb24gb25TdGFydCgpIHtcblxuICAgIHNldFRpbWVvdXQocmVjaXBlTGlicmFyeS5pbml0KCksIDUwMClcbiAgICBzZXRUaW1lb3V0KHNlbGVjdGVkUmVjaXBlcy5pbml0KCksIDUwMClcbiAgICBzZXRUaW1lb3V0KGdyb2NlcnlMaXN0LmluaXQoKSwgNTAwKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU3RhcnQpXG5cblxuXG5cblxuXG5cblxuXG4vLyAvL3JlY2lwZSBmb3JtIHN1Ym1pdCwgb3ZlcnJpZGUgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3Igd2l0aCAyIGV2ZW50IGxpc3RlbmVycyBcblxuXG5cblxuXG4vLyAvL2NyZWF0ZSBpbnNldCBjYXJvdXNlbCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIG9uU3RhcnRSZWNpcGVUb0xpc3QocmVjaXBlTGlicmFyeSwgcmVjaXBlTGlzdEhUTUwpIHtcbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVjaXBlTGlicmFyeS5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICByZWNpcGVMaXN0SFRNTC5hcHBlbmRDaGlsZChjcmVhdGVPYmp0b0xpc3QocmVjaXBlTGlicmFyeVtpXSksICdncm9jZXJ5LWxpc3QnKTtcbi8vICAgICB9XG4vLyB9XG4gICAgICAgICAgICAgICAgXG5cblxuLy8gLy9hZGQgc2F2ZSBidXR0b24gb3IgbW92ZSBzYXZlIGZ1bmN0aW9uIHRvIGZvcm0gc3VibWl0XG5cbi8vIGxldCBmb3JtU2F2ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmFkZC1yZWNpcGUnKVxuLy8gbGV0IHNhdmVDaGFuZ2VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbi8vIHNhdmVDaGFuZ2VzQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUgQ2hhbmdlcydcbi8vIHNhdmVDaGFuZ2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIHNhdmVUb0xvY2FsU3RvcmFnZShyZWNpcGVMaWJyYXJ5KVxuLy8gICAgIHNhdmVUb0xvY2FsU3RvcmFnZShncm9jZXJ5TGlzdClcblxuLy8gfSlcbi8vIGZvcm1TYXZlU2VjdGlvbi5hcHBlbmRDaGlsZChzYXZlQ2hhbmdlc0J1dHRvbilcblxuXG5cblxuXG5cbiIsImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsLmpzJztcbmltcG9ydCB7IHJlY2lwZUxpYnJhcnkgfSBmcm9tICcuLi9yZWNpcGVMaWJyYXJ5L3JlY2lwZUxpYnJhcnkuanMnXG5pbXBvcnQgeyBzYXZlTG9hZExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL3V0aWxzL3NhdmVMb2FkTG9jU3RvcmFnZS5qcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy5jc3MnO1xuXG5cblxuZnVuY3Rpb24gYWRkQnRuSGFuZGxlcigpIHtcbiAgICAvL3doYXQgaGFwcGVucyBvbiB0aGlzLmNyZWF0ZUJ0biBDbGlja1xuICAgIC8vZmluZCByZWNpcGUgaW4gcmVjaXBlIGxpYnJhcnksIGFkZCB0byBzZWxlY3RlZFJlY2lwZXNcbiAgICBsZXQgdGVtcCA9IHRoaXMucGFyZW50RWxlbWVudFxuICAgIGxldCB0ZW1wMSA9IHJlY2lwZUxpYnJhcnkuZmluZEJ5TmFtZSh0ZW1wLmNoaWxkcmVuWzJdLnRleHRDb250ZW50KSAvL3JlY2lwZUxpc3RIVE1MSXRlbXNbaW5kZXggb2YgcmVjaXBlIE5hbWVdXG4gICAgc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlcy5wdXNoKHRlbXAxKTtcblxuICAgIHNlbGVjdGVkUmVjaXBlcy5zZXRTZWxlY3RlZFJlY2lwZSgpXG4gICAgc2F2ZUxvYWRMb2NhbFN0b3JhZ2Uuc2F2ZVRvKHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMsICdKU09Oc2VsZWN0ZWRSZWNpcGVzJylcblxuXG59XG5cblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkUmVjaXBlcyA9IHtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vV0lQLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy9pbXBvcnQgcmVjaXBlTGlicmFyeVxuICAgIC8vaW1wb3J0IHNhdmVMb2FkXG5cbiAgICBzZWxlY3RlZFJlY2lwZXM6IG5ldyBBcnJheSxcbiAgICBzZWxlY3RlZFNlY3Rpb246IEhUTUxTa2VsZXRvbi5zZWxlY3RlZFJlY2lwZXMsXG4gICAgcmVjaXBlc1NlY3Rpb246IEhUTUxTa2VsZXRvbi5yZWNpcGVzLFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2xvYWQgc2VsZWN0ZWQgcmVjaXBlc1xuICAgICAgICB0aGlzLnJlY2lwZUxpc3RIVE1MSXRlbXMgPSB0aGlzLnJlY2lwZXNTZWN0aW9uLmxhc3RDaGlsZC5jaGlsZHJlbixcblxuICAgICAgICB0aGlzLnNlbGVjdGVkUmVjaXBlcyA9IHRoaXMubG9hZExvY2FsU3RvcmFnZSgpXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUmVjaXBlcyA9PT11bmRlZmluZWQpIHRoaXMuc2VsZWN0ZWRSZWNpcGVzID0gbmV3IEFycmF5XG4gICAgICAgIHRoaXMucmVuZGVyKClcblxuXG4gICAgfSxcblxuICAgIGxvYWRMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgeCA9IHNhdmVMb2FkTG9jYWxTdG9yYWdlLmxvYWQoJ0pTT05zZWxlY3RlZFJlY2lwZXMnKVxuICAgICAgICByZXR1cm4geCBcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9pZiBzZWxlY3RlZFJlY2lwZXMgaXMgZW1wdHksIG5vdGhpbmcsIGVsc2UgbG9hZCBIVE1MXG4gICAgICAgIC8vY3JlYXRlIHNlY3Rpb24gYW5kIGh0bWwgZm9yIHNlbGVjdGVkIHJlY2lwZXNcbiAgICAgICAgdGhpcy5hZGRCdG5zKClcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFJlY2lwZSgpXG5cbiAgICB9LFxuXG4gICAgYWRkQnRuczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWNpcGVMaXN0SFRNTEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlY2lwZUxpc3RIVE1MSXRlbXNbaV0ucHJlcGVuZCh0aGlzLmNyZWF0ZUJ0bigpKVxuICAgICAgICB9XG4gICAgfSxcblxuXG4vL2FkZCBsaXN0IG9mIHNlbGVjdGVkIHJlY2lwZXMgdG8gdG9wIGFib3ZlIHJlY2lwZXNcbi8vLy8vLy8vLy8vLy8vLy8vL05FWFRORVhUTkVYVCBTVEFSVCBIRVJFIFNUQVJUIEhFUkUgU1RBUlQgSEVSRSAqKioqIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4gICAgc2V0U2VsZWN0ZWRSZWNpcGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9yZW1vdmUgYWxsIGNoaWxkcmVuLCBzdGFydCBmcm9tIGJsYW5rXG4gICAgICAgIHdoaWxlICh0aGlzLnNlbGVjdGVkU2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbi5yZW1vdmVDaGlsZCh0aGlzLnNlbGVjdGVkU2VjdGlvbi5sYXN0Q2hpbGQpXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgbGV0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnU2VsZWN0ZWQgUmVjaXBlcydcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcilcblxuICAgICAgICBsZXQgX3NlbGVjdGVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkUmVjaXBlcylcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTx0aGlzLnNlbGVjdGVkUmVjaXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS50ZXh0Q29udGVudCA9IHRoaXMuc2VsZWN0ZWRSZWNpcGVzW2ldLm5hbWVcbiAgICAgICAgICAgIF9zZWxlY3RlZExpc3QuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRJdGVtKVxuXG4gICAgICAgICAgICBsZXQgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICd4J1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdCA9ICdyZW1vdmUtc2VsZWN0ZWQtcmVjaXBlJ1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gcmVtb3ZlQnV0dG9uLnBhcmVudEVsZW1lbnRcblxuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkUmVjaXBlcy5maW5kSW5kZXgoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC5uYW1lID09IHRlbXAudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWNpcGVzLnNwbGljZShlbGVtSW5kZXgpXG4gICAgICAgICAgICAgICAgdGVtcC5yZW1vdmUoKVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFNlY3Rpb24uYXBwZW5kQ2hpbGQoX3NlbGVjdGVkTGlzdClcblxuICAgIH0sXG5cbiAgICBcblxuXG4gICAgY3JlYXRlQnRuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICBidG4uY2xhc3NMaXN0ID0gJ3NlbGVjdC1yZWNpcGUtYnRuJztcbiAgICBcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQnRuSGFuZGxlcik7XG4gICAgICAgIHJldHVybiBidG47XG4gICAgfVxufVxuIiwiXG5leHBvcnQgY29uc3QgZ3JvdXBCeSA9IChpdGVtcywga2V5KSA9PiBpdGVtcy5yZWR1Y2UoXG4gICAgLy9mb3Igc29ydGVkR3JvY2VyeSBMaXN0XG4gICAgKHJlc3VsdCwgaXRlbSkgPT4gKHtcbiAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICBbaXRlbVtrZXldXTogW1xuICAgICAgICAgICAgLi4uKHJlc3VsdFtpdGVtW2tleV1dIHx8IFtdKSxcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgIF0sXG4gICAgfSksXG4gICAge30sXG4pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9