let recipeLibrary = []
let groceryList = [];

recipeLibrary = [
    {
        "name": "scrambled eggs",
        "ingredients": [
            {
                "ingredient": "eggs",
                "amount": "1",
                "measurement": "whole"
            },
            {
                "ingredient": "pepper",
                "amount": "1",
                "measurement": "tsp"
            },
            {
                "ingredient": "salt",
                "amount": "1",
                "measurement": "tsp"
            },
            {
                "ingredient": "oil",
                "amount": "1",
                "measurement": "tbsp"
            }
        ],
        "steps": [
            "cook"
        ]
    },
    {
        "name": "omellete",
        "ingredients": [
            {
                "ingredient": "eggs",
                "amount": "5",
                "measurement": "whole"
            },
            {
                "ingredient": "pepper",
                "amount": "2",
                "measurement": "tsp"
            },
            {
                "ingredient": "salt",
                "amount": "3",
                "measurement": "tsp"
            },
            {
                "ingredient": "bacon",
                "amount": "4",
                "measurement": "stripfdsfdsfs"
            }
        ],
        "steps": [
            "cook"
        ]
    }
]


//Save recipes and grocerys to local storage
function saveToLocalStorage() {

    let tempRecipeLibrary = JSON.stringify(recipeLibrary)
    localStorage.setItem('recipeLibrary', tempRecipeLibrary)
    let tempGroceryList = JSON.stringify(groceryList)
    localStorage.setItem('groceryList', tempGroceryList)

}

//load and set display of recipes and selected groceries
function onStart() {
    let tempRecipeLibrary = localStorage.getItem('recipeLibrary')
    tempRecipeLibrary = JSON.parse(tempRecipeLibrary)
    if (tempRecipeLibrary == null && recipeLibrary == undefined) return;
    recipeLibrary = tempRecipeLibrary
    onStartRecipeToList()

    let tempGroceryList = localStorage.getItem('groceryList')
    tempGroceryList = JSON.parse(tempGroceryList)
    if (tempGroceryList == null) return;
    groceryList = tempGroceryList
    setSelectedRecipe()
    setGroceryHTML()
}

class Recipe {
    constructor(name, ingredients, steps) {
        this.name = name;
        //ingredients is a double array,[[item, amount, measurement]]
        this.ingredients = ingredients;
        this.steps = steps;

        //list ingredients and steps
        // this.listIngredients = function () {
        //     for (let i = 0; i < ingredients.length; i++) {
        //         if (ingredients[i][0] && ingredients[i][1] == undefined) {
        //             error('amount and name of ingredient required');
        //         }
        //         else if (ingredients[i][2] !== undefined) {
        //             console.log(`${ingredients[i][1]} ${ingredients[i][2]} of ${ingredients[i][0]}`);
        //         }
        //         else {
        //             console.log(`${ingredients[i][1]} ${ingredients[i][0]}`);
        //         }
        //     }
        // };

        // this.listSteps = function () {
        //     for (let i = 0; i < steps.length; i++) {
        //         console.log(steps[i]);
        //     }
        // };

        // this.cookRecipe = function () {
        //     return (
        //         this.listIngredients(),
        //         this.listSteps()
        //     );
        // };
    }
}

function addRecipeToLibrary() {
    //get response, make it usable to constructor, add new Recipe to library
    let responseName = prompt('Name of the Dish')
    let responseIngredients = prompt('List Ingrededients(ingr, amnt, (opt)measure;')
    let responseSteps = prompt('List Steps (step1; step 2 step 2; step3')


    //split response into double array
    let responseIngredientsArray = responseIngredients.split(';')
    for (let i = 0; i < responseIngredientsArray.length; i++) {
        responseIngredientsArray[i] = responseIngredientsArray[i].split(',')
        for (let j = 0; j < responseIngredientsArray[i].length; j++) {
            responseIngredientsArray[i][j] = responseIngredientsArray[i][j].trim()
        }
    }

    //split response into single array
    let responseStepsArray = responseSteps.split(';')
    for (let i = 0; i < responseStepsArray.length; i++) {
        responseStepsArray[i] = responseStepsArray[i].trim()
    }

    const tempRecipe = new Recipe(responseName, responseIngredientsArray, responseStepsArray)
    recipeLibrary.push(tempRecipe)
}

//hide/show add recipe form on button click

let addRecipeButton = document.querySelector('.expand-form');
let recipeForm = document.querySelector('.recipe-form')
addRecipeButton.addEventListener('click', () => {
    recipeForm.classList.toggle('hide-block')
})


//adjust form textareas to be responsive

