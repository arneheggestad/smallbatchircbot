// dependencies

var simon = {
	generateAnswer: function (gameObj, cb) {
		var randomInt = Math.floor(Math.random() * 3 + 1);
		gameObj.answer = gameObj.answer + randomInt;
		gameObj.round++;
		console.log(gameObj);
		return cb(gameObj);
	},
	checkGuess: function (gameObj, cb) {
		var correct = true,
				answer = gameObj.answer,
				guess = gameObj.guess;
		for (var i = 0; i < answer.length; i++) {
			if (answer.charAt(i) != guess.charAt(i)) {
				correct = false;
				console.log(answer, guess);
				return cb(correct);
			}
			if (i + 1 === answer.length) {
				return cb(correct);
			}
		}
	},
	run: function () {
		//
	}
}

module.exports = simon;
