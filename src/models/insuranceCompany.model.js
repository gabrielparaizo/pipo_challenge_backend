const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const HealthInsuranceCompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cpf: {
    type: Boolean,
  },
  admissionDate: {
    type: Boolean,
    default: Date.UTC,
  },
  email: {
    type: Boolean,
    lowecase: true,
  },
  address: {
    type: Boolean,
  },
  weight: {
    type: Boolean,
  },
  height: {
    type: Boolean,
  },
  lastWeekMeditationHours: {
    type: Boolean,
  },
});

const HealthInsurance = mongoose.model(
  'healthInsuranceCompanies',
  HealthInsuranceCompanySchema
);
module.exports = HealthInsurance;
