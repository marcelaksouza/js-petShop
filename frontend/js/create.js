
//create function
let createButton = document.getElementById('createPetButton');
createButton.addEventListener("click", evt => {
  let myfile=  document.getElementById("customPic").files[0];
    // let body = {
    //     name: document.querySelector('#petname').value,
    //     age: document.querySelector('#age').value,
    //     description: document.querySelector('#description').value,
    //     group: document.querySelector('#animalclass').value,
    //     type: document.querySelector('#animaltype').value,
    //     image: ""
    // }
    let fd = new FormData()
    fd.append("name", document.querySelector('#petname').value );
    fd.append("image", myfile, myfile.name)

    const options = {
        method: 'POST',
        body: fd,
        headers: {
            'Content-Type': 'false',
            'enctype' : 'multipart/form-data',
            'processData': 'false'
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
});