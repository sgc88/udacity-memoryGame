/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


//
// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i];
//         a[i] = a[j];
//         a[j] = x;
//     }
//     return a;
// }
var cards = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-anchor', 'fa-anchor', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle'];

function generateCard(card){
  return `<li class="card" data-card=${card}><i class="fa ${card}"></i></li>`;
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 function initGame(){
   var deck = document.querySelector('.deck');
   var cardHTML = shuffle(cards).map(function(card){
     return generateCard(card);
   });
   deck.innerHTML = cardHTML.join('');
   moves =0;

 }
 initGame();


 //1- set up event listener for a card
 //2- function that displays a card's symbol
 //3- functions that add the card to a list of "open cards"
 // -if the list already has another card check to see if two cards match
 // - if they dont match remove both cards from array and hide the symbols
var cards = document.querySelectorAll('.card');
var openCards = [];
var movess = 3;
var moveCounter = document.querySelector('.moves');



cards.forEach(function(card){
  card.addEventListener('click', function(e){
    if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')){
      if(openCards.length >= 2){
        if(openCards[0].dataset.card == openCards[1].dataset.card){
          console.log("you found a match");
          openCards[0].classList.add('show');
          openCards[0].classList.add('open');
          openCards[0].classList.add('match');

          openCards[1].classList.add('show');
          openCards[1].classList.add('open');
          openCards[1].classList.add('match');
          openCards.length =[];


        }else{
          //if they dont macth hide
          setTimeout (function(){
            openCards.forEach(function(card){
              card.classList.remove('open', 'show');
            });
            openCards.length = 0;
          }, 100);
        }
          moves += 1;
          moveCounter.innerText = moves;
      }else{
        openCards.push(card);
        card.classList.add('open', 'show');
      }
    }else{

    }


  })
});
