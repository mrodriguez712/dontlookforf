import { cards } from './data.js'

const root = document.getElementById('root')
const modal = document.querySelector('.modal')
const modalTwo = document.querySelector('.modal-two')
const fail = document.querySelector('.fail-modal')
const dice = document.getElementById('roll-dice')
const cardChosen = []

document.getElementById('start-btn').addEventListener('click', () => {
    modal.style.display = 'none'
    for(let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp
    }
    createBoard()
})

document.getElementById('reset-btn').addEventListener('click', () => {
    modal.style.display = "block"
    modalTwo.style.display = "none"
    window.location.reload()
})

dice.addEventListener('click', () => {
    const diceRoll = Math.floor(Math.random() * 3 + 1)
    dice.textContent = diceRoll
})

function createBoard() {
    for(let i = 0; i < cards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './images/cover.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        root.appendChild(card)
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    let audio = new Audio('./audio/fail.m4a')
    cardChosen.push(cards[cardId].name)
    this.setAttribute('src', cards[cardId].image)
    console.log(cardChosen)
    if(cards[cardId].name === 'f') {
        fail.style.display = 'block'
        audio.play()
        setTimeout(() => {
            fail.style.display = 'none'
        }, 5000)
        setInterval(() => {
            modalTwo.style.display = "block"
        }, 5000)   
    }
}
