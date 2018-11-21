const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
require('./views/notifications/routes')(router);

module.exports = router
