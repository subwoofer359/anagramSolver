/*esversion: 6*/
var fs = require('fs'),
	readline = require('readline'),
	WORD_FILE = './words.txt';

function CountDownResult() {
	if(!(this instanceof CountDownResult)) {
		return new CountDownResult();
	}
	
	this.words = {};
	
	this.longestWordSize = 0;
}

CountDownResult.prototype = {
		addWord : function (word) {
			var holder = this.words[word.length] || []; 
			holder.push(word);
			this.words[word.length] = holder;
			this.longestWordSize = word.length > this.longestWordSize ? word.length : this.longestWordSize;
		},
		getWordCount: function (wordLength) {
			if(typeof wordLength !== 'number') {
				return 0;
			}
			var holder = this.words[wordLength];
			if(holder) {
				return holder.length;
			}
			return 0;
		},
		getTotalWordCount: function () {
			var count = 0;
			for(var key in this.words) {
				if(this.words.hasOwnProperty(key)) {
					count += this.words[key].length;
				}
			}
			return count;
		},
		getLongestWordSize: function () {
			return this.longestWordSize;
		},
		getWordsOfSize: function (size) {
			if(typeof size !== 'number') {
				return [];
			}
			return this.words[size] || [];
		}
};

exports.CountDownResult = CountDownResult;

function isWordInAnagram (word, anagram) {
	for(var i = 0, length = word.length; i < length; i += 1) {
		if(anagram.indexOf(word[i]) !== -1) {
			anagram = anagram.replace(word[i], '');
		} else {
			break;
		}
	}
	return i === word.length;
}

/**
 * @param anagram string
 */
exports.findWordsWithAnagram = function (anagram, callback) {
	
	var listOfWords = [],
		result = new CountDownResult(),
		MIN_WORD_SIZE = 3,
		fileInput = fs.createReadStream(WORD_FILE, {flags: 'r', encoding: 'utf8', fd:null, autoClose: true}); 
	
	anagram = anagram.toLowerCase();
	
	fileInput.on('error', function (err) {
		callback(err, null);
	});
	
	const rl = readline.createInterface({
		  input: fileInput,
		  terminal: false
		});
	
	rl.on('line', function readingWordFile(line) {
		if (line.length > MIN_WORD_SIZE) {
			line = line.trim();
			if(isWordInAnagram(line, anagram)){
				result.addWord(line);
			}
		}
	}).on('close', function () {
		callback(null, result);
	});
};
