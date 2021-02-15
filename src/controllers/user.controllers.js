const User = require('../models/user.model');

// ==> Async Await

// ==> Método responsável por criar novo user
exports.registerNewUser = async (req, res) => {
  // Faz uma verificação para saber se já existe um usuário com este e-mail
  try {
    const isUser = await User.find({ email: req.body.email });
    console.log(isUser);

    if (isUser.length >= 1) {
      return res
        .status(409)
        .json({ mensagem: 'Desculpe, este e-mail já está em uso' });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken(); // ==> Método criado no model
    return res
      .status(200)
      .json({ mensagem: 'Usuário criado com sucesso!', user, token });
  } catch (err) {
    res.status(400).json({ 'message': err.message });
  }
};

// TODO: Rota responsável por fazer login
exports.loginUser = async (req, res) => {};

// TODO: Rota responsável pela página principal após o login
exports.returnUserProfile = async (req, res) => {};
