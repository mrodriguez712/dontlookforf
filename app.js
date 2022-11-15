import { cards } from './data.js'

const root = document.getElementById('root')
const modal = document.querySelector('.modal')
const modalFooter = document.querySelector('.modal-footer')
const fail = document.querySelector('.fail-modal')
const dice = document.getElementById('roll-dice')
const playerOne = document.querySelector('.player-one')
const playerTwo = document.querySelector('.player-two')
const audio = document.querySelector('#audio-open')
let clicks = 0;
const cardChosen = []

// window.onload = function() {
//     audio.muted = true
//     audio.play()
// }
modal.addEventListener('mousemove', function() {
    audio.play()
})

// buttons
document.getElementById('start-btn').addEventListener('click', () => {
    modal.style.display = 'none'
    for(let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp
    }
    createBoard()

    audio.pause()
})

// createBoard()

document.getElementById('reset-btn').addEventListener('click', () => {
    modal.style.display = "block"
    modalFooter.style.display = "none"
    window.location.reload()
})

// dice roll
dice.addEventListener('click', () => {
    dice.textContent = Math.floor(Math.random() * 3 + 1)
    dice.disabled = true
    dice.style.backgroundColor = '#282828'
})

// the game
root.addEventListener('click', () => {
    clicks += 1
    const diceContent = dice.textContent
    const number = Number(diceContent)

    if(playerOne.classList.contains('active')) {
        if(clicks === number) {
            console.log('they match')
            clicks = 0
            playerOne.classList.remove('active')
            playerTwo.classList.add('active')
            dice.textContent = `Player 2 turn`
            dice.disabled = false
        } 
    } 
    
    if(playerTwo.classList.contains('active')) {
        if(clicks === number) {
            console.log('they match')
            clicks = 0
            playerTwo.classList.remove('active')
            playerOne.classList.add('active')
            dice.textContent = `Player 1 turn`
            dice.disabled = false
        }
    }
})

// board creation with flipping cards
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

    if(cards[cardId].name === 'f') {
        fail.style.display = 'block'
        audio.play()
        setTimeout(() => {
            fail.style.display = 'none'
        }, 5000)
        setInterval(() => {
            modalFooter.style.display = "block"
        }, 5000)   
    }
}
