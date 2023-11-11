import DishMenu from './dish-menu/DishMenu';
import Basket from './basket/Basket';

class App {
  static init() {
    const basket = new Basket();
    basket.create();

    const dishMenu = new DishMenu(basket.addItem.bind(basket));
    dishMenu.renderCategory();
    dishMenu.renderDish();
  }
}

App.init();
