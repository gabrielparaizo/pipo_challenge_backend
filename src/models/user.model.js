const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    maxlenght: 50,
    required: true,
  },
  email: {
    type: String,
    maxlenght: 30,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  timestamps: true,
  collection: 'users',
});

// ==> Cria um hash da senha antes de salvar no DB
userSchema.pre('save', async (next) => {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// ==> Gera um token de autenticação ao entrar
userSchema.methods.generateAuthToken = async () => {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    'secret'
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// ==> Faz uma pesquisa pelas credenciais do usuário para verificar as credencias
userSchema.statics.findByCredentials = async (email, password) => {
  // Pesquisa pelo email informado
  const user = await User.findOne({ email });
  console.log(user);
  // Se não encontrar o usuário mostra um erro em tela
  if (!user) {
    throw new Error({ error: 'Usuário não encontrado' });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error({ error: 'Senha inválida' });
  }

  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
