import FillingsItem from './FillingsItem';

class FillingsModal {
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
    const addToBasketBtn =
      this.fillingsModal.querySelector('.fillings__add-btn');
    addToBasketBtn.addEventListener('click', () => {
      this.addToBasket();
      this.onCloseFillingsModal();
    });
  }

  onCloseFillingsModal() {
    this.fillingsModal.hide();
    this.onSelectFilling(null);
  }

  onOpenFillingsModal() {
    if (!this.fillingsModal.isOpen) {
      this.fillingsModal.open();
    }
  }
}

export default FillingsModal;
