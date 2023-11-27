import Component from '@commonComponents/Component';
import DescriptionEntity from '../models/DescriptionEntity';

class DescriptionItem extends Component {
  constructor(description) {
    super('#offer-item-desc-template');
    this.description = new DescriptionEntity(description);
  }

  create() {
    const { title, description: text } = this.description;
    const itemBody = super.getTemplateBody();

    itemBody.querySelector('h5').textContent = title;
    itemBody.querySelector('p').textContent = text;

    return itemBody;
  }
}

export default DescriptionItem;
