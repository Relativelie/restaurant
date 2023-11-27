import Component from '@commonComponents/Component';

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

    nameSelector.textContent = `${dish.name} ${this._isWithoutFilling() ? '' : 'with'} ${
      filling.name
    }`;
    priceSelector.textContent = `$${filling.price}`;

    return itemBody;
  }

  _isWithoutFilling() {
    const { filling } = this.item;
    return filling.name === 'without filling';
  }
}

export default CategoryItem;
