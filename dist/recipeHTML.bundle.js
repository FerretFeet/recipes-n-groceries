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
/* harmony import */ var _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/saveLoadLocStorage */ "./src/utils/saveLoadLocStorage.js");
/* harmony import */ var _recipeLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipeLibrary */ "./src/recipeLibrary/recipeLibrary.js");


 //used in deletebutton
//FIX SO NOLONGER IMPORT RECIPE LIB

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
                let elemIndex = _recipeLibrary__WEBPACK_IMPORTED_MODULE_2__.recipeLibrary.recipeLibrary.findIndex((el) => {
                    el.name == elemNameID;
                });
                _recipeLibrary__WEBPACK_IMPORTED_MODULE_2__.recipeLibrary.recipeLibrary.splice(elemIndex);
                _deletebutton.parentElement.remove();
                _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_1__.saveLoadLocalStorage.saveTo(_recipeLibrary__WEBPACK_IMPORTED_MODULE_2__.recipeLibrary.recipeLibrary, 'JSONrecipeLibrary')

                // recipeLibrary.splice(this.previousElementSibling.textContent)
                // remove(this.parentElement)
            });
            return _deletebutton;
        }
}


/***/ }),

/***/ "./src/recipeLibrary/recipeLibrary.js":
/*!********************************************!*\
  !*** ./src/recipeLibrary/recipeLibrary.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recipeLibrary: () => (/* binding */ recipeLibrary)
/* harmony export */ });
/* harmony import */ var _utils_recipeClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/recipeClass */ "./src/utils/recipeClass.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/saveLoadLocStorage */ "./src/utils/saveLoadLocStorage.js");
/* harmony import */ var _recipeHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipeHTML */ "./src/recipeLibrary/recipeHTML.js");
/* harmony import */ var _recipeForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipeForm */ "./src/recipeLibrary/recipeForm.js");
// import { HTMLSkeleton } from '../utils/createHTMLSkel';







function formHandler (e) {
    e.preventDefault();
    let formData = new FormData(this.recipeForm)

    formData = e.formData
    let _name = formData.get('name');
    let _ingredients = formData.get('ingredients') 
    let _steps = formData.get('steps')

    _ingredients = _ingredients.trim().split(';');
    for (let i = 0; i < _ingredients.length; i++) {
            _ingredients[i] = _ingredients[i].trim().split(',');
            for (let j = 0; j <  _ingredients[i].length; j++) {
                _ingredients[i][j] = _ingredients[i][j].trim();
            }
    }
    let _ingrObjList = []

    for (let i=0;i<_ingredients.length;i++) {
        let _ingrObj = { ingredient:undefined, amount:undefined, measurement:undefined}

        _ingrObj.ingredient = _ingredients[i][0]
        _ingrObj.amount = _ingredients[i][1]
        _ingrObj.measurement = _ingredients[i][2]
        _ingrObjList.push(_ingrObj)
    }

    _steps = _steps.trim().split(';');
    for (let i = 0; i < _steps.length; i++) {
        _steps[i] = _steps[i].trim()
    }
    const newRecipe = new _utils_recipeClass__WEBPACK_IMPORTED_MODULE_0__["default"](_name, _ingrObjList, _steps);


    //way to extract this? necessary before modularizing
    recipeLibrary.recipeLibrary.push(newRecipe)
    _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_2__.saveLoadLocalStorage.saveTo(recipeLibrary.recipeLibrary, 'JSONrecipeLibrary')
    _recipeHTML__WEBPACK_IMPORTED_MODULE_3__.recipeHTML.render(recipeLibrary.recipeLibrary)


}


