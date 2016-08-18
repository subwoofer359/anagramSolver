/*global describe*/
/*global it*/
/*global before*/
var should = require('should'),
	countdown = require('../lib/countdown'),
	anagram = 'CHINALUNG'.toLowerCase();

describe('Find all words that can be created with letters in text', function () {

	var aresult,
		aerr,
		LAUNCHING = 'launching';
	
	before(function (done) {
		this.timeout(1000);
		setTimeout(done, 1000);
		countdown.findWordsWithAnagram(anagram, function (err, result) {
			aresult = result;
			aerr = err;
			done();
		});
	});
	
	it('should return CountDownResult object', function (done) {
		should.not.exist(aerr);
		should.exist(aresult);
		aresult.should.be.instanceOf(countdown.CountDownResult);
		done();

	});
	
	it('should have word count of 180', function () {
		aresult.getTotalWordCount().should.be.equal(180);
	});
	
	it('longest word equal to "launching"', function () {
		aresult.getLongestWordSize().should.be.equal(LAUNCHING.length);
		var wordArr = aresult.getWordsOfSize(LAUNCHING.length);
		wordArr.should.containEql(LAUNCHING);
	});
		
});