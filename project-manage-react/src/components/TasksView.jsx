import React from "react"
import { TasksGrid } from "./TasksGrid"

import './TasksView.css'

export function TasksView() {
    return (
        <>
            <h1>Projects and Tasks</h1>
            <div className='projectContainer'>
                <TasksGrid />
            </div>
            <div className='projectContainer'>
                <TasksGrid />
            </div>
            
            <TasksGrid />
        </>
    )
}