import FillingsItem from './FillingsItem';

class Fillings {
  constructor(fillings) {
    this.fillings = fillings;
    this.fillingsTemplate = document.getElementById('fillings-template');
    this.fillingsModal = document.querySelector('.fillings');
    this.fillingsItemsContainer = document.querySelector('.fillings-items');
  }

  create() {
    this.fillingsItemsContainer.innerHTML = '';

    this.fillings.map((filling) => {
      const item = new FillingsItem(filling);
      const itemBody = item.create();
      this.fillingsItemsContainer.appendChild(itemBody);
    });

    const closeButton = document.querySelector('.choose-filling-button');
    closeButton.addEventListener('click', () => {
      this.onCloseFillingsModal();
    });
  }

  onCloseFillingsModal() {
    console.log('onCloseFillingsModal');
    this.fillingsModal.style.display = 'none';
  }

  onOpenFillingsModal() {
    console.log('onOpenFillingsModal');
    this.fillingsModal.style.display = 'block';
  }
}

export default Fillings;
