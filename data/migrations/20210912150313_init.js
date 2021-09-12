exports.up = function(knex) {
  return knex.schema
    .createTable("roles", tbl => {
      tbl.increments("roleId");
      tbl.string("role").notNullable();
    })
    .createTable("users", tbl => {
      tbl.increments("userId");
      tbl.string("userName", 128).notNullable().unique();
      tbl.string("passWord", 128).notNullable();
      tbl.string("firstName", 128).notNullable();
      tbl.string("lastName", 128).notNullable();
      tbl.string("address", 128).notNullable();
      tbl.string("img").notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments("ingredientId");
      tbl.string("ingredientName", 128).notNullable().unique();
      tbl.string("ingredientDesc", 128).notNullable().unique();
      tbl.string("ingredientType", 128).notNullable();
      tbl.string("price", 128).notNullable();
    })
    .createTable("pizzas", tbl => {
      tbl.increments("pizzaId");
      tbl.string("pizzaName", 128).notNullable();
      tbl.string("pizzaDesc", 128).notNullable();
      tbl
        .integer("userId")
        .unsigned()
        .references("users.userId")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredient-pairs", tbl => {
      tbl.increments("iPairId");
      tbl
        .integer("pizzaId")
        .unsigned()
        .references("pizzas.pizzaId")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredientId")
        .unsigned()
        .references("ingredients.ingredientId")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("rating-pairs", tbl => {
      tbl.increments("rPairId");
      tbl.boolean("rated").defaultTo(false);
      tbl.boolean("rating").defaultTo(false);
      tbl
        .integer("pizzaId")
        .unsigned()
        .references("pizzas.pizzaId")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("userId")
        .unsigned()
        .references("users.userId")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("rating-pairs")
    .dropTableIfExists("ingredient-pairs")
    .dropTableIfExists("pizzas")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
};
