"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["src_selectedRecipes_selectedRecipes_js"],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NlbGVjdGVkUmVjaXBlc19zZWxlY3RlZFJlY2lwZXNfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDWTtBQUNuQjtBQUMvQzs7QUFFTzs7OztBQUlQLG9CQUFvQix1RUFBb0I7O0FBRXhDOzs7QUFHQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7O0FBSUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRkFBcUM7QUFDckU7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCLDhFQUFrQztBQUNsRDtBQUNBLGdCQUFnQixrRkFBMkIsQ0FBQyx1RUFBMkI7O0FBRXZFO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQSxZQUFZLGVBQWU7QUFDZTtBQUNuQjtBQUM0QztBQUN6QjtBQUNBOzs7QUFHMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQztBQUMvQyxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkMsb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0EsMEJBQTBCLDBEQUFNOzs7QUFHaEM7QUFDQTtBQUNBLElBQUksa0ZBQTJCO0FBQy9CLElBQUksMERBQWlCOzs7QUFHckI7OztBQUdPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0ZBQXlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlFQUFnQzs7QUFFeEMsS0FBSzs7QUFFTDtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7OztBQUtMO0FBQ0EsUUFBUSx3REFBZTtBQUN2QixRQUFRLDBEQUFpQjtBQUN6QixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7O0FBSWpCOztBQUVBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SjBEO0FBQ087QUFDSztBQUMvQzs7OztBQUl2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRkFBd0I7QUFDeEM7O0FBRUE7QUFDQSxJQUFJLHFGQUEyQjs7O0FBRy9COzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrRkFBNEI7QUFDakQsb0JBQW9CLDBFQUFvQjs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDtBQUNBLGdCQUFnQixtRkFBeUI7QUFDekM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBLHdCQUF3QixxQ0FBcUM7QUFDN0Q7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFGQUEyQjs7QUFFM0M7QUFDQSxhQUFhOzs7QUFHYjtBQUNBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvcmVjaXBlTGlicmFyeS9yZWNpcGVIVE1MLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvcmVjaXBlTGlicmFyeS9yZWNpcGVMaWJyYXJ5LmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvc2VsZWN0ZWRSZWNpcGVzL3NlbGVjdGVkUmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3V0aWxzL3JlY2lwZUNsYXNzLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvdXRpbHMvc2F2ZUxvYWRMb2NTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJ1xuaW1wb3J0IHsgc2F2ZUxvYWRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9zYXZlTG9hZExvY1N0b3JhZ2UnXG5pbXBvcnQgeyByZWNpcGVMaWJyYXJ5IH0gZnJvbSAnLi9yZWNpcGVMaWJyYXJ5JyAvL3VzZWQgaW4gZGVsZXRlYnV0dG9uXG4vL0ZJWCBTTyBOT0xPTkdFUiBJTVBPUlQgUkVDSVBFIExJQlxuXG5leHBvcnQgY29uc3QgcmVjaXBlSFRNTCA9IHtcblxuXG5cbiAgICBzZWN0aW9uUmVjaXBlczogSFRNTFNrZWxldG9uLnJlY2lwZXMsXG5cbiAgICByZWNpcGVJRENvdW50ZXI6IDAsXG5cblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKHJlY2lwZUxpYikge1xuICAgICAgICB0aGlzLmNyZWF0ZVVMUGFyZW50KClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNpcGVMaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUwuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPYmp0b0xpc3QocmVjaXBlTGliW2ldKSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjcmVhdGVJbnNldE11bHRpUGFnZUxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgLy9zb3J0IGFuZCBzZWFyY2hcbiAgICBcbiAgICAvLyAgICAgLy8xMCBpdGVtcyBhdCBhIHRpbWVcbiAgICAvLyAgICAgZnVuY3Rpb24gY3JlYXRlMTBSZWNpcGVMaXN0KCkge1xuICAgICAgICAgICAgXG4gICAgLy8gICAgIH1cbiAgICBcbiAgICBcbiAgICAvLyAgICAgLy9jaGFuZ2UgcGFnZVxuICAgIC8vIH0sXG5cblxuICAgIGNyZWF0ZVVMUGFyZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIHRoaXMuc2VjdGlvblJlY2lwZXMuYXBwZW5kQ2hpbGQodGhpcy5yZWNpcGVMaXN0SFRNTClcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjaXBlTGlzdEhUTUxcbiAgICB9LFxuXG4gICAgY3JlYXRlT2JqdG9MaXN0OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBjb250YWluZXIuaWQgPSBgcmVjaXBlLSR7dGhpcy5yZWNpcGVJRENvdW50ZXJ9YCBcblxuICAgICAgICBsZXQgX2RlbGV0ZWJ1dHRvbiA9IHRoaXMuY3JlYXRlRGVsZXRlQnV0dG9uKHRoaXMucmVjaXBlSURDb3VudGVyLCBjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoX2RlbGV0ZWJ1dHRvbilcblxuICAgICAgICBsZXQgb2JqTmFtZSA9IHRoaXMuY3JlYXRlTmFtZURpdihpdGVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iak5hbWUpXG5cbiAgICAgICAgLy8gdGhpcy5idG4gPSBjcmVhdGVBZGRHcm9jZXJ5QnRuKHNlY3Rpb25DbGFzcyk7XG4gICAgICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pXG5cbiAgICAvL2NyZWF0ZSB1bCBmb3IgaW5ncmVkaWVudHNcbiAgICAgICAgbGV0IG9iakluZ3IgPSB0aGlzLmNyZWF0ZUVudW1JbmdyZWRpZW50TGlzdChpdGVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iakluZ3IpXG5cbiAgICAgICAgbGV0IG9ialN0ZXBzID0gdGhpcy5jcmVhdGVFbnVtU3RlcHNMaXN0KGl0ZW0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2JqU3RlcHMpXG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH0sXG5cblxuXG4gICAgICAgIGNyZWF0ZU5hbWVEaXY6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBsZXQgb2JqTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgb2JqTmFtZS5jbGFzc0xpc3QgPSAnb2JqLW5hbWUnO1xuICAgICAgICAgICAgb2JqTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBvYmpOYW1lO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgY3JlYXRlRW51bVN0ZXBzTGlzdDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBvYmpTdGVwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgICAgICAgICBvYmpTdGVwcy5jbGFzc0xpc3QgPSAnb2JqLXN0ZXBzJztcbiAgICAgICAgICAgIGxldCBzdGVwc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIHN0ZXBzVGl0bGUudGV4dENvbnRlbnQgPSAnU3RlcHMnO1xuICAgICAgICAgICAgb2JqU3RlcHMuYXBwZW5kQ2hpbGQoc3RlcHNUaXRsZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX3N0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIF9zdGVwLmNsYXNzTGlzdCA9ICdzdGVwJztcbiAgICAgICAgICAgICAgICBfc3RlcC50ZXh0Q29udGVudCA9IGl0ZW0uc3RlcHNbaV07XG4gICAgICAgICAgICAgICAgb2JqU3RlcHMuYXBwZW5kQ2hpbGQoX3N0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialN0ZXBzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUVudW1JbmdyZWRpZW50TGlzdDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBvYmpJbmdyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIG9iakluZ3IuY2xhc3NMaXN0ID0gJ29iai1pbmdyJztcbiAgICAgICAgICAgIG9iakluZ3IubmFtZSA9ICdpbmdyZWRpZW50cyc7XG4gICAgICAgICAgICBsZXQgaW5nclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGluZ3JUaXRsZS50ZXh0Q29udGVudCA9ICdJbmdyZWRpZW50cyc7XG4gICAgICAgICAgICBvYmpJbmdyLmFwcGVuZENoaWxkKGluZ3JUaXRsZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2luZ3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICAgICAgbGV0IF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIF9uYW1lLnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50c1tpXS5pbmdyZWRpZW50O1xuXG4gICAgICAgICAgICAgICAgbGV0IF9hbW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIF9hbW50LnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50c1tpXS5hbW91bnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgX21lYXN1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgX21lYXN1cmUudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRzW2ldLm1lYXN1cmVtZW50O1xuXG4gICAgICAgICAgICAgICAgX2luZ3IuYXBwZW5kQ2hpbGQoX2FtbnQpO1xuICAgICAgICAgICAgICAgIF9pbmdyLmFwcGVuZENoaWxkKF9tZWFzdXJlKTtcbiAgICAgICAgICAgICAgICBfaW5nci5hcHBlbmRDaGlsZChfbmFtZSk7XG4gICAgICAgICAgICAgICAgb2JqSW5nci5hcHBlbmRDaGlsZChfaW5ncik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpJbmdyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZURlbGV0ZUJ1dHRvbjogZnVuY3Rpb24gKHJlY2lwZUlEQ291bnRlciwgcGFyZW50KSB7XG4gICAgICAgICAgICBsZXQgX2RlbGV0ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgX2RlbGV0ZWJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIF9kZWxldGVidXR0b24uaWQgPSByZWNpcGVJRENvdW50ZXI7XG4gICAgICAgICAgICByZWNpcGVJRENvdW50ZXIrKztcbiAgICAgICAgICAgIF9kZWxldGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1OYW1lSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlY2lwZS1cIiArIF9kZWxldGVidXR0b24uaWQgKyAnID4gLm9iai1uYW1lJyk7XG4gICAgICAgICAgICAgICAgZWxlbU5hbWVJRCA9IGVsZW1OYW1lSUQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmRleCA9IHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeS5maW5kSW5kZXgoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsLm5hbWUgPT0gZWxlbU5hbWVJRDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkuc3BsaWNlKGVsZW1JbmRleCk7XG4gICAgICAgICAgICAgICAgX2RlbGV0ZWJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHNhdmVMb2FkTG9jYWxTdG9yYWdlLnNhdmVUbyhyZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnksICdKU09OcmVjaXBlTGlicmFyeScpXG5cbiAgICAgICAgICAgICAgICAvLyByZWNpcGVMaWJyYXJ5LnNwbGljZSh0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlKHRoaXMucGFyZW50RWxlbWVudClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF9kZWxldGVidXR0b247XG4gICAgICAgIH1cbn1cbiIsIi8vIGltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi4vdXRpbHMvcmVjaXBlQ2xhc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHNhdmVMb2FkTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vdXRpbHMvc2F2ZUxvYWRMb2NTdG9yYWdlJztcbmltcG9ydCB7IHJlY2lwZUhUTUwgfSBmcm9tICcuL3JlY2lwZUhUTUwnO1xuaW1wb3J0IHsgcmVjaXBlRm9ybSB9IGZyb20gJy4vcmVjaXBlRm9ybSc7XG5cblxuZnVuY3Rpb24gZm9ybUhhbmRsZXIgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMucmVjaXBlRm9ybSlcblxuICAgIGZvcm1EYXRhID0gZS5mb3JtRGF0YVxuICAgIGxldCBfbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xuICAgIGxldCBfaW5ncmVkaWVudHMgPSBmb3JtRGF0YS5nZXQoJ2luZ3JlZGllbnRzJykgXG4gICAgbGV0IF9zdGVwcyA9IGZvcm1EYXRhLmdldCgnc3RlcHMnKVxuXG4gICAgX2luZ3JlZGllbnRzID0gX2luZ3JlZGllbnRzLnRyaW0oKS5zcGxpdCgnOycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2luZ3JlZGllbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfaW5ncmVkaWVudHNbaV0gPSBfaW5ncmVkaWVudHNbaV0udHJpbSgpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8ICBfaW5ncmVkaWVudHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBfaW5ncmVkaWVudHNbaV1bal0gPSBfaW5ncmVkaWVudHNbaV1bal0udHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgX2luZ3JPYmpMaXN0ID0gW11cblxuICAgIGZvciAobGV0IGk9MDtpPF9pbmdyZWRpZW50cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBfaW5nck9iaiA9IHsgaW5ncmVkaWVudDp1bmRlZmluZWQsIGFtb3VudDp1bmRlZmluZWQsIG1lYXN1cmVtZW50OnVuZGVmaW5lZH1cblxuICAgICAgICBfaW5nck9iai5pbmdyZWRpZW50ID0gX2luZ3JlZGllbnRzW2ldWzBdXG4gICAgICAgIF9pbmdyT2JqLmFtb3VudCA9IF9pbmdyZWRpZW50c1tpXVsxXVxuICAgICAgICBfaW5nck9iai5tZWFzdXJlbWVudCA9IF9pbmdyZWRpZW50c1tpXVsyXVxuICAgICAgICBfaW5nck9iakxpc3QucHVzaChfaW5nck9iailcbiAgICB9XG5cbiAgICBfc3RlcHMgPSBfc3RlcHMudHJpbSgpLnNwbGl0KCc7Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX3N0ZXBzW2ldID0gX3N0ZXBzW2ldLnRyaW0oKVxuICAgIH1cbiAgICBjb25zdCBuZXdSZWNpcGUgPSBuZXcgUmVjaXBlKF9uYW1lLCBfaW5nck9iakxpc3QsIF9zdGVwcyk7XG5cblxuICAgIC8vd2F5IHRvIGV4dHJhY3QgdGhpcz8gbmVjZXNzYXJ5IGJlZm9yZSBtb2R1bGFyaXppbmdcbiAgICByZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkucHVzaChuZXdSZWNpcGUpXG4gICAgc2F2ZUxvYWRMb2NhbFN0b3JhZ2Uuc2F2ZVRvKHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeSwgJ0pTT05yZWNpcGVMaWJyYXJ5JylcbiAgICByZWNpcGVIVE1MLnJlbmRlcihyZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkpXG5cblxufVxuXG5cbmV4cG9ydCBjb25zdCByZWNpcGVMaWJyYXJ5ID0ge1xuXG4gICAgcmVjaXBlTGlicmFyeTogbmV3IEFycmF5LFxuICAgICAgICAvL2ltcG9ydCByZWNpcGVGb3JtXG4gICAgICAgIC8vaW1wb3J0IHJlY2lwZUhUTUxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWNpcGVMaWJyYXJ5KVxuICAgICAgICB0aGlzLnJlY2lwZUxpYnJhcnkgPSBzYXZlTG9hZExvY2FsU3RvcmFnZS5sb2FkKCdKU09OcmVjaXBlTGlicmFyeScpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlY2lwZUxpYnJhcnkpXG4gICAgICAgIGlmICh0aGlzLnJlY2lwZUxpYnJhcnkgPT09IHVuZGVmaW5lZCkgdGhpcy5yZWNpcGVMaWJyYXJ5ID0gdGhpcy5kZWZhdWx0TGlicmFyeVxuICAgICAgICAvLyByZWNpcGVGb3JtID0gcmVjaXBlRm9ybVxuICAgICAgICB0aGlzLnJlbmRlcigpIC8vY3JlYXRlIFJlY2lwZXMgTGlzdCBIVE1MXG4gICAgICAgIC8vIHJlY2lwZUhUTUwgPSByZWNpcGVIVE1MXG4gICAgICAgIHJlY2lwZUZvcm0uZm9ybS5hZGRFdmVudExpc3RlbmVyKCdmb3JtZGF0YScsIGZvcm1IYW5kbGVyKSAvL2FkZCByZXNwb25zZSB0byBsaWJyYXJ5IGFuZCB1cGRhdGVIVE1MIG9uIHN1Ym1pdFxuXG4gICAgfSxcblxuICAgIGZpbmRCeU5hbWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlY2lwZUxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY2lwZUxpYnJhcnlbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjaXBlTGlicmFyeVtpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuXG5cblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlY2lwZUZvcm0uaW5pdCgpIC8vY3JlYXRlIFJlY2lwZUZvcm0gSFRNTCAmIEFkZCB0byBEb2NcbiAgICAgICAgcmVjaXBlSFRNTC5yZW5kZXIodGhpcy5yZWNpcGVMaWJyYXJ5KVxuICAgIH0sXG5cblxuICAgIGRlZmF1bHRMaWJyYXJ5OiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNjcmFtYmxlZCBlZ2dzXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudDogXCJlZ2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ3aG9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwicGVwcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0c3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcInNhbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiBcInRzcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwib2lsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0YnNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29va1wiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJvbWVsbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwiZWdnc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6IFwid2hvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcInBlcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6IFwidHNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudDogXCJzYWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0c3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcImJhY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJzdHJpcHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb29rXCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1dXG5cblxuXG59XG5cbiBcblxuXG5cblxuXG4gICAgIFxuXG4iLCJpbXBvcnQgeyBIVE1MU2tlbGV0b24gfSBmcm9tICcuLi91dGlscy9jcmVhdGVIVE1MU2tlbC5qcyc7XG5pbXBvcnQgeyByZWNpcGVMaWJyYXJ5IH0gZnJvbSAnLi4vcmVjaXBlTGlicmFyeS9yZWNpcGVMaWJyYXJ5LmpzJ1xuaW1wb3J0IHsgc2F2ZUxvYWRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9zYXZlTG9hZExvY1N0b3JhZ2UuanMnO1xuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJztcblxuXG5cbmZ1bmN0aW9uIGFkZEJ0bkhhbmRsZXIoKSB7XG4gICAgLy93aGF0IGhhcHBlbnMgb24gdGhpcy5jcmVhdGVCdG4gQ2xpY2tcbiAgICAvL2ZpbmQgcmVjaXBlIGluIHJlY2lwZSBsaWJyYXJ5LCBhZGQgdG8gc2VsZWN0ZWRSZWNpcGVzXG4gICAgbGV0IHRlbXAgPSB0aGlzLnBhcmVudEVsZW1lbnRcbiAgICBsZXQgdGVtcDEgPSByZWNpcGVMaWJyYXJ5LmZpbmRCeU5hbWUodGVtcC5jaGlsZHJlblsyXS50ZXh0Q29udGVudCkgLy9yZWNpcGVMaXN0SFRNTEl0ZW1zW2luZGV4IG9mIHJlY2lwZSBOYW1lXVxuICAgIHNlbGVjdGVkUmVjaXBlcy5zZWxlY3RlZFJlY2lwZXMucHVzaCh0ZW1wMSk7XG5cbiAgICBzZWxlY3RlZFJlY2lwZXMuc2V0U2VsZWN0ZWRSZWNpcGUoKVxuICAgIHNhdmVMb2FkTG9jYWxTdG9yYWdlLnNhdmVUbyhzZWxlY3RlZFJlY2lwZXMuc2VsZWN0ZWRSZWNpcGVzLCAnSlNPTnNlbGVjdGVkUmVjaXBlcycpXG5cblxufVxuXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZFJlY2lwZXMgPSB7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1dJUC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vaW1wb3J0IHJlY2lwZUxpYnJhcnlcbiAgICAvL2ltcG9ydCBzYXZlTG9hZFxuXG4gICAgc2VsZWN0ZWRSZWNpcGVzOiBuZXcgQXJyYXksXG4gICAgc2VsZWN0ZWRTZWN0aW9uOiBIVE1MU2tlbGV0b24uc2VsZWN0ZWRSZWNpcGVzLFxuICAgIHJlY2lwZXNTZWN0aW9uOiBIVE1MU2tlbGV0b24ucmVjaXBlcyxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9sb2FkIHNlbGVjdGVkIHJlY2lwZXNcbiAgICAgICAgdGhpcy5yZWNpcGVMaXN0SFRNTEl0ZW1zID0gdGhpcy5yZWNpcGVzU2VjdGlvbi5sYXN0Q2hpbGQuY2hpbGRyZW4sXG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlY2lwZXMgPSB0aGlzLmxvYWRMb2NhbFN0b3JhZ2UoKVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFJlY2lwZXMgPT09dW5kZWZpbmVkKSB0aGlzLnNlbGVjdGVkUmVjaXBlcyA9IG5ldyBBcnJheVxuICAgICAgICB0aGlzLnJlbmRlcigpXG5cblxuICAgIH0sXG5cbiAgICBsb2FkTG9jYWxTdG9yYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHggPSBzYXZlTG9hZExvY2FsU3RvcmFnZS5sb2FkKCdKU09Oc2VsZWN0ZWRSZWNpcGVzJylcbiAgICAgICAgcmV0dXJuIHggXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vaWYgc2VsZWN0ZWRSZWNpcGVzIGlzIGVtcHR5LCBub3RoaW5nLCBlbHNlIGxvYWQgSFRNTFxuICAgICAgICAvL2NyZWF0ZSBzZWN0aW9uIGFuZCBodG1sIGZvciBzZWxlY3RlZCByZWNpcGVzXG4gICAgICAgIHRoaXMuYWRkQnRucygpXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRSZWNpcGUoKVxuXG4gICAgfSxcblxuICAgIGFkZEJ0bnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVjaXBlTGlzdEhUTUxJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZWNpcGVMaXN0SFRNTEl0ZW1zW2ldLnByZXBlbmQodGhpcy5jcmVhdGVCdG4oKSlcbiAgICAgICAgfVxuICAgIH0sXG5cblxuLy9hZGQgbGlzdCBvZiBzZWxlY3RlZCByZWNpcGVzIHRvIHRvcCBhYm92ZSByZWNpcGVzXG4vLy8vLy8vLy8vLy8vLy8vLy9ORVhUTkVYVE5FWFQgU1RBUlQgSEVSRSBTVEFSVCBIRVJFIFNUQVJUIEhFUkUgKioqKiMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgIHNldFNlbGVjdGVkUmVjaXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vcmVtb3ZlIGFsbCBjaGlsZHJlbiwgc3RhcnQgZnJvbSBibGFua1xuICAgICAgICB3aGlsZSAodGhpcy5zZWxlY3RlZFNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlY3Rpb24ucmVtb3ZlQ2hpbGQodGhpcy5zZWxlY3RlZFNlY3Rpb24ubGFzdENoaWxkKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGxldCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ1NlbGVjdGVkIFJlY2lwZXMnXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpXG5cbiAgICAgICAgbGV0IF9zZWxlY3RlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFJlY2lwZXMpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8dGhpcy5zZWxlY3RlZFJlY2lwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQgPSB0aGlzLnNlbGVjdGVkUmVjaXBlc1tpXS5uYW1lXG4gICAgICAgICAgICBfc2VsZWN0ZWRMaXN0LmFwcGVuZENoaWxkKHNlbGVjdGVkSXRlbSlcblxuICAgICAgICAgICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0ID0gJ3JlbW92ZS1zZWxlY3RlZC1yZWNpcGUnXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSByZW1vdmVCdXR0b24ucGFyZW50RWxlbWVudFxuXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRSZWNpcGVzLmZpbmRJbmRleCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLm5hbWUgPT0gdGVtcC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbUluZGV4KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWNpcGVzLnNwbGljZShlbGVtSW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFJlY2lwZXMpXG4gICAgICAgICAgICAgICAgc2F2ZUxvYWRMb2NhbFN0b3JhZ2Uuc2F2ZVRvKHRoaXMuc2VsZWN0ZWRSZWNpcGVzLCAnSlNPTnNlbGVjdGVkUmVjaXBlcycpXG5cbiAgICAgICAgICAgICAgICB0ZW1wLnJlbW92ZSgpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbi5hcHBlbmRDaGlsZChfc2VsZWN0ZWRMaXN0KVxuXG4gICAgfSxcblxuICAgIFxuXG5cbiAgICBjcmVhdGVCdG46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QgPSAnc2VsZWN0LXJlY2lwZS1idG4nO1xuICAgIFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRCdG5IYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY2lwZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5ncmVkaWVudHMsIHN0ZXBzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8vaW5ncmVkaWVudHMgaXMgYSBkb3VibGUgYXJyYXksW1tpdGVtLCBhbW91bnQsIG1lYXN1cmVtZW50XV1cbiAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xuICAgICAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHNhdmVMb2FkTG9jYWxTdG9yYWdlID0ge1xuICAgIFxuICAgIGxvYWQ6IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIGxldCB0ZW1wID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWRkcmVzcylcbiAgICAgICAgY29uc29sZS5sb2codGVtcClcbiAgICAgICAgY29uc29sZS5sb2coYWRkcmVzcylcbiAgICAgICAgaWYgKHRlbXAgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgbGV0IGVsID0gSlNPTi5wYXJzZSh0ZW1wKVxuICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgXG4gICAgfSxcblxuICAgIHNhdmVUbzogZnVuY3Rpb24gKGVsLCBhZGRyZXNzKSB7XG4gICAgICAgIGxldCB0ZW1wID0gSlNPTi5zdHJpbmdpZnkoZWwpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGFkZHJlc3MsIHRlbXApXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==