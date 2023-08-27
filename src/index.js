import './styles.css';
import { HTMLSkeleton } from './utils/createHTMLSkel';

HTMLSkeleton.init()

import { recipeLibrary } from './recipeLibrary/recipeLibrary';
import { selectedRecipes } from './selectedRecipes/selectedRecipes';
import { groceryList } from './groceryList/groceryList';

let x = async function() {
    let response = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Eggs', {mode: 'cors'})
    let foodData = await response.json();
    console.log(foodData.foods[0].foodNutrients)
}



function onStart() {

    setTimeout(recipeLibrary.init(), 500)
    setTimeout(selectedRecipes.init(), 500)
    setTimeout(groceryList.init(), 500)
}

window.addEventListener('load', onStart)









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






