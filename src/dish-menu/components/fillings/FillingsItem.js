import FillingItemEntity from '../../models/FillingItemEntity';

class FillingsItem {
  constructor(filling) {
    this.itemTemplate = document.getElementById('fillings-item-template');
    this.filling = new FillingItemEntity(filling);
  }

  create() {
    const itemBody = document.importNode(this.itemTemplate.content, true);

    const { name, price, image } = this.filling;
    itemBody.querySelector('p').textContent = name;
    itemBody.querySelector('h4').textContent = `$${price}`;
    itemBody.querySelector('.fillings-item').style.backgroundImage = `url("../assets/jpg/${image}")`;

    return itemBody;
  }
}

export default FillingsItem;
