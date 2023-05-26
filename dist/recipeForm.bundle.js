"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["recipeForm"],{

/***/ "./src/recipeLibrary/createForm.js":
/*!*****************************************!*\
  !*** ./src/recipeLibrary/createForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm)
/* harmony export */ });
const createForm = {
    //create form, input for Name, Ingredients([ingredient, amount, msrmnt]), Steps ([1,2,3])
    recipeForm: document.createElement('form'),
    ingrList: document.createElement('ul'),
    stepsList: document.createElement('ul'),



    createForm: function() {
        this.recipeForm.appendChild(this.addName())

        this.recipeForm.appendChild(this.ingrList)
        this.ingrList.appendChild(this.addIngredients())

        this.recipeForm.appendChild(this.stepsList)
        this.stepsList.appendChild(this.addSteps())

        this.recipeForm.appendChild(this.addSubmitBtn())

        return this.recipeForm


    //end function
    
    },

    addName: function() {
        let div = document.createElement('div')

        this.labelName = this.createFormLabel('name', 'Recipe Name')
        div.appendChild(this.labelName)

        this.nameInput = this.createNameInput()
        div.appendChild(this.nameInput)

        return div
    },

    addIngredients: function() {
        let li = document.createElement('li')

        this.labelIngr = this.createFormLabel('ingredients', 'Ingredients')
        li.appendChild(this.labelIngr)

        this.ingrInput = this.createIngrInput()
        li.appendChild(this.ingrInput)

        return li  
    },

    addSteps: function() {

        let li = document.createElement('li')
         
        this.stepsLabel = this.createFormLabel('steps', 'Steps')
        li.appendChild(this.stepsLabel)

        this.inputStep = this.createStepsInput()
        li.appendChild(this.inputStep)

        return li
    },

    addSubmitBtn: function() {

        this.submitButton = this.createSubmitBtn()
        return this.submitButton

    },

    
    createFormLabel: function(labelName, labelHTML) { 
        let label = document.createElement('label')
        label.setAttribute('for', labelName)
        label.textContent = labelHTML.toUpperCase()
        return label
    },


    createNameInput: () => {
        let _nameInput = document.createElement('input')
        _nameInput.setAttribute('type', 'text')
        _nameInput.setAttribute('id', 'inputName')
        _nameInput.setAttribute('name', 'name')
        _nameInput.setAttribute('maxLength', '32')
        _nameInput.required = true
        return _nameInput
    },
 

    createIngrInput: () => {
        let _ingrInput = document.createElement('input')
        _ingrInput.setAttribute('type', 'number')
        _ingrInput.setAttribute('class', 'inputIngredient')
        _ingrInput.setAttribute('name', 'ingredients')
        _ingrInput.setAttribute('maxValue', '99')
        _ingrInput.setAttribute('minValue', '1')
        _ingrInput.required = true
        return _ingrInput
    },


    
    createStepsInput: () => {
        let _inputStep = document.createElement('textarea')
        _inputStep.setAttribute('name', 'steps')
        _inputStep.setAttribute('class', 'steps')
        _inputStep.setAttribute('cols', '30')
        _inputStep.setAttribute('rows', '10')
        _inputStep.required = true
        return _inputStep
    },


    createSubmitBtn: () => {
        let _submitButton = document.createElement('button')
        _submitButton.textContent = 'Submit'
        _submitButton.setAttribute('type', 'submit')
        return _submitButton
    }

}

/***/ }),

/***/ "./src/recipeLibrary/recipeForm.js":
/*!*****************************************!*\
  !*** ./src/recipeLibrary/recipeForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recipeForm: () => (/* binding */ recipeForm)
/* harmony export */ });
/* harmony import */ var _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHTMLSkel */ "./src/utils/createHTMLSkel.js");
/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createForm */ "./src/recipeLibrary/createForm.js");

    


