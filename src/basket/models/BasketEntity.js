class BasketEntity {
  constructor() {
    this.items = {
      breakfast: [],
      lunch: [],
      dinner: [],
      drinks: [],
    };
  }

  get isEmpty() {
    return Object.values(this.items).every((item) => item.length === 0);
  }

  addItem(category, item) {
    this.items[category].push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
  }
}

export default BasketEntity;
