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
require('./views/payment-sources/routes')(router);
require('./views/prisoners/routes')(router);
///////////
// This gets all of the data
// var creditData = require('./data/credits_list.json');
// This prints it in the console
// console.log(creditData);

///////////
// This gets the individual variables defined below
// var credits = require('./data/credits_list.json');
//
// credits.forEach(function(credit) {
//     var creditAmount = credit.amount;
//     var creditCard_number_last_digits = credit.card_number_last_digits;
//     // Print the variables in the console
//     // console.log(creditAmount);
//     // console.log(creditCard_number_last_digits);
// });

getcreditData: () => {
	return creditData;
}



// Add your routes here - above the module.exports line
module.exports = router;
