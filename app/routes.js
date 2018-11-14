// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
    res.render('index')
})
// Add your routes here - above the module.exports line
require('./views/notifications/routes')(router)

module.exports = router;
