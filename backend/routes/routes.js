const express = require('express');
const helper = require('../helpers/helper')
const router = express.Router();
const fs = require('fs');
const dataPath = './model/data.json';
const m = require('../helpers/middlewares')



//get all
router.get('/', async (req, res) => {
    await helper.getPets()
    .then(pets => res.json(pets))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});
//get one
router.get('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id
    await helper.getPet(id)
    .then(pets => res.json(pets))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

//post create
router.post('/', m.checkFieldsPost, async (req, res) => {
    await helper.insertPost(req.body)
    .then(pet => res.status(201).json({
        message: `The pet #${pet.id} has been sucefully saved`,
        content: pet
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})


//put update
router.put('/:id', m.mustBeInteger, m.checkFieldsPost, async (req, res) => {
    const id = req.params.id
    await helper.updatePet(id, req.body)
    .then(pets => res.json({
        message: `The pet #${id} has been updated`,
        content: pets
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

//delete delete
router.delete('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await helper.deletePet(id)
    .then(pet => res.json({
        message: `The pet #${id} has been removed`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

module.exports = router;