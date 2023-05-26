"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["recipeHTML"],{

/***/ "./src/recipeLibrary/recipeHTML.js":
/*!*****************************************!*\
  !*** ./src/recipeLibrary/recipeHTML.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recipeHTML: () => (/* binding */ recipeHTML)
/* harmony export */ });
/* harmony import */ var _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHTMLSkel */ "./src/utils/createHTMLSkel.js");


const recipeHTML = {



    sectionRecipes: _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.recipes,

    recipeIDCounter: 0,


    render: function (recipeLib) {
        this.createULParent()
        for (let i = 0; i < recipeLib.length; i++) {
            this.recipeListHTML.appendChild(this.createObjtoList(recipeLib[i]))
        }
    },

    // createInsetMultiPageList: function () {
    //     //sort and search
    
    //     //10 items at a time
    //     function create10RecipeList() {
            
    //     }
    
    
    //     //change page
    // },


    createULParent: function () {
        this.recipeListHTML = document.createElement('ul')
        this.sectionRecipes.appendChild(this.recipeListHTML)
        return this.recipeListHTML
    },

    createObjtoList: function (item) {
        let container = document.createElement('li')
        container.id = `recipe-${this.recipeIDCounter}` 

        let _deletebutton = this.createDeleteButton(this.recipeIDCounter, container);
        container.appendChild(_deletebutton)

        let objName = this.createNameDiv(item);
        container.appendChild(objName)

        // this.btn = createAddGroceryBtn(sectionClass);
        // container.appendChild(btn)

    //create ul for ingredients
        let objIngr = this.createEnumIngredientList(item);
        container.appendChild(objIngr)

        let objSteps = this.createEnumStepsList(item);
        container.appendChild(objSteps)

        return container
    },



        createNameDiv: function (item) {
            let objName = document.createElement('div');
            objName.classList = 'obj-name';
            objName.textContent = item.name;
            return objName;
        },


        createEnumStepsList: function (item) {
            let objSteps = document.createElement('ol');
            objSteps.classList = 'obj-steps';
            let stepsTitle = document.createElement('h4');
            stepsTitle.textContent = 'Steps';
            objSteps.appendChild(stepsTitle);
            for (let i = 0; i < item.steps.length; i++) {
                let _step = document.createElement('li');
                _step.classList = 'step';
                _step.textContent = item.steps[i];
                objSteps.appendChild(_step);
            }
            return objSteps;
        },

        createEnumIngredientList: function (item) {
            let objIngr = document.createElement('ul');
            objIngr.classList = 'obj-ingr';
            objIngr.name = 'ingredients';
            let ingrTitle = document.createElement('h4');
            ingrTitle.textContent = 'Ingredients';
            objIngr.appendChild(ingrTitle);
            for (let i = 0; i < item.ingredients.length; i++) {
                let _ingr = document.createElement('li');

                let _name = document.createElement('span');
                _name.textContent = item.ingredients[i].ingredient;

                let _amnt = document.createElement('span');
                _amnt.textContent = item.ingredients[i].amount;

                let _measure = document.createElement('span');
                _measure.textContent = item.ingredients[i].measurement;

                _ingr.appendChild(_amnt);
                _ingr.appendChild(_measure);
                _ingr.appendChild(_name);
                objIngr.appendChild(_ingr);

            }
            return objIngr;
        },

        createDeleteButton: function (recipeIDCounter, parent) {
            let _deletebutton = document.createElement('button');
            _deletebutton.textContent = 'X';
            _deletebutton.id = recipeIDCounter;
            recipeIDCounter++;
            _deletebutton.addEventListener('click', () => {
                let elemNameID = document.querySelector("#recipe-" + _deletebutton.id + ' > .obj-name');
                elemNameID = elemNameID.textContent;
                let elemIndex = recipeLibrary.recipeLibrary.findIndex((el) => {
                    el.name == elemNameID;
                });
                recipeLibrary.recipeLibrary.splice(elemIndex);
                _deletebutton.parentElement.remove();
                saveLoadLocalStorage.saveTo(recipeLibrary.recipeLibrary, 'JSONrecipeLibrary')

                // recipeLibrary.splice(this.previousElementSibling.textContent)
                // remove(this.parentElement)
            });
            return _deletebutton;
        }
}


/***/ }),

