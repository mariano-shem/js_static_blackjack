let player = {
  name: "Shem",
  chips: 1000
}
let messageElement = document.querySelector(".msg")
let sumElement = document.querySelector(".sum")
let cardElement = document.querySelector(".cards")
let startBtnElement = document.querySelector(".start-btn")
let playerElement = document.querySelector("#player")

let cardArr = []
let sum = 0

let isAlive //flag
let hasBlackJack = false //flag
let message = ""

playerElement.textContent = player.name + ": PHP" + player.chips 

function getRandomCard() { 
  return Math.floor(Math.random() * 10) + 2
 }

const startGame = () => { 
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cardArr = [firstCard, secondCard]
  sum = firstCard + secondCard

  rollGame() 
}

const rollGame = () => {
  cardElement.textContent = "Cards: "
  sumElement.textContent = "Sum: " + sum

  for (let c = 0; c < cardArr.length; c++) {
    cardElement.textContent += cardArr[c] + " "
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    hasBlackJack = true
    message = "Wohoo! You have been Blackjacked!"
  } else {
    isAlive = false
    message = "You are out of the game."
  }

  messageElement.textContent = message
}

const newCard = () => {
  if (isAlive && hasBlackJack === false) {
    startBtnElement.textContent = "REROLL"
    let otherCard = getRandomCard()
    cardArr.push(otherCard) //add new number to array
    sum += otherCard
    rollGame() //update displayed cards
  }
}
