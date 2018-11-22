// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const viewContent = require('./routes-content');


// Add your routes here - above the module.exports line
require('./views/notifications/routes')(router, viewContent);
// require('./views/notifications/setup/routes')(router, viewContent);


// Add your routes here - above the module.exports line
module.exports = router;
