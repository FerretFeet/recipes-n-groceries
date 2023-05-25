import './styles.css';
import { HTMLSkeleton } from './createHTMLSkel';

HTMLSkeleton.init()

import { recipeLibrary } from './recipeLibrary';
import { selectedRecipes } from './selectedRecipes';
import { groceryList } from './groceryList';



function onStart() {

    setTimeout(recipeLibrary.init(), 500)
    setTimeout(selectedRecipes.init(), 500)
    setTimeout(groceryList.init(), 500)
}

window.addEventListener('load', onStart)

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






