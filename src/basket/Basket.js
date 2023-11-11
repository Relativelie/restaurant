import CategoryItems from './components/CategoryItems';
import BasketEntity from './models/BasketEntity';
import BasketItemEntity from './models/BasketItemEntity';

class Basket {
  constructor() {
    this.categoryItems = new BasketEntity();
    this.basketPopup = document.querySelector('.basket__popup');
    this.basketButton = document.querySelector('.basket-button');
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

  get isActivePopup() {
    return !this.basketPopup.classList.contains('basket_inactive');
  }

  openBasketPopup() {
    this.basketButton.querySelector('img').src = '../assets/png/close.png';
    this.basketPopup.classList.remove('basket_inactive');

    if (this.categoryItems.isEmpty) {
      this.renderEmptyBasket();
      return;
    }

    this.renderBasketItems(this);
  }

  renderBasketItems() {
    const basketTemplate = document.getElementById('basket-template');

    const basketBody = document.importNode(basketTemplate.content, true);
    Object.keys(this.categoryItems.items).map((key) => {
      const category = new CategoryItems(key, this.categoryItems.items[key]);
      const categoryBody = category.create();

      basketBody.insertBefore(categoryBody, basketBody.firstChild);
    });

    const basketContainer = document.querySelector('.basket__popup_container');
    basketContainer.innerHTML = '';

    basketContainer.appendChild(basketBody);
  }

  renderEmptyBasket() {
    const emptyBasketTemplate = document.getElementById(
      'empty-basket-template',
    );
    const emptyBasket = document.importNode(emptyBasketTemplate.content, true);
    const basketContainer = document.querySelector('.basket__popup_container');
    basketContainer.innerHTML = '';
    basketContainer.appendChild(emptyBasket);
  }

  closeBasketPopup() {
    this.basketButton.querySelector('img').src = '../assets/png/trolley.png';
    this.basketPopup.classList.add('basket_inactive');
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
