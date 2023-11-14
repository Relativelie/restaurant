import dishData from './data/dish-data';
import categoryData from './data/category-data';
import DishItem from './components/DishItem';
import CategoryItem from './components/CategoryItem';
import FillingsModal from './components/fillings-modal/Fillings';

class DishMenu {
  constructor(addToBasket) {
    this.dishData = dishData;
    this.categoryData = categoryData;

    this.selectedCategory = 'breakfast';
    this.selectedDish = null;
    this.selectedFilling = null;

    this.addToBasket = addToBasket;
  }

  renderDish() {
    const menuContent = document.querySelector('.dish');
    menuContent.innerHTML = '';

    this.dishData[this.selectedCategory].map((dish) => {
      const item = new DishItem(dish, this.selectFilling);
      const itemBody = item.create();
      itemBody
        .querySelector('.choose-filling-button')
        .addEventListener('click', (e) => {
          this.openFillingsModal(e, dish.fillings);
        });
      menuContent.appendChild(itemBody);
    });
  }

  openFillingsModal(e, curFillings) {
    this.selectedDish = this.getSelectedDish(e);

    const fillings = new FillingsModal(
      curFillings,
      this.onAddToBasket.bind(this),
      (value) => {
        this.selectFilling(value);
      },
    );

    fillings.onOpenFillingsModal();
    fillings.render();
  }

  getSelectedDish(e) {
    const selectedDishId = parseInt(
      e.currentTarget.closest('.dish-item').dataset.dish,
      10,
    );
    return this.dishData[this.selectedCategory].find(
      (dish) => dish.id === selectedDishId,
    );
  }

  onAddToBasket() {
    if (!this.selectedFilling) {
      return;
    }

    this.addToBasket(
      this.selectedCategory,
      this.selectedDish,
      this.selectedFilling,
    );
  }

  renderCategory() {
    const categoriesContainer = document.querySelector('.menu__categories');
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

  selectFilling(value) {
    this.selectedFilling = value;
  }
}

export default DishMenu;
