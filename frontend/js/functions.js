
const adopt = (id, isAdopted) => {
    let body = {
        adopted: isAdopted
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:3000/pet/' + id, options)
        .then(res => {
            res.json();
            getAll("true");
        }).catch((err) => {
            console.log(err);
        });
}