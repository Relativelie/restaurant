import Component from '../../common-components/Component';
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

    itemBody.querySelector('.offer__item a').href = href;
    itemBody.querySelector('.offer__item img').src = `./assets/png/${gifImage}`;
    itemBody.querySelector('.offer__item_desc-container h2').textContent =
      title;
    itemBody.querySelector('.offer__item_desc-container h3').textContent =
      titleDescription;
    itemBody.querySelector(
      '.offer__item_desc-container img',
    ).src = `./assets/png/${headerImage}`;

    const descriptionContainer = itemBody.querySelector(
      '.offer__item__desc-text',
    );

    description.map((descriptionItem) => {
      const item = new DescriptionItem(descriptionItem).create();
      descriptionContainer.appendChild(item);
    });

    return itemBody;
  }
}

export default OfferItem;
