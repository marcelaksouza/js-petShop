//load pet schema
const Pet = require('../model/petSchema');
//response handler
const ResponseHandler = require('../shared/helpers/responseHandler');

//get all allow query 
const getAllPets = (req, res) => {
  Pet.find(req.query).exec(function (err, data) {
    if (err) {
      ResponseHandler.errorHandling(err, res);
    }
    ResponseHandler.successMessage(data, res);
  });
};

//create
const createPet = (req, res, next) => {
  console.log("req.body")
  console.log(req.body)
  Pet.create(req.body)
    .then((data) => {
      ResponseHandler.successMessage(data, res);
    })
    .catch(next);
};

//get one
const getOnePet = (req, res) => {
  Pet.findById(req.params.petId, (err, data) => {
    if (err) {
      ResponseHandler.errorHandling(err, res);
    }
    ResponseHandler.successMessage(data, res);
  });
};

//update
const updatePet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.petId },
    req.body, { new: true, useFindAndModify: false },
    (err, data) => {
      if (err) {
        ResponseHandler.errorHandling(err, res);
      }
      ResponseHandler.successMessage(data, res);
    }
  );
};

//delete
const deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.petId }, (err) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "booking was successfully deleted!" });
  });
};

//export functions
module.exports = {
  getAllPets,
  createPet,
  getOnePet,
  updatePet,
  deletePet
};
