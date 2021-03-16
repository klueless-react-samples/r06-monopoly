import React from 'react'
import { setSessionItem } from '../service/storage'

import { Link } from 'react-router-dom';
import logo from '../logo.svg';

import './Header.css';

export function Header() {

  function onButtonClick(value) {
    saveLabel(value);
  }
  
  function saveLabel(value) {
    console.log('value', value);
    setSessionItem("perspective", value);
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
