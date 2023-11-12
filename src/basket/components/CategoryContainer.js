import Component from '../../common-components/Component';
import toCapitalize from '../../utils/capitalize';
import CategoryItem from './CategoryItem';

class CategoryContainer extends Component {
  constructor(categoryName, categoryItems) {
    super('#basket-category-template');

    this.categoryName = categoryName;
    this.categoryItems = categoryItems;
  }

  create() {
    const itemBody = super.getTemplateBody();
    itemBody.querySelector('h3').textContent = toCapitalize(this.categoryName);

    this.categoryItems.map((item) => {
      const categoryItemBody = new CategoryItem(item).create();
      itemBody.appendChild(categoryItemBody);
    });

    return itemBody;
  }
}

export default CategoryContainer;
