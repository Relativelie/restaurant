import FormModal from './components/form-modal/FormModal';

const loadSuccessModal = () => import('./components/SuccessModal');

class Order {
  constructor(totalCost, clearBasket) {
    this.totalCost = totalCost;
    this.clearBasket = clearBasket;
    this.formModal;
  }

  render() {
    this.formModal = new FormModal(this._openSuccessModal.bind(this), this.totalCost);
    this.formModal.render();
  }

  open(totalCost) {
    this.formModal.open(totalCost);
  }

  _openSuccessModal() {
    loadSuccessModal().then((module) => {
      const SuccessModal = module.default;
      const successModal = new SuccessModal(this.clearBasket.bind(this));
      successModal.render();
    });
  }
}

export default Order;
