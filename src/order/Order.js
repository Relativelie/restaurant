import FormValidation from './components/FormValidation';

class Order {
  #inactiveClassName = 'order-modal_inactive';
  #formModal = document.querySelector('.order-modal__form');
  #successModal = document.querySelector('.order-modal__success');

  constructor(totalCost, orderingItems, clearBasket) {
    this.totalCost = totalCost;
    this.orderingItems = orderingItems;
    this.clearBasket = clearBasket;
  }

  render() {
    this.openStep(this.#formModal);
    this.#formModal.querySelector(
      '.order-modal__total-cost p',
    ).textContent = `$${this.totalCost}`;

    this.onSendBtnListener();
    this.onBackdropClickListeners();
    this.onInputPhoneListener();
    this.onCloseBtnListener();
  }

  onClickSend() {
    this.onCloseStep(this.#formModal);
    this.openStep(this.#successModal);

    const successBtn = document.querySelector('.order-modal__success-btn');
    successBtn.addEventListener('click', () => {
      this.onCloseStep(this.#successModal);
    });
  }

  onSendBtnListener() {
    const orderBtn = document.querySelector('.order-modal__send-btn');
    orderBtn.addEventListener('click', () => {
      const validation = new FormValidation();
      if (!validation.isValidFormValues()) return;
      this.onClickSend();
    });
  }

  onBackdropClickListeners() {
    const formBackdrop = document.querySelector(
      '.order-modal__form .modal-backdrop',
    );
    formBackdrop.addEventListener('click', () => {
      this.onCloseStep(this.#formModal);
    });

    const successBackdrop = document.querySelector(
      '.order-modal__success .modal-backdrop',
    );
    successBackdrop.addEventListener('click', this.closeSuccessStep.bind(this));
  }

  onInputPhoneListener() {
    const phone = document.querySelector('.order-modal__form-phone');
    phone.addEventListener('keyup', (e) => {
      if (e.target.value.length > 9) {
        e.target.value = e.target.value.slice(0, 9);
      }
    });
  }

  onCloseBtnListener() {
    const closeBtn = document.querySelector('.order-modal__close-btn');
    closeBtn.addEventListener('click', () => {
      this.onCloseStep(this.#formModal);
    });

    const successOkBtn = document.querySelector('.order-modal__success-btn');
    successOkBtn.addEventListener('click', this.closeSuccessStep.bind(this));
  }

  closeSuccessStep() {
    this.onCloseStep(this.#successModal);
    this.clearBasket();
  }

  onCloseStep(selector) {
    const inactiveSuccessStep = selector.className.includes(
      this.#inactiveClassName,
    );

    if (inactiveSuccessStep) return;
    selector.classList.add(this.#inactiveClassName);
  }

  openStep(selector) {
    selector.classList.remove(`${this.#inactiveClassName}`);
  }
}

export default Order;
