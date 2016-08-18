var countdown = require('../lib/countdown'),
    validator = require('../lib/validator/anagramValidator');

exports.countdown = function (req, res) {
	const HTTP_INTERNAL_ERROR = 500,
	    HTTP_BAD_REQUEST = 400,
	    ERROR_NO_ANAGRAM = 'No anagram given\n';
	if(req.body.anagram) {
	    var isValid = validator.validator(req.body.anagram);
	    
	    if(isValid.valid) {
	        countdown.findWordsWithAnagram(req.body.anagram, function (err, result) {
	            if(err) {
	                res.statusCode = HTTP_INTERNAL_ERROR;
	                res.send(err.message + "\n");
	                res.end();
	                console.log(err);
	                return;
	            }
	            res.send(result);
	            res.end();
	        });
	    } else {
	        console.log(isValid);
	        res.statusCode = HTTP_BAD_REQUEST;
	        res.send(isValid);
	        res.end();
	    }
	} else {
		res.statusCode = HTTP_BAD_REQUEST;
		res.send(ERROR_NO_ANAGRAM);
		res.end();
	}
};
