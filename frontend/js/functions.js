
//get all pets save in the pets array
let pets = [];
const getAll = (trueOrFalse) => {
    console.log("caling get all")
    let query = "";
    if (trueOrFalse != ""){
      query = "adopted="+trueOrFalse;
    }
    
    fetch('http://localhost:3000/pets?'+query)
        .then(res => res.json())
        .then(res => {
            pets = res;
            if(query == ""){
                toAdoptFunction();
            }
            else{
                adoptedFunction();
            }
        });
}
//create the table
const toAdoptFunction = () => {
    console.log("to adopt function")
    let table = "";
     table += '<table id="table" class="table">';
     table += '<thead>';
     table += '<tr>';
     table += '<th>Id</th>';
     table += '<th>Name</th>';
     table += '<th>Age</th>';
     table += '<th>Group</th>';
     table += '<th>Type</th>';
     table += '<th>Description</th>';
     table += '<th>Edit</th>';
     table += '<th>Adopt</th>';
     table += '<th>Delete</th>';
     table += '</tr>';
     table += '</thead>';
     table += '<tbody>';
     
    for (var i = 0; i < pets.length; i++) {
        table += `<tr id="petId${pets[i]._id}">`;
        table += `<td scope="row" ><p>` + pets[i]._id + `</p></td>`;
        table += `<td contenteditable="true" id="petname${pets[i]._id}"><p>` + pets[i].name + `</p></td>`;
        table += `<td contenteditable="true" id="age${pets[i]._id}"><p>` + pets[i].age + `</p></td>`;
        table += `<td contenteditable="true" id="animalClass${pets[i]._id}"><p>` + pets[i].group + `</p></td>`;
        table += `<td contenteditable="true" id="animalType${pets[i]._id}"><p>` + pets[i].type + `</p></td>`;
        table += `<td contenteditable="true" id="description${pets[i]._id}"><p>` + pets[i].description + `</p></td>`;
        table += `<td><p><buttom value="Submit" class="btn btn-warning" 
        onclick='updatepetTable("${pets[i]._id}","petname${pets[i]._id}","age${pets[i]._id}","animalClass${pets[i]._id}","animalType${pets[i]._id}","description${pets[i]._id}" )'>
        Edit</buttom></p></td>`;
        table += `<td><p><buttom id="myBtn" onclick='adopt("${pets[i]._id}","true")' class="btn btn-success">Adopt</buttom></p></td>`;
        table += `<td><p><buttom value="Submit" id="deletePetButton" class="btn btn-danger" onclick='deletepet("${pets[i]._id}")'>Delete</buttom></p></td>`;
        table += "</tr>";
    }
    table += '</tbody>';
    table += '</table>';
    document.getElementById("allpets").innerHTML = table;
}

const adoptedFunction = () => {
console.log("adopted function")
    let table = "";
     table += '<table id="table" class="table">';
     table += '<thead>';
     table += '<tr>';
     table += '<th>Id</th>';
     table += '<th>Name</th>';
     table += '<th>Age</th>';
     table += '<th>Group</th>';
     table += '<th>Type</th>';
     table += '<th>Description</th>';
     table += "<th>Owner's name</th>";
     table += "<th>Owner's address</th>";
     table += '<th>Edit</th>';
     table += '<th>Delete</th>';
     table += '</tr>';
     table += '</thead>';
     table += '<tbody>';
    for (var i = 0; i < pets.length; i++) {
        table += `<tr id="petId${pets[i]._id}">`;
        table += `<td scope="row" ><p>` + pets[i]._id + `</p></td>`;//id
        table += `<td contenteditable="true" id="petname${pets[i]._id}"><p>` + pets[i].name + `</p></td>`;//pets name
        table += `<td contenteditable="true" id="age${pets[i]._id}"><p>` + pets[i].age + `</p></td>`;//pets age
        table += `<td contenteditable="true" id="animalClass${pets[i]._id}"><p>` + pets[i].group + `</p></td>`;//pets group
        table += `<td contenteditable="true" id="animalType${pets[i]._id}"><p>` + pets[i].type + `</p></td>`;//pets type
        table += `<td contenteditable="true" id="description${pets[i]._id}"><p>` + pets[i].description + `</p></td>`;//pets description
        table += `<td contenteditable="true" id="ownerName${pets[i]._id}"><p>` + pets[i].owner.name + `</p></td>`;//owner name
        table += `<td contenteditable="true" id="ownerAddress${pets[i]._id}"><p>` + pets[i].owner.address + `</p></td>`;//owner address
        table += `<td><p><buttom value="Submit" class="btn btn-warning" 
        onclick='updatepetTable("${pets[i]._id}","petname${pets[i]._id}","age${pets[i]._id}","animalClass${pets[i]._id}","animalType${pets[i]._id}","description${pets[i]._id}" )'>
        Edit</buttom></p></td>`; //edit buttom
        table += `<td><p><buttom value="Submit" id="deletePetButton" class="btn btn-danger" onclick='deletepet("${pets[i]._id}")'>Delete</buttom></p></td>`;//delete buttom
        table += "</tr>";
    }
    table += '</tbody>';
    table += '</table>';
    document.getElementById("allpets").innerHTML = table;
}
getAll("");



//create function
let createButton = document.getElementById('createPetButton');
createButton.addEventListener("click", evt => {

    let body = {
        name: document.querySelector('#petname').value,
        age: document.querySelector('#age').value,
        description: document.querySelector('#description').value,
        group: document.querySelector('#animalclass').value,
        type: document.querySelector('#animaltype').value,
        
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:3000/pet', options)
        .then(res => res.json())
        .then(res => {
            getAll("");
            console.log(res)
        });
});

//update pets 
const updatepetTable = (id, petname, age, animalClass, animalType, description) => {
    let body = {
        name: document.getElementById(petname).innerText,
        age: document.getElementById(age).innerText,
        description: document.getElementById(description).innerText,
        group: document.getElementById(animalClass).innerText,
        type: document.getElementById(animalType).innerText,
    }
    console.log(body)
    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:3000/pet/' + id, options)
        .then(res => {res.json();
        }).then(res => {
            getAll("");
            console.log(res)
        }).catch((err)=>{
            console.log(err);
        })
};

//delete a pet
const deletepet = async (_id) => {
    console.log(_id)
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const data = await fetch('http://localhost:3000/pet/' + _id, options)
        .then(res => {
            if (res.ok) {
                deleteRow(_id);
                return Promise.resolve('pet deleted.');
            } else {
                return Promise.reject('An error occurred.');
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

//delete the row 
const deleteRow = (id) => {
    let _id = "petId" + id;
    document.getElementById(_id).remove();
};

const adopt = (id, isAdopted) => {
    let body={
        adopted : isAdopted
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:3000/pet/' + id, options)
        .then(res => {
            res.json();
            getAll();
        }).catch((err)=>{
            console.log(err);
        });
}
