class FormValidation {
  #formModal = document.querySelector('.order-modal__form');
  #errorBorderClass = 'order-modal_error-border';
  #emptyErrorMsg = 'Fill in all required fields';
  #phoneErrorMsg = 'Phone number is entered incorrectly.';

  isValidFormValues() {
    const inputs = this.#formModal.querySelectorAll('input');
    this.removeAllErrorClasses(inputs);

    const hasEmptyField = [...inputs].find((input) => this._isEmpty(input));
    const errorSelector = document.querySelector('.order-modal__error p');

    if (hasEmptyField) {
      this._addErrorClass(inputs);
      errorSelector.textContent = this.#emptyErrorMsg;
      return false;
    }

    const phoneInput = inputs[0];
    if (!this._isValidPhone(phoneInput.value)) {
      !this._hasErrorClass(phoneInput) && phoneInput.classList.add(this.#errorBorderClass);
      errorSelector.textContent = this.#phoneErrorMsg;
      return false;
    }

    errorSelector.textContent = '';
    return true;
  }

  removeAllErrorClasses(inputs) {
    [...inputs].map((input) => {
      this._removeErrorClass(input);
    });
  }

  _addErrorClass(inputs) {
    [...inputs].map((input) => {
      if (this._isEmpty(input)) {
        input.classList.add(this.#errorBorderClass);
      }
    });
  }

  _removeErrorClass(selector) {
    selector.classList.remove(this.#errorBorderClass);
  }

  _isEmpty(selector) {
    return !selector.value.trim().length;
  }

  _hasErrorClass(selector) {
    return selector.className.includes(this.#errorBorderClass);
  }

  _isValidPhone(phoneValue) {
    if (phoneValue.length < 9) {
      return false;
    }
    return true;
  }
}

export default FormValidation;
