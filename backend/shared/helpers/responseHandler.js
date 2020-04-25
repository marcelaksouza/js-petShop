//sucessefull message
function successMessage (obj, res) {
    res.status(200).json(obj);
}

//error messsage
function errorHandling (err,req, res, next) {
    console.log(err)
    res.status(500).send(err.message);
}

module.exports.successMessage = successMessage;
module.exports.errorHandling = errorHandling;