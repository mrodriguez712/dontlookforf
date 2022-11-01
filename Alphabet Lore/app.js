import { cards } from './data.js'

const root = document.getElementById('root')
const cardChosen = []

// for(let i = 0; i < cards.length; i--) {
//     const cardShuffle = Math.floor(Math.random() * 1)
//     const shuffle = cards[i]
//     cards[i] = cards[cardShuffle]
//     cards[cardShuffle] = shuffle
// }

function createBoard() {
    for(let i = 0; i < cards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './images/cover.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        root.appendChild(card)
    }
}
createBoard()

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cards[cardId].name)
    this.setAttribute('src', cards[cardId].image)
    console.log(cardChosen)
    if(cards[cardId].name === 'f') {
        alert('try again')
    }
}