const recipeForm = {


    sectionForm: _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.addRecipe,

    init: function() {
        this.recipeForm.classList = 'hide-block',
        this.createContainer(),
        this.form = _createForm__WEBPACK_IMPORTED_MODULE_1__.createForm.createForm(),
        this.createToggleButton()
        // this.attaschFormSubmitListener('recipe-form')
    },

    createContainer: function() {
        this.container = document.createElement('div')
        this.container.classlist = 'container'
        console.log(this.sectionForm)
        console.log(this.container)
        this.sectionForm.appendChild(this.container)
    },





    createToggleButton: function () {
        //hide/show recipe form on button click
            this.formToggleButton = document.createElement('button');
            this.formToggleButton.textContent = '+'
            this.formToggleButton.addEventListener('click', () => {
                this.recipeForm.classList.toggle('hide-block')
            })
            this.container.prepend(this.formToggleButton)
    },

    // useFormSubmitNow: function (event) {
    //     event.preventDefault();
    //     return formData;
    // },

    // attachFormSubmitListener: function () {
    //     this.recipeForm.addEventListener('submit', this.useFormSubmitNow)
    // },

  
    
    
    
    
   //end form obj 
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/recipeLibrary/recipeForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlRm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SHNEO0FBQ3REO0FBQ3lDOztBQUVsQzs7O0FBR1AsaUJBQWlCLHlFQUFzQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFxQjtBQUN6QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7Ozs7QUFNTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JETzs7QUFFUDs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvcmVjaXBlTGlicmFyeS9jcmVhdGVGb3JtLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvcmVjaXBlTGlicmFyeS9yZWNpcGVGb3JtLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvdXRpbHMvY3JlYXRlSFRNTFNrZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZUZvcm0gPSB7XG4gICAgLy9jcmVhdGUgZm9ybSwgaW5wdXQgZm9yIE5hbWUsIEluZ3JlZGllbnRzKFtpbmdyZWRpZW50LCBhbW91bnQsIG1zcm1udF0pLCBTdGVwcyAoWzEsMiwzXSlcbiAgICByZWNpcGVGb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG4gICAgaW5nckxpc3Q6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG4gICAgc3RlcHNMaXN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpLFxuXG5cblxuICAgIGNyZWF0ZUZvcm06IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5hZGROYW1lKCkpXG5cbiAgICAgICAgdGhpcy5yZWNpcGVGb3JtLmFwcGVuZENoaWxkKHRoaXMuaW5nckxpc3QpXG4gICAgICAgIHRoaXMuaW5nckxpc3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRJbmdyZWRpZW50cygpKVxuXG4gICAgICAgIHRoaXMucmVjaXBlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLnN0ZXBzTGlzdClcbiAgICAgICAgdGhpcy5zdGVwc0xpc3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRTdGVwcygpKVxuXG4gICAgICAgIHRoaXMucmVjaXBlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmFkZFN1Ym1pdEJ0bigpKVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY2lwZUZvcm1cblxuXG4gICAgLy9lbmQgZnVuY3Rpb25cbiAgICBcbiAgICB9LFxuXG4gICAgYWRkTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIHRoaXMubGFiZWxOYW1lID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ25hbWUnLCAnUmVjaXBlIE5hbWUnKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbE5hbWUpXG5cbiAgICAgICAgdGhpcy5uYW1lSW5wdXQgPSB0aGlzLmNyZWF0ZU5hbWVJbnB1dCgpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLm5hbWVJbnB1dClcblxuICAgICAgICByZXR1cm4gZGl2XG4gICAgfSxcblxuICAgIGFkZEluZ3JlZGllbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gICAgICAgIHRoaXMubGFiZWxJbmdyID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ2luZ3JlZGllbnRzJywgJ0luZ3JlZGllbnRzJylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbEluZ3IpXG5cbiAgICAgICAgdGhpcy5pbmdySW5wdXQgPSB0aGlzLmNyZWF0ZUluZ3JJbnB1dCgpXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRoaXMuaW5ncklucHV0KVxuXG4gICAgICAgIHJldHVybiBsaSAgXG4gICAgfSxcblxuICAgIGFkZFN0ZXBzOiBmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICBcbiAgICAgICAgdGhpcy5zdGVwc0xhYmVsID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ3N0ZXBzJywgJ1N0ZXBzJylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGhpcy5zdGVwc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuaW5wdXRTdGVwID0gdGhpcy5jcmVhdGVTdGVwc0lucHV0KClcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dFN0ZXApXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfSxcblxuICAgIGFkZFN1Ym1pdEJ0bjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSB0aGlzLmNyZWF0ZVN1Ym1pdEJ0bigpXG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdEJ1dHRvblxuXG4gICAgfSxcblxuICAgIFxuICAgIGNyZWF0ZUZvcm1MYWJlbDogZnVuY3Rpb24obGFiZWxOYW1lLCBsYWJlbEhUTUwpIHsgXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBsYWJlbE5hbWUpXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxIVE1MLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIGxhYmVsXG4gICAgfSxcblxuXG4gICAgY3JlYXRlTmFtZUlucHV0OiAoKSA9PiB7XG4gICAgICAgIGxldCBfbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBfbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICAgICAgX25hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0TmFtZScpXG4gICAgICAgIF9uYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKVxuICAgICAgICBfbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4TGVuZ3RoJywgJzMyJylcbiAgICAgICAgX25hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIF9uYW1lSW5wdXRcbiAgICB9LFxuIFxuXG4gICAgY3JlYXRlSW5ncklucHV0OiAoKSA9PiB7XG4gICAgICAgIGxldCBfaW5ncklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKVxuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXRJbmdyZWRpZW50JylcbiAgICAgICAgX2luZ3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaW5ncmVkaWVudHMnKVxuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnbWF4VmFsdWUnLCAnOTknKVxuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnbWluVmFsdWUnLCAnMScpXG4gICAgICAgIF9pbmdySW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgICAgIHJldHVybiBfaW5ncklucHV0XG4gICAgfSxcblxuXG4gICAgXG4gICAgY3JlYXRlU3RlcHNJbnB1dDogKCkgPT4ge1xuICAgICAgICBsZXQgX2lucHV0U3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgX2lucHV0U3RlcC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RlcHMnKVxuICAgICAgICBfaW5wdXRTdGVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RlcHMnKVxuICAgICAgICBfaW5wdXRTdGVwLnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpXG4gICAgICAgIF9pbnB1dFN0ZXAuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEwJylcbiAgICAgICAgX2lucHV0U3RlcC5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIF9pbnB1dFN0ZXBcbiAgICB9LFxuXG5cbiAgICBjcmVhdGVTdWJtaXRCdG46ICgpID0+IHtcbiAgICAgICAgbGV0IF9zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBfc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcbiAgICAgICAgX3N1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbiAgICAgICAgcmV0dXJuIF9zdWJtaXRCdXR0b25cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBIVE1MU2tlbGV0b24gfSBmcm9tICcuLi91dGlscy9jcmVhdGVIVE1MU2tlbCdcbiAgICBcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2NyZWF0ZUZvcm0nXG5cbmV4cG9ydCBjb25zdCByZWNpcGVGb3JtID0ge1xuXG5cbiAgICBzZWN0aW9uRm9ybTogSFRNTFNrZWxldG9uLmFkZFJlY2lwZSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uY2xhc3NMaXN0ID0gJ2hpZGUtYmxvY2snLFxuICAgICAgICB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpLFxuICAgICAgICB0aGlzLmZvcm0gPSBjcmVhdGVGb3JtLmNyZWF0ZUZvcm0oKSxcbiAgICAgICAgdGhpcy5jcmVhdGVUb2dnbGVCdXR0b24oKVxuICAgICAgICAvLyB0aGlzLmF0dGFzY2hGb3JtU3VibWl0TGlzdGVuZXIoJ3JlY2lwZS1mb3JtJylcbiAgICB9LFxuXG4gICAgY3JlYXRlQ29udGFpbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc2xpc3QgPSAnY29udGFpbmVyJ1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25Gb3JtKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgdGhpcy5zZWN0aW9uRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9LFxuXG5cblxuXG5cbiAgICBjcmVhdGVUb2dnbGVCdXR0b246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9oaWRlL3Nob3cgcmVjaXBlIGZvcm0gb24gYnV0dG9uIGNsaWNrXG4gICAgICAgICAgICB0aGlzLmZvcm1Ub2dnbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybVRvZ2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJ1xuICAgICAgICAgICAgdGhpcy5mb3JtVG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjaXBlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWJsb2NrJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5wcmVwZW5kKHRoaXMuZm9ybVRvZ2dsZUJ1dHRvbilcbiAgICB9LFxuXG4gICAgLy8gdXNlRm9ybVN1Ym1pdE5vdzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICAvLyB9LFxuXG4gICAgLy8gYXR0YWNoRm9ybVN1Ym1pdExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIHRoaXMucmVjaXBlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnVzZUZvcm1TdWJtaXROb3cpXG4gICAgLy8gfSxcblxuICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgIC8vZW5kIGZvcm0gb2JqIFxufSIsIlxuZXhwb3J0IGNvbnN0IEhUTUxTa2VsZXRvbiA9IHtcblxuICAgIGRvY2JvZHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcblxuXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2VjdGlvbnMoKVxuICAgIH0sXG5cbiAgICBjcmVhdGVIZWFkZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgICAgIHRoaXMuY3JlYXRlTmF2KClcblxuICAgIH0sXG5cbiAgICBuYXY6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpLFxuICAgIHVsTmF2IDpkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpLFxuXG4gICAgY3JlYXRlTmF2OiBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh0aGlzLnVsTmF2KVxuXG4gICAgICAgIHRoaXMudWxOYXYuYXBwZW5kQ2hpbGQodGhpcy5ob21lTmF2TGluaygpKVxuICAgICAgICB0aGlzLnVsTmF2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTmF2TGluaygnUmVjaXBlcycsICcnKSlcbiAgICAgICAgLy8gdGhpcy51bE5hdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNlYXJjaEJhcigpKVxuICAgIH0sXG5cbiAgICBob21lTmF2TGluazogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBsaW5rLmhyZWYgPSAnJ1xuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGxvZ28uc3JjID0gJydcbiAgICAgICAgbG9nby5hbHQgPSAnJ1xuXG4gICAgICAgIGxpbmsuYXBwZW5kQ2hpbGQobG9nbylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGluaylcblxuICAgICAgICByZXR1cm4gbGlcbiAgICB9LFxuXG4gICAgY3JlYXRlTmF2TGluazogZnVuY3Rpb24odGl0bGUsIHVybCkge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGxpbmsuaHJlZiA9IHVybFxuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gdGl0bGVcblxuICAgICAgICBsaS5hcHBlbmRDaGlsZChsaW5rKVxuXG4gICAgICAgIHJldHVybiBsaVxuICAgIH0sXG5cbiAgICBjcmVhdGVTZWFyY2hCYXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aXAnKVxuICAgIH0sXG5cbiAgICBzZWxlY3RlZFJlY2lwZXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcbiAgICBhZGRSZWNpcGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcbiAgICByZWNpcGVzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgZ3JvY2VyeUxpc3Q6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcblxuICAgIFxuICAgIGNyZWF0ZVNlY3Rpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgXG5cblxuICAgICAgICB0aGlzLmRvY2JvZHkuYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3RlZFJlY2lwZXMpXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFkZFJlY2lwZSlcbiAgICAgICAgdGhpcy5kb2Nib2R5LmFwcGVuZENoaWxkKHRoaXMucmVjaXBlcylcbiAgICAgICAgdGhpcy5kb2Nib2R5LmFwcGVuZENoaWxkKHRoaXMuZ3JvY2VyeUxpc3QpXG4gICAgXG4gICAgfSxcblxuICAgIC8vIGNyZWF0ZVNlYzogZnVuY3Rpb24oaWQpIHtcbiAgICAvLyAgICAgbGV0IHNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIC8vICAgICBzZWMuaWQgPSBpZFxuICAgIC8vICAgICByZXR1cm4gc2VjXG4gICAgLy8gfSxcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=