import Component from '../../common-components/Component';

class EmptyBasket extends Component {
  constructor() {
    super('#empty-basket-template');
  }

  render() {
    const itemBody = super.getTemplateBody();
    const basketContainer = document.querySelector('.basket__popup_container');
    basketContainer.innerHTML = '';
    basketContainer.appendChild(itemBody);
  }
}

export default EmptyBasket;
