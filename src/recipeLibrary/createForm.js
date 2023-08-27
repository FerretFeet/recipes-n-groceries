//import ingr list
//import msr units



export const createForm = {
    //create form, input for Name, Ingredients([ingredient, amount, msrmnt]), Steps ([1,2,3])
    recipeForm: document.createElement('form'),
    ingrList: document.createElement('ul'),
    stepsList: document.createElement('ul'),
    ingrInputCounter: 1,




    createForm: function() {
        console.log(this.ingrInputCounter)
        console.log('###################')
        this.recipeForm.appendChild(this.addName())

        this.ingrCont = document.createElement('div')
        //put appends in own function
        this.appendIngr(this.ingrCont)
        this.recipeForm.appendChild(this.ingrCont)



        this.stepsCont = document.createElement('div')
        //put appends in own function
        this.appendSteps(this.stepsCont)
        this.recipeForm.appendChild(this.stepsCont)

        this.recipeForm.appendChild(this.addSubmitBtn())

        return this.recipeForm


    //end function
    
    },

    appendSteps: function(container) {

        container.appendChild(this.stepsList)
            this.stepsList.appendChild(this.addSteps())
        container.appendChild(this.dupInpBtn(this.addSteps(), this.stepsList))

    },

    appendIngr: function(container) {
        console.log(container)
        console.log(this.ingrList)
    container.appendChild(this.ingrList)
        this.ingrList.appendChild(this.addIngredients())
    container.appendChild(this.dupInpBtn(this.addIngredients(), this.ingrList))   
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

        let labelIngr = this.createFormLabel('ingredients', 'Ingredients')
        li.appendChild(labelIngr)

        let ingrName = this.createIngrNameInput()
        li.appendChild(ingrName)

        let ingrInput = this.createIngrValInput()
        li.appendChild(ingrInput)



        let ingrMsr = this.createIngrMsrInput()
        li.appendChild(ingrMsr)
        this.ingrInputCounter++

        return li  
    },

    addSteps: function() {

        let li = document.createElement('li')
         
        let stepsLabel = this.createFormLabel('steps', 'Steps')
        li.appendChild(stepsLabel)

        let inputStep = this.createStepsInput()
        li.appendChild(inputStep)

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
 

    createIngrValInput: function() {
        let _ingrInput = document.createElement('input')
        _ingrInput.setAttribute('type', 'number')
        _ingrInput.classlist = 'inputIngredient inputVal'
        _ingrInput.setAttribute('name', `ingredients[${this.ingrInputCounter}][val]`)
        _ingrInput.setAttribute('maxValue', '99')
        _ingrInput.setAttribute('minValue', '1')
        _ingrInput.required = true
        return _ingrInput
    },


    createOption: function(value) {

              let temp = document.createElement('option')
              temp.setAttribute('value', value)
              temp.textContent = value
              return temp
  
    },

    createIngrNameInput: function() {
        //look for above input for guidance
        let _ingrInput = document.createElement('select')
        _ingrInput.classlist = 'inputIngredient inputName'

        _ingrInput.setAttribute('name', `ingredients[${this.ingrInputCounter}][val]`)
        _ingrInput.required = true
        console.log(this)
        _ingrInput.appendChild(this.createOption('eggs'))
        _ingrInput.appendChild(this.createOption('milk'))

        return _ingrInput
    },


    createIngrMsrInput: function() {
        let _ingrInput = document.createElement('select')
        _ingrInput.classlist = 'inputIngredient inputMsr'
        _ingrInput.setAttribute('name', `ingredients[${this.ingrInputCounter}][val]`)
        _ingrInput.required = true

        
        _ingrInput.appendChild(this.createOption('cup'))
        _ingrInput.appendChild(this.createOption('tbsp'))

        return _ingrInput
    },

    dupInpBtn: function(dupInp, inpCont) {
        //might need input arg
        let temp = document.createElement('button')
        temp.type = 'button'
        temp.addEventListener('click', () => {
            console.log(inpCont)
            console.log(dupInp)
            //counter to change name of inputs?
            //need change name of inputs anyway
            let x = dupInp
            
            inpCont.appendChild(dupInp)
        })
        return temp
    },


    
    createStepsInput: () => {
        let _inputStep = document.createElement('textarea')
        _inputStep.setAttribute('name', 'steps[]')
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