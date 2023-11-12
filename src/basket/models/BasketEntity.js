class BasketEntity {
  constructor() {
    this.breakfast = [];
    this.lunch = [];
    this.dinner = [];
    this.drinks = [];
  }

  get isEmpty() {
    return Object.values(this).every((item) => item.length === 0);
  }

  addItem(category, item) {
    this[category].push(item);
  }

  // removeItem(item) {
  //   this.items = this.items.filter((i) => i !== item);
  // }
}

export default BasketEntity;
