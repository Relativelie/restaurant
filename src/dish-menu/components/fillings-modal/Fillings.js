import FillingsItem from './FillingsItem';

class FillingsModal {
  constructor(fillings, addToBasket, onSelectFilling) {
    this.fillingsModal = document.querySelector('.fillings-modal');

    this.fillings = fillings;
    this.addToBasket = addToBasket;
    this.onSelectFilling = onSelectFilling;
  }

  create() {
    this.createFillingsItems();
    this.onAddListeners();
  }

  createFillingsItems() {
    const fillingsItems = document.querySelector('.fillings-items');
    fillingsItems.innerHTML = '';

    this.fillings.map((filling) => {
      const item = new FillingsItem(filling, this.onSelectFilling);
      const itemBody = item.create();
      fillingsItems.appendChild(itemBody);
    });
  }

  onAddListeners() {
    const closeButton = document.querySelector('.fillings__close-button');
    closeButton.addEventListener('click', () => {
      this.onCloseFillingsModal();
    });

    const fillingsBackdrop = document.querySelector('.fillings_backdrop');
    fillingsBackdrop.addEventListener('click', () => {
      this.onCloseFillingsModal();
    });

    const addToBasketButton = document.querySelector('.fillings__add-button');
    addToBasketButton.addEventListener('click', () => {
      this.addToBasket();
      this.onCloseFillingsModal();
    });
  }

  onCloseFillingsModal() {
    this.fillingsModal.style.display = 'none';
    this.onSelectFilling(null);
  }

  onOpenFillingsModal() {
    this.fillingsModal.style.display = 'block';
  }
}

export default FillingsModal;
