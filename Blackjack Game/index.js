// let firstCard =  getRandomcard()
// let secondCard =  getRandomcard()
let player = {
  Name: "Kritika",
  Chips: 200,
}

let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
console.log(playerEl)

playerEl.textContent = player.Name + ": ₹" + player.Chips


function getRandomcard() {

  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
 
}

// console.log(cardsEl)

function startGame() {
  isAlive = true
  let firstCard = getRandomcard()
  let secondCard = getRandomcard()
  cards = [firstCard , secondCard]
  sum = firstCard + secondCard
  renderGame()
}


function renderGame(){
  
  cardsEl.textContent = "Cards: " 
  for (let i = 0 ; i < cards.length ; i++ ) {
    cardsEl.textContent += cards[i] + " "

  }


  sumEl.textContent = "Sum: " + sum

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
  // console.log(message)
}

function newCard() {
  console.log("Drawing a new card from the deck!")
  if (isAlive === true && hasBlackJack === false) {
    let card =  getRandomcard()
  sum += card
  cards.push(card)
  // console.log(cards)
  renderGame()
  }
}





//CASH-OUT

// console.log(hasBlackJack)



// console.log(isAlive)