const recipeLibrary = {

    recipeLibrary: new Array,
        //import recipeForm
        //import recipeHTML
    init: function() {
        console.log(this.recipeLibrary)
        this.recipeLibrary = _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_2__.saveLoadLocalStorage.load('JSONrecipeLibrary');
        console.log(this.recipeLibrary)
        if (this.recipeLibrary === undefined) this.recipeLibrary = this.defaultLibrary
        // recipeForm = recipeForm
        this.render() //create Recipes List HTML
        // recipeHTML = recipeHTML
        _recipeForm__WEBPACK_IMPORTED_MODULE_4__.recipeForm.form.addEventListener('formdata', formHandler) //add response to library and updateHTML on submit

    },

    findByName: function(name) {
        for (let i = 0; i < this.recipeLibrary.length; i++) {
            if (this.recipeLibrary[i].name == name) {
                return this.recipeLibrary[i]
            }
        }
    },




    render: function() {
        _recipeForm__WEBPACK_IMPORTED_MODULE_4__.recipeForm.init() //create RecipeForm HTML & Add to Doc
        _recipeHTML__WEBPACK_IMPORTED_MODULE_3__.recipeHTML.render(this.recipeLibrary)
    },


    defaultLibrary: [{
                    name: "scrambled eggs",
                    ingredients: [
                        {
                            ingredient: "eggs",
                            amount: "1",
                            measurement: "whole"
                        },
                        {
                            ingredient: "pepper",
                            amount: "1",
                            measurement: "tsp"
                        },
                        {
                            ingredient: "salt",
                            amount: "1",
                            measurement: "tsp"
                        },
                        {
                            ingredient: "oil",
                            amount: "1",
                            measurement: "tbsp"
                        }
                    ],
                    steps: [
                        "cook"
                    ]
                },
                {
                    name: "omellete",
                    ingredients: [
                        {
                            ingredient: "eggs",
                            amount: "5",
                            measurement: "whole"
                        },
                        {
                            ingredient: "pepper",
                            amount: "2",
                            measurement: "tsp"
                        },
                        {
                            ingredient: "salt",
                            amount: "3",
                            measurement: "tsp"
                        },
                        {
                            ingredient: "bacon",
                            amount: "4",
                            measurement: "strips"
                        }
                    ],
                    steps: [
                        "cook"
                    ]
                }]



}

 





     



/***/ }),

/***/ "./src/utils/recipeClass.js":
/*!**********************************!*\
  !*** ./src/utils/recipeClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Recipe)
/* harmony export */ });

class Recipe {
    constructor(name, ingredients, steps) {
        this.name = name;
        //ingredients is a double array,[[item, amount, measurement]]
        this.ingredients = ingredients;
        this.steps = steps;
    }
}


/***/ }),