/***/ "./src/utils/createHTMLSkel.js":
/*!*************************************!*\
  !*** ./src/utils/createHTMLSkel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLSkeleton: () => (/* binding */ HTMLSkeleton)
/* harmony export */ });

const HTMLSkeleton = {

    docbody: document.querySelector('body'),


    init: function() {
        this.render()
    },
    render: function() {
        this.createHeader();
        this.createSections()
    },

    createHeader: function() {
        this.header = document.createElement('header')
        this.createNav()

    },

    nav: document.createElement('nav'),
    ulNav :document.createElement('ul'),

    createNav: function() {

        this.nav.appendChild(this.ulNav)

        this.ulNav.appendChild(this.homeNavLink())
        this.ulNav.appendChild(this.createNavLink('Recipes', ''))
        // this.ulNav.appendChild(this.createSearchBar())
    },

    homeNavLink: function() {

        let li = document.createElement('li')
        let link = document.createElement('a')
        link.href = ''
        let logo = document.createElement('img')
        logo.src = ''
        logo.alt = ''

        link.appendChild(logo)
        li.appendChild(link)

        return li
    },

    createNavLink: function(title, url) {
        let li = document.createElement('li')
        let link = document.createElement('a')
        link.href = url
        link.textContent = title

        li.appendChild(link)

        return li
    },

    createSearchBar() {
        console.log('wip')
    },

    selectedRecipes: document.createElement('section'),
    addRecipe: document.createElement('section'),
    recipes: document.createElement('section'),
    groceryList: document.createElement('section'),

    
    createSections: function() {
        


        this.docbody.appendChild(this.selectedRecipes)
        this.docbody.appendChild(this.addRecipe)
        this.docbody.appendChild(this.recipes)
        this.docbody.appendChild(this.groceryList)
    
    },

    // createSec: function(id) {
    //     let sec = document.createElement('section')
    //     sec.id = id
    //     return sec
    // },
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/recipeLibrary/recipeHTML.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlSFRNTC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7O0FBRS9DOzs7O0FBSVAsb0JBQW9CLHVFQUFvQjs7QUFFeEM7OztBQUdBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCOztBQUV0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7Ozs7QUFJTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSU87O0FBRVA7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3JlY2lwZUxpYnJhcnkvcmVjaXBlSFRNTC5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3V0aWxzL2NyZWF0ZUhUTUxTa2VsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJ1xuXG5leHBvcnQgY29uc3QgcmVjaXBlSFRNTCA9IHtcblxuXG5cbiAgICBzZWN0aW9uUmVjaXBlczogSFRNTFNrZWxldG9uLnJlY2lwZXMsXG5cbiAgICByZWNpcGVJRENvdW50ZXI6IDAsXG5cblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKHJlY2lwZUxpYikge1xuICAgICAgICB0aGlzLmNyZWF0ZVVMUGFyZW50KClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNpcGVMaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUwuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPYmp0b0xpc3QocmVjaXBlTGliW2ldKSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjcmVhdGVJbnNldE11bHRpUGFnZUxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgLy9zb3J0IGFuZCBzZWFyY2hcbiAgICBcbiAgICAvLyAgICAgLy8xMCBpdGVtcyBhdCBhIHRpbWVcbiAgICAvLyAgICAgZnVuY3Rpb24gY3JlYXRlMTBSZWNpcGVMaXN0KCkge1xuICAgICAgICAgICAgXG4gICAgLy8gICAgIH1cbiAgICBcbiAgICBcbiAgICAvLyAgICAgLy9jaGFuZ2UgcGFnZVxuICAgIC8vIH0sXG5cblxuICAgIGNyZWF0ZVVMUGFyZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIHRoaXMuc2VjdGlvblJlY2lwZXMuYXBwZW5kQ2hpbGQodGhpcy5yZWNpcGVMaXN0SFRNTClcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjaXBlTGlzdEhUTUxcbiAgICB9LFxuXG4gICAgY3JlYXRlT2JqdG9MaXN0OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBjb250YWluZXIuaWQgPSBgcmVjaXBlLSR7dGhpcy5yZWNpcGVJRENvdW50ZXJ9YCBcblxuICAgICAgICBsZXQgX2RlbGV0ZWJ1dHRvbiA9IHRoaXMuY3JlYXRlRGVsZXRlQnV0dG9uKHRoaXMucmVjaXBlSURDb3VudGVyLCBjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoX2RlbGV0ZWJ1dHRvbilcblxuICAgICAgICBsZXQgb2JqTmFtZSA9IHRoaXMuY3JlYXRlTmFtZURpdihpdGVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iak5hbWUpXG5cbiAgICAgICAgLy8gdGhpcy5idG4gPSBjcmVhdGVBZGRHcm9jZXJ5QnRuKHNlY3Rpb25DbGFzcyk7XG4gICAgICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pXG5cbiAgICAvL2NyZWF0ZSB1bCBmb3IgaW5ncmVkaWVudHNcbiAgICAgICAgbGV0IG9iakluZ3IgPSB0aGlzLmNyZWF0ZUVudW1JbmdyZWRpZW50TGlzdChpdGVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iakluZ3IpXG5cbiAgICAgICAgbGV0IG9ialN0ZXBzID0gdGhpcy5jcmVhdGVFbnVtU3RlcHNMaXN0KGl0ZW0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2JqU3RlcHMpXG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH0sXG5cblxuXG4gICAgICAgIGNyZWF0ZU5hbWVEaXY6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBsZXQgb2JqTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgb2JqTmFtZS5jbGFzc0xpc3QgPSAnb2JqLW5hbWUnO1xuICAgICAgICAgICAgb2JqTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBvYmpOYW1lO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgY3JlYXRlRW51bVN0ZXBzTGlzdDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBvYmpTdGVwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgICAgICAgICBvYmpTdGVwcy5jbGFzc0xpc3QgPSAnb2JqLXN0ZXBzJztcbiAgICAgICAgICAgIGxldCBzdGVwc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIHN0ZXBzVGl0bGUudGV4dENvbnRlbnQgPSAnU3RlcHMnO1xuICAgICAgICAgICAgb2JqU3RlcHMuYXBwZW5kQ2hpbGQoc3RlcHNUaXRsZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX3N0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIF9zdGVwLmNsYXNzTGlzdCA9ICdzdGVwJztcbiAgICAgICAgICAgICAgICBfc3RlcC50ZXh0Q29udGVudCA9IGl0ZW0uc3RlcHNbaV07XG4gICAgICAgICAgICAgICAgb2JqU3RlcHMuYXBwZW5kQ2hpbGQoX3N0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialN0ZXBzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUVudW1JbmdyZWRpZW50TGlzdDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBvYmpJbmdyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIG9iakluZ3IuY2xhc3NMaXN0ID0gJ29iai1pbmdyJztcbiAgICAgICAgICAgIG9iakluZ3IubmFtZSA9ICdpbmdyZWRpZW50cyc7XG4gICAgICAgICAgICBsZXQgaW5nclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGluZ3JUaXRsZS50ZXh0Q29udGVudCA9ICdJbmdyZWRpZW50cyc7XG4gICAgICAgICAgICBvYmpJbmdyLmFwcGVuZENoaWxkKGluZ3JUaXRsZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2luZ3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICAgICAgbGV0IF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIF9uYW1lLnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50c1tpXS5pbmdyZWRpZW50O1xuXG4gICAgICAgICAgICAgICAgbGV0IF9hbW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIF9hbW50LnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50c1tpXS5hbW91bnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgX21lYXN1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgX21lYXN1cmUudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRzW2ldLm1lYXN1cmVtZW50O1xuXG4gICAgICAgICAgICAgICAgX2luZ3IuYXBwZW5kQ2hpbGQoX2FtbnQpO1xuICAgICAgICAgICAgICAgIF9pbmdyLmFwcGVuZENoaWxkKF9tZWFzdXJlKTtcbiAgICAgICAgICAgICAgICBfaW5nci5hcHBlbmRDaGlsZChfbmFtZSk7XG4gICAgICAgICAgICAgICAgb2JqSW5nci5hcHBlbmRDaGlsZChfaW5ncik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpJbmdyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZURlbGV0ZUJ1dHRvbjogZnVuY3Rpb24gKHJlY2lwZUlEQ291bnRlciwgcGFyZW50KSB7XG4gICAgICAgICAgICBsZXQgX2RlbGV0ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgX2RlbGV0ZWJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIF9kZWxldGVidXR0b24uaWQgPSByZWNpcGVJRENvdW50ZXI7XG4gICAgICAgICAgICByZWNpcGVJRENvdW50ZXIrKztcbiAgICAgICAgICAgIF9kZWxldGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1OYW1lSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlY2lwZS1cIiArIF9kZWxldGVidXR0b24uaWQgKyAnID4gLm9iai1uYW1lJyk7XG4gICAgICAgICAgICAgICAgZWxlbU5hbWVJRCA9IGVsZW1OYW1lSUQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmRleCA9IHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeS5maW5kSW5kZXgoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsLm5hbWUgPT0gZWxlbU5hbWVJRDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkuc3BsaWNlKGVsZW1JbmRleCk7XG4gICAgICAgICAgICAgICAgX2RlbGV0ZWJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHNhdmVMb2FkTG9jYWxTdG9yYWdlLnNhdmVUbyhyZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnksICdKU09OcmVjaXBlTGlicmFyeScpXG5cbiAgICAgICAgICAgICAgICAvLyByZWNpcGVMaWJyYXJ5LnNwbGljZSh0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlKHRoaXMucGFyZW50RWxlbWVudClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF9kZWxldGVidXR0b247XG4gICAgICAgIH1cbn1cbiIsIlxuZXhwb3J0IGNvbnN0IEhUTUxTa2VsZXRvbiA9IHtcblxuICAgIGRvY2JvZHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcblxuXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2VjdGlvbnMoKVxuICAgIH0sXG5cbiAgICBjcmVhdGVIZWFkZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgICAgIHRoaXMuY3JlYXRlTmF2KClcblxuICAgIH0sXG5cbiAgICBuYXY6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpLFxuICAgIHVsTmF2IDpkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpLFxuXG4gICAgY3JlYXRlTmF2OiBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh0aGlzLnVsTmF2KVxuXG4gICAgICAgIHRoaXMudWxOYXYuYXBwZW5kQ2hpbGQodGhpcy5ob21lTmF2TGluaygpKVxuICAgICAgICB0aGlzLnVsTmF2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTmF2TGluaygnUmVjaXBlcycsICcnKSlcbiAgICAgICAgLy8gdGhpcy51bE5hdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNlYXJjaEJhcigpKVxuICAgIH0sXG5cbiAgICBob21lTmF2TGluazogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBsaW5rLmhyZWYgPSAnJ1xuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGxvZ28uc3JjID0gJydcbiAgICAgICAgbG9nby5hbHQgPSAnJ1xuXG4gICAgICAgIGxpbmsuYXBwZW5kQ2hpbGQobG9nbylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGluaylcblxuICAgICAgICByZXR1cm4gbGlcbiAgICB9LFxuXG4gICAgY3JlYXRlTmF2TGluazogZnVuY3Rpb24odGl0bGUsIHVybCkge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGxpbmsuaHJlZiA9IHVybFxuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gdGl0bGVcblxuICAgICAgICBsaS5hcHBlbmRDaGlsZChsaW5rKVxuXG4gICAgICAgIHJldHVybiBsaVxuICAgIH0sXG5cbiAgICBjcmVhdGVTZWFyY2hCYXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aXAnKVxuICAgIH0sXG5cbiAgICBzZWxlY3RlZFJlY2lwZXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcbiAgICBhZGRSZWNpcGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcbiAgICByZWNpcGVzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgZ3JvY2VyeUxpc3Q6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcblxuICAgIFxuICAgIGNyZWF0ZVNlY3Rpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgXG5cblxuICAgICAgICB0aGlzLmRvY2JvZHkuYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3RlZFJlY2lwZXMpXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFkZFJlY2lwZSlcbiAgICAgICAgdGhpcy5kb2Nib2R5LmFwcGVuZENoaWxkKHRoaXMucmVjaXBlcylcbiAgICAgICAgdGhpcy5kb2Nib2R5LmFwcGVuZENoaWxkKHRoaXMuZ3JvY2VyeUxpc3QpXG4gICAgXG4gICAgfSxcblxuICAgIC8vIGNyZWF0ZVNlYzogZnVuY3Rpb24oaWQpIHtcbiAgICAvLyAgICAgbGV0IHNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIC8vICAgICBzZWMuaWQgPSBpZFxuICAgIC8vICAgICByZXR1cm4gc2VjXG4gICAgLy8gfSxcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=