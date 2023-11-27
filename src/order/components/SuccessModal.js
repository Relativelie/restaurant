class SuccessModal {
  #successModal = document.querySelector('.order-modal__success');

  constructor(clearBasket) {
    this.clearBasket = clearBasket;
  }

  render() {
    this.#successModal.open();
    const successOkBtn = document.querySelector('.order-modal__success-btn');
    successOkBtn.addEventListener('click', this._closeSuccessStep.bind(this));
  }

  _closeSuccessStep() {
    this.#successModal.hide();
    this.clearBasket();
  }
}

export default SuccessModal;
