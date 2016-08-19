const MIN_WORD_SIZE = 3;
const MAX_WORD_SIZE = 9;
const PATTERN = /^[a-zA-Z]+$/;

exports.validator = function validator (anagram) {
    if(typeof anagram === 'string') {
        var anagramLen = anagram.length; 
        if(anagramLen > MIN_WORD_SIZE && anagramLen <= MAX_WORD_SIZE) {
            if (PATTERN.test(anagram)) {
                return {error: null, valid: true};
            } else {
                return {error: 'Contain some non-letter characters', valid: false};
            }
        } else {
            return {error: 'Word length should be greater 3 and less 10', valid: false};
        }
    }
    return {error: 'Not a string', valid: false};
};