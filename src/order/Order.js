import FormModal from './components/form-modal/FormModal';
import SuccessModal from './components/SuccessModal';

class Order {
  constructor(totalCost, clearBasket) {
    this.totalCost = totalCost;
    this.clearBasket = clearBasket;
  }

  render() {
    const formModal = new FormModal(this.openSuccessModal.bind(this), this.totalCost);
    formModal.render();
  }

  openSuccessModal() {
    const successModal = new SuccessModal(this.clearBasket.bind(this));
    successModal.render();
  }
}

export default Order;
