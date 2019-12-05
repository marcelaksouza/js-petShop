
 const getAll = () => {
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(res => {
    state.pets = res;
    callbackData();
    console.log(state.pets)
    });
 }

 const callbackData = () => {

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


for (var i = 0; i < pets.length; i++) {
table+="<tr>";
    table+='<td scope="row">'+pets[i].id+'</td>';
    table+="<td>"+pets[i].name+"</td>";
    table+="<td>"+pets[i].age+"</td>";
    table+="<td>"+pets[i].group+"</td>";
    table+="<td>"+pets[i].type+"</td>";
    table+="<td>"+pets[i].description+"</td>";
    table+='<td><buttom value="Submit" class="btn btn-warning">Edit</buttom></td>';
    table+='<td><buttom value="Submit" class="btn btn-success">Adopt</buttom></td>';
    table+='<td><buttom value="Submit" class="btn btn-danger">Delete</buttom></td>';
table+="</tr>";
}
table+="</table>";
document.getElementById("allpets").innerHTML = table;
  }

const alert = () => {
    alert("working");
}
 getAll();

