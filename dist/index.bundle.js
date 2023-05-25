"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["index"],{

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _createHTMLSkel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHTMLSkel */ "./src/createHTMLSkel.js");
/* harmony import */ var _recipeLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipeLibrary */ "./src/recipeLibrary.js");
/* harmony import */ var _selectedRecipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectedRecipes */ "./src/selectedRecipes.js");
/* harmony import */ var _groceryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groceryList */ "./src/groceryList.js");



_createHTMLSkel__WEBPACK_IMPORTED_MODULE_1__.HTMLSkeleton.init()

;








function onStart() {

    setTimeout(_recipeLibrary__WEBPACK_IMPORTED_MODULE_2__.recipeLibrary.init(), 500)
    setTimeout(_selectedRecipes__WEBPACK_IMPORTED_MODULE_3__.selectedRecipes.init(), 500)
    setTimeout(_groceryList__WEBPACK_IMPORTED_MODULE_4__.groceryList.init(), 500)
}

window.addEventListener('load', onStart)

//////////////////
// END REFACTOR //
//////////////////




            //Save el to local storage
           



//load and set display of recipes and selected groceries
// function onStart(recipeLibrary, groceryList) {
//     let tempRecipeLibrary = localStorage.getItem('JSONrecipeLibrary')
//     tempRecipeLibrary = JSON.parse(tempRecipeLibrary)
//     if (tempRecipeLibrary == undefined) {
//         
        
//     } else {
//     recipeLibrary = tempRecipeLibrary
//     }
//     onStartRecipeToList(recipeLibrary, recipeListHTML)

//     let tempGroceryList = localStorage.getItem('groceryList')
//     tempGroceryList = JSON.parse(tempGroceryList)
//     if (tempGroceryList == null) return;
//     groceryList = tempGroceryList
//     setSelectedRecipe()
//     let grocerySection = document.querySelector('section.grocery-list')
//         grocerySection.appendChild(setGroceryHTML('grocery-list'));
// }



                    



