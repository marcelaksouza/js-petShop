
//get all pets save in the pets array
let pets = [];
const getAll = (trueOrFalse) => {
    console.log("caling get ")
    
     let query = "";
     if (trueOrFalse !== undefined) {
         query = "adopted=" + trueOrFalse;
     }

    fetch('http://localhost:3000/pets?' + query)
        .then(res => res.json())
        .then(res => {
            pets = res;
            if (trueOrFalse == "false") {
                toAdoptFunction();
                console.log("toAdoptFunction")
            }
            else if (trueOrFalse == "true") {
                adoptedFunction();
                console.log("adoptedFunction")
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
        table += `<tr id="petId${pets[i]._id}">`;//row id
        table += `<td scope="row" ><p>` + pets[i]._id + `</p></td>`;//pet id
        table += `<td contenteditable="true" id="petname${pets[i]._id}"><p>` + pets[i].name + `</p></td>`;//pet name
        table += `<td contenteditable="true" id="age${pets[i]._id}"><p>` + pets[i].age + `</p></td>`;//pet age
        table += `<td contenteditable="true" id="animalClass${pets[i]._id}"><p>` + pets[i].group + `</p></td>`;//pet group
        table += `<td contenteditable="true" id="animalType${pets[i]._id}"><p>` + pets[i].type + `</p></td>`;//pet type
        table += `<td contenteditable="true" id="description${pets[i]._id}"><p>` + pets[i].description + `</p></td>`;//pet description
        table += `<td><p><buttom value="Submit" class="btn btn-warning" 
        onclick='toAdoptUpdate("${pets[i]._id}","petname${pets[i]._id}","age${pets[i]._id}","animalClass${pets[i]._id}","animalType${pets[i]._id}","description${pets[i]._id}" )'>
        Edit</buttom></p></td>`; //pet edit buttom
        table += `<td><p><buttom id="myBtn" id="myBtn" onclick='openModalfunction("${pets[i]._id}")' class="btn btn-success">Adopt</buttom></p></td>`;//pet adopt buttom
        table += `<td><p><buttom value="Submit" id="deletePetButton" class="btn btn-danger" onclick='deletepet("${pets[i]._id}")'>Delete</buttom></p></td>`;//pet delete buttom
        table += "</tr>";
    }
    table += '</tbody>';
    table += '</table>';
    document.getElementById("allpets").innerHTML = table;
}

// adopted Function
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
        onclick='adoptedUpdatepet("${pets[i]._id}","petname${pets[i]._id}","age${pets[i]._id}","animalClass${pets[i]._id}","animalType${pets[i]._id}","description${pets[i]._id}", "ownerName${pets[i]._id}", "ownerAddress${pets[i]._id}" )'>
        Edit</buttom></p></td>`; //edit buttom
        table += `<td><p><buttom value="Submit" id="deletePetButton" class="btn btn-danger" onclick='deletepet("${pets[i]._id}")'>Delete</buttom></p></td>`;//delete buttom
        table += "</tr>";
    }
    table += '</tbody>';
    table += '</table>';
    document.getElementById("allpets").innerHTML = table;
}