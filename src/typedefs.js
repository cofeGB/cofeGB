/**
 * @typedef {Object} Nutrient - питательное вещество
 * @property {number} percentage - относительное содержание к весу в %
 * @property {number} value - абсолютный вес в одной порции в граммах
 */

/**
 * @typedef {Object} FoodNutrients - пищевая ценность
 * @property {Nutrient} proteins - белки
 * @property {Nutrient} fats - жиры
 * @property {Nutrient} carbohydrates - углеводы
 * @property {number} energy - энергетическая ценность одной порции в килокалориях
 */

/**
 * @typedef {(0|1|2)} Availability - статус наличия: нет, мало, достаточно
 */

/**
 * @typedef {string} IngredientId - уникальный идентификатор ингредиента
 */

/**
 * @typedef {string} IngredientCategory - категрия ингредиента: 'специи'|'крупы'|...
 */

/**
 * @typedef {Object} Ingredient - ингредиент
 * @property {IngredientCategory} category - категория ингредиента
 * @property {IngredientId} id - идентификатор ингредиента
 * @property {string} title - наименование ингредиента
 * @property {string} description - подробное описание ингредиента
 * @property {?number} weight - вес одной порции в граммах
 * @property {?number} volume - объем одной порции в граммах
 * @property {number} price - цена одной порции в рублях
 * @property {number} quantity - количество порций ингредиента, в штуках относительно weight или volume
 * @property {FoodNutrients} nutrients - пищевая ценность одной порции ингредиента
 * @property {string[]} imgUrls - ссылки на изображения
 * @property {string} brand - производитель ингредиента
 * @property {string} origin - страна происхождения ингредиента
 * @property {Availability} availability - наличие ингредиента
 */

/**
 * @typedef {string} DishCategory - категрия блюда: 'закуски'|'сэндвичи'|'салаты'|'напитки'...
 */

/**
 * @typedef {string} DishId - уникальный идентификатор блюда
 */

/**
 * @typedef {Object} Dish - блюдо
 * @property {DishCategory} category - категория блюда
 * @property {DishId} id - идентификатор блюда
 * @property {string} title - наименование блюда
 * @property {string} description - подробное описание блюда
 * @property {number} weight - вес одной порции в граммах
 * @property {number} price - цена одной порции в рублях
 * @property {number} quantity - количество порций блюда, в штуках
 * @property {FoodNutrients} nutrients - пищевая ценность одной порции блюда
 * @property {string[]} imgUrls - ссылки на изображения
 * @property {Ingredient[]} ingredients - ингредиенты блюда
 * @property {Availability} availability - доступность блюда
 */

/**
 * @typedef {('pending'|'cooking'|'ready'|'cancelled'|'paused'|'closed')} OrderStatus - статус заказа
 */

/**
 * @typedef {string} OrderId - уникальный идентификатор заказа
 */

/**
 * @typedef {Object} Order - публичный объект заказа
 * @property {Date} creationDate - дата оформления заказа
 * @property {OrderId} id - уникальный идентификатор заказа
 * @property {Dish[]} dishes - блюда в заказе
 * @property {OrderStatus} state - статус заказа
 */

/**
 * @typedef {Object} PrivOrder - объекта заказа для заведения
 * @property {Order} order - публичный объект заказа
 * ? что нужно заведению ? Исолнитель? Статус склада? Статус готовности отдельных блюд?
 */
