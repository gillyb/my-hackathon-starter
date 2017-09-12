const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const publicRootDir = path.join(__dirname, '../public');
const publicBuildDir = path.join(__dirname, '../build');

app.disable('x-powered-by');

app.set('env', 'development'); // TODO: this should be defined in process.env.NODE_ENV - don't know where this is though...
app.set('view engine', 'pug');
app.set('views', publicRootDir + '/views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// static libraries
app.use(express.static(publicRootDir + '/scripts'));
app.use(express.static(publicRootDir + '/css'));
app.use(express.static(publicRootDir + '/img'));
app.use(express.static(publicRootDir + '/js'));
// for webpack output
app.use(express.static(publicBuildDir));

// controllers
require('./controllers/main-controller.js')(app);


// TODO: add a better logger
console.log(' :: Done initial loading.');
console.log(' :: Starting server...');


// start listening...
app.listen(Number(process.env.PORT || 5000)).on('error', function(ex) {

    console.log(ex);

});