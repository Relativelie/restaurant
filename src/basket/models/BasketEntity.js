class BasketEntity {
  constructor() {
    this.breakfast = [];
    this.lunch = [];
    this.dinner = [];
    this.drinks = [];
  }

  get isEmptyBasket() {
    return Object.values(this).every((item) => item.length === 0);
  }

  isEmptyCategory(category) {
    return this[category].length === 0;
  }

  addItem(category, item) {
    this[category].push(item);
  }

  clearBasket() {
    this.breakfast = [];
    this.lunch = [];
    this.dinner = [];
    this.drinks = [];
  }
}

export default BasketEntity;
