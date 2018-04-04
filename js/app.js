/*
 * Create a list that holds all of your cards
 */

 let icons = ['bicycle', 'bicycle', 'leaf', 'leaf', 'cube', 'cube', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb', 'diamond', 'diamond'],
let d0 = $('.deck');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 function showIcon(){
   cards = shuffle(icons);
   for(var i = 1 ;i <=cards.lenght;i++){
		d0.append('<li class="card"><i class="fa fa-' + cards[i] + '"></i></li>')
	}
};
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
 }


for (var j = 1 ; j <= icons.legnth ; j++) {
icon = icons[j];
icon.addEventListener("click",display)
}
function display () {
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("lock");

  openedCard(this);
}

function openedCard(){
  opened.push(this);
  var x = opened.lenght ;
if (x === 2 ) {
  if ( opened[0] === opened[1]){
    match();
  } else {
    noMach();
  }
}
}
function match() {
  opened[0].classlist.add("match","lock");
  opened[1].classlist.add("match","lock");
  opened[0].classlist.remove("open","show");
  opened[1].classlist.remove("open","show");

    }
    function noMatch() {
      opened[0].classlist.add("nomatch");
      opened[1].classlist.add("nomatch");
      opened[0].classlist.remove("open","show","nomatch");
      opened[1].classlist.remove("open","show",,"nomatch");

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
