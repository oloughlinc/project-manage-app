import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Login.css'

export const Login = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const navigate = useNavigate();

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("")
    setPasswordError("")

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email")
      return
    }

    if ("" === password) {
      setPasswordError("Please enter a password")
      return
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer")
      return
    }

    let creds = { 'username': email, 'password': password }
    console.log(creds)
    fetch('http://localhost:3500/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          // Handle bad response here, e.g., show error message
          console.error('Login failed:', response.statusText);
          throw new Error('Login failed');
        }
      })
      .then(userData => {
        console.log(userData)
        setCurrentUser(userData);
        navigate('/')
      })
      .catch(error => {
        // Handle fetch error here, e.g., show error message
        console.error('Error during login:', error);
      });
  }

  return <div className={"mainContainer"}>
    <div className={"titleContainer"}>
      <div>Login</div>
    </div>
    <br />
    <div className={"inputContainer"}>
      <input
        value={email}
        placeholder="Enter your email here"
        onChange={ev => setEmail(ev.target.value)}
        className={"inputBox"} />
      <label className="errorLabel">{emailError}</label>
    </div>
    <br />
    <div className={"inputContainer"}>
      <input
        value={password}
        type='password'
        placeholder="Enter your password here"
        onChange={ev => setPassword(ev.target.value)}
        className={"inputBox"} />
      <label className="errorLabel">{passwordError}</label>
    </div>
    <br />
    <div className={"inputContainer"}>
      <input
        className={"inputButton"}
        type="button"
        onClick={onButtonClick}
        value={"Log in"} />
    </div>
  </div>
}
