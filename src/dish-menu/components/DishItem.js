import Component from '../../common-components/Component';
import DishItemEntity from '../models/MenuItemEntity';

class DishItem extends Component {
  constructor(menuItem) {
    super('#menu-item-template');
    this.menuItem = new DishItemEntity(menuItem);
  }

  create() {
    const itemBody = super.getTemplateBody();

    const { id, name, price, description, image } = this.menuItem;
    itemBody.querySelector('h2').textContent = name;
    itemBody.querySelector('p').textContent = description;
    itemBody.querySelector('h3').textContent = `from $${price}`;
    itemBody.querySelector(
      '.dish-item__image',
    ).style.backgroundImage = `url("../assets/jpg/${image}")`;
    itemBody.querySelector('.dish-item').dataset.dish = id;

    return itemBody;
  }
}

export default DishItem;
