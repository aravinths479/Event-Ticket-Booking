const express = require('express');
const router = express.Router();

const userController = require("../controller/userController")


const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login',{useraccess:req.user }));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register',{useraccess:req.user}));

// Register
router.post('/register', userController.postRegister);

// Login
router.post('/login', userController.postLogin);

// Logout
router.get('/logout', userController.getLogout);

module.exports = router;
