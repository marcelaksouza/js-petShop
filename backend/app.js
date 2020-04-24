require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './uploads/');
    },
    filename: function(req, file, callback){
        callback(null, new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" ){
        callback(null, true);
    }
    else {
        callback(null, false);
    }
};

const limits = {
    fileSize: 1024 * 1024 *5,
};

const forms = multer({
    storage: storage, 
    limits:limits, 
    fileFilter: fileFilter,
});

const app = express();
const cors = require('cors');
//sanitizer
const expAutoSan = require('express-autosanitizer');

app.use(cors());
app.use(morgan('dev'));
app.use('/uploads',express.static('uploads'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 app.use(forms.any()); 


app.use(expAutoSan.allUnsafe);
app.use(require('./routes/routes.js'));

const server = app.listen(process.env.PORT || 3000, function(){
    console.log("listening to port %s", server.address().port)
});