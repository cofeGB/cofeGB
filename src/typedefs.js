/**
 * Форматы объектов для сериализации (для API):
 * a string
 * a number
 * an object (JSON object)
 * an array
 * a boolean
 * null
 */

/**
 * @typedef {string} UserId - уникальный идентификатор пользователя
 */

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
 * @typedef {Object} Ingredient - публичное представление ингредиента
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
 * @property {string} warnings - предупреждения о свойствах продукта (для аллергиков, диабетиков?)
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
 * @property {DishId} dishId - идентификатор блюда
 * @property {?UserId} creatorId - автор блюда
 * @property {string} title - наименование блюда
 * @property {string} description - подробное описание блюда
 * @property {?number} weight - вес одной порции в граммах
 * @property {?number} volume - объем одной порции в граммах
 * @property {number} price - цена одной порции в рублях
 * @property {number} quantity - количество порций блюда, в штуках
 * @property {FoodNutrients} nutrients - пищевая ценность одной порции блюда
 * @property {string[]} imgUrls - ссылки на изображения
 * @property {Ingredient[]} ingredients - ингредиенты блюда
 * @property {Availability} availability - доступность блюда
 * @property {string} warnings - предупреждения о свойствах продукта (для аллергиков, диабетиков?)
 */

/**
 * @typedef {('pending'|'cooking'|'ready'|'cancelled'|'paused'|'closed')} OrderStatus - статус заказа
 */

/**
 * @typedef {string} OrderId - уникальный идентификатор заказа
 */

/**
 * @typedef {Object} Order - публичный объект заказа
 * @property {string} creationDate - дата оформления заказа, формат UTC 'Mon, 13 Dec 2021 19:25:53 GMT'
 * @property {string} processingStartDate - дата начала работы с заказом, формат UTC 'Mon, 13 Dec 2021 19:25:53 GMT'
 * @property {string} processingEndDate - дата окончания работы с заказом, формат UTC 'Mon, 13 Dec 2021 19:25:53 GMT'
 * @property {OrderId} orderId - уникальный идентификатор заказа
 * @property {UserId} userId - уникальный идентификатор заказа
 * @property {Dish[]} dishes - блюда в заказе
 * @property {OrderStatus} state - статус заказа
 */

/**
 * @typedef {Object} PrivOrder - объект заказа для заведения
 * @property {Order} order - публичный объект заказа
 * ? что нужно заведению ? Исолнитель? Статус склада? Статус готовности отдельных блюд?
 */

/**
 * @typedef {Object} NavMenuItem - элемент навигационного меню приложения
 * @property {string} title - название пункта навигационного меню, как его видит пользователь
 * @property {string} path - полный путь роутера '/menu/sandwiches'|'/menu/salads'...
 */

/**
 * @typedef {NavMenuItem[]} NavMenuItemList - элемент навигационного меню приложения
 */
