const mongoose = require('mongoose');

// ==> Importa o banco do arquivo: 'db.config.js'
const database = require('./db.config'); // ==> Conexão local com MongoDB

mongoose.Promise = global.Promise;

// ==> Conexão com base de dados
mongoose
  .connect(database.local.localUrlDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Conexão com MongoDB estabelecida com sucesso!');
  })
  .catch((err) => {
    console.log(`Erro ao conectar com a base de dados...${err}`);
    process.exit();
  });
