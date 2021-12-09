'use strict';
const { Food } = require('./Food');
const { FoodComposer } = require('./FoodComposer');

const BREAD = new Food({
  guid: 'BREAD_BROWN',
  title: 'Хлеб черный',
  description: 'Хлеб черный из ржаной муки',
  imgUrl: 'assets/img/brown_bread.jpg',
  pieceWeightGram: 100,
  packWeightGram: 1000,
  proteinPercentPer100Gram: 33,
  fatsPercentPer100Gram: 33,
  carbohydratesPercentPer100Gram: 33,
  caloriesPer100Gram: 200000,
  priceRub: 10,
  priceByKg: 100,
  productionDate: '2021-09-11',
  expirationDate: '2021-09-15',
});

const CHEESE = new Food({
  guid: 'CHEESE',
  title: 'Сыр',
  description: 'Сыр с дырками',
  imgUrl: 'assets/img/cheese.jpg',
  pieceWeightGram: 50,
  packWeightGram: 1000,
  proteinPercentPer100Gram: 33,
  fatsPercentPer100Gram: 33,
  carbohydratesPercentPer100Gram: 33,
  caloriesPer100Gram: 200000,
  priceRub: 10,
  priceByKg: 100,
  productionDate: '2021-09-11',
  expirationDate: '2021-09-15',
});

const dishSandwichWithCheese = new FoodComposer({}, [BREAD, CHEESE]);

module.exports = {
  food: [BREAD, CHEESE],
  dishes: [],
};
