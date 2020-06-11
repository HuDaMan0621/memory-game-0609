import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MemoryCard from './components/MemoryCard';

function generateDeck() {
  const symbol = ['∆', 'µ', 'å', '∫', 'ç', '∂', 'œ', '∑']; //1.2.a Set symbols equal to an array containing these characters: ∆, ß, £, §, •, $, +, ø
  const deck = [];
  for (let index = 0; index < 16; index++) {
    let card = {
      isFlipped: false,
      symbol: symbol[index % 8]
    }
    deck.push(card);
  }
  return shuffle(deck);
};

//1.8 copy and paste the shuffle method from stackover flow
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}


// import styles from './App.modules.css';
// import styled from 'styled-components';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

// const Div = styled.div`
//   color: red;
//   backgoround-color: purple;
// `
// const H1 = styled.h1`
//   font-size:100px;
//   font-style: bold;
// `


//step 1.1.a.i
class App extends Component {
  constructor(props) {
    super(props); //step 1.1.c
    this.state = {
      //step 1.2 Initialize the app state with 2 properties: deck and pickedCards
      //and set them as empty array
      deck: generateDeck(), //step 1.10 make the deck property point to a call to generateDeck()
      pickedCards: []
    }
  }

  pickCard = (cardIndex) => {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    const cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    const newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip
      };
      return card
    });

    //newPickedCards is a COPY of the card, it does not have a "state" yet -- line 84
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0]; 
      const card2Index = newPickedCards[1];
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => {this.unflipCards(card1Index, card2Index)}, 1)
        // this.unflipCards(card1Index, card2Index); //step 7.14
      }
      newPickedCards = [];
    }

    this.setState({ //we set the state of pickedCards here
      deck: newDeck,
      pickedCards: newPickedCards
    });
  }

  //7.7 member function called unflipcards
  unflipCards = (card1Index, card2Index) => {
    const card1 = { ...this.state.deck[card1Index] } //this weird syntax is used to clone objects. 
    const card2 = { ...this.state.deck[card2Index] }  //clone 2x
    card1.isFlipped = false;
    card2.isFlipped = false;

    //incoming!!!! 
    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      };
      if (card2Index === index) {
        return card2;
      };
      return card;
    });

    this.setState({
      deck: newDeck
    });
  }

  // gameOver = () => {
  //   if (this.state.deck.map((card) => card.isFlipped )) {
  //     return alert('you win');
  //   }
  // }

  //step 1.1.a.ii
  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        pickCard={this.pickCard.bind(this, index)}
      />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory game</h1>
          <h4 className="app-subtitle">Match Cards to win!</h4>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );
  }
}

export default App;
