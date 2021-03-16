import logo from '../logo.svg';

import React from 'react'
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/" className='App-link'>Home</Link>
      <Link to="/monopoly" className='App-link'>Play</Link>
      <Link to="/configure" className='App-link'>Configure</Link>
    </header>
  )
}
