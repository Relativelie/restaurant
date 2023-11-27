import Component from '@commonComponents/Component';
import OfferEntity from '../models/OfferEntity';
import DescriptionItem from './DescriptionItem';

class OfferItem extends Component {
  constructor(offer) {
    super('#offer-item-template');
    this.offer = new OfferEntity(offer);
  }

  create() {
    const itemBody = super.getTemplateBody();

    const {
      gifImage,
      href,
      headerImage,
      title,
      titleDescription,
      description,
    } = this.offer;

    const offerItem = itemBody.querySelector('.offer__item');

    offerItem.querySelector('a').href = href;
    offerItem.querySelector('img').src = `./assets/png/${gifImage}`;

    const itemBodyContainer = itemBody.querySelector(
      '.offer__item_desc-container',
    );
    itemBodyContainer.querySelector('h2').textContent = title;
    itemBodyContainer.querySelector('h3').textContent = titleDescription;
    itemBodyContainer.querySelector('img').src = `./assets/png/${headerImage}`;

    const textContainer = itemBody.querySelector('.offer__item__desc-text');

    description.map((descriptionItem) => {
      const item = new DescriptionItem(descriptionItem).create();
      textContainer.appendChild(item);
    });

    return itemBody;
  }
}

export default OfferItem;
