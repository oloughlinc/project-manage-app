import React from 'react'

import { SideBar } from "./SideBar"
import { TopBar } from "./TopBar"
import { TasksView } from "./TasksView"
import { CreateTask } from './CreateTask'
import { UpdateTask } from './UpdateTask'

import { Route, Routes, Navigate, Link, NavLink } from 'react-router-dom'

import './Main.css'

export function Main({currentUser, setCurrentUser}) {
    return (
        <>
            <TopBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <div className="app">
                <div className="sidebar-outer">
                    {/* Sidebar content */}
                    <SideBar />
                </div>
                <div className="content">
                    {/* Main content area */}
                    <Routes>
                        <Route path="/" element={<TasksView currentUser={currentUser}/>} />
                        <Route path="/create/:project" element={<CreateTask />} /> 
                        <Route path="/update/:id" element={<UpdateTask />} />  
                    </Routes>
                </div>
            </div>      
        </>
    )
}

