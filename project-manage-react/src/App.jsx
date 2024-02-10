import { useState } from 'react';
import { Route, Routes, Navigate, Link, NavLink, useNavigate } from 'react-router-dom'
import './App.css';
import {Main} from './components/Main';
import {Login} from "/src/components/Login.jsx";
import {Analytics} from "/src/components/Analytics.jsx"


//if logged in show main else show login

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const navigate = useNavigate();
  
  return (
    <>
    {currentUser ? 
    <Routes>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/*" element={<Main currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
    </Routes> :
    <Login setCurrentUser={setCurrentUser} />
  }
    

    </>
  )
}

export default App
