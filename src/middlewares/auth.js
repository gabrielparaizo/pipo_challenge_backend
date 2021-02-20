const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    // ==> Realiza algumas verificações no token
    if (!authHeader) {
      return res.status(401).json({ error: 'Nenhum token informado' });
    }
    const parts = authHeader.split(' ');

    if (!parts.lenght === 2) {
      return res.status(401).json({ error: 'Erro no token' });
    }

    // Utilizando desestruturação para verificar as partes do token
    const [scheme, token] = parts;

    // Utiliza Regex para ver se está escrito 'Bearer' seguido de uma hash
    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({ error: 'Token mal-formatado' });
    }

    // ==> Verifica se o token está válido
    jwt.verify(token, authConfig.secret, (err, decoded) => {

      if(err) {
        return res.status(401).json({ error: 'Token inválido' })
      }

      req.userId = decoded.id;
      next();
    });
  } catch (err) {
    return res.status(401).json({ message: 'Falha na autenticação' });
  }
};
