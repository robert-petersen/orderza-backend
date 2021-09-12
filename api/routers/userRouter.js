const router = require("express").Router();

// user updates img
router.put("/update-img", (req, res) => {

});

// user updates address
router.put("/update-address", (req, res) => {

});

// get all of this users pizzas
router.get("/pizzas", (req, res) => {

});

// add an ingedient to a pizza
router.post("/pizza:pizzaId-:ingredientId", (req, res) => {

});

// delete an ingredient from a pizza
router.delete("/pizza:pizzaId-:ingredientId", (req, res) => {

});

// deletes a pizza
router.delete("/pizza:pizzaId", (req, res) => {

});

module.exports = router;