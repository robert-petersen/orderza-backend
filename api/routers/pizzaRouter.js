const router = require("express").Router();

// gets all pizzas
router.get("/", (req, res) => {

});

// create a pizza
router.post("/create", (req, res) => {

});

// create an ingredient pair
router.post("/pizza:pizzaId-add:ingredientId", (req, res) => {

});

// rate a pizza
router.post("/pizza:pizzaId", (req, res) => {

});

module.exports = router;