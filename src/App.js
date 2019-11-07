import React from 'react';
import './App.css';
import PlayerForm from './components/PlayerForm';
import Hands from './components/Hands';

function App(props) {
  return (
    <div className="App">
      <img src="https://i.ibb.co/ZxLg9PY/Copy-of-Untitled.png" className="logo" />
      <PlayerForm />
      <Hands/>

    </div>
  );
}

export default App;
