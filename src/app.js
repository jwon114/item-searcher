const express = require('express')
const app = express()
const { search }  = require('./api/controllers/search')

app.use('/search', search)

module.exports = app