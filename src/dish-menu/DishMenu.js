/* eslint-disable class-methods-use-this */
import dishData from '../data/dish-data';
import categoryData from '../data/category-data';
import DishItem from './components/DishItem';
import CategoryItem from './components/CategoryItem';
import Fillings from './components/fillings/Fillings';

class DishMenu {
  constructor() {
    this.dishData = dishData;
    this.categoryData = categoryData;
    this.selectedCategory = 'breakfast';
  }

  renderDish() {
    const menuContent = document.querySelector('.dish-container');
    menuContent.innerHTML = '';

    this.dishData[this.selectedCategory].map((dish) => {
      const item = new DishItem(dish);
      const itemBody = item.create();
      itemBody
        .querySelector('.choose-filling-button')
        .addEventListener('click', () => {
          this.openFillingsModal(dish.fillings);
        });
      menuContent.appendChild(itemBody);
    });
  }

  openFillingsModal(curFillings) {
    const fillings = new Fillings(curFillings);
    fillings.onOpenFillingsModal();
    fillings.create();
  }

  renderCategory() {
    const categoriesContainer = document.querySelector('.categories');
    categoriesContainer.innerHTML = '';

    Object.keys(this.categoryData).map((category) => {
      const item = new CategoryItem(
        this.categoryData[category],
        this.onClickCategory.bind(this),
        this.selectedCategory,
      );
      const itemBody = item.create();
      categoriesContainer.appendChild(itemBody);
    });
  }

  onClickCategory(e) {
    this.selectNewCategory(e);
    this.renderDish();
  }

  selectNewCategory(e) {
    this.selectedCategory = e.currentTarget.dataset.category;
  }
}

export default DishMenu;
