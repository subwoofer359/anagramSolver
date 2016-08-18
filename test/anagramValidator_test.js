/*global describe*/
/*global it*/
var validator = require('../lib/validator/anagramValidator'),
    should = require('should');


describe('validate anagrams', function () {
    it('should reject anagrams greater than 9', function () {
        var result = validator.validator('abcdefghij');
        result.valid.should.false();
    });
    it('should reject anagrams less than 4', function () {
        var result = validator.validator('abc');
        result.valid.should.false();
    });
    
    it('should reject anagrams not strings', function () {
        var result = validator.validator(null);
        result.valid.should.false();
    });
    
    it('should reject anagrams containing numbers', function () {
        var result = validator.validator('abcde32');
        result.valid.should.false();
    });
    
    it('should reject anagrams containing special characters', function () {
        var result = validator.validator('abc@de');
        result.valid.should.false();
    });
    
    it('should reject anagrams containing spaces', function () {
        var result = validator.validator('abc de');
        result.valid.should.false();
    });
    
    it('should pass anagram', function () {
        var result = validator.validator('boat');
        result.valid.should.true();
    });
});
