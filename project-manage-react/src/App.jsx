import { useState } from 'react';
import { Route, Routes, Navigate, Link, NavLink } from 'react-router-dom'
import './App.css';
import {Login} from './components/Login'
import {Main} from './components/Main';
import { BrowserRouter } from 'react-router-dom'

//if logged in show main else show login

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Main />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
