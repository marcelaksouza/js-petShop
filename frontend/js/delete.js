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