function adjustHeight(el){
    let newvar1 = (el.scrollHeight)
    let newvar12 = (el.clientHeight)
    el.style.height = '2rem'
    let newvar13 = (el.clientHeight)
    el.style.height = (el.scrollHeight >= el.clientHeight) ? (el.scrollHeight)+'px' : '2rem'
    return console.log(el.style.height)
}
let formTextAreas = document.querySelectorAll('.recipe-form > div > textarea')
let textAreaContainers = document.querySelectorAll('form > div')
for (let i = 0; i < formTextAreas.length; i++) {
    formTextAreas[i].addEventListener('keyup', () => {
        //textarea and container must line up
        adjustHeight(formTextAreas[i]);
    })
}

for (let i = 0; i < textAreaContainers.length; i++) {
    //if combined with formTextAreas Event Listener: breaks
    textAreaContainers[i].addEventListener('keyup', () => {
        adjustHeight(textAreaContainers[i]);
    })
}

//recipe form submit, override default submit behavior with 2 event listeners 
recipeForm.addEventListener('submit', useFormSubmitNow)


function useFormSubmitNow(event) {
    event.preventDefault();
    let formData = new FormData(recipeForm)
    return formData;
}

recipeForm.addEventListener('formdata', (e) => {
    console.log('formdata fired')
    formData = e.formData
    console.log(formData)
    console.log(formData.get)
    let _name = formData.get('name');
    let _ingredients = formData.get('ingredients') 
    let _steps = formData.get('steps')
    console.log(_name, ingredients.textContent)
    console.log(typeof _name, typeof _ingredients)

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
    console.log(newRecipe)
    recipeLibrary.push(newRecipe)
    recipeListHTML.appendChild(createObjtoList(newRecipe))


})

//create inset carousel ############################
recipeIDCounter = 0;
function createObjtoList(item) {
    let _container = document.createElement('li')
    //to track each item, needed for deletion button must be first child
    _container.id = `recipe-${recipeIDCounter}` 
    //must be right after containerID
    let _deletebutton = document.createElement('button')
    _deletebutton.textContent = 'X'
    _deletebutton.id = recipeIDCounter
    recipeIDCounter++
    _deletebutton.addEventListener('click', () => {
        let elemNameID = document.querySelector("#recipe-" +_deletebutton.id + ' > .obj-name')
        elemNameID = elemNameID.textContent
        let elemIndex = recipeLibrary.findIndex((el) => {
            el.name == elemNameID
        })
        recipeLibrary.splice(elemIndex)
        _deletebutton.parentElement.remove()
        // recipeLibrary.splice(this.previousElementSibling.textContent)
        // remove(this.parentElement)
    })

    let objName = document.createElement('div')
    objName.classList = 'obj-name'
    objName.textContent = item.name

    let addToGrocery = document.createElement('button')
    addToGrocery.textContent = '+'
    addToGrocery.classList = 'add-grocery-button'

    addToGrocery.addEventListener('click', () => {
        let temp = addToGrocery.parentElement.children
        console.log(temp[1].textContent)
        let elemIndex = recipeLibrary.findIndex((el) => {
            return el.name == temp[1].textContent
        })
        console.log(elemIndex)
        groceryList.push(recipeLibrary[elemIndex])
        setGroceryHTML()
        setSelectedRecipe()


    })

//create ul for ingredients

    let objIngr = document.createElement('ul')
    objIngr.classList = 'obj-ingr'
    objIngr.name = 'ingredients'
    let ingrTitle = document.createElement('h4')
    ingrTitle.textContent = 'Ingredients'
    objIngr.appendChild(ingrTitle)
    for (let i=0;i<item.ingredients.length;i++) {
        let _ingr = document.createElement('li')

        let _name = document.createElement('span')
        _name.textContent = item.ingredients[i].ingredient

        let _amnt = document.createElement('span')
        _amnt.textContent = item.ingredients[i].amount

        let _measure = document.createElement('span')
        _measure.textContent = item.ingredients[i].measurement

        _ingr.appendChild(_amnt)
        _ingr.appendChild(_measure)
        _ingr.appendChild(_name)
        objIngr.appendChild(_ingr)
        
    }
    let objSteps = document.createElement('ol')
    objSteps.classList = 'obj-steps'
    let stepsTitle = document.createElement('h4')
    stepsTitle.textContent = 'Steps'
    objSteps.appendChild(stepsTitle)
    for (let i=0;i<item.steps.length;i++) {
        let _step = document.createElement('li')
        _step.classList = 'step'
        _step.textContent = item.steps[i]
        objSteps.appendChild(_step)
    }

    _container.appendChild(_deletebutton)
    _container.appendChild(objName)
    _container.appendChild(addToGrocery)
    _container.appendChild(objIngr)
    _container.appendChild(objSteps)

    return _container
}

