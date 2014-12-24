// dependencies
var irc = require('irc')
		;

var client = new irc.Client('irc.freenode.net', 'SmallBatchBot', { channels: ['#smallbatchdev'] });

client.addListener('message', function (from, to, message) {
	console.log(from + ' => ' + to + ': ' + message);
});
