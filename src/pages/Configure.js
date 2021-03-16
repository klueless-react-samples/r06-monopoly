import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Content } from '../components';

const notify = () => toast("Configuration has been updated!");

export function Configure() {
  return (
    <div>
      <Content title='Configure' description='On this page you will be able to configure your Monopoly game'></Content>

      <ToastContainer />
      <button onClick={notify}>Save</button>
    </div>
  )
}
