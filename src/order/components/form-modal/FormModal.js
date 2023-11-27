import FormValidation from './FormValidation';

class FormModal {
  #formModal = document.querySelector('.order-modal__form');

  constructor(openSuccessModal, totalCost) {
    this.openSuccessModal = openSuccessModal;
    this.totalCost = totalCost;
    this.validation = new FormValidation();
  }

  render() {
    this.#formModal.open();
    this._addTotalCost();

    const phoneInput = document.querySelector('.order-modal__form-phone');
    phoneInput.addEventListener('keyup', (e) => this._onChangePhone(e.target.value));

    const orderBtn = document.querySelector('.order-modal__send-btn');
    orderBtn.addEventListener('click', this._onClickSendBtn.bind(this));

    this.#formModal.addEventListener('hide', this._resetForm.bind(this));
  }

  _addTotalCost() {
    this.#formModal.querySelector(
      '.order-modal__total-cost p',
    ).textContent = `$${this.totalCost}`;
  }

  _onClickSendBtn() {
    if (!this.validation.isValidFormValues()) return;
    this.#formModal.hide();
    this.openSuccessModal();
  }

  _resetForm() {
    const form = document.querySelector('.order-modal__form form');
    form.reset();

    const inputs = this.#formModal.querySelectorAll('input');
    this.validation.removeAllErrorClasses(inputs);
  }

  _onChangePhone(value) {
    if (value.length < 10) return;
    value = value.slice(0, 9);
  }
}

export default FormModal;
