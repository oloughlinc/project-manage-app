import React from 'react'

import { SideBar } from "./SideBar"
import { TopBar } from "./TopBar"
import { TasksView } from "./TasksView"

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
                    <TasksView />
                </div>
            </div>      
        </>
    )
}