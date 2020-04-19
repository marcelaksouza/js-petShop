//reference https://github.com/EtienneR/api_express_no_db/blob/master/helpers/middlewares.js
//reference https://github.com/bpk68/api-server-starter
const express = require('express');
const router = express.Router();
const petController = require('../service/petController');
require('../shared/db');

router
.route("/pets")
.get(petController.getAllPets);


router
.route("/pet")
.post(petController.createPet);

router
.route("/pet/:petId")
.get(petController.getOnePet)
.put(petController.updatePet)
.delete(petController.deletePet);


module.exports = router;