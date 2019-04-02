const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.server.controller.js');

// @route   POST /api/users/register
// @desc    Allows user registration
// @access  Public
router.route('/register').post(UserController.registerUser);

// @route   POST /api/user/login
// @desc    Authenticates user and returns token
// @access  PUBLIC
router.route('/login').post(UserController.loginUser);

module.exports = router;