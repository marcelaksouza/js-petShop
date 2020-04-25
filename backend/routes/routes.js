//reference https://github.com/EtienneR/api_express_no_db/blob/master/helpers/middlewares.js
//reference https://github.com/bpk68/api-server-starter

//imports
const express = require('express');
const router = express.Router();
//import pet controller
const petController = require('../service/petController');
//db connetion
require('../shared/db');

//get all
router
.route("/pets")
.get(petController.getAllPets);

//create 
router
.route("/pet")
.post(petController.createPet);

//get one, update, delete 
router
.route("/pet/:petId")
.get(petController.getOnePet)
.put(petController.updatePet)
.delete(petController.deletePet);

module.exports = router;