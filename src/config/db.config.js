const dotnev = require('dotenv')

dotnev.config()

module.exports = {
  local: {
    localDatabaseUrl: process.env.DB_URI,
    secret: 'password',
  },
}
