var should = require('should'),
		simon = require('../lib/simon.js')
		;

var game = {
	round: 0,
	answer: '',
	guess: ''
}

describe('simon-tests', function () {
	describe('generate answers', function () {
		it('should make a first round answer', function (done) {
			game.answer = '';
			game.round = 0;
			simon.generateAnswer(game, function (returnedGame) {
				returnedGame.answer.should.be.greaterThan(0);
				returnedGame.answer.should.be.lessThan(5);
				returnedGame.round.should.eql(1);
				done();
			})
		})
		it('should make a fourth-round answer', function (done) {
			game.round = 3;
			game.answer = '133';
			simon.generateAnswer(game, function (returnedGame) {
				returnedGame.answer.should.startWith('133');
				returnedGame.answer.charAt(3).should.be.greaterThan(0);
				returnedGame.answer.charAt(3).should.be.lessThan(5);
				returnedGame.round.should.eql(4);
				done();
			})
		})
	})
	describe('check answers', function () {
		it('should say our answer is correct', function (done) {
			game.guess = '1234';
			game.answer = '1234';
			simon.checkGuess(game, function (correct) {
				correct.should.eql(true);
				done();
			});
		});
		it('should say our answer is incorrect', function (done) {
			game.answer = '1234';
			game.guess = '1233';
			simon.checkGuess(game, function (correct) {
				correct.should.eql(false);
				done();
			})
		})
	})
})