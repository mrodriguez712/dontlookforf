import { cards } from './data.js'

const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')
const root = document.getElementById('root')
const modal = document.querySelector('.modal')
const modalTwo = document.querySelector('.modal-two')
const cardChosen = []

startBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    for(let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp
    }
    createBoard()
})

resetBtn.addEventListener('click', () => {
    modal.style.display = "block"
    modalTwo.style.display = "none"
    window.location.reload()
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
    cardChosen.push(cards[cardId].name)
    this.setAttribute('src', cards[cardId].image)
    console.log(cardChosen)
    if(cards[cardId].name === 'f') {
        alert('try again')
        modalTwo.style.display = "block"
    }
}
