import Component from '../../common-components/Component';
import CategoryItemEntity from '../models/CategoryItemEntity';

class CategoryItem extends Component {
  #selectedClassName = 'selected';

  constructor(category, onClickCategory, selectedCategory) {
    super('#category-item-template');
    this.onClick = onClickCategory;
    this.selectedCategory = selectedCategory;
    this.menuItem = new CategoryItemEntity(category);
  }

  create() {
    const itemBody = super.getTemplateBody();

    const { name, image, dataAttribute } = this.menuItem;
    itemBody.querySelector('p').textContent = name;
    itemBody.querySelector('img').src = `../assets/png/${image}`;
    itemBody.querySelector('.category-item').dataset.category = dataAttribute;

    const isSelected = this.selectedCategory === dataAttribute;
    this.addSelectedClass(isSelected, itemBody.querySelector('.category-item'));

    itemBody
      .querySelector('.category-item')
      .addEventListener('click', this.onClickCategoryItem.bind(this));

    return itemBody;
  }

  onClickCategoryItem(e) {
    this.deselectPrevCategory();
    this.addSelectedClass(true, e.currentTarget);
    this.onClick(e);
  }

  deselectPrevCategory() {
    const categoriesContainer = document.querySelector('.menu__categories');
    const selectedCategory = categoriesContainer.querySelector(
      `.${this.#selectedClassName}`,
    );
    if (selectedCategory) {
      selectedCategory.classList.remove(this.#selectedClassName);
    }
  }

  addSelectedClass(isSelected, selector) {
    if (!isSelected) return;
    selector.classList.add(this.#selectedClassName);
  }
}

export default CategoryItem;
