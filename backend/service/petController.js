const Pet = require('../model/petSchema');
const ResponseHandler = require('../shared/helpers/responseHandler');

const getAllPets = (req, res) => {
    Pet.find({}).populate('instructor student').exec(function (err, data) {
        if (err) {
        ResponseHandler.errorHandling(err, res);
        }
      ResponseHandler.successMessage(data, res);
  });
};


const createPet = (req, res, next) => {
    Pet.create(req.body)
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
    Pet.findOneAndUpdate({_id: req.params.petId},
        req.body,{new: true},
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
