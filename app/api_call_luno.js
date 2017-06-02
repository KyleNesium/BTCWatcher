var rp = require('request-promise');

var exports = module.exports = {};

// https://api.mybitx.com/api/1/ticker?pair=XBTZAR
exports.getPairRate = function(pair) {

	var options = {
	    uri: 'https://api.mybitx.com/api/1/ticker',
	    qs: {
	        pair: pair // -> uri + '?access_token=xxxxx%20xxxxx' 
	    },
	    headers: {
	        'User-Agent': 'Request-Promise'
	    },
	    json: true // Automatically parses the JSON string in the response 
	};
 

	return rp(options);  
}