
export default class Recipe {
    constructor(name, ingredients, steps) {
        this.name = name;
        //ingredients is a double array,[[item, amount, measurement]]
        this.ingredients = ingredients;
        this.steps = steps;
    }
}
