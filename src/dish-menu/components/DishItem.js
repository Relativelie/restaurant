import DishItemEntity from '../models/MenuItemEntity';

class DishItem {
  constructor(menuItem) {
    this.itemTemplate = document.getElementById('menu-item-template');
    this.menuItem = new DishItemEntity(menuItem);
  }

  create() {
    const itemBody = document.importNode(this.itemTemplate.content, true);

    const { name, price, description, image } = this.menuItem;
    itemBody.querySelector('h2').textContent = name;
    itemBody.querySelector('p').textContent = description;
    itemBody.querySelector('h3').textContent = `from $${price}`;
    itemBody.querySelector(
      '.dish-item__image',
    ).style.backgroundImage = `url("../assets/jpg/${image}")`;

    return itemBody;
  }
}

export default DishItem;
