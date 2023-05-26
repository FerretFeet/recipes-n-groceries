export const createForm = {
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