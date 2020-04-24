
let span = document.getElementsByClassName("close")[0];

const openModalfunction = (id) => {
    // Get the modal
    let modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    getOnepet(id)
    ownerFormFunction(id);
    
    
};

const ownerFormFunction = (id) => {
    let form = "";
    form +=`<label> Owner' name</label><br>`;//label owner name
    form +=`<input class="form-control" type="text" name="ownerName${id}" id='ownerName${id}' required>`;//imput ownername
    form +=`<label> Owner' address</label><br>`;//label address
    form +=`<input class="form-control" type="text" name="ownerAddress${id}" id='ownerAddress${id}' required><br>`;//imput address
    form +=`<buttom value="Submit" id="ownerForm" class="btn btn-primary" onclick='ownerUpdate("${id}")'>Submit</buttom>`;
    form +=``;

    document.getElementById("modal-form").innerHTML = form;
}
