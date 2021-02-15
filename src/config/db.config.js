const dotnev = require('dotenv')

dotnev.config()

module.exports = {
  local: {
    localUrlDatabase: process.env.DB_URI,
    secret: 'password',
  },
}
