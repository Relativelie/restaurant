class BasketItemEntity {
  constructor(dish, filling) {
    this.name = dish;
    this.price = filling.price;
    this.filling = filling.name;
  }
}
export default BasketItemEntity;
