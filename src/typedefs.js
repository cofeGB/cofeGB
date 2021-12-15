/**
 * @typedef {('starter'|'sandwich'|'salad'|'dessert')} DishCategory
 */

/**
 * @typedef {Object} FoodNutrient
 * @property {DishCategory} category
 * @property {number} relative
 * @property {number} guid
 * @property {string} title
 */

/**
 * @typedef {Object} Dish
 * @property {DishCategory} category
 * @property {string} img
 * @property {string} guid
 * @property {string} title
 * @property {number} quantity
 * @property {number} price
 * @property {number} weight
 * @property {string} description
 */

 "category": "starters",
 "img": "",
 "guid": "",
 "title": "Оливки Chupadedos",
 "quantity": null,
 "price": 100,
 "weight": 100,
 "calories": [
   {
     "title": "Ккал",
     "procents": 0,
     "value": 0
   },
   {
     "title": "Белки",
     "procents": 0,
     "value": 0
   },
   {
     "title": "Жиры",
     "procents": 0,
     "value": 0
   },
   {
     "title": "Углеводы",
     "procents": 0,
     "value": 0
   }
 ],
 "composition": ["guid"],
 "description": "Калорийность на 20 гр. — 29 кКал. Жиры — 3.1 г. Белки — 0.2 г. Углеводы — 0.7 г. В 50 г. В оливках Чупадедос содержатся 0.22% суточной нормы белка, жиров — 4.63% и углеводов — 0.35%."

/**
 * @typedef {('pending'|'cooking'|'closed')} OrderStatus
 */

/**
 * @typedef {Object} PrivOrder
 * @property {Date} creationDate
 * @property {string} id
 * @property {Dish[]} dishList
 * @property {OrderStatus} state
 */
