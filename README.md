# OrderZa Backend

## Data Tables
Here is how my SQL database is structured.
### roles
roleId | role
1 | "admin"
2 | "customer"
### users
userId | userName | passWord(hashed) | firstName | lastName | address | img
auto# | "" | "" | "" | "" | "" | ""
### ingredients
ingredientId | ingredientName | ingredientDesc | ingredientType | price
auto# | "" | "" | "" | ""
### pizzas
pizzaId | pizzaName | pizzaDesc | userId
auto# | "" | "" | # (user who created)
### ingredient-pairs
iPairId | pizzaId | ingredientId
auto# | # | #
### rating-pairs
rPairId | rated | rating | pizzaId | userId
auto# | bool | bool | # | #