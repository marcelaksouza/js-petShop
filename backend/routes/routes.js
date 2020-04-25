//reference https://github.com/EtienneR/api_express_no_db/blob/master/helpers/middlewares.js
//reference https://github.com/bpk68/api-server-starter
const express = require('express');
const router = express.Router();
const petController = require('../service/petController');
require('../shared/db');
const path = require('path');
// router.get('/',function(req,res) {
//     res.render(path.join(__dirname, '../../frontend', 'index'));
//   });

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