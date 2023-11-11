import toCapitalize from '../../utils/capitalize';

class CategoryItems {
  constructor(categoryName, categoryItems) {
    this.categoryName = categoryName;
    this.categoryItems = categoryItems;
  }

  create() {
    const categoryTemplate = document.getElementById(
      'basket-category-template',
    );
    const itemBody = document.importNode(categoryTemplate.content, true);
    itemBody.querySelector('h3').textContent = toCapitalize(this.categoryName);

    this.categoryItems.map((item) => {
      const categoryItemBody = this.createCategoryItem(item);
      itemBody.appendChild(categoryItemBody);
    });

    return itemBody;
  }

  createCategoryItem(item) {
    const template = document.getElementById('basket-category-item-template');
    const itemBody = document.importNode(template.content, true);

    const { name, price } = item;
    const allTextContent = itemBody.querySelectorAll('p');
    const [nameSelector, priceSelector] = allTextContent;
    nameSelector.textContent = name;
    priceSelector.textContent = price;

    return itemBody;
  }
}

export default CategoryItems;
