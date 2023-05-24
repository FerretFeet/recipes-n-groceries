
class Recipe {
    constructor(name, ingredients, steps) {
        this.name = name;
        //ingredients is a double array,[[item, amount, measurement]]
        this.ingredients = ingredients;
        this.steps = steps;
    }
}


const saveLoadLocalStorage = {
    
    load: function (address) {
        let temp = localStorage.getItem(address)
        if (temp == 'undefined') return;
        el = JSON.parse(temp)
        return el
        
    },

    saveTo: function (el, address) {
        let temp = JSON.stringify(el)
        localStorage.setItem(address, temp)
    }
}



function formHandler (e) {
    e.preventDefault();
    console.log('30')
    console.log(recipeLibrary.recipeLibrary)
    console.log(32)
    console.log('formdata fired')
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
    const newRecipe = new Recipe(_name, _ingrObjList, _steps);


    //way to extract this? necessary before modularizing
    recipeLibrary.recipeLibrary.push(newRecipe)
    console.log(66)
    console.log(recipeLibrary.recipeLibrary)
    saveLoadLocalStorage.saveTo(recipeLibrary.recipeLibrary, 'JSONrecipeLibrary')
    recipeHTML.render(recipeLibrary.recipeLibrary)


}


const recipeLibrary = {

    recipeLibrary: [],
        //import recipeForm
        //import recipeHTML
    init: function() {
        this.recipeLibrary = saveLoadLocalStorage.load('JSONrecipeLibrary');
        if (this.recipeLibrary.length == 0) this.recipeLibrary = this.defaultLibrary
        // recipeForm = recipeForm
        recipeForm.init() //create RecipeForm HTML & Add to Doc
        this.render() //create Recipes List HTML
        // recipeHTML = recipeHTML
        recipeHTML.render(this.recipeLibrary)
        recipeForm.recipeForm.addEventListener('formdata', formHandler) //add response to library and updateHTML on submit

    },

    findByName: function(name) {
        for (let i = 0; i < this.recipeLibrary.length; i++) {
            if (this.recipeLibrary[i].name == name) {
                return this.recipeLibrary[i]
            }
        }
    },




    render: function() {

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

 


const recipeHTML = {



    sectionRecipes: document.querySelector('section.recipes'),

    recipeIDCounter: 0,


    render: function (recipeLib) {
        console.log('122')
        console.log(recipeLib)
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

        _deletebutton = this.createDeleteButton(this.recipeIDCounter, container);
        container.appendChild(_deletebutton)

        objName = this.createNameDiv(item);
        container.appendChild(objName)

        // this.btn = createAddGroceryBtn(sectionClass);
        // container.appendChild(btn)

    //create ul for ingredients
        objIngr = this.createEnumIngredientList(item);
        container.appendChild(objIngr)

        objSteps = this.createEnumStepsList(item);
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



     


    

const recipeForm = {

    recipeForm: document.createElement('form'),

    sectionForm: document.querySelector('section.add-recipe'),

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



//#################################################
//FUNCTION CALL
//################################################





function addBtnHandler() {
    //what happens on this.createBtn Click
    //find recipe in recipe library, add to selectedRecipes
    let temp = this.parentElement
    console.log(this)
    console.log(temp)
    let temp1 = recipeLibrary.findByName(temp.children[2].textContent) //recipeListHTMLItems[index of recipe Name]
    console.log(temp1)
    selectedRecipes.selectedRecipes.push(temp1);

    selectedRecipes.setSelectedRecipe()
    saveLoadLocalStorage.saveTo(selectedRecipes.selectedRecipes, 'JSONselectedRecipes')


}


const selectedRecipes = {
///////////////////////////////////WIP///////////////////////////////////////////////////
    //import recipeLibrary

    selectedRecipes: new Array,
    selectedSection: document.querySelector('section.selected-recipes'),
    recipeListHTML: recipeHTML.sectionRecipes,

    init: function () {
        //load selected recipes
        this.recipeListHTMLItems = this.recipeListHTML.lastChild.children,

        this.selectedRecipes = this.loadLocalStorage()
        this.render()


    },

    loadLocalStorage: function() {
        let x = saveLoadLocalStorage.load('JSONselectedRecipes')
        return x 
    },

    render: function() {
        //if selectedRecipes is empty, nothing, else load HTML
        //create section and html for selected recipes
        this.addBtns()
        this.setSelectedRecipe()

    },

    addBtns: function() {
        console.log(this.recipeListHTML.lastChild.children)
        console.log(this.recipeListHTML)
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

        for (let i = 0; i<this.selectedRecipes.length; i++) {
            let selectedItem = document.createElement('li')
            selectedItem.textContent = this.selectedRecipes[i].name
            _selectedList.appendChild(selectedItem)

            let removeButton = document.createElement('button')
            removeButton.textContent = 'x'
            removeButton.classList = 'remove-selected-recipe'
            removeButton.addEventListener('click', () => {
                let temp = removeButton.parentElement
                console.log(temp)

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


//#################################################
//FUNCTION CALL
//################################################







const groupBy = (items, key) => items.reduce(
    (result, item) => ({
        ...result,
        [item[key]]: [
            ...(result[item[key]] || []),
            item,
        ],
    }),
    {},
)

class groceryItem {
    constructor(ingredient, amount, measure) {
        this.ingredient = ingredient;
        this.amount = amount
        this.measure = measure
    }
}



const groceryList = {
    //import groupBy, SelectedRecipes\
    //import groceryItem
    groceryList: [],
    grocerySection: document.querySelector('section.grocery-list'),
    //import selectedRecipes
    init: function() {
        if (selectedRecipes.selectedRecipes.length > 0) this.render()
        this.reloadGrocery()
    },

    render: function() {
        this.groceryList = this.combineGroceryItems()
        this.grocerySection.appendChild(this.setGroceryHTML())
    },
    //take selectedRecipes, extract only groceries, place into 1d array
    pullGroceries: function() {
        const temp = new Array()
        console.log(temp)
        for (let i = 0; i < selectedRecipes.selectedRecipes.length; i++) {
            temp.push(selectedRecipes.selectedRecipes[i].ingredients)
            console.log(temp)
        }
        return temp.flat()
    },

//Add groceries together

    combineGroceryItems: function () {
        const temp = groupBy(this.pullGroceries(), 'ingredient')
        const tempKeys = Object.keys(temp)
        const returnVal = []
        for (let i=0; i < tempKeys.length; i++) {
            //for each key
            let total = 0
            for (let j=0; j<temp[tempKeys[i]].length; j++) {
                //until 1 value left
                console.log(total)
                total += Number(temp[tempKeys[i]][j].amount)
                
            }
            let x = new groceryItem((temp[tempKeys[i]][0]).ingredient, total, (temp[tempKeys[i]][0]).measurement)
            returnVal.push(x)

            // temp[tempKeys[i]].splice(1, Infinity)
            // //makes amount of all equal to total
            // temp[tempKeys[i]][0].amount = total
            console.log(returnVal)

        }
        return returnVal
    }, 

// //add list of groceries to bottom in section


    createGroceryHTML: function (item) {
        let _container = document.createElement('li')
        //to track each item, needed for deletion button must be first child
        //must be right after containerID

        let ingrName = document.createElement('span')
        ingrName.classList = 'ingr-name'
        ingrName.textContent = item.ingredient

        let ingrAmnt = document.createElement('span')
        ingrAmnt.classList = 'ingr-amnt'
        ingrAmnt.textContent = item.amount

        let ingrMsr = document.createElement('span')
        ingrMsr.classList = 'ingr-msr'
        ingrMsr.textContent = item.measurement
        
        _container.appendChild(ingrName)
        _container.appendChild(ingrAmnt)
        _container.appendChild(ingrMsr)

        return _container
    },

    setGroceryHTML: function () {
        while (this.grocerySection.firstChild) {
            this.grocerySection.removeChild(this.grocerySection.lastChild)
        }
        let sectionHeader = document.createElement('h2')
        sectionHeader.textContent = 'Groceries'
        this.grocerySection.appendChild(sectionHeader)
        
        let _groceryHTMLList = document.createElement('ul')
        this.grocerySection.appendChild(_groceryHTMLList)
        console.log(this.groceryList)
        let tempKeys = Object.keys(this.groceryList)
        for (let i=0; i < this.groceryList.length; i++) {
            _groceryHTMLList.appendChild(this.createGroceryHTML(this.groceryList[i]))
        }
        return _groceryHTMLList
    },

    reloadGrocery: function() {
        let temp = document.querySelectorAll('button.remove-selected-recipe')
        for (let i = 0; i < temp.length; i++) {
            temp[i].addEventListener('click', () => {
                setTimeout(this.render(), 500)
            })
        }
        let temp2 = document.querySelectorAll('button.select-recipe-btn')
        for (let i = 0; i < temp2.length; i++) {
            temp2[i].addEventListener('click', () => {
                setTimeout(this.render(), 500)
            })
        }
    }

}





function onStart() {
    setTimeout(recipeLibrary.init())
    setTimeout(selectedRecipes.init())
    setTimeout(groceryList.init())
}

onStart()

//////////////////
// END REFACTOR //
//////////////////




            //Save el to local storage
           



//load and set display of recipes and selected groceries
// function onStart(recipeLibrary, groceryList) {
//     let tempRecipeLibrary = localStorage.getItem('JSONrecipeLibrary')
//     tempRecipeLibrary = JSON.parse(tempRecipeLibrary)
//     if (tempRecipeLibrary == undefined) {
//         
        
//     } else {
//     recipeLibrary = tempRecipeLibrary
//     }
//     onStartRecipeToList(recipeLibrary, recipeListHTML)

//     let tempGroceryList = localStorage.getItem('groceryList')
//     tempGroceryList = JSON.parse(tempGroceryList)
//     if (tempGroceryList == null) return;
//     groceryList = tempGroceryList
//     setSelectedRecipe()
//     let grocerySection = document.querySelector('section.grocery-list')
//         grocerySection.appendChild(setGroceryHTML('grocery-list'));
// }



                    



//                             //adjust form textareas to be responsive

                            










// //recipe form submit, override default submit behavior with 2 event listeners 





// //create inset carousel ############################





                       









// function onStartRecipeToList(recipeLibrary, recipeListHTML) {
//     for(let i = 0; i < recipeLibrary.length; i++) {
//         recipeListHTML.appendChild(createObjtoList(recipeLibrary[i]), 'grocery-list');
//     }
// }
                


// //add save button or move save function to form submit

// let formSaveSection = document.querySelector('section.add-recipe')
// let saveChangesButton = document.createElement('button')
// saveChangesButton.textContent = 'Save Changes'
// saveChangesButton.addEventListener('click', () => {
//     saveToLocalStorage(recipeLibrary)
//     saveToLocalStorage(groceryList)

// })
// formSaveSection.appendChild(saveChangesButton)






