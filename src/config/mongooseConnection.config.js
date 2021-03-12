const mongoose = require('mongoose');

// ==> Import file: 'db.config.js'
const database = require('./db.config'); // ==> local MongoDB connection

mongoose.Promise = global.Promise;

// ==> DB Connection
mongoose
  .connect(database.local.localUrlDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDB connection established!');
  })
  .catch((err) => {
    console.log(`Error connecting to the database...${err}`);
    process.exit();
  });
