require('dotenv').config()
require('./config/database')
require('./config/api')

const express = require('express')
const app = express();

require('./router/_main')(app)

module.exports = app
