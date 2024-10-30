const cards = document.querySelectorAll('.memory-card');
const youWinMessage = document.querySelector('.output');
const moveCounter = document.querySelector('.move-counter');

  let isCardFlipped = false;
  let lockBoard = false;
  let card1, card2;
  let moves = 0;


function flipCard(){
  
  if(lockBoard) return;
  
  if(this === card1) return;
  
  this.classList.add('flip');
  
  if (!isCardFlipped){
    isCardFlipped = true;
    card1 = this;
    return;
  }
  
  card2 = this;


  checkForMatch();
  
  moves++;
  moveCounter.textContent = "Moves: " + moves;
  
  if(allCardsFlipped()){
    youWinMessage.textContent = "You Win in " + moves + " Moves!";
  }
}

function checkForMatch(){
  
  let isAMatch = card1.dataset.framework === card2.dataset.framework;
  
  isAMatch? disableCards() : unflipCards();
  
};

function disableCards(){
  card1.removeEventListener('click', flipCard);
   card2.removeEventListener('click', flipCard);
  
  resetBoard();
}

function unflipCards(){
  lockBoard = true;
  
 setTimeout(()=> {
   card1.classList.remove('flip');
   card2.classList.remove('flip');
  resetBoard();
 }, 1000)
}

function resetBoard(){
  [isCardFlipped, lockBoard] = [false, false];
  [card1, card2] = [null, null]
  
}

 function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 }
shuffle();

cards.forEach(card=>{
  card.addEventListener('click', flipCard)
})


function restartGame(){
    resetBoard();
  
  cards.forEach(card=>{
    
    
    card.classList.remove('flip');
     card.addEventListener('click', flipCard)
     
    shuffle();
    moves = 0;
    moveCounter.textContent = "Moves: 0";
  })
}

//check if all cards have class 'flip'
function allCardsFlipped(){
 return Array.from(cards).every(card=> card.classList.contains('flip'));
}