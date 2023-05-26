"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["selectedRecipes"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_recipeLibrary_recipeLibrary_js"], () => (__webpack_exec__("./src/selectedRecipes/selectedRecipes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWRSZWNpcGVzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNPO0FBQ0s7QUFDL0M7Ozs7QUFJdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUZBQXdCO0FBQ3hDOztBQUVBO0FBQ0EsSUFBSSxxRkFBMkI7OztBQUcvQjs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0ZBQTRCO0FBQ2pELG9CQUFvQiwwRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQSxnQkFBZ0IsbUZBQXlCO0FBQ3pDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQSx3QkFBd0IscUNBQXFDO0FBQzdEO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9zZWxlY3RlZFJlY2lwZXMvc2VsZWN0ZWRSZWNpcGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsLmpzJztcbmltcG9ydCB7IHJlY2lwZUxpYnJhcnkgfSBmcm9tICcuLi9yZWNpcGVMaWJyYXJ5L3JlY2lwZUxpYnJhcnkuanMnXG5pbXBvcnQgeyBzYXZlTG9hZExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL3V0aWxzL3NhdmVMb2FkTG9jU3RvcmFnZS5qcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy5jc3MnO1xuXG5cblxuZnVuY3Rpb24gYWRkQnRuSGFuZGxlcigpIHtcbiAgICAvL3doYXQgaGFwcGVucyBvbiB0aGlzLmNyZWF0ZUJ0biBDbGlja1xuICAgIC8vZmluZCByZWNpcGUgaW4gcmVjaXBlIGxpYnJhcnksIGFkZCB0byBzZWxlY3RlZFJlY2lwZXNcbiAgICBsZXQgdGVtcCA9IHRoaXMucGFyZW50RWxlbWVudFxuICAgIGxldCB0ZW1wMSA9IHJlY2lwZUxpYnJhcnkuZmluZEJ5TmFtZSh0ZW1wLmNoaWxkcmVuWzJdLnRleHRDb250ZW50KSAvL3JlY2lwZUxpc3RIVE1MSXRlbXNbaW5kZXggb2YgcmVjaXBlIE5hbWVdXG4gICAgc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlcy5wdXNoKHRlbXAxKTtcblxuICAgIHNlbGVjdGVkUmVjaXBlcy5zZXRTZWxlY3RlZFJlY2lwZSgpXG4gICAgc2F2ZUxvYWRMb2NhbFN0b3JhZ2Uuc2F2ZVRvKHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMsICdKU09Oc2VsZWN0ZWRSZWNpcGVzJylcblxuXG59XG5cblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkUmVjaXBlcyA9IHtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vV0lQLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy9pbXBvcnQgcmVjaXBlTGlicmFyeVxuICAgIC8vaW1wb3J0IHNhdmVMb2FkXG5cbiAgICBzZWxlY3RlZFJlY2lwZXM6IG5ldyBBcnJheSxcbiAgICBzZWxlY3RlZFNlY3Rpb246IEhUTUxTa2VsZXRvbi5zZWxlY3RlZFJlY2lwZXMsXG4gICAgcmVjaXBlc1NlY3Rpb246IEhUTUxTa2VsZXRvbi5yZWNpcGVzLFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2xvYWQgc2VsZWN0ZWQgcmVjaXBlc1xuICAgICAgICB0aGlzLnJlY2lwZUxpc3RIVE1MSXRlbXMgPSB0aGlzLnJlY2lwZXNTZWN0aW9uLmxhc3RDaGlsZC5jaGlsZHJlbixcblxuICAgICAgICB0aGlzLnNlbGVjdGVkUmVjaXBlcyA9IHRoaXMubG9hZExvY2FsU3RvcmFnZSgpXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUmVjaXBlcyA9PT11bmRlZmluZWQpIHRoaXMuc2VsZWN0ZWRSZWNpcGVzID0gbmV3IEFycmF5XG4gICAgICAgIHRoaXMucmVuZGVyKClcblxuXG4gICAgfSxcblxuICAgIGxvYWRMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgeCA9IHNhdmVMb2FkTG9jYWxTdG9yYWdlLmxvYWQoJ0pTT05zZWxlY3RlZFJlY2lwZXMnKVxuICAgICAgICByZXR1cm4geCBcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9pZiBzZWxlY3RlZFJlY2lwZXMgaXMgZW1wdHksIG5vdGhpbmcsIGVsc2UgbG9hZCBIVE1MXG4gICAgICAgIC8vY3JlYXRlIHNlY3Rpb24gYW5kIGh0bWwgZm9yIHNlbGVjdGVkIHJlY2lwZXNcbiAgICAgICAgdGhpcy5hZGRCdG5zKClcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFJlY2lwZSgpXG5cbiAgICB9LFxuXG4gICAgYWRkQnRuczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWNpcGVMaXN0SFRNTEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlY2lwZUxpc3RIVE1MSXRlbXNbaV0ucHJlcGVuZCh0aGlzLmNyZWF0ZUJ0bigpKVxuICAgICAgICB9XG4gICAgfSxcblxuXG4vL2FkZCBsaXN0IG9mIHNlbGVjdGVkIHJlY2lwZXMgdG8gdG9wIGFib3ZlIHJlY2lwZXNcbi8vLy8vLy8vLy8vLy8vLy8vL05FWFRORVhUTkVYVCBTVEFSVCBIRVJFIFNUQVJUIEhFUkUgU1RBUlQgSEVSRSAqKioqIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4gICAgc2V0U2VsZWN0ZWRSZWNpcGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9yZW1vdmUgYWxsIGNoaWxkcmVuLCBzdGFydCBmcm9tIGJsYW5rXG4gICAgICAgIHdoaWxlICh0aGlzLnNlbGVjdGVkU2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbi5yZW1vdmVDaGlsZCh0aGlzLnNlbGVjdGVkU2VjdGlvbi5sYXN0Q2hpbGQpXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgbGV0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnU2VsZWN0ZWQgUmVjaXBlcydcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcilcblxuICAgICAgICBsZXQgX3NlbGVjdGVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkUmVjaXBlcylcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTx0aGlzLnNlbGVjdGVkUmVjaXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS50ZXh0Q29udGVudCA9IHRoaXMuc2VsZWN0ZWRSZWNpcGVzW2ldLm5hbWVcbiAgICAgICAgICAgIF9zZWxlY3RlZExpc3QuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRJdGVtKVxuXG4gICAgICAgICAgICBsZXQgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICd4J1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdCA9ICdyZW1vdmUtc2VsZWN0ZWQtcmVjaXBlJ1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gcmVtb3ZlQnV0dG9uLnBhcmVudEVsZW1lbnRcblxuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkUmVjaXBlcy5maW5kSW5kZXgoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC5uYW1lID09IHRlbXAudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWNpcGVzLnNwbGljZShlbGVtSW5kZXgpXG4gICAgICAgICAgICAgICAgdGVtcC5yZW1vdmUoKVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFNlY3Rpb24uYXBwZW5kQ2hpbGQoX3NlbGVjdGVkTGlzdClcblxuICAgIH0sXG5cbiAgICBcblxuXG4gICAgY3JlYXRlQnRuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICBidG4uY2xhc3NMaXN0ID0gJ3NlbGVjdC1yZWNpcGUtYnRuJztcbiAgICBcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQnRuSGFuZGxlcik7XG4gICAgICAgIHJldHVybiBidG47XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9