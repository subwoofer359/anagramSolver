
var fs = require('fs');
var readline = require('readline');

function CountDownResult() {
	if(this === null) {
		return new CountDownResult();
	}
	this.words = {};
}

CountDownResult.prototype = {
		addWord : function (word) {
			var holder = this.words[word.length] || []; 
			holder.push(word);
			this.words[word.length] = holder;
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
			for(key in this.words) {
				if(this.words.hasOwnProperty(key)) {
					count += this.words[key].length;
				}
			}
			return count;
		}
};

exports.CountDownResult = CountDownResult;

exports.findWordsWithAnagram = function (anagram, callback) {
	
	var listOfWords = [],
		longestWord = '';
	const rl = readline.createInterface({
		  input: fs.createReadStream('./words.txt', {flags: 'r', encoding: 'utf8', fd:null, autoClose: true}),
		  terminal: false
		});
	
	rl.on('line', function readingWordFile(line) {
		if( line.length > 3 ) {
			line = line.trim();
			var testData = line;
			for(var i = 0, length = anagram.length; i < length; i += 1) {
				testData = testData.replace(anagram[i], '');
				if(testData === '') {
					break;
				}
			}
			if(testData === '') {
				listOfWords.push(line);
				if(line.length >= longestWord.length) {
					longestWord = line;
				}
			}
		}
	}).on('close', function () {
		callback(null, listOfWords);
	});
};
