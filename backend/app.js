//load .env variables
require('dotenv').config()
//imports
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require ('morgan')
const app = express();
const cors = require('cors');

//sanitizer
const expAutoSan = require('express-autosanitizer');

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expAutoSan.allUnsafe);
app.use(require('./routes/routes.js'));
app.use(express.static('frontend'));

//start the server
//npm start
const server = app.listen(process.env.PORT || 3000, function(){
    console.log("listening to port %s", server.address().port);	  
}); 	 