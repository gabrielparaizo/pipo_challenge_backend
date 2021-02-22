const Employee = require('../models/employee.model');
const auth = require('../middlewares/auth');

// ==> Método responsável por listar todos os funcionários
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('user');
    return res.send({ employees });
  } catch (err) {
    return res.status(400).json({ err: 'Erro ao carregar funcionários' });
  }
};

// ==> Método responsável por listar um funcionário por ID
exports.showEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId).populate('user');
    return res.send({ employee });
  } catch (err) {
    return res.status(400).json({ error: 'Erro ao carregar o funcionário' });
  }
};

// ==> Método responsável por criar um novo funcionário
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create({ ...req.body, user: req.userId });
    return res.send({ employee });
  } catch (err) {
    return res.status(400).json({ error: 'Erro ao criar o funcionário' });
  }
};

// ==> Método responsável por atualizar um funcionário
exports.updateEmployee = async (req, res) => {
  await res.send({ user: req.userId });
};

// ==> Método responsável por deletar um funcionário
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndRemove(req.params.employeeId);
    return res.send();
  } catch (err) {
    return res.status(400).json({ err: 'Erro ao deletar o funcionário' });
  }
};
