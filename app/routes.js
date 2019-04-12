// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const viewContent = require('./routes-content');
// const credits = require('./data');


// Add your routes here - above the module.exports line
require('./views/notifications/routes')(router, viewContent);
require('./views/prisons/routes')(router);
require('./views/credits/routes')(router);
require('./views/senders/routes')(router);
require('./views/prisoners/routes')(router);
require('./views/disbursements/routes')(router);

// Add your routes here - above the module.exports line
module.exports = router;
