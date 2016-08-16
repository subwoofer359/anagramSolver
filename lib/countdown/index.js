
var fs = require('fs');
var readline = require('readline');

function CountDownResult() {
	if(this === null) {
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
			this.longestWordSize = word.length > this.longestWordSize
				? word.length : this.longestWordSize;
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

exports.findWordsWithAnagram = function (anagram, callback) {
	
	var listOfWords = [],
		result = new CountDownResult();
	const rl = readline.createInterface({
		  input: fs.createReadStream('./words.txt', {flags: 'r', encoding: 'utf8', fd:null, autoClose: true}),
		  terminal: false
		});
	
	rl.on('line', function readingWordFile(line) {
		if( line.length > 3 ) {
			line = line.trim();
			var tempAnagram = anagram;
			for(var i = 0, length = line.length; i < length; i += 1) {
				if(tempAnagram.indexOf(line[i]) !== -1) {
					tempAnagram = tempAnagram.replace(line[i], '');
				} else {
					break;
				}
			}
			if(i === line.length) {
				result.addWord(line);
			}
		}
	}).on('close', function () {
		callback(null, result);
	});
};
