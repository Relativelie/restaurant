import Component from '@commonComponents/Component';
import FillingItemEntity from '../../models/FillingItemEntity';

class FillingsItem extends Component {
  #selectedClassName = 'fillings-item_selected';

  constructor(filling, onSelectFilling) {
    super('#fillings-item-template');

    this.filling = new FillingItemEntity(filling);
    this.onSelectFilling = onSelectFilling;
  }

  create() {
    const itemBody = super.getTemplateBody();

    const { name, price, image } = this.filling;
    itemBody.querySelector('p').textContent = name;
    itemBody.querySelector('h4').textContent = `$${price}`;
    itemBody.querySelector('.fillings-item').style.backgroundImage =
      `url("../assets/jpg/${image}")`;

    const filling = itemBody.querySelector('.fillings-item_container');
    filling.addEventListener('click', (e) => {
      this._onClickFilling(e, filling);
    });

    return itemBody;
  }

  _onClickFilling(e, fillingsItem) {
    if (this._hasSelectedFilling(e)) {
      this._unselectFilling();
      return;
    }
    this._unselectFilling(this);
    this.selectFilling(fillingsItem);
  }

  _hasSelectedFilling(e) {
    e.currentTarget.querySelector(`.${this.#selectedClassName}`);
  }

  selectFilling(fillingsItem) {
    fillingsItem.querySelector('.fillings-item').classList.add(this.#selectedClassName);
    this.onSelectFilling(this.filling);
  }

  _unselectFilling() {
    const selectedItem = document.querySelector(`.${this.#selectedClassName}`);
    if (selectedItem) {
      selectedItem.classList.remove(this.#selectedClassName);
      this.onSelectFilling(null);
    }
  }
}

export default FillingsItem;
