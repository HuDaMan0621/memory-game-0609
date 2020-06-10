import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MemoryCard from './components/MemoryCard';

function generateDeck() {
  var symbol = ['∆', 'µ', 'å', '∫', 'ç', '∂', 'œ', '∑']; //1.2.a Set symbols equal to an array containing these characters: ∆, ß, £, §, •, $, +, ø
  var deck = [];
  for (let index = 0; index < 15; index++) {
    //todo 
    let element = deck[index];
    let card = {
      isFlipped: false,
      symbol: symbol[index%8],
    }
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



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //step 1.2 Initialize the app state with 2 properties: deck and pickedCards
      //and set them as empty array
      deck: {}, //step 1.10 make the deck property point to a call to generateDeck()
      pickedCards: {},
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory game</h1>
          <h4 class="app-subtitle">Match Cards to win!</h4>
        </header>
        <div>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        <div>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        <div>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        <div>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
      </div>
    );
  }
}

export default App;
