import Component from '../../common-components/Component';

class CategoryItem extends Component {
  constructor(item) {
    super('#basket-category-item-template');
    this.item = item;
  }

  create() {
    const itemBody = super.getTemplateBody();

    const { dish, filling } = this.item;

    const allTextContent = itemBody.querySelectorAll('p');
    const [nameSelector, priceSelector] = allTextContent;

    nameSelector.textContent = `${dish.name} with ${filling.name}`;
    priceSelector.textContent = `$${filling.price}`;

    return itemBody;
  }
}

export default CategoryItem;
