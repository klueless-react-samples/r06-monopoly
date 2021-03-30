import React, { useState } from 'react'
import { Routes, Header } from './components';

import { getSessionItem } from './service/storage'

import './App.css';
import { MonopolyContext } from './context/MonopolyContext';

function App() {
  const [format, setFormat] = useState(getSessionItem('perspective'));
  let context = { format, setFormat };

  return (
    <div className="App">
      <MonopolyContext.Provider value={context}>
        <Header></Header>
        <Routes />
      </MonopolyContext.Provider>
    </div>
  );
}

export default App;
