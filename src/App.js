import DishMenu from './dish-menu/DishMenu';

class App {
  static init() {
    const foodMenu = new DishMenu();
    foodMenu.renderCategory();
    foodMenu.renderDish();
  }
}

App.init();