const sectionRecipes = document.querySelector('section.recipes')
let recipeListHTML = document.createElement('ul')
sectionRecipes.appendChild(recipeListHTML)



function onStartRecipeToList() {
    for(let i = 0; i < recipeLibrary.length; i++) {
        recipeListHTML.appendChild(createObjtoList(recipeLibrary[i]));
    }
}


function createInsetMultiPageList() {
    //sort and search

    //10 items at a time
    function create10RecipeList() {
        
    }


    //change page
}




// //list recipes with dropdown
// //create list item for each element
// //run on button-submit and page-loading
// function createHTMLList(array, parent) {
//     for (let i = 0; i<array.length; i++) {
//         let newListItem = document.createElement('li')
//         recipeListHTML.appendChild(newListItem)
//     }
//     parent.appendChild(recipeListHTML)
// }
// //create div for each relevant key/value pair
// function expandHTMLList(){
//     let recipeListItems = recipeListHTML.children
//     for (let i=0; i<recipeListHTML.children;i++) {
//         for (let j=0; j<3; j++) {
//             let keyVal = Object.entries(recipeLibrary[i])
//             let newDiv = document.createElement('div')
//             newDiv.classList(keyVal[0])
//             recipeListItems[i].appendChild(newDiv)
//         }
//     }
    
// }
// //fill out name div and give class

// //fill out ingr div with list and give class

// //^^ for steps
// //fill out list item, seperate function for each value

// function fillRecipeList() {
//     let recipeListItems = recipeListHTML.children
//     for (let i = 0; i<recipeListItems.length; i++) {
//         for(let j = 0; j<recipeListItems[i][j]; j++) {
//         }
//     }
// }
// recipeForm.addEventListener('submit', () => {
//     createHTMLList(recipeLibrary, sectionRecipes)
// })


//Add groceries together
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




function combineGroceryItems() {
    const recipeLists = new Array
    for (let i=0; i< groceryList.length; i++) {
        for (let j=0; j<groceryList[i].ingredients.length; j++) {
            recipeLists.push(groceryList[i].ingredients[j])
        }
    }
    const combinedList = groupBy(recipeLists, 'ingredient')

    const _temp = Object.values(combinedList)
    const _finalList = []
    for (let i=0; i<_temp.length; i++) {
        let _listObj = {}
        _listObj.ingredient = _temp[i][0].ingredient;
        _listObj.amount = 0
        _listObj.measurement = _temp[i][0].measurement;
        
        for (let j=0; j<_temp[i].length; j++) {
            _listObj.amount += Number(_temp[i][j].amount)
        }
        _finalList.push(_listObj)
    }
    return _finalList

}

//add list of groceries to bottom in section


function createGroceryHTML(item) {
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
}

function setGroceryHTML() {
    let section = document.querySelector('section.grocery-list')
    while (section.firstChild) {
        section.removeChild(section.lastChild)
    }
    let sectionHeader = document.createElement('h2')
    sectionHeader.textContent = 'Groceries'
    section.appendChild(sectionHeader)
    
    let _groceryHTMLList = document.createElement('ul')
    section.appendChild(_groceryHTMLList)
    let tempArray = combineGroceryItems()
    for (let i=0;i<tempArray.length;i++) {
        _groceryHTMLList.appendChild(createGroceryHTML(tempArray[i]))
    }
}

//add list of selected recipes to top above recipes

function setSelectedRecipe() {
    let section = document.querySelector('section.selected-recipes')
    while (section.firstChild) {
        section.removeChild(section.lastChild)
    }
    let sectionHeader = document.createElement('h2')
    sectionHeader.textContent = 'Selected'
    section.appendChild(sectionHeader)

    let _selectedList = document.createElement('ul')
    section.appendChild(_selectedList)

    for (let i = 0; i<groceryList.length; i++) {
        let selectedItem = document.createElement('div')
        selectedItem.textContent = groceryList[i].name
        _selectedList.appendChild(selectedItem)

        let removeButton = document.createElement('button')
        removeButton.textContent = 'x'
        removeButton.addEventListener('click', () => {
            let temp = removeButton.parentElement.children

            let elemIndex = groceryList.findIndex((el) => {
                return el.name == temp[1].textContent
            })
            groceryList.splice(elemIndex)
            removeButton.parentElement.remove()
        })
        _selectedList.appendChild(removeButton)
    }
}



//add save button or move save function to form submit

let formSaveSection = document.querySelector('section.add-recipe')
let saveChangesButton = document.createElement('button')
saveChangesButton.textContent = 'Save Changes'
saveChangesButton.addEventListener('click', () => {
    saveToLocalStorage()
})
formSaveSection.appendChild(saveChangesButton)

 
onStart()
