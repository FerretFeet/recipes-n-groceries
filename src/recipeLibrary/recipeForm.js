import { HTMLSkeleton } from '../utils/createHTMLSkel'
    

export const recipeForm = {

    recipeForm: document.createElement('form'),

    sectionForm: HTMLSkeleton.addRecipe,

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