//                             //adjust form textareas to be responsive

                            










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
/******/ __webpack_require__.O(0, ["src_recipeLibrary_js"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9ncm9jZXJ5TGlzdC5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvc2VsZWN0ZWRSZWNpcGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4vY3JlYXRlSFRNTFNrZWwnO1xuaW1wb3J0IHsgc2VsZWN0ZWRSZWNpcGVzIH0gZnJvbSAnLi9zZWxlY3RlZFJlY2lwZXMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5cbmNvbnN0IGdyb3VwQnkgPSAoaXRlbXMsIGtleSkgPT4gaXRlbXMucmVkdWNlKFxuICAgIChyZXN1bHQsIGl0ZW0pID0+ICh7XG4gICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgW2l0ZW1ba2V5XV06IFtcbiAgICAgICAgICAgIC4uLihyZXN1bHRbaXRlbVtrZXldXSB8fCBbXSksXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICBdLFxuICAgIH0pLFxuICAgIHt9LFxuKVxuXG5jbGFzcyBncm9jZXJ5SXRlbSB7XG4gICAgY29uc3RydWN0b3IoaW5ncmVkaWVudCwgYW1vdW50LCBtZWFzdXJlKSB7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudCA9IGluZ3JlZGllbnQ7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50XG4gICAgICAgIHRoaXMubWVhc3VyZSA9IG1lYXN1cmVcbiAgICB9XG59XG5cblxuIGV4cG9ydCBjb25zdCBncm9jZXJ5TGlzdCA9IHtcbiAgICAvL2ltcG9ydCBncm91cEJ5LCBTZWxlY3RlZFJlY2lwZXNcXFxuICAgIC8vaW1wb3J0IGdyb2NlcnlJdGVtXG4gICAgZ3JvY2VyeUxpc3Q6IFtdLFxuICAgIGdyb2NlcnlTZWN0aW9uOiBIVE1MU2tlbGV0b24uZ3JvY2VyeUxpc3QsXG4gICAgLy9pbXBvcnQgc2VsZWN0ZWRSZWNpcGVzXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzLmxlbmd0aCA+IDApIHRoaXMucmVuZGVyKClcbiAgICAgICAgdGhpcy5yZWxvYWRHcm9jZXJ5KClcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdCA9IHRoaXMuY29tYmluZUdyb2NlcnlJdGVtcygpXG4gICAgICAgIHRoaXMuZ3JvY2VyeVNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5zZXRHcm9jZXJ5SFRNTCgpKVxuICAgIH0sXG4gICAgLy90YWtlIHNlbGVjdGVkUmVjaXBlcywgZXh0cmFjdCBvbmx5IGdyb2NlcmllcywgcGxhY2UgaW50byAxZCBhcnJheVxuICAgIHB1bGxHcm9jZXJpZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0ZW1wID0gbmV3IEFycmF5KClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlc1tpXS5pbmdyZWRpZW50cylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcC5mbGF0KClcbiAgICB9LFxuXG4vL0FkZCBncm9jZXJpZXMgdG9nZXRoZXJcblxuICAgIGNvbWJpbmVHcm9jZXJ5SXRlbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IGdyb3VwQnkodGhpcy5wdWxsR3JvY2VyaWVzKCksICdpbmdyZWRpZW50JylcbiAgICAgICAgY29uc3QgdGVtcEtleXMgPSBPYmplY3Qua2V5cyh0ZW1wKVxuICAgICAgICBjb25zdCByZXR1cm5WYWwgPSBbXVxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0ZW1wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy9mb3IgZWFjaCBrZXlcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IDBcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajx0ZW1wW3RlbXBLZXlzW2ldXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIC8vdW50aWwgMSB2YWx1ZSBsZWZ0XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gTnVtYmVyKHRlbXBbdGVtcEtleXNbaV1dW2pdLmFtb3VudClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB4ID0gbmV3IGdyb2NlcnlJdGVtKCh0ZW1wW3RlbXBLZXlzW2ldXVswXSkuaW5ncmVkaWVudCwgdG90YWwsICh0ZW1wW3RlbXBLZXlzW2ldXVswXSkubWVhc3VyZW1lbnQpXG4gICAgICAgICAgICByZXR1cm5WYWwucHVzaCh4KVxuXG4gICAgICAgICAgICAvLyB0ZW1wW3RlbXBLZXlzW2ldXS5zcGxpY2UoMSwgSW5maW5pdHkpXG4gICAgICAgICAgICAvLyAvL21ha2VzIGFtb3VudCBvZiBhbGwgZXF1YWwgdG8gdG90YWxcbiAgICAgICAgICAgIC8vIHRlbXBbdGVtcEtleXNbaV1dWzBdLmFtb3VudCA9IHRvdGFsXG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsXG4gICAgfSwgXG5cbi8vIC8vYWRkIGxpc3Qgb2YgZ3JvY2VyaWVzIHRvIGJvdHRvbSBpbiBzZWN0aW9uXG5cblxuICAgIGNyZWF0ZUdyb2NlcnlIVE1MOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBsZXQgX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgLy90byB0cmFjayBlYWNoIGl0ZW0sIG5lZWRlZCBmb3IgZGVsZXRpb24gYnV0dG9uIG11c3QgYmUgZmlyc3QgY2hpbGRcbiAgICAgICAgLy9tdXN0IGJlIHJpZ2h0IGFmdGVyIGNvbnRhaW5lcklEXG5cbiAgICAgICAgbGV0IGluZ3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGluZ3JOYW1lLmNsYXNzTGlzdCA9ICdpbmdyLW5hbWUnXG4gICAgICAgIGluZ3JOYW1lLnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50XG5cbiAgICAgICAgbGV0IGluZ3JBbW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGluZ3JBbW50LmNsYXNzTGlzdCA9ICdpbmdyLWFtbnQnXG4gICAgICAgIGluZ3JBbW50LnRleHRDb250ZW50ID0gaXRlbS5hbW91bnRcblxuICAgICAgICBsZXQgaW5nck1zciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBpbmdyTXNyLmNsYXNzTGlzdCA9ICdpbmdyLW1zcidcbiAgICAgICAgaW5nck1zci50ZXh0Q29udGVudCA9IGl0ZW0ubWVhc3VyZW1lbnRcbiAgICAgICAgXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5nck5hbWUpXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5nckFtbnQpXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5nck1zcilcblxuICAgICAgICByZXR1cm4gX2NvbnRhaW5lclxuICAgIH0sXG5cbiAgICBzZXRHcm9jZXJ5SFRNTDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5ncm9jZXJ5U2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmdyb2NlcnlTZWN0aW9uLnJlbW92ZUNoaWxkKHRoaXMuZ3JvY2VyeVNlY3Rpb24ubGFzdENoaWxkKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0dyb2NlcmllcydcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKVxuICAgICAgICBcbiAgICAgICAgbGV0IF9ncm9jZXJ5SFRNTExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIHRoaXMuZ3JvY2VyeVNlY3Rpb24uYXBwZW5kQ2hpbGQoX2dyb2NlcnlIVE1MTGlzdClcbiAgICAgICAgbGV0IHRlbXBLZXlzID0gT2JqZWN0LmtleXModGhpcy5ncm9jZXJ5TGlzdClcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5ncm9jZXJ5TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2dyb2NlcnlIVE1MTGlzdC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUdyb2NlcnlIVE1MKHRoaXMuZ3JvY2VyeUxpc3RbaV0pKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfZ3JvY2VyeUhUTUxMaXN0XG4gICAgfSxcblxuICAgIHJlbG9hZEdyb2Nlcnk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5yZW1vdmUtc2VsZWN0ZWQtcmVjaXBlJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5yZW5kZXIoKSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGVtcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uc2VsZWN0LXJlY2lwZS1idG4nKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wMltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMucmVuZGVyKCksIDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4vY3JlYXRlSFRNTFNrZWwnO1xuXG5IVE1MU2tlbGV0b24uaW5pdCgpXG5cbmltcG9ydCB7IHJlY2lwZUxpYnJhcnkgfSBmcm9tICcuL3JlY2lwZUxpYnJhcnknO1xuaW1wb3J0IHsgc2VsZWN0ZWRSZWNpcGVzIH0gZnJvbSAnLi9zZWxlY3RlZFJlY2lwZXMnO1xuaW1wb3J0IHsgZ3JvY2VyeUxpc3QgfSBmcm9tICcuL2dyb2NlcnlMaXN0JztcblxuXG5cblxuXG5cbmZ1bmN0aW9uIG9uU3RhcnQoKSB7XG5cbiAgICBzZXRUaW1lb3V0KHJlY2lwZUxpYnJhcnkuaW5pdCgpLCA1MDApXG4gICAgc2V0VGltZW91dChzZWxlY3RlZFJlY2lwZXMuaW5pdCgpLCA1MDApXG4gICAgc2V0VGltZW91dChncm9jZXJ5TGlzdC5pbml0KCksIDUwMClcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblN0YXJ0KVxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEVORCBSRUZBQ1RPUiAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5cbiAgICAgICAgICAgIC8vU2F2ZSBlbCB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgIFxuXG5cblxuLy9sb2FkIGFuZCBzZXQgZGlzcGxheSBvZiByZWNpcGVzIGFuZCBzZWxlY3RlZCBncm9jZXJpZXNcbi8vIGZ1bmN0aW9uIG9uU3RhcnQocmVjaXBlTGlicmFyeSwgZ3JvY2VyeUxpc3QpIHtcbi8vICAgICBsZXQgdGVtcFJlY2lwZUxpYnJhcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnSlNPTnJlY2lwZUxpYnJhcnknKVxuLy8gICAgIHRlbXBSZWNpcGVMaWJyYXJ5ID0gSlNPTi5wYXJzZSh0ZW1wUmVjaXBlTGlicmFyeSlcbi8vICAgICBpZiAodGVtcFJlY2lwZUxpYnJhcnkgPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAgIFxuICAgICAgICBcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgIHJlY2lwZUxpYnJhcnkgPSB0ZW1wUmVjaXBlTGlicmFyeVxuLy8gICAgIH1cbi8vICAgICBvblN0YXJ0UmVjaXBlVG9MaXN0KHJlY2lwZUxpYnJhcnksIHJlY2lwZUxpc3RIVE1MKVxuXG4vLyAgICAgbGV0IHRlbXBHcm9jZXJ5TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdncm9jZXJ5TGlzdCcpXG4vLyAgICAgdGVtcEdyb2NlcnlMaXN0ID0gSlNPTi5wYXJzZSh0ZW1wR3JvY2VyeUxpc3QpXG4vLyAgICAgaWYgKHRlbXBHcm9jZXJ5TGlzdCA9PSBudWxsKSByZXR1cm47XG4vLyAgICAgZ3JvY2VyeUxpc3QgPSB0ZW1wR3JvY2VyeUxpc3Rcbi8vICAgICBzZXRTZWxlY3RlZFJlY2lwZSgpXG4vLyAgICAgbGV0IGdyb2NlcnlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5ncm9jZXJ5LWxpc3QnKVxuLy8gICAgICAgICBncm9jZXJ5U2VjdGlvbi5hcHBlbmRDaGlsZChzZXRHcm9jZXJ5SFRNTCgnZ3JvY2VyeS1saXN0JykpO1xuLy8gfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICBcblxuXG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkanVzdCBmb3JtIHRleHRhcmVhcyB0byBiZSByZXNwb25zaXZlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gLy9yZWNpcGUgZm9ybSBzdWJtaXQsIG92ZXJyaWRlIGRlZmF1bHQgc3VibWl0IGJlaGF2aW9yIHdpdGggMiBldmVudCBsaXN0ZW5lcnMgXG5cblxuXG5cblxuLy8gLy9jcmVhdGUgaW5zZXQgY2Fyb3VzZWwgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBvblN0YXJ0UmVjaXBlVG9MaXN0KHJlY2lwZUxpYnJhcnksIHJlY2lwZUxpc3RIVE1MKSB7XG4vLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlY2lwZUxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgcmVjaXBlTGlzdEhUTUwuYXBwZW5kQ2hpbGQoY3JlYXRlT2JqdG9MaXN0KHJlY2lwZUxpYnJhcnlbaV0pLCAnZ3JvY2VyeS1saXN0Jyk7XG4vLyAgICAgfVxuLy8gfVxuICAgICAgICAgICAgICAgIFxuXG5cbi8vIC8vYWRkIHNhdmUgYnV0dG9uIG9yIG1vdmUgc2F2ZSBmdW5jdGlvbiB0byBmb3JtIHN1Ym1pdFxuXG4vLyBsZXQgZm9ybVNhdmVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5hZGQtcmVjaXBlJylcbi8vIGxldCBzYXZlQ2hhbmdlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4vLyBzYXZlQ2hhbmdlc0J1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlIENoYW5nZXMnXG4vLyBzYXZlQ2hhbmdlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UocmVjaXBlTGlicmFyeSlcbi8vICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoZ3JvY2VyeUxpc3QpXG5cbi8vIH0pXG4vLyBmb3JtU2F2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2F2ZUNoYW5nZXNCdXR0b24pXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBIVE1MU2tlbGV0b24gfSBmcm9tICcuL2NyZWF0ZUhUTUxTa2VsLmpzJztcbmltcG9ydCB7IHJlY2lwZUxpYnJhcnkgfSBmcm9tICcuL3JlY2lwZUxpYnJhcnkuanMnXG5pbXBvcnQgeyBzYXZlTG9hZExvY2FsU3RvcmFnZSB9IGZyb20gJy4vc2F2ZUxvYWRMb2NTdG9yYWdlLmpzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG5cbmZ1bmN0aW9uIGFkZEJ0bkhhbmRsZXIoKSB7XG4gICAgLy93aGF0IGhhcHBlbnMgb24gdGhpcy5jcmVhdGVCdG4gQ2xpY2tcbiAgICAvL2ZpbmQgcmVjaXBlIGluIHJlY2lwZSBsaWJyYXJ5LCBhZGQgdG8gc2VsZWN0ZWRSZWNpcGVzXG4gICAgbGV0IHRlbXAgPSB0aGlzLnBhcmVudEVsZW1lbnRcbiAgICBsZXQgdGVtcDEgPSByZWNpcGVMaWJyYXJ5LmZpbmRCeU5hbWUodGVtcC5jaGlsZHJlblsyXS50ZXh0Q29udGVudCkgLy9yZWNpcGVMaXN0SFRNTEl0ZW1zW2luZGV4IG9mIHJlY2lwZSBOYW1lXVxuICAgIHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMucHVzaCh0ZW1wMSk7XG5cbiAgICBzZWxlY3RlZFJlY2lwZXMuc2V0U2VsZWN0ZWRSZWNpcGUoKVxuICAgIHNhdmVMb2FkTG9jYWxTdG9yYWdlLnNhdmVUbyhzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzLCAnSlNPTnNlbGVjdGVkUmVjaXBlcycpXG5cblxufVxuXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZFJlY2lwZXMgPSB7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1dJUC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vaW1wb3J0IHJlY2lwZUxpYnJhcnlcbiAgICAvL2ltcG9ydCBzYXZlTG9hZFxuXG4gICAgc2VsZWN0ZWRSZWNpcGVzOiBuZXcgQXJyYXksXG4gICAgc2VsZWN0ZWRTZWN0aW9uOiBIVE1MU2tlbGV0b24uc2VsZWN0ZWRSZWNpcGVzLFxuICAgIHJlY2lwZXNTZWN0aW9uOiBIVE1MU2tlbGV0b24ucmVjaXBlcyxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9sb2FkIHNlbGVjdGVkIHJlY2lwZXNcbiAgICAgICAgdGhpcy5yZWNpcGVMaXN0SFRNTEl0ZW1zID0gdGhpcy5yZWNpcGVzU2VjdGlvbi5sYXN0Q2hpbGQuY2hpbGRyZW4sXG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlY2lwZXMgPSB0aGlzLmxvYWRMb2NhbFN0b3JhZ2UoKVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFJlY2lwZXMgPT09dW5kZWZpbmVkKSB0aGlzLnNlbGVjdGVkUmVjaXBlcyA9IG5ldyBBcnJheVxuICAgICAgICB0aGlzLnJlbmRlcigpXG5cblxuICAgIH0sXG5cbiAgICBsb2FkTG9jYWxTdG9yYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHggPSBzYXZlTG9hZExvY2FsU3RvcmFnZS5sb2FkKCdKU09Oc2VsZWN0ZWRSZWNpcGVzJylcbiAgICAgICAgcmV0dXJuIHggXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vaWYgc2VsZWN0ZWRSZWNpcGVzIGlzIGVtcHR5LCBub3RoaW5nLCBlbHNlIGxvYWQgSFRNTFxuICAgICAgICAvL2NyZWF0ZSBzZWN0aW9uIGFuZCBodG1sIGZvciBzZWxlY3RlZCByZWNpcGVzXG4gICAgICAgIHRoaXMuYWRkQnRucygpXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRSZWNpcGUoKVxuXG4gICAgfSxcblxuICAgIGFkZEJ0bnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVjaXBlTGlzdEhUTUxJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZWNpcGVMaXN0SFRNTEl0ZW1zW2ldLnByZXBlbmQodGhpcy5jcmVhdGVCdG4oKSlcbiAgICAgICAgfVxuICAgIH0sXG5cblxuLy9hZGQgbGlzdCBvZiBzZWxlY3RlZCByZWNpcGVzIHRvIHRvcCBhYm92ZSByZWNpcGVzXG4vLy8vLy8vLy8vLy8vLy8vLy9ORVhUTkVYVE5FWFQgU1RBUlQgSEVSRSBTVEFSVCBIRVJFIFNUQVJUIEhFUkUgKioqKiMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgIHNldFNlbGVjdGVkUmVjaXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vcmVtb3ZlIGFsbCBjaGlsZHJlbiwgc3RhcnQgZnJvbSBibGFua1xuICAgICAgICB3aGlsZSAodGhpcy5zZWxlY3RlZFNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlY3Rpb24ucmVtb3ZlQ2hpbGQodGhpcy5zZWxlY3RlZFNlY3Rpb24ubGFzdENoaWxkKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGxldCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ1NlbGVjdGVkIFJlY2lwZXMnXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpXG5cbiAgICAgICAgbGV0IF9zZWxlY3RlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFJlY2lwZXMpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8dGhpcy5zZWxlY3RlZFJlY2lwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQgPSB0aGlzLnNlbGVjdGVkUmVjaXBlc1tpXS5uYW1lXG4gICAgICAgICAgICBfc2VsZWN0ZWRMaXN0LmFwcGVuZENoaWxkKHNlbGVjdGVkSXRlbSlcblxuICAgICAgICAgICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICByZW1vdmVCdXR0b24udGV4dENvbnRlbnQgPSAneCdcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QgPSAncmVtb3ZlLXNlbGVjdGVkLXJlY2lwZSdcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHJlbW92ZUJ1dHRvbi5wYXJlbnRFbGVtZW50XG5cbiAgICAgICAgICAgICAgICBsZXQgZWxlbUluZGV4ID0gdGhpcy5zZWxlY3RlZFJlY2lwZXMuZmluZEluZGV4KChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwubmFtZSA9PSB0ZW1wLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVjaXBlcy5zcGxpY2UoZWxlbUluZGV4KVxuICAgICAgICAgICAgICAgIHRlbXAucmVtb3ZlKClcbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmFwcGVuZENoaWxkKF9zZWxlY3RlZExpc3QpXG5cbiAgICB9LFxuXG4gICAgXG5cblxuICAgIGNyZWF0ZUJ0bjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgYnRuLmNsYXNzTGlzdCA9ICdzZWxlY3QtcmVjaXBlLWJ0bic7XG4gICAgXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEJ0bkhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gYnRuO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==