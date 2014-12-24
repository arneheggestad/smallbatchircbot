// dependencies
var irc = require('irc')
		;

var client = new irc.Client('irc.freenode.net', 'SmallBatchBot', { channels: ['#smallbatchdev'] });
