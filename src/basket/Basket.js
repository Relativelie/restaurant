import Component from '../common-components/Component';
import CategoryContainer from './components/CategoryContainer';
import EmptyBasket from './components/EmptyBasket';
import BasketEntity from './models/BasketEntity';
import BasketItemEntity from './models/BasketItemEntity';

class Basket extends Component {
  #inactiveClass = 'basket_inactive';

  constructor() {
    super('#basket-template');

    this.basketPopup = document.querySelector('.basket__popup');
    this.basketButton = document.querySelector('.basket-button');

    this.categoryItems = new BasketEntity();
  }

  get isActivePopup() {
    return !this.basketPopup.classList.contains(this.#inactiveClass);
  }

  create() {
    this.basketButton.addEventListener('click', () => {
      this.switchBasketPopup();
    });

    const basketBackdrop = document.querySelector('.basket_backdrop');
    basketBackdrop.addEventListener('click', () => {
      this.switchBasketPopup();
    });
  }

  renderBasketItems() {
    const basketBody = super.getTemplateBody();

    Object.keys(this.categoryItems).map((key) => {
      const body = new CategoryContainer(key, this.categoryItems[key]).create();
      basketBody.insertBefore(body, basketBody.firstChild);
    });

    const basketContainer = document.querySelector('.basket__popup_container');
    basketContainer.innerHTML = '';

    basketContainer.appendChild(basketBody);
  }

  openBasketPopup() {
    this.basketButton.querySelector('img').src = '../assets/png/close.png';
    this.basketPopup.classList.remove(this.#inactiveClass);

    if (this.categoryItems.isEmpty) {
      new EmptyBasket().render();
      return;
    }

    this.renderBasketItems(this);
  }

  closeBasketPopup() {
    this.basketButton.querySelector('img').src = '../assets/png/trolley.png';
    this.basketPopup.classList.add(this.#inactiveClass);
  }

  switchBasketPopup() {
    if (this.isActivePopup) {
      this.closeBasketPopup();
      return;
    }
    this.openBasketPopup();
  }

  addItem(category, dish, filling) {
    this.categoryItems.addItem(category, new BasketItemEntity(dish, filling));
  }
}

export default Basket;
