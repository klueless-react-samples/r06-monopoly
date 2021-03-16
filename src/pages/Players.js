import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Content, StringList, NameInput } from '../components';

const notify = () => toast("Configuration has been updated!");

export function Players() {
  const [players, setPlayers] = useState(['David', 'Lisa', 'John']);
  const [tokens, setTokens] = useState(['Dog', 'Cat', 'Shark']);
  // car, iron, lantern, thimble, shoe, top hat, rocking horse, battleship and cannon 

  return (
    <div className='container'>
      <Content title='Players' description='On this page you will be able to configure your Monopoly game'></Content>

      <h3>ToDo</h3>
      <ul>
      <li>Save/Load players and tokens into local storage</li>
      </ul>

      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td>
            <NameInput title="Enter persons name" label="First Name: " items={players} addIt={setPlayers} clearMessage="List of players has been cleared" />
            <StringList title="List of Players"  items={players}></StringList>
          </td>
          <td>
            <NameInput title="Enter tokens" label="Token: " items={tokens} addIt={setTokens} clearMessage="List of tokens has been cleared" />
            <StringList title="List of Tokens"  items={tokens}></StringList>
          </td>
        </tr>
        </tbody>
      </table>


      <ToastContainer />
      <button onClick={notify}>Save</button>
    </div>
  )
}
