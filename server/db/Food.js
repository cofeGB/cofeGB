'use strict';
export class Food {
  /**
   * @typedef {Object} FoodProps
   * @property {String} guid,
   * @property {String} title,
   * @property {String} description,
   * @property {String} imgUrl,
   * @property {Number} pieceWeightGram,
   * @property {Number} packWeightGram,
   * @property {Number} proteinPercentPer100Gram,
   * @property {Number} fatsPercentPer100Gram,
   * @property {Number} carbohydratesPercentPer100Gram,
   * @property {Number} caloriesPer100Gram,
   * @property {Number} priceRub,
   * @property {Number} priceByKg,
   * @property {Date} productionDate,
   * @property {Date} expirationDate,
   */

  /**
   * Constructs Food object
   * @param {FoodProps} props
   */
  constructor(props) {
    this.guid = props.guid;
    this.title = props.title;
    this.description = props.description;
    this.imgUrl = props.imgUrl;
    this.pieceWeightGram = props.pieceWeightGram;
    this.packWeightGram = props.packWeightGram;
    this.proteinPercentPer100Gram = props.proteinPercentPer100Gram;
    this.fatsPercentPer100Gram = props.fatsPercentPer100Gram;
    this.carbohydratesPercentPer100Gram = props.carbohydratesPercentPer100Gram;
    this.caloriesPer100Gram = props.caloriesPer100Gram;
    this.priceRub = props.priceRub;
    this.priceByKg = props.priceByKg;
    this.productionDate = props.productionDate;
    this.expirationDate = props.expirationDate;
  }

  /**
   * Constructs Date object from string date format 'dd.mm.yyyy'
   * @param {string} dateString - string with date to parse
   * @returns {Date} resulting Date object
   */
  static toFoodDate(dateString) {
    const parts = dateString.split('.');
    return new Date(Date.UTC(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])));
  }

  toJSON() {
    return JSON.stringify({
      guid: this.guid,
      title: this.title,
      description: this.description,
      imgUrl: this.imgUrl,
      pieceWeightGram: this.pieceWeightGram,
      packWeightGram: this.packWeightGram,
      proteinPercentPer100Gram: this.proteinPercentPer100Gram,
      fatsPercentPer100Gram: this.fatsPercentPer100Gram,
      carbohydratesPercentPer100Gram: this.carbohydratesPercentPer100Gram,
      caloriesPer100Gram: this.caloriesPer100Gram,
      priceRub: this.priceRub,
      priceByKg: this.priceByKg,
      productionDate: this.productionDate,
      expirationDate: this.expirationDate,
    });
  }
}
