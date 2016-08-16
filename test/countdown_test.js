/*global describe*/
/*global it*/
var should = require('should'),
	countdown = require('../lib/countdown'),
	anagram = 'CHINALUNG'.toLowerCase();

describe('Find all words that can be created with letters in text', function () {
	it('should return some text', function (done) {
		this.timeout(50000);
		setTimeout(done, 50000);
		countdown.findWordsWithAnagram(anagram, function (err, result) {
			should.not.exist(err);
			should.exist(result);
			done();
		});
		
	});
	
});