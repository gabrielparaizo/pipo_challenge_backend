const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const employeeController = require('../controllers/employee.controllers');

// ==> Rota responsável por listar todos os fucionários
router.get('/', auth, employeeController.getEmployees);

// ==> Rota responsável por listar um funcionário pelo ID
router.get('/:employeeId', auth, employeeController.showEmployee);

// ==> Rota responsável por criar um novo usuário
router.post('/', auth, employeeController.createEmployee);

// ==> Rota responsável por atualizar um funcionário
router.put('/:employeeId', auth, employeeController.updateEmployee);

// ==> Rota responsável por deletar um funcionário
router.delete('/:employeeId', auth, employeeController.deleteEmployee);

module.exports = router;
