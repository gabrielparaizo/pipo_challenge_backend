const Employee = require('../models/employee.model');
const HealthInsurance = require('../models/insuranceCompany.model');

// ==> MÉTODO QUE LISTA TODOS OS FUNCIONÁRIOS
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate('user', '-__v')
      .select('-__v');
    return res.send({
      count: employees.length,
      employees,
    });
  } catch (err) {
    return res.status(400).json({ err: 'Erro ao carregar funcionários' });
  }
};

// ==> MÉTODO QUE LISTA UM FUNCIONÁRIO PELO ID
exports.showEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId).populate(
      'user'
    );
    return res.send({ employee });
  } catch (err) {
    return res.status(400).json({ error: 'Erro ao carregar o funcionário' });
  }
};

// ==> MÉTODO QUE CRIA UM NOVO FUNCIONÁRIO
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create({ ...req.body, user: req.userId });
    return res.send({ employee });
  } catch (err) {
    return res.status(400).json({ error: 'Erro ao criar o funcionário' });
  }
};

// ==> MÉTODO QUE ATUALIZA UM FUNCIONÁRIO PELO ID
exports.updateEmployee = async (req, res) => {
  // await res.send({ user: req.userId });
  try {
    const employee = await Employee.findByIdAndUpdate({ ...req.body });
    return res.send({ employee });
  } catch (err) {
    return res.status(400).json({ error: 'Erro ao atualiar o funcionário' });
  }
};

// ==> MÉTODO QUE DELETA UM FUNCIONÁRIO
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndRemove(req.params.employeeId);
    return res.send();
  } catch (err) {
    return res.status(400).json({ err: 'Erro ao deletar o funcionário' });
  }
};
