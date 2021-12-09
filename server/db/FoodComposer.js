'use strict';

/** Class representing a composite food. */
export class FoodComposer {
  /**
   * @typedef {Object} FoodComposerProps
   * @property {String} guid
   * @property {String} title
   * @property {String} description
   */
  /**
   * Constructs FoodComposer object
   * @param {FoodComposerProps} props
   * @param {(Food|FoodComposer)[]|undefined} composition - The array of Food objects to compose this object of.
   */
  constructor(props, composition) {
    this.guid = props.guid;
    this.title = props.title;
    this.description = props.description;
    this._content = composition || [];
  }

  /**
   * Add Food object
   * @param {Food|FoodComposer} item - The aFood objects to add.
   */
  add(item) {
    this._content.push(item);
  }

  /**
   * Add Food object
   * @param {Food|FoodComposer} item - The aFood objects to add.
   */
  remove(item) {
    this._content = this._content.filter(contentItem => contentItem !== item);
  }

  /**
   * Gets the total value
   * @public
   * @property {number} total result.
   */
  get pieceWeightGram() {
    return 0; //TBD
  }

  /**
   * Gets the total value
   * @public
   * @property {number} total result.
   */
  get packWeightGram() {
    return 0; //TBD
  }

  /**
   * Gets the total value
   * @public
   * @property {number} total result.
   */
  get proteinPercentPer100Gram() {
    return 0; //TBD
  }

  /**
   * Gets the total value
   * @public
   * @property {number} total result.
   */
  get fatsPercentPer100Gram() {
    return 0; //TBD
  }

  /**
   * Gets the total value
   * @public
   * @property {number} total result.
   */
  get carbohydratesPercentPer100Gram() {
    return 0; //TBD
  }

  /**
   * Gets the total value
   * @public
   * @property {number} total result.
   */
  get caloriesPer100Gram() {
    return 0; //TBD
  }

  /**
   * Gets the total value
   * @public
   * @property {number} total result.
   */
  get priceRub() {
    return 0; //TBD
  }

  /**
   * Gets the total value
   * @public
   * @property {number} total result.
   */
  get priceByKg() {
    return 0; //TBD
  }

  toJSON() {
    return JSON.stringify({
      guid: this.guid,
      title: this.title,
      description: this.description,
      composition: this._composition,
    });
  }
}
