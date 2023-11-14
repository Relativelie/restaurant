class FormValidation {
  #formModal = document.querySelector('.order-modal__form');
  #errorBorderClass = 'order-modal_error-border';
  #emptyErrorMsg = 'Fill in all required fields';
  #phoneErrorMsg = 'Phone number is entered incorrectly.';

  isValidFormValues() {
    const inputs = this.#formModal.querySelectorAll('input');
    this.removeAllErrorClasses(inputs);

    const hasEmptyField = [...inputs].find((input) => this.isEmpty(input));
    const errorSelector = document.querySelector('.order-modal__error p');

    if (hasEmptyField) {
      this.addErrorClass(inputs);
      errorSelector.textContent = this.#emptyErrorMsg;
      return false;
    }

    const phoneInput = inputs[0];
    if (!this.isValidPhone(phoneInput.value)) {
      !this.hasErrorClass(phoneInput) &&
        phoneInput.classList.add(this.#errorBorderClass);
      errorSelector.textContent = this.#phoneErrorMsg;
      return false;
    }

    errorSelector.textContent = '';
    return true;
  }

  addErrorClass(inputs) {
    [...inputs].map((input) => {
      if (this.isEmpty(input)) {
        input.classList.add(this.#errorBorderClass);
      }
    });
  }

  removeErrorClass(selector) {
    selector.classList.remove(this.#errorBorderClass);
  }

  removeAllErrorClasses(inputs) {
    [...inputs].map((input) => {
      this.removeErrorClass(input);
    });
  }

  isEmpty(selector) {
    return !selector.value.trim().length;
  }

  hasErrorClass(selector) {
    return selector.className.includes(this.#errorBorderClass);
  }

  isValidPhone(phoneValue) {
    if (phoneValue.length < 9) {
      return false;
    }
    return true;
  }
}

export default FormValidation;
