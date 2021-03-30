import React, { useState, useEffect, useContext } from 'react'

import { getSessionItem } from '../service/storage'

import { Content } from '../components';

import { MonopolyContext } from '../context/MonopolyContext';

export function Home() {

  const monopoly = useContext(MonopolyContext);

  // const [perspective, setPerspective] = useState('2d');

  useEffect(() => {
    let value = getSessionItem('perspective');
    console.log(value);

    // setPerspective(value);
  }, []);

  return (
    <div className='container'>
      <Content title='Home' description='Welcome to Monopoly, click on the Monopoly link to play'></Content>

      {/* <h2>Perspective: {perspective}</h2> */}
      <h2>Perspective: {monopoly.format}</h2>
      
      <h3>Features</h3>
      <ul>
      <li>Click on 2D and the monopoly board will be in two dimensions</li>
      <li>Click on 3D and the monopoly board will be in three dimensions</li>
      <li>Click on 4D and the monopoly board will be in first person perspective</li>
      <li>Use SASS</li>
      <li>Use 3D Camera</li>
      </ul>

      <h3>ToDo: Fix</h3>
      <ul>
      <li>Why doesn't the read-only perspective update on screen when I click the perspective button</li>
      </ul>
    </div>
  )
}
