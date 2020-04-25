
//update To adopt table 
const toAdoptUpdate = (id, petname, age, animalClass, animalType, description) => {
    console.log("toAdoptUpdate")
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

    fetch('/pet/' + id, options)
        .then(res => res.json())
        .catch((err) => {
            console.log(err);
        })
};


//update adopted table 
const adoptedUpdatepet = (id, petname, age, animalClass, animalType, description, ownerName, ownerAddress) => {
    console.log("adoptedUpdatepet")
    let body = {
        name: document.getElementById(petname).innerText,
        age: document.getElementById(age).innerText,
        description: document.getElementById(description).innerText,
        group: document.getElementById(animalClass).innerText,
        type: document.getElementById(animalType).innerText,
        owner:
        {
            name: document.getElementById(ownerName).innerText,
            address: document.getElementById(ownerAddress).innerText,
        }
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('/pet/' + id, options)
        .then(res => res.json())
        .then(res => {
           console.log(res);
        }).catch((err) => {
            console.log(err);
        })
};


//owner update
const ownerUpdate = (id) => {
    //console.log("ownerUpdate")
    const name = document.querySelector('#ownerName'+id).value
    //validation if name is empty and if its a string
    if(name == "" || !/^[a-zA-Z]+$/.test(name) ){
        alert("Enter the pet owner's name")
      }
    else {
        //create owner's request body and set adopted to true
        let body = {
            adopted : true,
            owner:
            {
                name: name,
                address: document.querySelector('#ownerAddress'+id).value,
            }
        }
        //request options
        const options = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //update request
        fetch('/pet/' + id, options)
            .then(res => res.json())
            .then(res => {
                //close modal 
                //click adopted radio button
                span.click();
                document.getElementById("adopted").click();
            }).catch((err) => {
                console.log(err);
            })
      }

}