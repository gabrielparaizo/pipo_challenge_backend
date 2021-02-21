const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');

// ==> Gera um token de autenticação que expira à cada 1 dia
function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

// ==> Método que registra um novo usuário
exports.registerNewUser = async (req, res) => {
  const { email } = req.body;
  // Faz uma verificação para saber se já existe um usuário com este e-mail
  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'O usuário já existe' });
    }

    const user = await User.create(req.body);

    // Esconde a senha no retorno da requisição
    user.password = undefined;

    return res.send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (error) {
    return res.status(400).json({ error: 'Ocorreu um erro ao registrar' });
  }
};

// ==> Método responsável por fazer login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica um um e-mail existente na base de dados e seleciona senha para comparação com bcryptjs
    const user = await User.findOne({ email }).select('+password');
    // Faz a tratativa de erro
    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    // Comparando a senha que o usuário está informando com a mesma que está no BD
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Senha inválida' });
    }

    user.password = undefined;

    res.send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    res.status(400).json({ error: 'Não foi possível fazer login' });
  }
};

// ==> Método responsável pela página principal após o login
exports.returnUserProfile = async (req, res) => {
  await res.json({ user: req.userId });
};
