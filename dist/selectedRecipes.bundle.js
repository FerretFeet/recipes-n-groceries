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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_recipeLibrary_recipeHTML_js-src_recipeLibrary_recipeLibrary_js"], () => (__webpack_exec__("./src/selectedRecipes/selectedRecipes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWRSZWNpcGVzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNPO0FBQ0s7QUFDL0M7Ozs7QUFJdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUZBQXdCO0FBQ3hDOztBQUVBO0FBQ0EsSUFBSSxxRkFBMkI7OztBQUcvQjs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0ZBQTRCO0FBQ2pELG9CQUFvQiwwRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQSxnQkFBZ0IsbUZBQXlCO0FBQ3pDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQSx3QkFBd0IscUNBQXFDO0FBQzdEO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRkFBMkI7O0FBRTNDO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3NlbGVjdGVkUmVjaXBlcy9zZWxlY3RlZFJlY2lwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRNTFNrZWxldG9uIH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlSFRNTFNrZWwuanMnO1xuaW1wb3J0IHsgcmVjaXBlTGlicmFyeSB9IGZyb20gJy4uL3JlY2lwZUxpYnJhcnkvcmVjaXBlTGlicmFyeS5qcydcbmltcG9ydCB7IHNhdmVMb2FkTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vdXRpbHMvc2F2ZUxvYWRMb2NTdG9yYWdlLmpzJztcbmltcG9ydCAnLi4vc3R5bGVzLmNzcyc7XG5cblxuXG5mdW5jdGlvbiBhZGRCdG5IYW5kbGVyKCkge1xuICAgIC8vd2hhdCBoYXBwZW5zIG9uIHRoaXMuY3JlYXRlQnRuIENsaWNrXG4gICAgLy9maW5kIHJlY2lwZSBpbiByZWNpcGUgbGlicmFyeSwgYWRkIHRvIHNlbGVjdGVkUmVjaXBlc1xuICAgIGxldCB0ZW1wID0gdGhpcy5wYXJlbnRFbGVtZW50XG4gICAgbGV0IHRlbXAxID0gcmVjaXBlTGlicmFyeS5maW5kQnlOYW1lKHRlbXAuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQpIC8vcmVjaXBlTGlzdEhUTUxJdGVtc1tpbmRleCBvZiByZWNpcGUgTmFtZV1cbiAgICBzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzLnB1c2godGVtcDEpO1xuXG4gICAgc2VsZWN0ZWRSZWNpcGVzLnNldFNlbGVjdGVkUmVjaXBlKClcbiAgICBzYXZlTG9hZExvY2FsU3RvcmFnZS5zYXZlVG8oc2VsZWN0ZWRSZWNpcGVzLnNlbGVjdGVkUmVjaXBlcywgJ0pTT05zZWxlY3RlZFJlY2lwZXMnKVxuXG5cbn1cblxuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRSZWNpcGVzID0ge1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9XSVAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvL2ltcG9ydCByZWNpcGVMaWJyYXJ5XG4gICAgLy9pbXBvcnQgc2F2ZUxvYWRcblxuICAgIHNlbGVjdGVkUmVjaXBlczogbmV3IEFycmF5LFxuICAgIHNlbGVjdGVkU2VjdGlvbjogSFRNTFNrZWxldG9uLnNlbGVjdGVkUmVjaXBlcyxcbiAgICByZWNpcGVzU2VjdGlvbjogSFRNTFNrZWxldG9uLnJlY2lwZXMsXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vbG9hZCBzZWxlY3RlZCByZWNpcGVzXG4gICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUxJdGVtcyA9IHRoaXMucmVjaXBlc1NlY3Rpb24ubGFzdENoaWxkLmNoaWxkcmVuLFxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZWNpcGVzID0gdGhpcy5sb2FkTG9jYWxTdG9yYWdlKClcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRSZWNpcGVzID09PXVuZGVmaW5lZCkgdGhpcy5zZWxlY3RlZFJlY2lwZXMgPSBuZXcgQXJyYXlcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuXG5cbiAgICB9LFxuXG4gICAgbG9hZExvY2FsU3RvcmFnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB4ID0gc2F2ZUxvYWRMb2NhbFN0b3JhZ2UubG9hZCgnSlNPTnNlbGVjdGVkUmVjaXBlcycpXG4gICAgICAgIHJldHVybiB4IFxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2lmIHNlbGVjdGVkUmVjaXBlcyBpcyBlbXB0eSwgbm90aGluZywgZWxzZSBsb2FkIEhUTUxcbiAgICAgICAgLy9jcmVhdGUgc2VjdGlvbiBhbmQgaHRtbCBmb3Igc2VsZWN0ZWQgcmVjaXBlc1xuICAgICAgICB0aGlzLmFkZEJ0bnMoKVxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkUmVjaXBlKClcblxuICAgIH0sXG5cbiAgICBhZGRCdG5zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlY2lwZUxpc3RIVE1MSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUxJdGVtc1tpXS5wcmVwZW5kKHRoaXMuY3JlYXRlQnRuKCkpXG4gICAgICAgIH1cbiAgICB9LFxuXG5cbi8vYWRkIGxpc3Qgb2Ygc2VsZWN0ZWQgcmVjaXBlcyB0byB0b3AgYWJvdmUgcmVjaXBlc1xuLy8vLy8vLy8vLy8vLy8vLy8vTkVYVE5FWFRORVhUIFNUQVJUIEhFUkUgU1RBUlQgSEVSRSBTVEFSVCBIRVJFICoqKiojIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgICBzZXRTZWxlY3RlZFJlY2lwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL3JlbW92ZSBhbGwgY2hpbGRyZW4sIHN0YXJ0IGZyb20gYmxhbmtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLnJlbW92ZUNoaWxkKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmxhc3RDaGlsZClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBsZXQgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdTZWxlY3RlZCBSZWNpcGVzJ1xuICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKVxuXG4gICAgICAgIGxldCBfc2VsZWN0ZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRSZWNpcGVzKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPHRoaXMuc2VsZWN0ZWRSZWNpcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50ID0gdGhpcy5zZWxlY3RlZFJlY2lwZXNbaV0ubmFtZVxuICAgICAgICAgICAgX3NlbGVjdGVkTGlzdC5hcHBlbmRDaGlsZChzZWxlY3RlZEl0ZW0pXG5cbiAgICAgICAgICAgIGxldCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdCA9ICdyZW1vdmUtc2VsZWN0ZWQtcmVjaXBlJ1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gcmVtb3ZlQnV0dG9uLnBhcmVudEVsZW1lbnRcblxuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkUmVjaXBlcy5maW5kSW5kZXgoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC5uYW1lID09IHRlbXAudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1JbmRleClcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVjaXBlcy5zcGxpY2UoZWxlbUluZGV4LCAxKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRSZWNpcGVzKVxuICAgICAgICAgICAgICAgIHNhdmVMb2FkTG9jYWxTdG9yYWdlLnNhdmVUbyh0aGlzLnNlbGVjdGVkUmVjaXBlcywgJ0pTT05zZWxlY3RlZFJlY2lwZXMnKVxuXG4gICAgICAgICAgICAgICAgdGVtcC5yZW1vdmUoKVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFNlY3Rpb24uYXBwZW5kQ2hpbGQoX3NlbGVjdGVkTGlzdClcblxuICAgIH0sXG5cbiAgICBcblxuXG4gICAgY3JlYXRlQnRuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICBidG4uY2xhc3NMaXN0ID0gJ3NlbGVjdC1yZWNpcGUtYnRuJztcbiAgICBcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQnRuSGFuZGxlcik7XG4gICAgICAgIHJldHVybiBidG47XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9