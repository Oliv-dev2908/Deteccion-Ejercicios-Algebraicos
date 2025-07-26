var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
require('dotenv').config();

var app = express();
var port = process.env.PORT || 3525;

// Configuración
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

//test routes
const testRoutes = require('./routes/testRoutes');
app.use('/', testRoutes);

//panel routes
const panelRoutes = require('./routes/panelRoutes');
app.use('/', panelRoutes);

//auth roles
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);


app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:3525/');
});


