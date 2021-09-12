const router = require("express").Router();

// delete a user
router.delete("/user:userId", (req, res) => {

});

// delete a pizza
router.delete("/pizza:pizzaId", (req, res) => {

});

// delete ingredient pair
router.delete("/:iPairId", (req, res) => {

});

module.exports = router;