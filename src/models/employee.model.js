const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  admissionDate: {
    type: Date,
    default: Date.UTC,
  },
  email: {
    type: String,
    required: true,
    lowecase: true,
  },
  address: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  lastWeekMeditationHours: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  // healthInsuranceCompanies: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'healthInsuranceCompanies'
  // }]
});

const Employees = mongoose.model('Employees', EmployeeSchema);

module.exports = Employees;
