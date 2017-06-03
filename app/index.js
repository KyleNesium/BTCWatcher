const luno = require('./api_call_luno');
const slack = require('./slack_webhook');
const CronJob = require('cron').CronJob;

new CronJob('0 */3 * * *', function(data) {

   luno.getPairRate('XBTZAR')
      .then(data => {
         slack.publish(data)
      })

}, null, true, 'America/Los_Angeles');
