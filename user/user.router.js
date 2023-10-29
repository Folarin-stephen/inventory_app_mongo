const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const joi = require("joi");
const middleware = require("./user.middleware");
const controller = require("./user.controller");
const { bearerTokenAuth } = require('../middleware/global_middleware');
dotenv.config();

router.use(bearerTokenAuth)
// User get/view all products
router.get('/products', controller.getAllProducts)

router.post('/signup', middleware.ValidateUserCreation, controller.Signup)



router.post('/login', middleware.LoginValidation, controller.Login )


module.exports = router;