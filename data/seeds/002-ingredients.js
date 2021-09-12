exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          ingredientId: 1, 
          ingredientName: "Thin Crust",
          ingredientDesc: "Thin, crispy, and foldable.",
          ingredientType: "crust",
          price: "3.00",
        },
        {
          ingredientId: 2, 
          ingredientName: "Thick Crust",
          ingredientDesc: "Crispy outside with a soft inside.",
          ingredientType: "crust",
          price: "3.00",
        },
        {
          ingredientId: 3, 
          ingredientName: "Red Pizza Sauce",
          ingredientDesc: "Our special red pizza sauce.",
          ingredientType: "sauce",
          price: "1.00",
        },
        {
          ingredientId: 4, 
          ingredientName: "BQQ Sauce",
          ingredientDesc: "Sweet and tangy BBQ sauce for a unique pizza experience.",
          ingredientType: "sauce",
          price: "1.00",
        },
        {
          ingredientId: 5, 
          ingredientName: "Mozzerella Blend",
          ingredientDesc: "Blend of cheeses with a mozzerella base.",
          ingredientType: "cheese",
          price: "2.00",
        },
        {
          ingredientId: 6, 
          ingredientName: "Cheddar Blend",
          ingredientDesc: "Blend of cheeses with a cheddar base.",
          ingredientType: "cheese",
          price: "2.00",
        },
        {
          ingredientId: 7, 
          ingredientName: "Pepperoni",
          ingredientDesc: "Sliced Pepperoni.",
          ingredientType: "meat",
          price: "2.00",
        },
        {
          ingredientId: 8, 
          ingredientName: "Canadian Bacon",
          ingredientDesc: "Sliced canadian bacon.",
          ingredientType: "meat",
          price: "2.00",
        },
        {
          ingredientId: 9, 
          ingredientName: "Sausage",
          ingredientDesc: "Sausage crumbles.",
          ingredientType: "meat",
          price: "2.00",
        },
        {
          ingredientId: 10, 
          ingredientName: "Bacon",
          ingredientDesc: "Bacon bits.",
          ingredientType: "meat",
          price: "2.00",
        },
        {
          ingredientId: 11, 
          ingredientName: "Chicken",
          ingredientDesc: "Chicken breast bits.",
          ingredientType: "meat",
          price: "2.00",
        },
        {
          ingredientId: 12, 
          ingredientName: "Banana Peppers",
          ingredientDesc: "Sliced banana peppers.",
          ingredientType: "veggies",
          price: "1.00",
        },
        {
          ingredientId: 13, 
          ingredientName: "Olives",
          ingredientDesc: "Black olives.",
          ingredientType: "veggies",
          price: "1.00",
        },
        {
          ingredientId: 14, 
          ingredientName: "Onion",
          ingredientDesc: "Sliced onions.",
          ingredientType: "veggies",
          price: "1.00",
        },
        {
          ingredientId: 15, 
          ingredientName: "Green Pepper",
          ingredientDesc: "Sliced green peppers.",
          ingredientType: "veggies",
          price: "1.00",
        },
        {
          ingredientId: 16, 
          ingredientName: "Jalapeno Pepper",
          ingredientDesc: "Sliced Jalapeno peppers for some nice heat.",
          ingredientType: "veggies",
          price: "1.00",
        },
        {
          ingredientId: 17, 
          ingredientName: "Spinach",
          ingredientDesc: "Spinach leaves.",
          ingredientType: "veggies",
          price: "1.00",
        },
        {
          ingredientId: 18, 
          ingredientName: "Mushrooms",
          ingredientDesc: "Fresh mushrooms.",
          ingredientType: "veggies",
          price: "1.00",
        },
        {
          ingredientId: 19, 
          ingredientName: "Pineapple",
          ingredientDesc: "Fresh pineapple, hate it or love it.",
          ingredientType: "veggies",
          price: "1.00",
        },
      ]);
    });
};
