//reference https://github.com/EtienneR/api_express_no_db/blob/master/helpers/middlewares.js
//reference https://github.com/bpk68/api-server-starter
const express = require('express');
const helper = require('../helpers/helper')
const router = express.Router();
const m = require('../helpers/middlewares')
const path = require('path')
const fs = require('fs');
router.use(express.static(path.join(__dirname, '../../frontend')));


//load index
router.get('/', async (req, res) => { 
    const index = fs.readFileSync('../frontend/index.html','utf-8');
    const header = {
         'Content-Type':'text.html'
    }
    res.writeHead(200, header).send(index).end()
});

//get all
router.get('/api/', async (req, res) => {
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
router.get('/api/:id', m.mustBeInteger, async (req, res) => {
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
router.post('/api/', m.checkFieldsPost, async (req, res) => {
    await helper.insertPost(req.body)
    .then(pet => res.status(201).json({
        message: `The pet #${pet.id} has been sucefully saved`,
        content: pet
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})


//put update
router.put('/api/:id', m.mustBeInteger, m.checkFieldsPost, async (req, res) => {
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
router.delete('/api/:id', m.mustBeInteger, async (req, res) => {
    //get the id from the request parameters 
    const id = req.params.id
    //use the helper delete pet
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