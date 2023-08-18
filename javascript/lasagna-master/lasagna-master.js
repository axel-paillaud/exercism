/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTimer) {
    switch(remainingTimer) {
        case 0:
            return 'Lasagna is done.';
        case Number(remainingTimer):
            return 'Not done, please wait.';
        default:
            return 'You forgot to set the timer.';
    }
}

export function preparationTime(layers, averagePreparationTime = 2) {
    return layers.length * averagePreparationTime;
}

function countIngredient(layers, ingredient, factor) {
    return layers.filter((element) => element === ingredient).length * factor;
}

export function quantities(layers) {
    return {
        noodles: countIngredient(layers, 'noodles', 50), 
        sauce: countIngredient(layers, 'sauce', 0.2), 
    };
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList.slice(-1).pop());
}

export function scaleRecipe(recipe, quantity) {
    const newRecipe = {};
    for (let ingredient in recipe) {
        newRecipe[ingredient] = recipe[ingredient] / 2 * quantity;
    }
    return newRecipe;
}
