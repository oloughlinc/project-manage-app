import React from 'react'

import { SideBar } from "./SideBar"
import { TopBar } from "./TopBar"
import { TasksView } from "./TasksView"
import { CreateTask } from './CreateTask'

import { Route, Routes, Navigate, Link, NavLink } from 'react-router-dom'

import './Main.css'

export function Main() {
    return (
        <>
            <TopBar />
            <div className="app">
                <div className="sidebar">
                    {/* Sidebar content */}
                    <SideBar />
                </div>
                <div className="content">
                    {/* Main content area */}
                    <Routes>
                        <Route path="/tasks" element={<TasksView />} />
                        <Route path="/create" element={<CreateTask />} />  
                    </Routes>
                </div>
            </div>      
        </>
    )
}