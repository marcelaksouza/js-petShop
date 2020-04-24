//reference https://github.com/EtienneR/api_express_no_db/blob/master/helpers/middlewares.js
//reference https://github.com/bpk68/api-server-starter
const express = require('express');
const router = express.Router();
const petController = require('../service/petController');
const multer = require('multer');
const upload = multer();

require('../shared/db');

//get all
router
.route("/pets")
.get(petController.getAllPets);

//add
router
.route("/pet", upload.single('petImage'))
.post(petController.createPet);

//get one, update and delete 
router
.route("/pet/:petId")
.get(petController.getOnePet)
.put(petController.updatePet)
.delete(petController.deletePet);

module.exports = router;