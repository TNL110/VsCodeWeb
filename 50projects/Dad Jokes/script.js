const jokeEl = document.querySelector('.joke')
const jokeBtn = document.querySelector('.jokebtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()

async function generateJoke(){
    const config = {
        headers: {
            accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    console.log(res)
    const data = await res.json()
    console.log(data)
    jokeEl.innerHTML = data.joke
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }