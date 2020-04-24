
//create function
let createButton = document.getElementById('createPetButton');
createButton.addEventListener("click", evt => {
    let age = document.querySelector('#age').value;
    let name = document.querySelector('#petname').value;
    //|| !/^[0-9]+$/.test(age)
    if(name == "" || !/^[a-zA-Z]+$/.test(name) || age == "" || !/^[0-9]+$/.test(age)){
        alert("Enter a valid name and age")
      }

else{
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
            document.getElementById("notAdopted").click();
            document.getElementById("createPetForm").reset();
            //getAll("false");
            console.log(res)
        });
}
    
});