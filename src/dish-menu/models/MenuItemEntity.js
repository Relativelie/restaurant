class DishItemEntity {
  constructor({ id, name, price, description, image, fillings }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.fillings = fillings;
  }
}

export default DishItemEntity;
