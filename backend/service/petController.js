const Pet = require('../model/petSchema');
const ResponseHandler = require('../shared/helpers/responseHandler');

//get all
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
  console.log("create pet")
  let body = req.body;
  if (req.files) {
    console.log("here")
    console.log(req.files );
    
    let img = {
      image: "http://localhost:3000/" + req.files[0].path
    }
    body = Object.assign(body, img);
  }
  
  console.log(body);
  Pet.create(body)
    .then((data) => {
      ResponseHandler.successMessage(data, res);
    })
    .catch(next);
};

const getOnePet = (req, res) => {
  Pet.findById(req.params.petId, (err, data) => {
    if (err) {
      ResponseHandler.errorHandling(err, res);
    }
    ResponseHandler.successMessage(data, res);
  });
};

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

const deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.petId }, (err) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "booking was successfully deleted!" });
  });
};

module.exports = {
  getAllPets,
  createPet,
  getOnePet,
  updatePet,
  deletePet

};
