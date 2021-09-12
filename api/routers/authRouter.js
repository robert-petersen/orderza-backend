const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')
const router = require("express").Router();
const { jwtSecret } = require('../../config/secrets.js');

// registers an admin
router.post("/register-admin", (req, res) => {

});

// registers a customer
router.post("/register", (req, res) => {

});

// login
router.post("/login", (req, res) => {

});

module.exports = router;