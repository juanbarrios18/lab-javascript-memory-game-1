class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
    this.pickedCards = [];
    // add the rest of the class properties here
  }

  shuffleCards() {}

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }      
    else{
      return false;
    }       
  }

    
  isFinished() {}
}