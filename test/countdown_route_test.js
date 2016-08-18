/*global describe*/
/*global it*/
var express = require('express'),
	should = require('should'),
	bodyParser = require('body-parser'),
	multer = require('multer'),
	errorHandler = require('errorhandler'),
	request = require('supertest'),
	app,
	countdown = require('../routes/countdown'),
	testUrl = 'http://adrianmclaughlin.ie/images/profile.jpg';

describe('POST anagram to countdown service', function () {
	app = express();
	app.use(bodyParser());
	app.post('/countdown', countdown.countdown);
	it('should return 200 code', function (done) {
		request(app)
		.post('/countdown')
		.send({anagram: 'boys'})
		.expect(200)
		.end(function (err, res) {
			if (err) {
				throw err;
			}
			done();
		});
	});
	
	it('should return result', function (done) {
		var anagram = 'boat';
		request(app)
		.post('/countdown')
		.send({anagram: anagram})
		.expect(200)
		.expect('Content-Type', /json/)
		.expect(function (res) {
			var result = res.body,
				wordSize = result.longestWordSize;
			wordSize.should.equal(anagram.length);
			result.words[wordSize].should.containEql(anagram);
		})
		.end(function (err, res) {
			if (err) {
				throw err;
			}
			done();
		});
	});
});