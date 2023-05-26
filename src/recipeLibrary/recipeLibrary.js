// import { HTMLSkeleton } from '../utils/createHTMLSkel';
import Recipe from '../utils/recipeClass';
import '../styles.css';
import { saveLoadLocalStorage } from '../utils/saveLoadLocStorage';
import { recipeHTML } from './recipeHTML';
import { recipeForm } from './recipeForm';


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
    const newRecipe = new Recipe(_name, _ingrObjList, _steps);


    //way to extract this? necessary before modularizing
    recipeLibrary.recipeLibrary.push(newRecipe)
    saveLoadLocalStorage.saveTo(recipeLibrary.recipeLibrary, 'JSONrecipeLibrary')
    recipeHTML.render(recipeLibrary.recipeLibrary)


}


export const recipeLibrary = {

    recipeLibrary: new Array,
        //import recipeForm
        //import recipeHTML
    init: function() {
        console.log(this.recipeLibrary)
        this.recipeLibrary = saveLoadLocalStorage.load('JSONrecipeLibrary');
        console.log(this.recipeLibrary)
        if (this.recipeLibrary === undefined) this.recipeLibrary = this.defaultLibrary
        // recipeForm = recipeForm
        this.render() //create Recipes List HTML
        // recipeHTML = recipeHTML
        recipeForm.form.addEventListener('formdata', formHandler) //add response to library and updateHTML on submit

    },

    findByName: function(name) {
        for (let i = 0; i < this.recipeLibrary.length; i++) {
            if (this.recipeLibrary[i].name == name) {
                return this.recipeLibrary[i]
            }
        }
    },




    render: function() {
        recipeForm.init() //create RecipeForm HTML & Add to Doc
        recipeHTML.render(this.recipeLibrary)
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

 





     

