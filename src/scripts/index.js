const start = document.querySelector('.start_game')
const cardsAll = document.querySelectorAll('.card')
const levelID = document.getElementById('levels')
const startblock = document.querySelector('.app')
const gameBlock = document.querySelector('.game')
const cardBlock = document.querySelector('.card_block')
const restart = document.querySelector('.button_restart')

// eslint-disable-next-line no-octal
let minute = 00
// eslint-disable-next-line no-octal
let second = 00
let interval

let levelCheck = 0
levelID.addEventListener('click', function (event) {
 let lvlIDpick =
  [...document.querySelectorAll('.level')].indexOf(event.target) + 1
 levelCheck = lvlIDpick
})

gameBlock.classList.add('game_hidden')
cardBlock.classList.add('card_block_hidden')

start.addEventListener('click', () => {
 if (levelCheck !== 0) {
  startblock.classList.add('app_hidden')
  gameBlock.classList.remove('game_hidden')
  cardBlock.classList.remove('card_block_hidden')

  setTimeout(() => {
   cardsAll.forEach((card) => {
    card.classList.add('back')
   })
  }, 5000)
 }

 interval = setInterval(startTimer, 1000)
})

const minuteBlock = document.querySelector('.minute')
const secondBlock = document.querySelector('.second')

function startTimer() {
 second++
 if (second < 9) {
  secondBlock.innerHTML = '0' + second
 }
 if (second > 9) {
  secondBlock.innerHTML = second
 }
 if (second > 59) {
  minute++
  minuteBlock.innerHTML = '0' + minute
  second = 0
  secondBlock.innerHTML = '0' + second
 }
}

restart.addEventListener('click', () => {
 clearInterval(interval)

 // eslint-disable-next-line no-octal
 minuteBlock.textContent = '00'
 // eslint-disable-next-line no-octal
 secondBlock.textContent = '00'
 // eslint-disable-next-line no-octal
 minute = 00
 // eslint-disable-next-line no-octal
 second = 00

 cardsAll.forEach((card) => {
  card.classList.remove('back')
 })

 startblock.classList.remove('app_hidden')
 gameBlock.classList.add('game_hidden')
 cardBlock.classList.add('card_block_hidden')
})
