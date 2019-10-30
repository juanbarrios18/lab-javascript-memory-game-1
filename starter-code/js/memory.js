class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
    this.pickedCards = [];
    // add the rest of the class properties here
  };

  shuffleCards() {

    let i = this.cards.length, j, temp;
    while(i-- > 0){
      j = Math.floor(Math.random() * (i+1)); //Get random number

      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    };
  };

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }      
    else{
      return false;
    }       
  };

    
  isFinished() {
    return (this.pairsGuessed === this.cards.length/2)
    };  
}