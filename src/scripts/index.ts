import './css/styles.css'

const start = document.querySelector('.start_game')

const levelID = document.getElementById('levels')
const startblock = document.querySelector('.app')
const gameBlock = document.querySelector('.game')
const cardBlock = document.querySelector('.card_block')
const restart = document.querySelector('.button_restart')
const cardsAll = document.querySelectorAll('.card')
const boxLevel = document.querySelector('.box_level')
const finishBlock = document.querySelector('.finish_block')
let firstCard: Element | null = null
let secondCard: Element | null = null
let clicked = false
let levelCheck = 0
let win = false

levelID!.addEventListener('click', function (event) {
 let pick = event.target as HTMLElement
 let lvlIDpick = [...document.querySelectorAll('.level')].indexOf(pick) + 1
 levelCheck = lvlIDpick
})

finishBlock!.classList.add('finish_block_hidden')
gameBlock!.classList.add('game_hidden')
cardBlock!.classList.add('card_block_hidden')

const cards = [
 'card_a1',
 'card_a2',
 'card_a3',
 'card_a4',
 'card_k1',
 'card_k2',
 'card_k3',
 'card_k4',
 'card_q1',
 'card_q2',
 'card_q3',
 'card_q4',
 'card_j1',
 'card_j2',
 'card_j3',
 'card_j4',
 'card10_1',
 'card10_2',
 'card10_3',
 'card10_4',
 'card9_1',
 'card9_2',
 'card9_3',
 'card9_4',
 'card8_1',
 'card8_2',
 'card8_3',
 'card8_4',
 'card7_1',
 'card7_2',
 'card7_3',
 'card7_4',
 'card6_1',
 'card6_2',
 'card6_3',
 'card6_4',
]

start!.addEventListener('click', () => {
 if (levelCheck === 0) {
  console.log('уровень не выбран')
 }
 if (levelCheck === 1) {
  hiddenBlocks()
  let randomCardArr = generateCard(3)
  createdCards(randomCardArr)
  cardCheck()
  timer()
 }
 if (levelCheck === 2) {
  hiddenBlocks()
  let randomCardArr = generateCard(6)
  createdCards(randomCardArr)
  cardCheck()
  timer()
 }
 if (levelCheck === 3) {
  hiddenBlocks()
  let randomCardArr = generateCard(9)
  createdCards(randomCardArr)
  cardCheck()
  timer()
 }
})

const timeBlock = document.querySelector('.timer_block')
let sec = 0
let min = 0
let t: ReturnType<typeof setTimeout>

function tick() {
 sec++
 if (sec >= 60) {
  sec = 0
  min++
  if (min >= 60) {
   min = 0
  }
 }
}
function add() {
 tick()
 timeBlock!.textContent =
  (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec)
 timer()
}
function timer() {
 t = setTimeout(add, 1000)
}

function res() {
 clearInterval(t)
 cardBlock!.textContent = ''
 timeBlock!.textContent = '00:00'
 sec = 0
 min = 0
 firstCard = null
 secondCard = null
 clicked = false
 cardsAll.forEach((card) => {
  card.classList.remove('back')
 })
 startblock!.classList.remove('app_hidden')
 gameBlock!.classList.add('game_hidden')
 cardBlock!.classList.add('card_block_hidden')
 gameBlock!.classList.remove('opacity_finish')
 cardBlock!.classList.remove('opacity_finish')
 finishBlock!.classList.add('finish_block_hidden')
 boxLevel!.classList.remove('box_level_hidden')
}

restart!.addEventListener('click', () => {
 res()
})

function generateCard(cardI: number) {
 let cardNewArr: string[] = []
 for (let i = 0; i < cardI; i++) {
  let randI = Math.floor(Math.random() * cards.length)
  let pickCard = cards[randI]
  cards.slice(randI, 1)
  cardNewArr.push(pickCard)
  cardNewArr.push(pickCard)
 }
 return cardNewArr
}

function createdCards(randomCardArr: string[]) {
  randomCardArr.sort(() => Math.random() - 0.5)
 console.log(randomCardArr)
 for (let randomCard of randomCardArr) {
  let cardII = document.createElement('div')
  cardII.classList.add('card')
  cardII.classList.add(randomCard)
  cardII.id = randomCard
  cardBlock!.appendChild(cardII)
  setTimeout(() => {
   cardII.classList.add('back')
   clicked = true
  }, 5000)
 }
}

function cardCheck() {
 let complireCardArr: Element[] = []
 const cards2 = document.querySelectorAll('.card')
 cards2.forEach((card) =>
  card.addEventListener('click', () => {
   if (clicked === true && !card.classList.contains('sucsess')) {
    card.classList.remove('back')

    if (firstCard === null) {
     firstCard = card
    } else if (card !== firstCard) {
     secondCard = card
    }
    if (firstCard && secondCard && firstCard !== secondCard) {
     if (firstCard.id === secondCard.id) {
      console.log('true')
      firstCard.classList.add('sucsess')
      secondCard.classList.add('sucsess')
      complireCardArr.push(firstCard)
      complireCardArr.push(secondCard)
      if (cards2.length !== complireCardArr.length) {
       firstCard = null
       secondCard = null
      }
     } else {
      alert('Вы проиграли')
      console.log('lose')
      clicked = false
      win = false
      finish()
     }
    }
   }
   if (cards2.length === complireCardArr.length) {
    alert('Вы выиграли')
    console.log('win')
    clicked = false
    win = true
    finish()
   }
   console.log(firstCard, secondCard)
  })
 )
}

function finish() {
 clearInterval(t)
 startblock!.classList.remove('app_hidden')
 finishBlock!.classList.remove('finish_block_hidden')
 gameBlock!.classList.add('opacity_finish')
 cardBlock!.classList.add('opacity_finish')
 const title = document.querySelector('.title_finish')
 const titleIcon = document.querySelector('.title_icon')
 const fTime = document.querySelector('.total_time')
 fTime!.textContent = `${timeBlock!.textContent}`
 const restart2 = document.querySelector('.button_restart2')
 if (win) {
  title!.textContent = 'Вы выиграли!'
  titleIcon!.classList.remove('title_icon_lose')
  titleIcon!.classList.add('title_icon_win')
 } else {
  title!.textContent = 'Вы проиграли!'
  titleIcon!.classList.remove('title_icon_win')
  titleIcon!.classList.add('title_icon_lose')
 }
 restart2!.addEventListener('click', () => {
  res()
 })
}

function hiddenBlocks() {
 cardBlock!.textContent = ''
 startblock!.classList.add('app_hidden')
 boxLevel!.classList.add('box_level_hidden')
 gameBlock!.classList.remove('game_hidden')
 cardBlock!.classList.remove('card_block_hidden')
}
