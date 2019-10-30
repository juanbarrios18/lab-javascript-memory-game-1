//Clicked cards counter
let = counter = 0;

//Array with the details of clicked cards
let clickedCards = [];

const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      console.log('Card clicked: ', card);
      this.classList.add("turned");
      clickedCards.push(card);
      counter++;

      //Check cards every 2 moves, then reset the changes if not guessed
      if(counter == 2){
        card1 = clickedCards[0].dataset.cardName;
        card2 = clickedCards[1].dataset.cardName;


        if(memoryGame.checkIfPair(card1, card2)){
         clickedCards[0].classList.add("guessed");
         clickedCards[1].classList.add("guessed");
                   
        }else{
          setTimeout(clean, 700);
        };
        
        setTimeout(clean, 700);
      };
    };
  });
});


clean = () => {
  clickedCards.forEach( card => {
    let searchg = card.classList.value.search("guessed");
    if(searchg < 0){
      card.classList.remove("turned");
    };
  });
    
  clickedCards = [];
  counter = 0;
};