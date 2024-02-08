import React from "react"
import { TasksGrid } from "./TasksGrid"

export function TasksView() {
    return (
        <>
            <h1>Projects and Tasks</h1>
            <TasksGrid />
            <TasksGrid />
        </>
    )
}