class SuccessModal {
  #successModal = document.querySelector('.order-modal__success');

  constructor(clearBasket) {
    this.clearBasket = clearBasket;
  }

  render() {
    this.#successModal.open();
    const successOkBtn = document.querySelector('.order-modal__success-btn');
    successOkBtn.addEventListener('click', this.closeSuccessStep.bind(this));
  }

  closeSuccessStep() {
    this.#successModal.hide();
    this.clearBasket();
  }
}

export default SuccessModal;