/***/ "./src/utils/saveLoadLocStorage.js":
/*!*****************************************!*\
  !*** ./src/utils/saveLoadLocStorage.js ***!
  \*****************************************/
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
/******/ __webpack_require__.O(0, ["src_recipeLibrary_recipeForm_js"], () => (__webpack_exec__("./src/recipeLibrary/recipeHTML.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvcmVjaXBlTGlicmFyeS9yZWNpcGVIVE1MLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvcmVjaXBlTGlicmFyeS9yZWNpcGVMaWJyYXJ5LmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvdXRpbHMvcmVjaXBlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy91dGlscy9zYXZlTG9hZExvY1N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRNTFNrZWxldG9uIH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlSFRNTFNrZWwnXG5pbXBvcnQgeyBzYXZlTG9hZExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL3V0aWxzL3NhdmVMb2FkTG9jU3RvcmFnZSdcbmltcG9ydCB7IHJlY2lwZUxpYnJhcnkgfSBmcm9tICcuL3JlY2lwZUxpYnJhcnknIC8vdXNlZCBpbiBkZWxldGVidXR0b25cbi8vRklYIFNPIE5PTE9OR0VSIElNUE9SVCBSRUNJUEUgTElCXG5cbmV4cG9ydCBjb25zdCByZWNpcGVIVE1MID0ge1xuXG5cblxuICAgIHNlY3Rpb25SZWNpcGVzOiBIVE1MU2tlbGV0b24ucmVjaXBlcyxcblxuICAgIHJlY2lwZUlEQ291bnRlcjogMCxcblxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAocmVjaXBlTGliKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlVUxQYXJlbnQoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY2lwZUxpYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZWNpcGVMaXN0SFRNTC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU9ianRvTGlzdChyZWNpcGVMaWJbaV0pKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNyZWF0ZUluc2V0TXVsdGlQYWdlTGlzdDogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAvL3NvcnQgYW5kIHNlYXJjaFxuICAgIFxuICAgIC8vICAgICAvLzEwIGl0ZW1zIGF0IGEgdGltZVxuICAgIC8vICAgICBmdW5jdGlvbiBjcmVhdGUxMFJlY2lwZUxpc3QoKSB7XG4gICAgICAgICAgICBcbiAgICAvLyAgICAgfVxuICAgIFxuICAgIFxuICAgIC8vICAgICAvL2NoYW5nZSBwYWdlXG4gICAgLy8gfSxcblxuXG4gICAgY3JlYXRlVUxQYXJlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZWNpcGVMaXN0SFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgdGhpcy5zZWN0aW9uUmVjaXBlcy5hcHBlbmRDaGlsZCh0aGlzLnJlY2lwZUxpc3RIVE1MKVxuICAgICAgICByZXR1cm4gdGhpcy5yZWNpcGVMaXN0SFRNTFxuICAgIH0sXG5cbiAgICBjcmVhdGVPYmp0b0xpc3Q6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGNvbnRhaW5lci5pZCA9IGByZWNpcGUtJHt0aGlzLnJlY2lwZUlEQ291bnRlcn1gIFxuXG4gICAgICAgIGxldCBfZGVsZXRlYnV0dG9uID0gdGhpcy5jcmVhdGVEZWxldGVCdXR0b24odGhpcy5yZWNpcGVJRENvdW50ZXIsIGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfZGVsZXRlYnV0dG9uKVxuXG4gICAgICAgIGxldCBvYmpOYW1lID0gdGhpcy5jcmVhdGVOYW1lRGl2KGl0ZW0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2JqTmFtZSlcblxuICAgICAgICAvLyB0aGlzLmJ0biA9IGNyZWF0ZUFkZEdyb2NlcnlCdG4oc2VjdGlvbkNsYXNzKTtcbiAgICAgICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bilcblxuICAgIC8vY3JlYXRlIHVsIGZvciBpbmdyZWRpZW50c1xuICAgICAgICBsZXQgb2JqSW5nciA9IHRoaXMuY3JlYXRlRW51bUluZ3JlZGllbnRMaXN0KGl0ZW0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2JqSW5ncilcblxuICAgICAgICBsZXQgb2JqU3RlcHMgPSB0aGlzLmNyZWF0ZUVudW1TdGVwc0xpc3QoaXRlbSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmpTdGVwcylcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfSxcblxuXG5cbiAgICAgICAgY3JlYXRlTmFtZURpdjogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBvYmpOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBvYmpOYW1lLmNsYXNzTGlzdCA9ICdvYmotbmFtZSc7XG4gICAgICAgICAgICBvYmpOYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG9iak5hbWU7XG4gICAgICAgIH0sXG5cblxuICAgICAgICBjcmVhdGVFbnVtU3RlcHNMaXN0OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgbGV0IG9ialN0ZXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcbiAgICAgICAgICAgIG9ialN0ZXBzLmNsYXNzTGlzdCA9ICdvYmotc3RlcHMnO1xuICAgICAgICAgICAgbGV0IHN0ZXBzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgc3RlcHNUaXRsZS50ZXh0Q29udGVudCA9ICdTdGVwcyc7XG4gICAgICAgICAgICBvYmpTdGVwcy5hcHBlbmRDaGlsZChzdGVwc1RpdGxlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS5zdGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBfc3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgX3N0ZXAuY2xhc3NMaXN0ID0gJ3N0ZXAnO1xuICAgICAgICAgICAgICAgIF9zdGVwLnRleHRDb250ZW50ID0gaXRlbS5zdGVwc1tpXTtcbiAgICAgICAgICAgICAgICBvYmpTdGVwcy5hcHBlbmRDaGlsZChfc3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqU3RlcHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlRW51bUluZ3JlZGllbnRMaXN0OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgbGV0IG9iakluZ3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgb2JqSW5nci5jbGFzc0xpc3QgPSAnb2JqLWluZ3InO1xuICAgICAgICAgICAgb2JqSW5nci5uYW1lID0gJ2luZ3JlZGllbnRzJztcbiAgICAgICAgICAgIGxldCBpbmdyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgaW5nclRpdGxlLnRleHRDb250ZW50ID0gJ0luZ3JlZGllbnRzJztcbiAgICAgICAgICAgIG9iakluZ3IuYXBwZW5kQ2hpbGQoaW5nclRpdGxlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS5pbmdyZWRpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBfaW5nciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgX25hbWUudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRzW2ldLmluZ3JlZGllbnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgX2FtbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgX2FtbnQudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRzW2ldLmFtb3VudDtcblxuICAgICAgICAgICAgICAgIGxldCBfbWVhc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBfbWVhc3VyZS50ZXh0Q29udGVudCA9IGl0ZW0uaW5ncmVkaWVudHNbaV0ubWVhc3VyZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBfaW5nci5hcHBlbmRDaGlsZChfYW1udCk7XG4gICAgICAgICAgICAgICAgX2luZ3IuYXBwZW5kQ2hpbGQoX21lYXN1cmUpO1xuICAgICAgICAgICAgICAgIF9pbmdyLmFwcGVuZENoaWxkKF9uYW1lKTtcbiAgICAgICAgICAgICAgICBvYmpJbmdyLmFwcGVuZENoaWxkKF9pbmdyKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iakluZ3I7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlRGVsZXRlQnV0dG9uOiBmdW5jdGlvbiAocmVjaXBlSURDb3VudGVyLCBwYXJlbnQpIHtcbiAgICAgICAgICAgIGxldCBfZGVsZXRlYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBfZGVsZXRlYnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgX2RlbGV0ZWJ1dHRvbi5pZCA9IHJlY2lwZUlEQ291bnRlcjtcbiAgICAgICAgICAgIHJlY2lwZUlEQ291bnRlcisrO1xuICAgICAgICAgICAgX2RlbGV0ZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbU5hbWVJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVjaXBlLVwiICsgX2RlbGV0ZWJ1dHRvbi5pZCArICcgPiAub2JqLW5hbWUnKTtcbiAgICAgICAgICAgICAgICBlbGVtTmFtZUlEID0gZWxlbU5hbWVJRC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbUluZGV4ID0gcmVjaXBlTGlicmFyeS5yZWNpcGVMaWJyYXJ5LmZpbmRJbmRleCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWwubmFtZSA9PSBlbGVtTmFtZUlEO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeS5zcGxpY2UoZWxlbUluZGV4KTtcbiAgICAgICAgICAgICAgICBfZGVsZXRlYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgc2F2ZUxvYWRMb2NhbFN0b3JhZ2Uuc2F2ZVRvKHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeSwgJ0pTT05yZWNpcGVMaWJyYXJ5JylcblxuICAgICAgICAgICAgICAgIC8vIHJlY2lwZUxpYnJhcnkuc3BsaWNlKHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUodGhpcy5wYXJlbnRFbGVtZW50KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gX2RlbGV0ZWJ1dHRvbjtcbiAgICAgICAgfVxufVxuIiwiLy8gaW1wb3J0IHsgSFRNTFNrZWxldG9uIH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlSFRNTFNrZWwnO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuLi91dGlscy9yZWNpcGVDbGFzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgc2F2ZUxvYWRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9zYXZlTG9hZExvY1N0b3JhZ2UnO1xuaW1wb3J0IHsgcmVjaXBlSFRNTCB9IGZyb20gJy4vcmVjaXBlSFRNTCc7XG5pbXBvcnQgeyByZWNpcGVGb3JtIH0gZnJvbSAnLi9yZWNpcGVGb3JtJztcblxuXG5mdW5jdGlvbiBmb3JtSGFuZGxlciAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5yZWNpcGVGb3JtKVxuXG4gICAgZm9ybURhdGEgPSBlLmZvcm1EYXRhXG4gICAgbGV0IF9uYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJyk7XG4gICAgbGV0IF9pbmdyZWRpZW50cyA9IGZvcm1EYXRhLmdldCgnaW5ncmVkaWVudHMnKSBcbiAgICBsZXQgX3N0ZXBzID0gZm9ybURhdGEuZ2V0KCdzdGVwcycpXG5cbiAgICBfaW5ncmVkaWVudHMgPSBfaW5ncmVkaWVudHMudHJpbSgpLnNwbGl0KCc7Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9pbmdyZWRpZW50c1tpXSA9IF9pbmdyZWRpZW50c1tpXS50cmltKCkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgIF9pbmdyZWRpZW50c1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIF9pbmdyZWRpZW50c1tpXVtqXSA9IF9pbmdyZWRpZW50c1tpXVtqXS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGxldCBfaW5nck9iakxpc3QgPSBbXVxuXG4gICAgZm9yIChsZXQgaT0wO2k8X2luZ3JlZGllbnRzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IF9pbmdyT2JqID0geyBpbmdyZWRpZW50OnVuZGVmaW5lZCwgYW1vdW50OnVuZGVmaW5lZCwgbWVhc3VyZW1lbnQ6dW5kZWZpbmVkfVxuXG4gICAgICAgIF9pbmdyT2JqLmluZ3JlZGllbnQgPSBfaW5ncmVkaWVudHNbaV1bMF1cbiAgICAgICAgX2luZ3JPYmouYW1vdW50ID0gX2luZ3JlZGllbnRzW2ldWzFdXG4gICAgICAgIF9pbmdyT2JqLm1lYXN1cmVtZW50ID0gX2luZ3JlZGllbnRzW2ldWzJdXG4gICAgICAgIF9pbmdyT2JqTGlzdC5wdXNoKF9pbmdyT2JqKVxuICAgIH1cblxuICAgIF9zdGVwcyA9IF9zdGVwcy50cmltKCkuc3BsaXQoJzsnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9zdGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfc3RlcHNbaV0gPSBfc3RlcHNbaV0udHJpbSgpXG4gICAgfVxuICAgIGNvbnN0IG5ld1JlY2lwZSA9IG5ldyBSZWNpcGUoX25hbWUsIF9pbmdyT2JqTGlzdCwgX3N0ZXBzKTtcblxuXG4gICAgLy93YXkgdG8gZXh0cmFjdCB0aGlzPyBuZWNlc3NhcnkgYmVmb3JlIG1vZHVsYXJpemluZ1xuICAgIHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeS5wdXNoKG5ld1JlY2lwZSlcbiAgICBzYXZlTG9hZExvY2FsU3RvcmFnZS5zYXZlVG8ocmVjaXBlTGlicmFyeS5yZWNpcGVMaWJyYXJ5LCAnSlNPTnJlY2lwZUxpYnJhcnknKVxuICAgIHJlY2lwZUhUTUwucmVuZGVyKHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeSlcblxuXG59XG5cblxuZXhwb3J0IGNvbnN0IHJlY2lwZUxpYnJhcnkgPSB7XG5cbiAgICByZWNpcGVMaWJyYXJ5OiBuZXcgQXJyYXksXG4gICAgICAgIC8vaW1wb3J0IHJlY2lwZUZvcm1cbiAgICAgICAgLy9pbXBvcnQgcmVjaXBlSFRNTFxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlY2lwZUxpYnJhcnkpXG4gICAgICAgIHRoaXMucmVjaXBlTGlicmFyeSA9IHNhdmVMb2FkTG9jYWxTdG9yYWdlLmxvYWQoJ0pTT05yZWNpcGVMaWJyYXJ5Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVjaXBlTGlicmFyeSlcbiAgICAgICAgaWYgKHRoaXMucmVjaXBlTGlicmFyeSA9PT0gdW5kZWZpbmVkKSB0aGlzLnJlY2lwZUxpYnJhcnkgPSB0aGlzLmRlZmF1bHRMaWJyYXJ5XG4gICAgICAgIC8vIHJlY2lwZUZvcm0gPSByZWNpcGVGb3JtXG4gICAgICAgIHRoaXMucmVuZGVyKCkgLy9jcmVhdGUgUmVjaXBlcyBMaXN0IEhUTUxcbiAgICAgICAgLy8gcmVjaXBlSFRNTCA9IHJlY2lwZUhUTUxcbiAgICAgICAgcmVjaXBlRm9ybS5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2Zvcm1kYXRhJywgZm9ybUhhbmRsZXIpIC8vYWRkIHJlc3BvbnNlIHRvIGxpYnJhcnkgYW5kIHVwZGF0ZUhUTUwgb24gc3VibWl0XG5cbiAgICB9LFxuXG4gICAgZmluZEJ5TmFtZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVjaXBlTGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVjaXBlTGlicmFyeVtpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWNpcGVMaWJyYXJ5W2ldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG5cblxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVjaXBlRm9ybS5pbml0KCkgLy9jcmVhdGUgUmVjaXBlRm9ybSBIVE1MICYgQWRkIHRvIERvY1xuICAgICAgICByZWNpcGVIVE1MLnJlbmRlcih0aGlzLnJlY2lwZUxpYnJhcnkpXG4gICAgfSxcblxuXG4gICAgZGVmYXVsdExpYnJhcnk6IFt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2NyYW1ibGVkIGVnZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcImVnZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiBcIndob2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudDogXCJwZXBwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiBcInRzcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwic2FsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6IFwidHNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudDogXCJvaWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiBcInRic3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb29rXCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm9tZWxsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudDogXCJlZ2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ3aG9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwicGVwcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0c3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcInNhbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiBcInRzcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwiYmFjb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiBcInN0cmlwc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvb2tcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfV1cblxuXG5cbn1cblxuIFxuXG5cblxuXG5cbiAgICAgXG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjaXBlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbmdyZWRpZW50cywgc3RlcHMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgLy9pbmdyZWRpZW50cyBpcyBhIGRvdWJsZSBhcnJheSxbW2l0ZW0sIGFtb3VudCwgbWVhc3VyZW1lbnRdXVxuICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XG4gICAgICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3Qgc2F2ZUxvYWRMb2NhbFN0b3JhZ2UgPSB7XG4gICAgXG4gICAgbG9hZDogZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhZGRyZXNzKVxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKVxuICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKVxuICAgICAgICBpZiAodGVtcCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBsZXQgZWwgPSBKU09OLnBhcnNlKHRlbXApXG4gICAgICAgIHJldHVybiBlbFxuICAgICAgICBcbiAgICB9LFxuXG4gICAgc2F2ZVRvOiBmdW5jdGlvbiAoZWwsIGFkZHJlc3MpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBKU09OLnN0cmluZ2lmeShlbClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWRkcmVzcywgdGVtcClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9