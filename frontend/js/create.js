
//create function
let createButton = document.getElementById('createPetButton');
createButton.addEventListener("click", evt => {
    let age = document.querySelector('#age').value;
    let name = document.querySelector('#petname').value;
    //validation
    if (name == "" || !/^[a-zA-Z]+$/.test(name) || age == "" || !/^[0-9]+$/.test(age)) {
        alert("Enter a valid name and age")
    }

    else {
        //creating the body to send
        let body = {
            name: document.querySelector('#petname').value,
            age: document.querySelector('#age').value,
            description: document.querySelector('#description').value,
            group: document.querySelector('#animalclass').value,
            type: document.querySelector('#animaltype').value,

        }
        //request options
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //request
        fetch('/pet', options)
            .then(res => res.json())
            .then(res => {
                //functions to execute if the fetch request works
                document.getElementById("notAdopted").click();//click on not adopted radio button
                document.getElementById("createPetForm").reset();//clean the form
                console.log(res)
            });
    }
});