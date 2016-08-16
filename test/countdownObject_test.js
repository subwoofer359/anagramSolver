/*global describe*/
/*global it*/

var should = require('should'),
	countdown = require('../lib/countdown');

describe('Testing CountDown result object', function () {
	var result,
		NO_OF_WORDS_LENGTH_ONE = 3,
		NO_OF_WORDS_LENGTH_FIVE = 1,
		NO_OF_WORDS_LENGTH_SIX = 0,
		TOTAL_WORD_COUNT = 4
		
	before(function() {
		result = new countdown.CountDownResult();
		result.addWord('a');
		result.addWord('b');
		result.addWord('c');
		result.addWord('jejej');
	});
	
	it('create an object', function () {
		var d = countdown.CountDownResult();
		d.should.be.instanceOf(countdown.CountDownResult, 'should be');
	});
	
	it('test getWordCount', function () {
		result.getWordCount(1).should.be.equal(NO_OF_WORDS_LENGTH_ONE,
				' Should three words saved with the length one');
		result.getWordCount(5).should.be.equal(NO_OF_WORDS_LENGTH_FIVE,
				' Should one words saved with the length five');
		result.getWordCount(6).should.be.equal(NO_OF_WORDS_LENGTH_SIX,
				' Should no words saved with the length six');
	});
	
	it('test getTotalWordCount', function () {
		var wordCount = result.getTotalWordCount();
		wordCount.should.be.equal(TOTAL_WORD_COUNT, 'The total word count should be four');
	});
});