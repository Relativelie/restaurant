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
    phoneInput.addEventListener('keyup', this._limitPhoneLength);

    const orderBtn = document.querySelector('.order-modal__send-btn');
    orderBtn.addEventListener('click', this._onClickSendBtn.bind(this));

    this.#formModal.addEventListener('hide', this._resetForm.bind(this));
  }

  open(totalCost) {
    this.totalCost = totalCost;
    this._addTotalCost();
    this.#formModal.open();
  }

  _addTotalCost() {
    this.#formModal.querySelector('.order-modal__total-cost p').textContent = `$${this.totalCost}`;
  }

  _onClickSendBtn(e) {
    if (!this.validation.isValidFormValues()) return;
    this.#formModal.hide(e);
    this.openSuccessModal();
  }

  _resetForm() {
    const form = document.querySelector('.order-modal__form form');
    form.reset();

    const inputs = this.#formModal.querySelectorAll('input');
    this.validation.removeAllErrorClasses(inputs);
  }

  _limitPhoneLength(e) {
    const val = e.target.value;
    if (val.length < 10) return;
    e.target.value = val.slice(0, 9);
  }
}

export default FormModal;
