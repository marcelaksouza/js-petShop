const http = require('http'); 
const express = require('express');
const bodyParser = require('body-parser');
const fs = require ('fs');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./routes/routes.js'));

//let petsData = require ('./model/data.json');
//let id = 1;
//petsData1 = petsData.filter(p => p.id !== id);
//console.log(petsData);
//console.log(petsData1);




const server = app.listen(3000, function(){
    console.log("listening to port %s", server.address().port)
});