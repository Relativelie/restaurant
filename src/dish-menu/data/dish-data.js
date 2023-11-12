export default {
  breakfast: [
    {
      id: 1,
      name: 'Croissants',
      description: 'Classic French croissant',
      price: 1,
      fillings: [
        { id: 1, name: 'trout', price: 5, image: 'salmon.jpg' },
        { id: 2, name: 'bacon', price: 3, image: 'bacon.jpg' },
        { id: 3, name: 'jam', price: 2, image: 'jamTwo.jpg' },
        { id: 4, name: 'without filling', price: 1, image: '' },
      ],
      image: 'croissant.jpg',
    },
    {
      id: 2,
      name: 'Benedicts',
      description: 'Grilled vegetables, fried peppers and toast',
      price: 8,
      fillings: [
        { id: 5, name: 'Large(400g)', price: 20, image: 'benedictOne.jpg' },
        { id: 6, name: 'Medium(350g)', price: 15, image: 'benedictTwo.jpg' },
        { id: 7, name: 'Small(250g)', price: 12, image: 'benedictThree.jpg' },
        { id: 8, name: 'eXtra small(100g)', price: 8, image: 'benedicts.jpg' },
      ],
      image: 'benedicts.jpg',
    },

    {
      id: 3,
      name: 'Porridge',
      description: 'A steaming, creamy bowl of Porridge is something magical',
      price: 1,
      fillings: [
        { id: 9, name: 'trout', price: 5, image: 'salmon.jpg' },
        { id: 10, name: 'bacon', price: 3, image: 'bacon.jpg' },
        { id: 11, name: 'jam', price: 2, image: 'jamTwo.jpg' },
        { id: 12, name: 'without filling', price: 1, image: '' },
      ],
      image: 'porridge.jpg',
    },

    {
      id: 4,
      name: 'Pancakes',
      description: 'Classic fluffy American pancakes',
      price: 1,
      fillings: [
        { id: 13, name: 'pineapple', price: 5, image: 'pineapple.jpg' },
        { id: 14, name: 'peach', price: 3, image: 'peach.jpg' },
        { id: 15, name: 'berries', price: 2, image: 'berries.jpg' },
        { id: 16, name: 'without filling', price: 1, image: '' },
      ],
      image: 'pancakes.jpg',
    },
  ],

  lunch: [
    {
      name: 'Salad',
      description: 'Healthy and low-calorie food',
      price: 4,
      fillings: [
        { id: 1, name: 'Caesar', price: 4, image: 'caesar.jpg' },
        { id: 1, name: 'Leafy Green', price: 5, image: 'leafyGreen.jpg' },
        { id: 3, name: 'Greek', price: 4, image: 'greek.jpg' },
        { id: 4, name: 'Fattoush', price: 5, image: 'fattoush.jpg' },
      ],
      image: 'salad.jpg',
    },
    {
      name: 'Appetizers',
      description: 'Healthy and low-calorie food',
      price: 2,
      fillings: [
        {
          id: 5,
          name: 'Vegetable and Fruit',
          price: 3,
          image: 'fruit.jpg',
        },
        { id: 6, name: 'Meal and Cheese', price: 6, image: 'cheese.jpg' },
        { id: 7, name: 'Hot Appetizers', price: 5, image: 'hot.jpg' },
        { id: 8, name: 'Dips', price: 2, image: 'dips.jpg' },
      ],
      image: 'appetizers.jpg',
    },
    {
      name: 'Soup',
      description: 'Healthy and low-calorie food',
      price: 1,
      fillings: [
        { id: 9, name: 'Chicken Noodle', price: 1, image: 'soupOne.jpg' },
        { id: 10, name: 'Tortilla', price: 5, image: 'soupTwo.jpg' },
        { id: 11, name: 'Cream', price: 3, image: 'soupThree.jpg' },
        { id: 12, name: 'Chowder', price: 2, image: 'soupFour.jpg' },
      ],
      image: 'soup.jpg',
    },
    {
      name: 'Sandwiches',
      description: 'Low-calorie food',
      price: 2,
      fillings: [
        { id: 13, name: 'bacon', price: 5, image: 'bacon.jpg' },
        { id: 14, name: 'beef', price: 6, image: 'beef.jpg' },
        { id: 15, name: 'Cheese', price: 3, image: 'cheese.jpg' },
        { id: 16, name: 'chicken', price: 2, image: 'chicken.jpg' },
      ],
      image: 'sandwiches.jpg',
    },
  ],
  dinner: [
    {
      name: 'Pasta',
      description:
        'Our appetizers should be big on flavor, small on size, and price',
      price: 2,
      fillings: [
        { id: 17, name: 'bacon', price: 5, image: 'bacon.jpg' },
        { id: 18, name: 'beef', price: 6, image: 'beef.jpg' },
        { id: 19, name: 'cheese', price: 3, image: 'cheese.jpg' },
        { id: 20, name: 'chicken', price: 2, image: 'chicken.jpg' },
      ],
      image: 'pasta.jpg',
    },
    {
      name: 'Seafood',
      description: 'Always a great choice',
      price: 12,
      fillings: [
        { id: 21, name: 'shrimp', price: 15, image: 'shrimp.jpg' },
        { id: 22, name: 'oysters', price: 12, image: 'oysters.jpg' },
        { id: 23, name: 'crayfish', price: 16, image: 'crayfish.jpg' },
        { id: 24, name: 'salmon', price: 25, image: 'salmon.jpg' },
      ],
      image: 'seafood.jpg',
    },
    {
      name: 'Meat',
      description: 'Always a great choice',
      price: 10,
      fillings: [
        {
          id: 1,
          name: 'Half roasted lemon chicken',
          price: 10,
          image: 'lemonChicken.jpg',
        },
        {
          id: 2,
          name: 'Lightly smoked & grilled pork chop',
          price: 13,
          image: 'porkChop.jpg',
        },
        {
          id: 3,
          name: 'Half roasted veal osso bucco',
          price: 14,
          image: 'meatThree.jpg',
        },
        {
          id: 13,
          name: 'Grilled Tuscan rubbed filet mignon',
          price: 15,
          image: 'filetMignon.jpg',
        },
      ],
      image: 'meat.jpg',
    },
    {
      name: 'Wraps',
      description: 'Always a great choice',
      price: 2,
      fillings: [
        { id: 13, name: 'Spicy Fish', price: 5, image: 'salmon.jpg' },
        { id: 13, name: 'Malibu Melt', price: 6, image: 'wrapsTwo.jpg' },
        { id: 13, name: 'Vegetarian', price: 3, image: 'wrapsThree.jpg' },
        { id: 13, name: 'Roast Beef', price: 2, image: 'wrapsFour.jpg' },
      ],
      image: 'wraps.jpg',
    },
  ],
  drinks: [
    {
      name: 'Cocktails',
      description:
        'We offer a great variety of the very best cocktails you’ll find',
      price: 2,
      fillings: [
        { id: 3, name: 'Old Fashioned', price: 2, image: 'oldFashioned.jpg' },
        { id: 1, name: 'Negroni', price: 3, image: 'negroni.jpg' },
        { id: 33, name: 'Whiskey Sour', price: 5, image: 'whiskeySour.jpg' },
        { id: 13, name: 'Dry Martini', price: 6, image: 'dryMartini.jpg' },
      ],
      image: 'cocktails.jpg',
    },
    {
      name: 'Wine',
      description:
        'Each wine listed below also includes alternative varieties that taste similar',
      price: 18,
      fillings: [
        { id: 3, name: 'Chardonnay', price: 20, image: 'chardonnay.jpg' },
        { id: 43, name: 'Pinot Grigio', price: 25, image: 'pinotGrigio.jpg' },
        {
          id: 53,
          name: 'Cabernet Sauvignon',
          price: 22,
          image: 'cabernetSauvignon.jpg',
        },
        { id: 63, name: 'Merlot', price: 18, image: 'merlot.jpg' },
      ],
      image: 'wine.jpg',
    },
    {
      name: 'Coffee & Tea',
      description: 'Healthy and low calorie',
      price: 1,
      fillings: [
        { id: 63, name: 'Latte', price: 2, image: 'latte.jpg' },
        { id: 73, name: 'Cappuccino', price: 3, image: 'cappuccino.jpg' },
        { id: 83, name: 'Green/black tea', price: 1, image: 'tea.jpg' },
        { id: 93, name: 'Robusta', price: 3, image: 'robusta.jpg' },
      ],
      image: 'coffee.jpg',
    },
    {
      name: 'Beer',
      description: 'Always a great choice',
      price: 3,
      fillings: [
        { id: 103, name: 'Ale', price: 3, image: 'ale.jpg' },
        { id: 131, name: 'Porter', price: 5, image: 'beerOne.jpg' },
        { id: 123, name: 'Blonde/brown ale', price: 3, image: 'beerTwo.jpg' },
        { id: 113, name: 'Stout', price: 3, image: 'beerThree.jpg' },
      ],
      image: 'beer.jpg',
    },
  ],
};
