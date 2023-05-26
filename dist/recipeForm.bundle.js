"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["recipeForm"],{

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

    

const recipeForm = {

    recipeForm: document.createElement('form'),

    sectionForm: _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.addRecipe,

    init: function() {
        this.recipeForm.classList = 'hide-block',
        this.createContainer(),
        this.createForm(),
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


    createForm: function() {
        //create form, input for Name, Ingredients([ingredient, amount, msrmnt]), Steps ([1,2,3])

        this.createFormLabel = function(labelName, labelHTML) { 
            let label = document.createElement('label')
            label.setAttribute('for', labelName)
            label.textContent = labelHTML.toUpperCase()
            return label
        }
        this.labelName = this.createFormLabel('name', 'Recipe Name')
        this.recipeForm.appendChild(this.labelName)

        this.createNameInput = () => {
            let _nameInput = document.createElement('input')
            _nameInput.setAttribute('type', 'text')
            _nameInput.setAttribute('id', 'inputName')
            _nameInput.setAttribute('name', 'name')
            _nameInput.setAttribute('maxLength', '32')
            _nameInput.required = true
            return _nameInput
        }

        this.nameInput = this.createNameInput()
        this.recipeForm.appendChild(this.nameInput)


        this.labelIngr = this.createFormLabel('ingredients', 'Ingredients')
        this.recipeForm.appendChild(this.labelIngr)

        this.createIngrInput = () => {
            let _ingrInput = document.createElement('input')
            _ingrInput.setAttribute('type', 'number')
            _ingrInput.setAttribute('class', 'inputIngredient')
            _ingrInput.setAttribute('name', 'ingredients')
            _ingrInput.setAttribute('maxValue', '99')
            _ingrInput.setAttribute('minValue', '1')
            _ingrInput.required = true
            return _ingrInput
        }

        this.ingrInput = this.createIngrInput()
        this.recipeForm.appendChild(this.ingrInput)


        this.stepsLabel = this.createFormLabel('steps', 'Steps')
        this.recipeForm.appendChild(this.stepsLabel)
        
        this.createStepsInput = () => {
            let _inputStep = document.createElement('textarea')
            _inputStep.setAttribute('name', 'steps')
            _inputStep.setAttribute('class', 'steps')
            _inputStep.setAttribute('cols', '30')
            _inputStep.setAttribute('rows', '10')
            _inputStep.required = true
            return _inputStep
        }

        this.inputStep = this.createStepsInput()
        this.recipeForm.appendChild(this.inputStep)


        this.createSubmitBtn = () => {
            let _submitButton = document.createElement('button')
            _submitButton.textContent = 'Submit'
            _submitButton.setAttribute('type', 'submit')
            return _submitButton
        }

        this.submitButton = this.createSubmitBtn()
        this.recipeForm.appendChild(this.submitButton)

        //submit button

        this.container.appendChild(this.recipeForm)
    //end function
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
    //     let formData = new FormData(this.recipeForm)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlRm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDdEQ7O0FBRU87O0FBRVA7O0FBRUEsaUJBQWlCLHlFQUFzQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaklPOztBQUVQOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9yZWNpcGVMaWJyYXJ5L3JlY2lwZUZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy91dGlscy9jcmVhdGVIVE1MU2tlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVE1MU2tlbGV0b24gfSBmcm9tICcuLi91dGlscy9jcmVhdGVIVE1MU2tlbCdcbiAgICBcblxuZXhwb3J0IGNvbnN0IHJlY2lwZUZvcm0gPSB7XG5cbiAgICByZWNpcGVGb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG5cbiAgICBzZWN0aW9uRm9ybTogSFRNTFNrZWxldG9uLmFkZFJlY2lwZSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uY2xhc3NMaXN0ID0gJ2hpZGUtYmxvY2snLFxuICAgICAgICB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpLFxuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKSxcbiAgICAgICAgdGhpcy5jcmVhdGVUb2dnbGVCdXR0b24oKVxuICAgICAgICAvLyB0aGlzLmF0dGFzY2hGb3JtU3VibWl0TGlzdGVuZXIoJ3JlY2lwZS1mb3JtJylcbiAgICB9LFxuXG4gICAgY3JlYXRlQ29udGFpbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc2xpc3QgPSAnY29udGFpbmVyJ1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25Gb3JtKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgdGhpcy5zZWN0aW9uRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9LFxuXG5cbiAgICBjcmVhdGVGb3JtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9jcmVhdGUgZm9ybSwgaW5wdXQgZm9yIE5hbWUsIEluZ3JlZGllbnRzKFtpbmdyZWRpZW50LCBhbW91bnQsIG1zcm1udF0pLCBTdGVwcyAoWzEsMiwzXSlcblxuICAgICAgICB0aGlzLmNyZWF0ZUZvcm1MYWJlbCA9IGZ1bmN0aW9uKGxhYmVsTmFtZSwgbGFiZWxIVE1MKSB7IFxuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBsYWJlbE5hbWUpXG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsSFRNTC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhYmVsTmFtZSA9IHRoaXMuY3JlYXRlRm9ybUxhYmVsKCduYW1lJywgJ1JlY2lwZSBOYW1lJylcbiAgICAgICAgdGhpcy5yZWNpcGVGb3JtLmFwcGVuZENoaWxkKHRoaXMubGFiZWxOYW1lKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlTmFtZUlucHV0ID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IF9uYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICBfbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgIF9uYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dE5hbWUnKVxuICAgICAgICAgICAgX25hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpXG4gICAgICAgICAgICBfbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4TGVuZ3RoJywgJzMyJylcbiAgICAgICAgICAgIF9uYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gX25hbWVJbnB1dFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uYW1lSW5wdXQgPSB0aGlzLmNyZWF0ZU5hbWVJbnB1dCgpXG4gICAgICAgIHRoaXMucmVjaXBlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLm5hbWVJbnB1dClcblxuXG4gICAgICAgIHRoaXMubGFiZWxJbmdyID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ2luZ3JlZGllbnRzJywgJ0luZ3JlZGllbnRzJylcbiAgICAgICAgdGhpcy5yZWNpcGVGb3JtLmFwcGVuZENoaWxkKHRoaXMubGFiZWxJbmdyKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlSW5ncklucHV0ID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IF9pbmdySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKVxuICAgICAgICAgICAgX2luZ3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0SW5ncmVkaWVudCcpXG4gICAgICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbmdyZWRpZW50cycpXG4gICAgICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnbWF4VmFsdWUnLCAnOTknKVxuICAgICAgICAgICAgX2luZ3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pblZhbHVlJywgJzEnKVxuICAgICAgICAgICAgX2luZ3JJbnB1dC5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgICAgIHJldHVybiBfaW5ncklucHV0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluZ3JJbnB1dCA9IHRoaXMuY3JlYXRlSW5ncklucHV0KClcbiAgICAgICAgdGhpcy5yZWNpcGVGb3JtLmFwcGVuZENoaWxkKHRoaXMuaW5ncklucHV0KVxuXG5cbiAgICAgICAgdGhpcy5zdGVwc0xhYmVsID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ3N0ZXBzJywgJ1N0ZXBzJylcbiAgICAgICAgdGhpcy5yZWNpcGVGb3JtLmFwcGVuZENoaWxkKHRoaXMuc3RlcHNMYWJlbClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3JlYXRlU3RlcHNJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBfaW5wdXRTdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgX2lucHV0U3RlcC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RlcHMnKVxuICAgICAgICAgICAgX2lucHV0U3RlcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0ZXBzJylcbiAgICAgICAgICAgIF9pbnB1dFN0ZXAuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMwJylcbiAgICAgICAgICAgIF9pbnB1dFN0ZXAuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEwJylcbiAgICAgICAgICAgIF9pbnB1dFN0ZXAucmVxdWlyZWQgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gX2lucHV0U3RlcFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dFN0ZXAgPSB0aGlzLmNyZWF0ZVN0ZXBzSW5wdXQoKVxuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5pbnB1dFN0ZXApXG5cblxuICAgICAgICB0aGlzLmNyZWF0ZVN1Ym1pdEJ0biA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBfc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIF9zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0J1xuICAgICAgICAgICAgX3N1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbiAgICAgICAgICAgIHJldHVybiBfc3VibWl0QnV0dG9uXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IHRoaXMuY3JlYXRlU3VibWl0QnRuKClcbiAgICAgICAgdGhpcy5yZWNpcGVGb3JtLmFwcGVuZENoaWxkKHRoaXMuc3VibWl0QnV0dG9uKVxuXG4gICAgICAgIC8vc3VibWl0IGJ1dHRvblxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVjaXBlRm9ybSlcbiAgICAvL2VuZCBmdW5jdGlvblxuICAgIH0sXG5cblxuICAgIGNyZWF0ZVRvZ2dsZUJ1dHRvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2hpZGUvc2hvdyByZWNpcGUgZm9ybSBvbiBidXR0b24gY2xpY2tcbiAgICAgICAgICAgIHRoaXMuZm9ybVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGhpcy5mb3JtVG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gJysnXG4gICAgICAgICAgICB0aGlzLmZvcm1Ub2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNpcGVGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYmxvY2snKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnByZXBlbmQodGhpcy5mb3JtVG9nZ2xlQnV0dG9uKVxuICAgIH0sXG5cbiAgICAvLyB1c2VGb3JtU3VibWl0Tm93OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMucmVjaXBlRm9ybSlcbiAgICAvLyAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIC8vIH0sXG5cbiAgICAvLyBhdHRhY2hGb3JtU3VibWl0TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgdGhpcy5yZWNpcGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMudXNlRm9ybVN1Ym1pdE5vdylcbiAgICAvLyB9LFxuXG4gIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgLy9lbmQgZm9ybSBvYmogXG59IiwiXG5leHBvcnQgY29uc3QgSFRNTFNrZWxldG9uID0ge1xuXG4gICAgZG9jYm9keTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuXG5cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZWN0aW9ucygpXG4gICAgfSxcblxuICAgIGNyZWF0ZUhlYWRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICAgICAgdGhpcy5jcmVhdGVOYXYoKVxuXG4gICAgfSxcblxuICAgIG5hdjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JyksXG4gICAgdWxOYXYgOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG5cbiAgICBjcmVhdGVOYXY6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHRoaXMudWxOYXYpXG5cbiAgICAgICAgdGhpcy51bE5hdi5hcHBlbmRDaGlsZCh0aGlzLmhvbWVOYXZMaW5rKCkpXG4gICAgICAgIHRoaXMudWxOYXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYXZMaW5rKCdSZWNpcGVzJywgJycpKVxuICAgICAgICAvLyB0aGlzLnVsTmF2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2VhcmNoQmFyKCkpXG4gICAgfSxcblxuICAgIGhvbWVOYXZMaW5rOiBmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGxpbmsuaHJlZiA9ICcnXG4gICAgICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgbG9nby5zcmMgPSAnJ1xuICAgICAgICBsb2dvLmFsdCA9ICcnXG5cbiAgICAgICAgbGluay5hcHBlbmRDaGlsZChsb2dvKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChsaW5rKVxuXG4gICAgICAgIHJldHVybiBsaVxuICAgIH0sXG5cbiAgICBjcmVhdGVOYXZMaW5rOiBmdW5jdGlvbih0aXRsZSwgdXJsKSB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgbGluay5ocmVmID0gdXJsXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGxpbmspXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfSxcblxuICAgIGNyZWF0ZVNlYXJjaEJhcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dpcCcpXG4gICAgfSxcblxuICAgIHNlbGVjdGVkUmVjaXBlczogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpLFxuICAgIGFkZFJlY2lwZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpLFxuICAgIHJlY2lwZXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcbiAgICBncm9jZXJ5TGlzdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpLFxuXG4gICAgXG4gICAgY3JlYXRlU2VjdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBcblxuXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNlbGVjdGVkUmVjaXBlcylcbiAgICAgICAgdGhpcy5kb2Nib2R5LmFwcGVuZENoaWxkKHRoaXMuYWRkUmVjaXBlKVxuICAgICAgICB0aGlzLmRvY2JvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZWNpcGVzKVxuICAgICAgICB0aGlzLmRvY2JvZHkuYXBwZW5kQ2hpbGQodGhpcy5ncm9jZXJ5TGlzdClcbiAgICBcbiAgICB9LFxuXG4gICAgLy8gY3JlYXRlU2VjOiBmdW5jdGlvbihpZCkge1xuICAgIC8vICAgICBsZXQgc2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgLy8gICAgIHNlYy5pZCA9IGlkXG4gICAgLy8gICAgIHJldHVybiBzZWNcbiAgICAvLyB9LFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==