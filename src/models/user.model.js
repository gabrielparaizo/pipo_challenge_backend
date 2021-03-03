const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 50,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    max: 30,
  },
  password: {
    type: String,
    required: true,
    select: false,
    min: [6, 'A senha é muito curta'],
  },
  employees: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employees',
  },
  createdAt: {
    type: Date,
    default: Date.now.UTC,
  },
});

// ==> Cria um hash da senha antes de salvar no DB
userSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
