import React from 'react';
import './App.css';
import PlayerForm from './components/PlayerForm';
import Hands from './components/Hands';

function App(props) {
  return (
    <div className="App">
      <PlayerForm />
      <Hands/>

    </div>
  );
}

export default App;
