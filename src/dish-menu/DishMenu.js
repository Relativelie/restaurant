import dishData from './data/dish-data';
import categoryData from './data/category-data';
import DishItem from './components/DishItem';
import CategoryItem from './components/CategoryItem';

const loadFillingsModalComp = () => import('./components/fillings-modal/Fillings');

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
      const item = new DishItem(dish, this._selectFilling);
      const itemBody = item.create();
      itemBody.querySelector('.choose-filling-button').addEventListener('click', (e) => {
        this._openFillingsModal(e, dish.fillings);
      });
      menuContent.appendChild(itemBody);
    });
  }

  renderCategory() {
    const categoriesContainer = document.querySelector('.menu__categories');
    categoriesContainer.innerHTML = '';

    Object.keys(this.categoryData).map((category) => {
      const item = new CategoryItem(
        this.categoryData[category],
        this._onClickCategory.bind(this),
        this.selectedCategory,
      );
      const itemBody = item.create();
      categoriesContainer.appendChild(itemBody);
    });
  }

  _openFillingsModal(e, curFillings) {
    this.selectedDish = this._getSelectedDish(e);
    loadFillingsModalComp().then((module) => {
      const FillingsModal = module.default;
      const fillings = new FillingsModal(curFillings, this._onAddToBasket.bind(this), (value) => {
        this._selectFilling(value);
      });

      fillings.onOpenFillingsModal();
      fillings.render();
    });
  }

  _getSelectedDish(e) {
    const selectedDishId = parseInt(e.currentTarget.closest('.dish-item').dataset.dish, 10);
    return this.dishData[this.selectedCategory].find((dish) => dish.id === selectedDishId);
  }

  _onAddToBasket() {
    if (!this.selectedFilling) {
      return;
    }

    this.addToBasket(this.selectedCategory, this.selectedDish, this.selectedFilling);
  }

  _onClickCategory(e) {
    this._selectNewCategory(e);
    this.renderDish();
  }

  _selectNewCategory(e) {
    this.selectedCategory = e.currentTarget.dataset.category;
  }

  _selectFilling(value) {
    this.selectedFilling = value;
  }
}

export default DishMenu;
