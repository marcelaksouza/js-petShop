function mustBeInteger(req, res, next) {
    const id = req.params.id

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } else {
        next()
    }
}

function checkFieldsPost(req, res, next) {
    const { name, age, group, type, description } = req.body
    console.log(req.body);
    console.log(name && age && group && type && description);
    if (name && age && group && type && description) {

        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}

module.exports = {
    mustBeInteger,
    checkFieldsPost
}