"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["groceryList"],{

/***/ "./src/groceryList.js":
/*!****************************!*\
  !*** ./src/groceryList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groceryList: () => (/* binding */ groceryList)
/* harmony export */ });
/* harmony import */ var _createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHTMLSkel */ "./src/createHTMLSkel.js");
/* harmony import */ var _selectedRecipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectedRecipes */ "./src/selectedRecipes.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





const groupBy = (items, key) => items.reduce(
    (result, item) => ({
        ...result,
        [item[key]]: [
            ...(result[item[key]] || []),
            item,
        ],
    }),
    {},
)

class groceryItem {
    constructor(ingredient, amount, measure) {
        this.ingredient = ingredient;
        this.amount = amount
        this.measure = measure
    }
}


 const groceryList = {
    //import groupBy, SelectedRecipes\
    //import groceryItem
    groceryList: [],
    grocerySection: _createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.groceryList,
    //import selectedRecipes
    init: function() {
        if (_selectedRecipes__WEBPACK_IMPORTED_MODULE_1__.selectedRecipes.selectedRecipes.length > 0) this.render()
        this.reloadGrocery()
    },

    render: function() {
        this.groceryList = this.combineGroceryItems()
        this.grocerySection.appendChild(this.setGroceryHTML())
    },
    //take selectedRecipes, extract only groceries, place into 1d array
    pullGroceries: function() {
        const temp = new Array()
        for (let i = 0; i < _selectedRecipes__WEBPACK_IMPORTED_MODULE_1__.selectedRecipes.selectedRecipes.length; i++) {
            temp.push(_selectedRecipes__WEBPACK_IMPORTED_MODULE_1__.selectedRecipes.selectedRecipes[i].ingredients)
        }
        return temp.flat()
    },

//Add groceries together

    combineGroceryItems: function () {
        const temp = groupBy(this.pullGroceries(), 'ingredient')
        const tempKeys = Object.keys(temp)
        const returnVal = []
        for (let i=0; i < tempKeys.length; i++) {
            //for each key
            let total = 0
            for (let j=0; j<temp[tempKeys[i]].length; j++) {
                //until 1 value left
                total += Number(temp[tempKeys[i]][j].amount)
                
            }
            let x = new groceryItem((temp[tempKeys[i]][0]).ingredient, total, (temp[tempKeys[i]][0]).measurement)
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

/***/ "./src/selectedRecipes.js":
/*!********************************!*\
  !*** ./src/selectedRecipes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectedRecipes: () => (/* binding */ selectedRecipes)
/* harmony export */ });
/* harmony import */ var _createHTMLSkel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHTMLSkel.js */ "./src/createHTMLSkel.js");
/* harmony import */ var _recipeLibrary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipeLibrary.js */ "./src/recipeLibrary.js");
/* harmony import */ var _saveLoadLocStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveLoadLocStorage.js */ "./src/saveLoadLocStorage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







function addBtnHandler() {
    //what happens on this.createBtn Click
    //find recipe in recipe library, add to selectedRecipes
    let temp = this.parentElement
    let temp1 = _recipeLibrary_js__WEBPACK_IMPORTED_MODULE_1__.recipeLibrary.findByName(temp.children[2].textContent) //recipeListHTMLItems[index of recipe Name]
    selectedRecipes.selectedRecipes.push(temp1);

    selectedRecipes.setSelectedRecipe()
    _saveLoadLocStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveLoadLocalStorage.saveTo(selectedRecipes.selectedRecipes, 'JSONselectedRecipes')


}


