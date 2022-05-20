
// const subjectItems = document.querySelector(".subjectItems")

// generateJoke()

async function generateJoke(){
    const config = {
        headers: {
            accept: 'application/json',
        },
    }

    const res = await fetch('subjects.json', config)
    console.log(res)
    const data = await res.json()
    console.log(data.subjects[0])
    // jokeEl.innerHTML = data.joke
}

const dog = {
    name: 'Manson',
    breed: 'Poodle',
    color: 'black'
}

const fs = require('fs')

const saveData = (dog) => {
    const finished = (error)=> {
        if(error){
            console.log(error)
            return;
        }
    }

    const jsonData = JSON.stringify(dog,null, 2)
    fs.writeFile('dog.json',jsonData,finished);
}

saveData(dog)

// subjectItems.innerHTML = subject