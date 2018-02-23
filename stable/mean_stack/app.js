
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//global.passport = passport;
var session = require('express-session');
var mongoose = require('mongoose');                         //add for Mongo support
var models = require('./models/models.js');                 //mongoose schemas
mongoose.connect('mongodb://localhost/hashplay');

//// Initialize Passport
var initPassport = require('./passport-init');
initPassport(passport);

var index = require('./routes/index');
var auth = require('./routes/auth')(passport);
var activity = require('./routes/activity');
var account = require('./routes/account');



var app = express();

var port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));     //serve static assets
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port, function() {
    console.log('Listening on ' + port);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/auth',auth); 			//signup, login
app.use('/activity',activity);	//upload, issue_copy
app.use('/account',account);	//user, artist, admin



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
