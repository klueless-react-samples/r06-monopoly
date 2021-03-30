import React, { useContext } from 'react'
import { setSessionItem } from '../service/storage'
import { MonopolyContext } from '../context/MonopolyContext';

import { Link } from 'react-router-dom';
import logo from '../logo.svg';

import './Header.css';

export function Header() {

  // const { format, updateFormat } = useContext(MonopolyContext);
  const { format, setFormat } = useContext(MonopolyContext);

  function onButtonClick(value) {
    saveLabel(value);
  }
  
  function saveLabel(value) {
    console.log('value', value);
    setSessionItem("perspective", value);
    setFormat(value);
  }

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/" className='App-link'>Home</Link>
      <Link to="/monopoly" className='App-link'>Monopoly</Link>
      <Link to="/players" className='App-link'>Players</Link>

      <button onClick={ () => onButtonClick('2D') }>
        2D
      </button>
      <button onClick={ () => onButtonClick('3D') }>
        3D
      </button>
      <button onClick={ () => onButtonClick('4D') }>
        4D
      </button>
    </header>
  )
}
