const Pet = require('../model/petSchema');
const ResponseHandler = require('../shared/helpers/responseHandler');

const getAllPet = (req, res) => {
    Pet.find({}).populate('instructor student').exec(function (err, data) {
        if (err) {
        ResponseHandler.errorHandling(err, res);
        }
      ResponseHandler.successMessage(data, res);
  });
};

// const createPet = (req, res, next) => {
//     let booking = req.body;
//     booking.instructor = { "_id": req.params.instructorID }
//     console.log(booking);
//         Booking.create(booking)
//         .then((data) => {
//             ResponseHandler.successMessage(data, res);
//         })
//         .catch(next);
//     };

//   const getOneBooking = (req, res) => {
//     Booking.findById(req.params.bookingID, (err, data) => {
//       if (err) {
//         ResponseHandler.errorHandling(err, res);
//         }
//       ResponseHandler.successMessage(data, res);
//     });
//   };

//   const updateBooking = (req, res) => {
//     Booking.findOneAndUpdate(
//         {_id: req.params.bookingID},
//         req.body,
//         {new: true},
//         (err, data) => {
//           if (err) {
//             ResponseHandler.errorHandling(err, res);
//             }
//           ResponseHandler.successMessage(data, res);
//       }
//     );
//   };

//   const deleteBooking = (req, res) => {
//     Booking.deleteOne({ _id: req.params.bookingID }, (err) => {
//      if (err) {
//        res.status(404).send(err);
//      }
//      res.status(200).json({ message: "booking was successfully deleted!" });
//    });
//  };

// module.exports = {
//     getAllBookings,
//     createBooking,
//     getOneBooking,
//     updateBooking,
//     deleteBooking
    
// };