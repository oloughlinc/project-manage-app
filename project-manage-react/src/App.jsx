import { useState } from 'react';
import './App.css';
import {Main} from './components/Main';
import { BrowserRouter } from 'react-router-dom'

//if logged in show main else show login

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    </>
  )
}

export default App
