const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// ==> Rotas responsável por criar um novo 'User': (POST) localhost:3000/register
router.post('/register', userController.registerNewUser);

// ==> Rota responsável por fazer login: (POST) localhost:3000/login
router.post('/login', userController.loginUser);

module.exports = router;
