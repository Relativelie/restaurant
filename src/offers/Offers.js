import OfferItem from './components/OfferItem';
import offersData from './data/offers-data';

class Offers {
  constructor() {
    this.offers = offersData;
  }

  render() {
    const offersContainer = document.querySelector('.offer-items');

    this.offers.map((offer) => {
      const item = new OfferItem(offer);
      const itemBody = item.create();
      offersContainer.appendChild(itemBody);
    });
  }
}

export default Offers;
