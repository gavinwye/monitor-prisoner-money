// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const viewContent = require('./routes-content');

// Route index page
router.get('/', function (req, res) {
    res.render('index')
})

// Try to keep these inclued in the same order as the journey.
// This makes it easy to find things.
//   Indent routes that relate to questions that are dependant on the previous one
require('./views/notifications/setup/routes')(router, viewContent);


// Add your routes here - above the module.exports line
module.exports = router;
