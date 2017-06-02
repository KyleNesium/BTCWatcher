const lunobtc = require('./api_call_luno')
const slackweb = require('./slack_webhook')

var CronJob = require('cron').CronJob;
new CronJob('0 */3 * * *', function(data) {

lunobtc
	.getPairRate('XBTZAR')
	.then(data => {	slackweb.publish(data) })

}, null, true, 'America/Los_Angeles');



//lunobtc
//	.getData('ETHZAR')
//	.then(data => {	slackweb.publish(data) })	