/*global describe*/
/*global it*/

var should = require('should'),
	countdown = require('../lib/countdown');

describe('Testing CountDown result object', function () {
	var result,
		NO_OF_WORDS_LENGTH_ONE = 3,
		NO_OF_WORDS_LENGTH_FIVE = 1,
		NO_OF_WORDS_LENGTH_SIX = 0,
		TOTAL_WORD_COUNT = 4,
		FIVE_LETTER_WORD = 'jejej'; 
		
	before(function() {
		result = new countdown.CountDownResult();
		result.addWord('a');
		result.addWord('b');
		result.addWord('c');
		result.addWord(FIVE_LETTER_WORD);
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
	
	it('test getLongestWordSize', function () {
		var size = result.getLongestWordSize();
		size.should.be.equal(5, 'The longest word is five');
	});
	
	it('test getWordOfSize', function () {
		var words = result.getWordsOfSize(FIVE_LETTER_WORD.length);
		words.should.be.Array();
		words.should.containEql(FIVE_LETTER_WORD);
		words.should.have.size(1);
	});
	
	it('test getWordOfSize and get empty array', function () {
		var words = result.getWordsOfSize(9);
		words.should.be.Array();
		words.should.be.empty();
	});
	
	it('test getWordOfSize with a float and get empty array', function () {
		var words = result.getWordsOfSize(9.2);
		words.should.be.Array();
		words.should.be.empty();
	});
});