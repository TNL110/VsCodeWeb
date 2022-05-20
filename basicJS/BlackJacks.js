
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")

let player = {
    name: "per",
    chips: 145,
    sayHello: function(){
        console.log("Hello")
    }
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+player.chips

function startGame(){
    let firstCard = Math.floor(Math.random() * 12) + 1
    // Math.random() it generates a random number between 0  and 1
    cards.push(firstCard)
    sum+=firstCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
        cardsEl.textContent += cards[i] + " "
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20)
        message = "Do you want to draw a new card?"
    else if (sum === 21) {
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCards() {
    let card = Math.floor(Math.random() * 12) + 1
    sum += card
    cards.push(card)
    startGame()
}