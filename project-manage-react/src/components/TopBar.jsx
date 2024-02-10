import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './TopBar.css'
import { useNavigate } from "react-router-dom";

export function TopBar({currentUser, setCurrentUser}) {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCurrentUser(null);
    navigate('/login')
  };

  return (
    <div className="top-bar">
      {/* Logo */}
      <div className="logo">
        <div>
          <img src="/logo.png" alt="Logo" />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="http://localhost:3500/api-docs" target="_blank">API</a></li>
        <li><a href="http://localhost:3500/api-docs" target="_blank">Contact</a></li>
      </ul>

      {/* User Profile Section */}
      <div className="user-profile">
        <span><b>Welcome, {currentUser.name}!</b></span>
        <img src="user.png" alt="Profile" />
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Profile
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}