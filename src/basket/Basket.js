import Component from '../components/Component';
import Order from '../order/Order';
import CategoryContainer from './components/CategoryContainer';
import EmptyBasket from './components/EmptyBasket';
import BasketEntity from './models/BasketEntity';
import BasketItemEntity from './models/BasketItemEntity';

class Basket extends Component {
  #inactiveClass = 'basket_inactive';
  #removeAnimationClass = 'remove-animation';

  constructor() {
    super('#basket-template');

    this.basketPopup = document.querySelector('.basket__popup');
    this.basketButton = document.querySelector('.basket-button');
    this.orderingItems = new BasketEntity();
  }

  get isActivePopup() {
    return !this.basketPopup.classList.contains(this.#inactiveClass);
  }

  get totalCost() {
    let sum = 0;
    Object.values(this.orderingItems).forEach((items) => {
      if (!items.length) return;
      sum = items.reduce((acc, item) => acc + item.filling.price, sum);
    });
    return sum;
  }

  create() {
    this.basketButton.addEventListener('click', () => {
      this.switchBasketPopup();
    });

    const basketBackdrop = document.querySelector(
      '.basket__popup .basket_backdrop',
    );
    basketBackdrop.addEventListener('click', () => {
      this.switchBasketPopup();
    });
  }

  renderBasketItems() {
    const basketBody = super.getTemplateBody();
    const basketContainer = document.querySelector('.basket__popup_container');
    basketContainer.innerHTML = '';

    basketContainer.appendChild(basketBody);

    Object.keys(this.orderingItems).map((key) => {
      if (this.orderingItems.isEmptyCategory(key)) return;

      const body = new CategoryContainer(key, this.orderingItems[key]).create();
      basketContainer
        .querySelector('.basket__content')
        .appendChild(body, basketBody.firstChild);
    });

    const totalCostSelector = basketContainer.querySelectorAll(
      '.basket__total-cost p',
    )[1];
    totalCostSelector.textContent = `$${this.totalCost}`;

    const orderBtn = document.querySelector('.basket__order-btn');
    orderBtn.addEventListener('click', () => {
      this.onClickToOrder(this);
    });
  }

  onClickToOrder() {
    this.closeBasketPopup();
    const order = new Order(
      this.totalCost,
      this.onClearBasket.bind(this),
    );
    order.render();

    const orderModal = document.querySelector('.order-modal__form');
    orderModal.open();
  }

  openBasketPopup() {
    this.basketButton.querySelector('img').src = '../assets/png/close.png';
    this.basketPopup.classList.remove(this.#inactiveClass);
    document.querySelector('body').style.overflow = 'hidden';

    if (this.orderingItems.isEmptyBasket) {
      new EmptyBasket().render();
      return;
    }

    this.renderBasketItems(this);
  }

  closeBasketPopup() {
    this.basketButton.querySelector('img').src = '../assets/png/trolley.png';
    this.basketPopup.classList.add(this.#inactiveClass);
    document.querySelector('body').style.overflow = 'auto';
  }

  switchBasketPopup() {
    if (this.isActivePopup) {
      this.closeBasketPopup();
      return;
    }
    this.openBasketPopup();
  }

  addItem(category, dish, filling) {
    this.orderingItems.addItem(category, new BasketItemEntity(dish, filling));
    this.toAnimateBasketButton();
  }

  toAnimateBasketButton() {
    const basketBtn = document.querySelector('.basket-button');

    basketBtn.classList.remove(this.#removeAnimationClass);
    const myTimeout = setInterval(() => {
      basketBtn.classList.add(this.#removeAnimationClass);
      clearInterval(myTimeout);
    }, 1000);
  }

  onClearBasket() {
    this.orderingItems.clearBasket();
    this.renderBasketItems(this);
  }
}

export default Basket;
