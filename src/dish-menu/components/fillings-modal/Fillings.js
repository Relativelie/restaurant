import FillingsItem from './FillingsItem';

class FillingsModal {
  #inactiveModalClass = 'fillings-modal_inactive';

  constructor(fillings, addToBasket, onSelectFilling) {
    this.fillingsModal = document.querySelector('.fillings-modal');

    this.fillings = fillings;
    this.addToBasket = addToBasket;
    this.onSelectFilling = onSelectFilling;
  }

  render() {
    this.renderFillings();
    this.onAddListeners();
  }

  renderFillings() {
    const fillingsItems = document.querySelector('.fillings-items');
    fillingsItems.innerHTML = '';

    this.fillings.map((filling) => {
      const item = new FillingsItem(filling, this.onSelectFilling);
      const itemBody = item.create();
      fillingsItems.appendChild(itemBody);
    });
  }

  onAddListeners() {
    const closeButton = document.querySelector('.fillings__close-btn');
    closeButton.addEventListener('click', () => {
      this.onCloseFillingsModal();
    });

    const fillingsBackdrop = document.querySelector('.fillings-modal .modal-backdrop');
    fillingsBackdrop.addEventListener('click', () => {
      this.onCloseFillingsModal();
    });

    const addToBasketButton = document.querySelector('.fillings__add-btn');
    addToBasketButton.addEventListener('click', () => {
      this.addToBasket();
      this.onCloseFillingsModal();
    });
  }

  onCloseFillingsModal() {
    this.fillingsModal.classList.add(this.#inactiveModalClass);
    this.onSelectFilling(null);
  }

  onOpenFillingsModal() {
    this.fillingsModal.classList.remove(this.#inactiveModalClass);
  }
}

export default FillingsModal;