const selectedRecipes = {
///////////////////////////////////WIP///////////////////////////////////////////////////
    //import recipeLibrary
    //import saveLoad

    selectedRecipes: new Array,
    selectedSection: _createHTMLSkel_js__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.selectedRecipes,
    recipesSection: _createHTMLSkel_js__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.recipes,

    init: function () {
        //load selected recipes
        this.recipeListHTMLItems = this.recipesSection.lastChild.children,

        this.selectedRecipes = this.loadLocalStorage()
        if (this.selectedRecipes ===undefined) this.selectedRecipes = new Array
        this.render()


    },

    loadLocalStorage: function() {
        let x = _saveLoadLocStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveLoadLocalStorage.load('JSONselectedRecipes')
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_recipeLibrary_js"], () => (__webpack_exec__("./src/groceryList.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeUxpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDSTtBQUM5Qjs7O0FBR3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxRUFBd0I7QUFDNUM7QUFDQTtBQUNBLFlBQVksb0ZBQXNDO0FBQ2xEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksb0ZBQXNDLEVBQUU7QUFDcEUsc0JBQXNCLDZFQUErQjtBQUNyRDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBLDBCQUEwQiw0QkFBNEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2QkFBNkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJbUQ7QUFDRDtBQUNhO0FBQ3pDOzs7O0FBSXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVFQUF3QjtBQUN4Qzs7QUFFQTtBQUNBLElBQUksK0VBQTJCOzs7QUFHL0I7OztBQUdPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDRFQUE0QjtBQUNqRCxvQkFBb0Isb0VBQW9COztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxLQUFLOztBQUVMO0FBQ0EsZ0JBQWdCLDZFQUF5QjtBQUN6QztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLCtCQUErQjtBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvZ3JvY2VyeUxpc3QuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9zZWxlY3RlZFJlY2lwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRNTFNrZWxldG9uIH0gZnJvbSAnLi9jcmVhdGVIVE1MU2tlbCc7XG5pbXBvcnQgeyBzZWxlY3RlZFJlY2lwZXMgfSBmcm9tICcuL3NlbGVjdGVkUmVjaXBlcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cblxuY29uc3QgZ3JvdXBCeSA9IChpdGVtcywga2V5KSA9PiBpdGVtcy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwgaXRlbSkgPT4gKHtcbiAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICBbaXRlbVtrZXldXTogW1xuICAgICAgICAgICAgLi4uKHJlc3VsdFtpdGVtW2tleV1dIHx8IFtdKSxcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgIF0sXG4gICAgfSksXG4gICAge30sXG4pXG5cbmNsYXNzIGdyb2NlcnlJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpbmdyZWRpZW50LCBhbW91bnQsIG1lYXN1cmUpIHtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50ID0gaW5ncmVkaWVudDtcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnRcbiAgICAgICAgdGhpcy5tZWFzdXJlID0gbWVhc3VyZVxuICAgIH1cbn1cblxuXG4gZXhwb3J0IGNvbnN0IGdyb2NlcnlMaXN0ID0ge1xuICAgIC8vaW1wb3J0IGdyb3VwQnksIFNlbGVjdGVkUmVjaXBlc1xcXG4gICAgLy9pbXBvcnQgZ3JvY2VyeUl0ZW1cbiAgICBncm9jZXJ5TGlzdDogW10sXG4gICAgZ3JvY2VyeVNlY3Rpb246IEhUTUxTa2VsZXRvbi5ncm9jZXJ5TGlzdCxcbiAgICAvL2ltcG9ydCBzZWxlY3RlZFJlY2lwZXNcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMubGVuZ3RoID4gMCkgdGhpcy5yZW5kZXIoKVxuICAgICAgICB0aGlzLnJlbG9hZEdyb2NlcnkoKVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0ID0gdGhpcy5jb21iaW5lR3JvY2VyeUl0ZW1zKClcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLnNldEdyb2NlcnlIVE1MKCkpXG4gICAgfSxcbiAgICAvL3Rha2Ugc2VsZWN0ZWRSZWNpcGVzLCBleHRyYWN0IG9ubHkgZ3JvY2VyaWVzLCBwbGFjZSBpbnRvIDFkIGFycmF5XG4gICAgcHVsbEdyb2NlcmllczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBuZXcgQXJyYXkoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAucHVzaChzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzW2ldLmluZ3JlZGllbnRzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wLmZsYXQoKVxuICAgIH0sXG5cbi8vQWRkIGdyb2NlcmllcyB0b2dldGhlclxuXG4gICAgY29tYmluZUdyb2NlcnlJdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0ZW1wID0gZ3JvdXBCeSh0aGlzLnB1bGxHcm9jZXJpZXMoKSwgJ2luZ3JlZGllbnQnKVxuICAgICAgICBjb25zdCB0ZW1wS2V5cyA9IE9iamVjdC5rZXlzKHRlbXApXG4gICAgICAgIGNvbnN0IHJldHVyblZhbCA9IFtdXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRlbXBLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIGtleVxuICAgICAgICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHRlbXBbdGVtcEtleXNbaV1dLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy91bnRpbCAxIHZhbHVlIGxlZnRcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBOdW1iZXIodGVtcFt0ZW1wS2V5c1tpXV1bal0uYW1vdW50KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHggPSBuZXcgZ3JvY2VyeUl0ZW0oKHRlbXBbdGVtcEtleXNbaV1dWzBdKS5pbmdyZWRpZW50LCB0b3RhbCwgKHRlbXBbdGVtcEtleXNbaV1dWzBdKS5tZWFzdXJlbWVudClcbiAgICAgICAgICAgIHJldHVyblZhbC5wdXNoKHgpXG5cbiAgICAgICAgICAgIC8vIHRlbXBbdGVtcEtleXNbaV1dLnNwbGljZSgxLCBJbmZpbml0eSlcbiAgICAgICAgICAgIC8vIC8vbWFrZXMgYW1vdW50IG9mIGFsbCBlcXVhbCB0byB0b3RhbFxuICAgICAgICAgICAgLy8gdGVtcFt0ZW1wS2V5c1tpXV1bMF0uYW1vdW50ID0gdG90YWxcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5WYWxcbiAgICB9LCBcblxuLy8gLy9hZGQgbGlzdCBvZiBncm9jZXJpZXMgdG8gYm90dG9tIGluIHNlY3Rpb25cblxuXG4gICAgY3JlYXRlR3JvY2VyeUhUTUw6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGxldCBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAvL3RvIHRyYWNrIGVhY2ggaXRlbSwgbmVlZGVkIGZvciBkZWxldGlvbiBidXR0b24gbXVzdCBiZSBmaXJzdCBjaGlsZFxuICAgICAgICAvL211c3QgYmUgcmlnaHQgYWZ0ZXIgY29udGFpbmVySURcblxuICAgICAgICBsZXQgaW5nck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgaW5nck5hbWUuY2xhc3NMaXN0ID0gJ2luZ3ItbmFtZSdcbiAgICAgICAgaW5nck5hbWUudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRcblxuICAgICAgICBsZXQgaW5nckFtbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgaW5nckFtbnQuY2xhc3NMaXN0ID0gJ2luZ3ItYW1udCdcbiAgICAgICAgaW5nckFtbnQudGV4dENvbnRlbnQgPSBpdGVtLmFtb3VudFxuXG4gICAgICAgIGxldCBpbmdyTXNyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGluZ3JNc3IuY2xhc3NMaXN0ID0gJ2luZ3ItbXNyJ1xuICAgICAgICBpbmdyTXNyLnRleHRDb250ZW50ID0gaXRlbS5tZWFzdXJlbWVudFxuICAgICAgICBcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyTmFtZSlcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyQW1udClcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyTXNyKVxuXG4gICAgICAgIHJldHVybiBfY29udGFpbmVyXG4gICAgfSxcblxuICAgIHNldEdyb2NlcnlIVE1MOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmdyb2NlcnlTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvY2VyeVNlY3Rpb24ucmVtb3ZlQ2hpbGQodGhpcy5ncm9jZXJ5U2VjdGlvbi5sYXN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnR3JvY2VyaWVzJ1xuICAgICAgICB0aGlzLmdyb2NlcnlTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpXG4gICAgICAgIFxuICAgICAgICBsZXQgX2dyb2NlcnlIVE1MTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VjdGlvbi5hcHBlbmRDaGlsZChfZ3JvY2VyeUhUTUxMaXN0KVxuICAgICAgICBsZXQgdGVtcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmdyb2NlcnlMaXN0KVxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdyb2NlcnlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfZ3JvY2VyeUhUTUxMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlR3JvY2VyeUhUTUwodGhpcy5ncm9jZXJ5TGlzdFtpXSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9ncm9jZXJ5SFRNTExpc3RcbiAgICB9LFxuXG4gICAgcmVsb2FkR3JvY2VyeTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLnJlbW92ZS1zZWxlY3RlZC1yZWNpcGUnKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlbmRlcigpLCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCB0ZW1wMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5zZWxlY3QtcmVjaXBlLWJ0bicpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcDIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAyW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5yZW5kZXIoKSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgSFRNTFNrZWxldG9uIH0gZnJvbSAnLi9jcmVhdGVIVE1MU2tlbC5qcyc7XG5pbXBvcnQgeyByZWNpcGVMaWJyYXJ5IH0gZnJvbSAnLi9yZWNpcGVMaWJyYXJ5LmpzJ1xuaW1wb3J0IHsgc2F2ZUxvYWRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3NhdmVMb2FkTG9jU3RvcmFnZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cblxuXG5mdW5jdGlvbiBhZGRCdG5IYW5kbGVyKCkge1xuICAgIC8vd2hhdCBoYXBwZW5zIG9uIHRoaXMuY3JlYXRlQnRuIENsaWNrXG4gICAgLy9maW5kIHJlY2lwZSBpbiByZWNpcGUgbGlicmFyeSwgYWRkIHRvIHNlbGVjdGVkUmVjaXBlc1xuICAgIGxldCB0ZW1wID0gdGhpcy5wYXJlbnRFbGVtZW50XG4gICAgbGV0IHRlbXAxID0gcmVjaXBlTGlicmFyeS5maW5kQnlOYW1lKHRlbXAuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQpIC8vcmVjaXBlTGlzdEhUTUxJdGVtc1tpbmRleCBvZiByZWNpcGUgTmFtZV1cbiAgICBzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzLnB1c2godGVtcDEpO1xuXG4gICAgc2VsZWN0ZWRSZWNpcGVzLnNldFNlbGVjdGVkUmVjaXBlKClcbiAgICBzYXZlTG9hZExvY2FsU3RvcmFnZS5zYXZlVG8oc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlcywgJ0pTT05zZWxlY3RlZFJlY2lwZXMnKVxuXG5cbn1cblxuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRSZWNpcGVzID0ge1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9XSVAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvL2ltcG9ydCByZWNpcGVMaWJyYXJ5XG4gICAgLy9pbXBvcnQgc2F2ZUxvYWRcblxuICAgIHNlbGVjdGVkUmVjaXBlczogbmV3IEFycmF5LFxuICAgIHNlbGVjdGVkU2VjdGlvbjogSFRNTFNrZWxldG9uLnNlbGVjdGVkUmVjaXBlcyxcbiAgICByZWNpcGVzU2VjdGlvbjogSFRNTFNrZWxldG9uLnJlY2lwZXMsXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vbG9hZCBzZWxlY3RlZCByZWNpcGVzXG4gICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUxJdGVtcyA9IHRoaXMucmVjaXBlc1NlY3Rpb24ubGFzdENoaWxkLmNoaWxkcmVuLFxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZWNpcGVzID0gdGhpcy5sb2FkTG9jYWxTdG9yYWdlKClcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRSZWNpcGVzID09PXVuZGVmaW5lZCkgdGhpcy5zZWxlY3RlZFJlY2lwZXMgPSBuZXcgQXJyYXlcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuXG5cbiAgICB9LFxuXG4gICAgbG9hZExvY2FsU3RvcmFnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB4ID0gc2F2ZUxvYWRMb2NhbFN0b3JhZ2UubG9hZCgnSlNPTnNlbGVjdGVkUmVjaXBlcycpXG4gICAgICAgIHJldHVybiB4IFxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2lmIHNlbGVjdGVkUmVjaXBlcyBpcyBlbXB0eSwgbm90aGluZywgZWxzZSBsb2FkIEhUTUxcbiAgICAgICAgLy9jcmVhdGUgc2VjdGlvbiBhbmQgaHRtbCBmb3Igc2VsZWN0ZWQgcmVjaXBlc1xuICAgICAgICB0aGlzLmFkZEJ0bnMoKVxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkUmVjaXBlKClcblxuICAgIH0sXG5cbiAgICBhZGRCdG5zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlY2lwZUxpc3RIVE1MSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUxJdGVtc1tpXS5wcmVwZW5kKHRoaXMuY3JlYXRlQnRuKCkpXG4gICAgICAgIH1cbiAgICB9LFxuXG5cbi8vYWRkIGxpc3Qgb2Ygc2VsZWN0ZWQgcmVjaXBlcyB0byB0b3AgYWJvdmUgcmVjaXBlc1xuLy8vLy8vLy8vLy8vLy8vLy8vTkVYVE5FWFRORVhUIFNUQVJUIEhFUkUgU1RBUlQgSEVSRSBTVEFSVCBIRVJFICoqKiojIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgICBzZXRTZWxlY3RlZFJlY2lwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL3JlbW92ZSBhbGwgY2hpbGRyZW4sIHN0YXJ0IGZyb20gYmxhbmtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLnJlbW92ZUNoaWxkKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmxhc3RDaGlsZClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBsZXQgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdTZWxlY3RlZCBSZWNpcGVzJ1xuICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKVxuXG4gICAgICAgIGxldCBfc2VsZWN0ZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRSZWNpcGVzKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPHRoaXMuc2VsZWN0ZWRSZWNpcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50ID0gdGhpcy5zZWxlY3RlZFJlY2lwZXNbaV0ubmFtZVxuICAgICAgICAgICAgX3NlbGVjdGVkTGlzdC5hcHBlbmRDaGlsZChzZWxlY3RlZEl0ZW0pXG5cbiAgICAgICAgICAgIGxldCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLnRleHRDb250ZW50ID0gJ3gnXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0ID0gJ3JlbW92ZS1zZWxlY3RlZC1yZWNpcGUnXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSByZW1vdmVCdXR0b24ucGFyZW50RWxlbWVudFxuXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRSZWNpcGVzLmZpbmRJbmRleCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLm5hbWUgPT0gdGVtcC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJlY2lwZXMuc3BsaWNlKGVsZW1JbmRleClcbiAgICAgICAgICAgICAgICB0ZW1wLnJlbW92ZSgpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbi5hcHBlbmRDaGlsZChfc2VsZWN0ZWRMaXN0KVxuXG4gICAgfSxcblxuICAgIFxuXG5cbiAgICBjcmVhdGVCdG46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QgPSAnc2VsZWN0LXJlY2lwZS1idG4nO1xuICAgIFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRCdG5IYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=