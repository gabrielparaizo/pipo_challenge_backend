const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongooseCoonection = require('./config/mongooseConnection.config')

const app = express()

// => Rotas da API:
const index = require('./routes/index')
const userRoutes = require('./routes/user.routes')
const employeeRoutes = require('./routes/employee.routes')

// TODO: Declarar rota user.routes.js
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json' }))
app.use(morgan('dev'))
app.use(cors())

app.set('Mongoose Connection', mongooseCoonection)

app.use(index)
app.use('/', userRoutes)
app.use('/employees', employeeRoutes)

module.exports = app
