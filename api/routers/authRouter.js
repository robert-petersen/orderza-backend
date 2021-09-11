const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')
const router = require("express").Router();
const { jwtSecret } = require('../../config/secrets.js');

router.post("/register-admin", (req, res) => {

});

router.post("/register", (req, res) => {

});

router.post("/login", (req, res) => {

});

module.exports = router;