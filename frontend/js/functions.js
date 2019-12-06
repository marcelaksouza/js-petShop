
 const getAll = () => {
    console.log("caling get all")
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(res => {
    state.pets = res;
    callbackData();
    });
 }

 const callbackData = () => {
    if (state.pets.lenght >= 1){
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
        table+="<td>"+pets[i].name+"</td>";
        table+="<td>"+pets[i].age+"</td>";
        table+="<td>"+pets[i].group+"</td>";
        table+="<td>"+pets[i].type+"</td>";
        table+="<td>"+pets[i].description+"</td>";
        table+='<td><buttom value="Submit" class="btn btn-warning">Edit</buttom></td>';
        table+='<td><buttom value="Submit" class="btn btn-success">Adopt</buttom></td>';
        table+=`<td><buttom value="Submit" class="btn btn-danger" onclick='deletespet("${pets[i].id}")'>Delete</buttom></td>`;
        table+="</tr>";
        }
    
        table+="</table>";
        document.getElementById("allpets").innerHTML = table;
    }else{

        document.getElementById("allpets").innerHTML = "<p>Pets file is empety, please enter a new pet in the form</p>";

        console.log("Pets file is empety")
    }
}

 

 //delete a pet
const deletespet = (id) =>{
    
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    fetch('http://localhost:3000/api/'+id, options)
        .then(res => {
            if (res.ok) {
                console.log(res)
                console.log(state.pets)
                alert('pet deleted.');
                return Promise.resolve('pet deleted.');
            } else {
                return Promise.reject('An error occurred.');
            }
        })
        .then(res =>{ 
            getAll();
            
            //location.reload();
            
        });
 }
 

 getAll();
 