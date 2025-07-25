var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();

var app = express();
var port = process.env.PORT || 3525;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const testRoutes = require('./routes/testRoutes');

app.use('/', testRoutes);


app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:3525/');
});


