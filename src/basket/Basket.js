import Component from '@commonComponents/Component';
import BasketEntity from './models/BasketEntity';

const loadEmptyBasket = () => import('./components/EmptyBasket');
const loadOrderComp = () => import('../order/Order');
const loadCategoryContainer = () => import('./components/CategoryContainer');
const loadBasketItemEntity = () => import('./models/BasketItemEntity');

class Basket extends Component {
  #inactiveClass = 'basket_inactive';
  #removeAnimationClass = 'remove-animation';

  constructor() {
    super('#basket-template');

    this.basketPopup = document.querySelector('.basket__popup');
    this.basketButton = document.querySelector('.basket-button');
    this.orderingItems = new BasketEntity();

    this.orderComponent = null;
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
      this._switchBasketPopup();
    });

    const basketBackdrop = document.querySelector('.basket_backdrop');
    basketBackdrop.addEventListener('click', () => {
      this._switchBasketPopup();
    });
  }

  renderBasketItems() {
    const basketBody = super.getTemplateBody();
    const basketContainer = document.querySelector('.basket__popup_container');
    basketContainer.innerHTML = '';

    basketContainer.appendChild(basketBody);

    Object.keys(this.orderingItems).map((key) => {
      if (this.orderingItems.isEmptyCategory(key)) return;
      loadCategoryContainer().then((module) => {
        const CategoryContainer = module.default;
        const body = new CategoryContainer(key, this.orderingItems[key]).create();
        basketContainer.querySelector('.basket__content').appendChild(body, basketBody.firstChild);
      });
    });

    const totalCostSelector = basketContainer.querySelectorAll('.basket__total-cost p')[1];
    totalCostSelector.textContent = `$${this.totalCost}`;

    const orderBtn = document.querySelector('.basket__order-btn');
    orderBtn.addEventListener('click', () => {
      this._onClickToOrder(this);
    });
  }

  _onClickToOrder() {
    this._closeBasketPopup();
    if (this.orderComponent) {
      this.orderComponent.open(this.totalCost);
      return;
    }

    loadOrderComp().then((module) => {
      const Order = module.default;
      this.orderComponent = new Order(this.totalCost, this._onClearBasket.bind(this));
      this.orderComponent.render();
    });
  }

  _openBasketPopup() {
    this.basketButton.querySelector('img').src = '../assets/png/close.png';
    this.basketPopup.classList.remove(this.#inactiveClass);
    document.querySelector('body').style.overflow = 'hidden';

    if (this.orderingItems.isEmptyBasket) {
      loadEmptyBasket().then((module) => {
        const EmptyBasket = module.default;
        new EmptyBasket().render();
      });
      return;
    }

    this.renderBasketItems(this);
  }

  _closeBasketPopup() {
    this.basketButton.querySelector('img').src = '../assets/png/trolley.png';
    this.basketPopup.classList.add(this.#inactiveClass);
    document.querySelector('body').style.overflow = 'auto';
  }

  _switchBasketPopup() {
    if (this.isActivePopup) {
      this._closeBasketPopup();
      return;
    }
    this._openBasketPopup();
  }

  addItem(category, dish, filling) {
    loadBasketItemEntity().then((module) => {
      const BasketItemEntity = module.default;
      this.orderingItems.addItem(category, new BasketItemEntity(dish, filling));
      this._toAnimateBasketButton();
    });
  }

  _toAnimateBasketButton() {
    const basketBtn = document.querySelector('.basket-button');

    basketBtn.classList.remove(this.#removeAnimationClass);
    const myTimeout = setInterval(() => {
      basketBtn.classList.add(this.#removeAnimationClass);
      clearInterval(myTimeout);
    }, 1000);
  }

  _onClearBasket() {
    this.orderingItems.clearBasket();
    this.renderBasketItems(this);
  }
}

export default Basket;
