'use strict';

/**
 * @typedef {Object} Dish
 * @property {string} title
 * @property {string} id
 * @property {string} description
 */

/**
 * @typedef {('pending'|'cooking'|'closed')} OrderStatus
 */

/**
 * @typedef {Object} PrivOrder
 * @property {string} creationDateUTC - 'Sat, 11 Dec 2021 08:36:34 GMT'
 * @property {string} id
 * @property {Dish[]} dishList
 * @property {OrderStatus} state
 */

/**
 * @returns {string}
 */
function getOrderCreationDate() {
  const timeVariationMaxMs = 1000 * 60;
  const randomDateMs = Date.now() + Math.round(timeVariationMaxMs * Math.random());
  const randomDate = new Date(randomDateMs);
  const randomDateUTCString = randomDate.toUTCString();
  return randomDateUTCString;
}

/** @type {string[]} */
const usedOrderIds = [];

/** @type {string[]} */
const usedDishIds = [];

/**
 * @param {string[]} usedIds - array to store all ids and prevent id duplicates
 * @return {string} next id
 */
function getUniqueId(usedIds) {
  /** @type {string} */
  const nextId = usedIds.length > 0 ? `${+usedIds[usedIds.length - 1] + 1}` : '1';
  usedIds.push(nextId);
  return nextId;
}

/**
 * @return {Dish} random dish object
 */
function getRandomDish() {
  /** @type {string} */
  const id = `D${getUniqueId(usedDishIds)}`;

  /** @type {Dish} */
  const dish = {
    title: `Dish ${id} title`,
    id: `D${getUniqueId(usedDishIds)}`,
    description: `Dish ${id} description atem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet`,
  };
  return dish;
}

/**
 * @returns {PrivOrder}
 */
export function getRandomPrivOrder() {
  /** @type {number} */
  const dishCount = 1 + Math.round(4 * Math.random());

  /** @type {Dish[]} */
  const dishList = [];
  for (let i = 0; i < dishCount; i++) {
    dishList.push(getRandomDish());
  }

  /** @type {PrivOrder} */
  const order = {
    creationDateUTC: getOrderCreationDate(),
    id: `Z${getUniqueId(usedOrderIds)}`,
    dishList,
    state: 'pending',
  };
  return order;
}

/**
 * @param {number} count - count of orders to create
 * @returns {PrivOrder[]}
 */
export function getRandomPrivOrderArray(count) {
  /** @const {PrivOrder[]} */
  const orders = [];

  for (let i = 0; i < count; i++) {
    orders.push(getRandomPrivOrder());
  }

  return orders;
}
