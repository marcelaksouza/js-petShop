//reference https://github.com/EtienneR/api_express_no_db/blob/master/helpers/middlewares.js
//reference https://github.com/bpk68/api-server-starter
const fs = require('fs')
const filePath = './model/data.json';
let petsData = require ('../../model/data.json');


const getNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

const newDate = () => new Date().toString()

function mustBeInTheArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'ID not found',
                status: 404
            })
        }
        resolve(row)
    })
}

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content, null, 2), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

function getPets() {
    return new Promise((resolve, reject) => {
        if (petsData.length === 0) {
            reject({
                message: 'no pets available',
                status: 202
            })
        }
        resolve(petsData)
    })
}

function getPet(id) {
    return new Promise((resolve, reject) => {
        mustBeInTheArray(petsData, id)
        .then(pets => resolve(pets))
        .catch(err => reject(err))
    })
}

function insertPost(newPet) {
    return new Promise((resolve, reject) => {
        const id = { id: getNewId(petsData) }
        newPet = { ...id, ...newPet }
        petsData.push(newPet)
        writeJSONFile(filePath, petsData)
        resolve(newPet)
    })
}

function updatePet(id, newPet) {
    return new Promise((resolve, reject) => {
        mustBeInTheArray(petsData, id)
        .then(pet => {
            const index = petsData.findIndex(p => p.id == pet.id)
            id = { id: pet.id }
            
            petsData[index] = { ...id, ...newPet }
            writeJSONFile(filePath, petsData)
            resolve(newPet[index])
        })
        .catch(err => reject(err))
    })
}

function deletePet(id) {
    return new Promise((resolve, reject) => {
        //if the id contains into the array
        mustBeInTheArray(petsData, id)
        .then( async () =>{
            const filtredData = await petsData.filter(p => p.id != id)
            writeJSONFile(filePath, filtredData)
            resolve()
        })
        .catch(err => reject(err))
    })
}
function showIndex() {
const showIndex = (req, res) =>{
    const index = fs.readFileSync('../frontend/index.html','utf-8');
    const header = {
        'Content-Type':'text.html'
    }
    res.writeHead(200, header);
    res.end(index);
}}

module.exports = {
    getNewId,
    newDate,
    mustBeInTheArray,
    writeJSONFile,
    showIndex
}

module.exports = {
    getPet,
    getPets,
    insertPost,
    updatePet,
    deletePet
}