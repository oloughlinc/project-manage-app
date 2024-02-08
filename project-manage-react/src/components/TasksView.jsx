import React from "react"
import { TasksGrid } from "./TasksGrid"

import './TasksView.css'

export function TasksView() {
    return (
        <>
            <h1>Projects and Tasks</h1>
            <div id='projectContainer'>
                <TasksGrid />
            </div>
            <div id='projectContainer'>
                <TasksGrid />
            </div>
            
            <TasksGrid />
        </>
    )
}