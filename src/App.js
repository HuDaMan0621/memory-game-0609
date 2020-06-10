import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MemoryCard from './components/MemoryCard';
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

function App() {
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

export default App;
