import React from 'react'
import './TopBar.css'

export function TopBar() {
    return (
        <div className="top-bar">
      {/* Logo */}
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
        <span>Dashboard</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* User Profile Section */}
      <div className="user-profile">
        <span>Welcome, John Doe</span>
        <img src="/path/to/profile-pic.png" alt="Profile" />
        {/* You can add a dropdown menu for user actions */}
      </div>
    </div>
    )
}