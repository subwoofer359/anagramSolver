/**
 * Module dependencies.
 */

var express = require('express'),
	anagram = require('./routes/anagram'),
	countdown = require('./routes/countdown'),
	health = require('./routes/health'),
	info = require('./routes/info'),
	favicon = require('serve-favicon'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	http = require('http'),
	path = require('path'),
	multer = require('multer'),
	methodOverride = require('method-override'),
	errorHandler = require('errorhandler'),
	env = process.env;

var app = express();

// all environments
app.set('port', env.NODE_PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.set('host', env.NODE_IP || 'localhost')
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true 
}));
app.use(methodOverride());
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(errorHandler());
}
app.get('/', anagram.anagram);
app.get('/health', health.health);
app.post('/getanagram', countdown.countdown);
app.get('/info/*', info.info);

http.createServer(app).listen(app.get('port'), app.get('host'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
