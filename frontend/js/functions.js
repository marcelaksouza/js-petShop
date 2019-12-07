
 const getAll = () => {
    console.log("caling get all")
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(res => {
    state.pets = res;
    callbackData(state.pets);
    });
 }

 const callbackData = () => {
    if (state.pets.length >= 1){
        const pets = [...state.pets]
        var table = '<table class="table">';
        table+='<thead>';
        table+='<tr>'
        table+='<th>Id</th>';
        table+='<th>Name</th>';
        table+='<th>Age</th>';
        table+='<th>Group</th>';
        table+='<th>Type</th>';
        table+='<th>Description</th>';
        table+='<th>Edit</th>';
        table+='<th>Adopt</th>';
        table+='<th>Delete</th>';
        table+="</tr>"
        table+="</thead>";

        for (var i = 0; i < state.pets.length; i++){
        
        table+="<tr>";
        table+='<td scope="row">'+pets[i].id+'</td>';
        table+=`<td contenteditable="true" id="petname${pets[i].id}">`+pets[i].name+ `</td>`;
        table+=`<td contenteditable="true" id="age${pets[i].id}">`+pets[i].age+`</td>`;
        table+=`<td contenteditable="true" id="animalClass${pets[i].id}">`+pets[i].group+`</td>`;
        table+=`<td contenteditable="true" id="animalType${pets[i].id}">`+pets[i].type+`</td>`;
        table+=`<td contenteditable="true" id="description${pets[i].id}">`+pets[i].description+`</td>`;
        table+=`<td><buttom value="Submit" class="btn btn-warning" 
        onclick='updatepet("${pets[i].id}","petname${pets[i].id}","age${pets[i].id}","animalClass${pets[i].id}","animalType${pets[i].id}","description${pets[i].id}" )'>
        Edit</buttom></td>`;
        table+='<td><buttom value="Submit" class="btn btn-success">Adopt</buttom></td>';
        table+=`<td><buttom value="Submit" class="btn btn-danger" onclick='deletepet("${pets[i].id}")'>Delete</buttom></td>`;
        table+="</tr>";
        }
    
        table+="</table>";
        document.getElementById("allpets").innerHTML = table;
    }
    else{
     document.getElementById("allpets").innerHTML = "<p>Pets file is empety, please enter a new pet in the form</p>";
        console.log("Pets file is empety")
    }
}

 //delete a pet
const deletepet = async (id) =>{
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const data = await fetch('http://localhost:3000/api/'+id, options)
        .then(res =>  {
            if (res.ok) {
                return Promise.resolve('pet deleted.');
            } else {
                return Promise.reject('An error occurred.');
            }
        })
        .catch()
            alert('pet deleted.');
            getAll();    
 }

//update pets info
const updatepet = (id,petname,age,animalClass,animalType,description) => {
   let body ={
    name: document.getElementById(petname).innerText,
    age:  document.getElementById(age).innerText,
    description: document.getElementById(description).innerText,
    group: document.getElementById(animalClass).innerText,
    type: document.getElementById(animalType).innerText,
   }
    
    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:3000/api/'+id, options)
        .then(res => {
            res.json()})
        .then(res => {
            //alert("information was updated sussefully");
            getAll();
            });
};

//add new pet form
const createpet = () => {

    let body = {
    name: document.querySelector('#petname').value,
    age:  document.querySelector('#age').value,
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
    fetch('http://localhost:3000/api', options)
    .then(res => res.json())
    .then(res => {
        getAll();
        console.log(res)});
    };


 getAll();
 