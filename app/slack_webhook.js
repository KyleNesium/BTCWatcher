var Slack = require('slack-node');
var exports = module.exports = {};

var sourworms_slack = "";
var roam_slack = "";

var channels = [sourworms_slack,roam_slack]

exports.publish = function(input) {

	channels.forEach(function(url){

		slack = new Slack();
		slack.setWebhook(url);

		console.log(input);
		console.log("before slack webhook");

		slack.webhook({
		  channel: "#cryptocurrency",
		  username: "BTCwatcher",
		  icon_emoji: ":aw_yeah:",
		  text: ":aw_yeah: LUNO BTC \nPrice: R"+ input.ask + "\n Last trade: R" + input.last_trade + "\n Rolling 24 Hour Volume: " + input.rolling_24_hour_volume
		}, function(err, response) {
	    });
	})

	
}
