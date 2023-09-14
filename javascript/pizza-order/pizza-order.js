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
/**
 * Sum all extras a customers take, recursively
 *
 * @param {extras[]} list of extras
 * @param {n} Start to count from this number
 * @param {i} Total range of extras
 *
 * @returns {number} the total price of all extras
 */

function computeExtras(extras, n, i) {
  if (!extras) return 0;
  if (i === 0) return n;
  n += EXTRAS[extras[i - 1]];
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
  return computeExtras(extras, PIZZAS[pizza], extras.length);
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let price = 0;

  pizzaOrders.forEach((pizzaOrder) => {
    let totalExtrasPrice = 0;
    pizzaOrder.extras.forEach(extra => totalExtrasPrice += EXTRAS[extra]);

    price += (PIZZAS[pizzaOrder.pizza] + totalExtrasPrice);
  });

  return price;
}
