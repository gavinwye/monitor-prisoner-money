let credits = require('./data/credits_list.json');
console.log('utils');
module.exports = {

	getCredits: () => {
		console.log('get credits')
		return credits;
	}

}
