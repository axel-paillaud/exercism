/// <reference path="./global.d.ts" />
//
// @ts-check

const PIZZAS = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10
}

const EXTRAS = {
  ExtraSauce: 1,
  ExtraToppings: 2
}

function computeExtras(extras, n, i) {
  if (i === 0) return n;

  //console.log(EXTRAS[extras[i - 1]]);
  n += EXTRAS[extras[i - 1]];
  console.log(n);
  i--;
  return computeExtras(extras, n, i);
}

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let result = computeExtras(extras, 0, extras.length);
  return PIZZAS[pizza] + result;
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  throw new Error('Please implement the orderPrice function');
}
