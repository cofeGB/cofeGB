'use strict';

/**
 * @typedef {Object} IDish
 * @property {string} title
 * @property {string} id
 * @property {string} description
 */

/**
 * @typedef {('pending'|'cooking'|'closed')} OrderStatus
 */

/**
 * @typedef {Object} PrivOrder
 * @property {string} creationDateUTC - 2021-12-10T18:53:36Z
 * @property {string} id
 * @property {IDish[]} dishList
 * @property {OrderStatus} status
 */

function getCreationDate() {
  const timeVariationMax = 
  return Date.now();
}

export function getRandomPrivOrder() {
  return {};
}
