const express = require('express')
const app = express()
const searchRoute = require('./routes/search')

app.use('/', searchRoute)
// app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app