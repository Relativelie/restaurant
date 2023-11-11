import CategoryItemEntity from '../models/CategoryItemEntity';

class CategoryItem {
  constructor(category, onClickCategory, selectedCategory) {
    this.menuItem = new CategoryItemEntity(category);
    this.onClick = onClickCategory;
    this.selectedCategory = selectedCategory;
  }

  create() {
    const itemTemplate = document.getElementById('category-item-template');
    const itemBody = document.importNode(itemTemplate.content, true);

    const { name, image, dataAttribute } = this.menuItem;
    itemBody.querySelector('p').textContent = name;
    itemBody.querySelector('img').src = `../assets/png/${image}`;
    itemBody.querySelector('.category-item').dataset.category = dataAttribute;
    if (this.selectedCategory === dataAttribute) {
      this.selectCategory(itemBody.querySelector('.category-item'));
    }

    itemBody.querySelector('.category-item').addEventListener('click', (e) => {
      this.onClickCategoryItem(e);
    });

    return itemBody;
  }

  onClickCategoryItem(e) {
    this.deselectPrevCategory();
    this.selectCategory(e.currentTarget);
    this.onClick(e);
  }

  deselectPrevCategory() {
    const categoriesContainer = document.querySelector('.categories');
    const selectedCategory = categoriesContainer.querySelector('.selected');
    if (selectedCategory) {
      selectedCategory.classList.remove('selected');
    }
  }

  selectCategory(selector) {
    selector.classList.add('selected');
  }
}

export default CategoryItem;
