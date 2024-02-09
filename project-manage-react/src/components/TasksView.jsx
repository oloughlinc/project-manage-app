import React from "react"
import { TasksGrid } from "./TasksGrid"
import { useState, useEffect } from "react"

import './TasksView.css'

export function TasksView() {

    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tasksResponse = await fetch('http://localhost:3500/api/tasks');
                const projectsResponse = await fetch('http://localhost:3500/api/projects');

                if (!tasksResponse.ok) {
                    throw new Error('Failed to fetch tasks');
                }
                if (!projectsResponse.ok) {
                    throw new Error('Failed to fetch projects');
                }

                const tasksData = await tasksResponse.json();
                const projectsData = await projectsResponse.json();
                setTasks(tasksData);
                setProjects(projectsData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>Projects and Tasks</h1>
            {projects.map((project) => {
                let subtasks = tasks.filter((task) => task.project == project.id)
                return (
                    <div className='projectContainer'>
                        <TasksGrid tasks={subtasks} project={project}/>
                    </div>
                );
            })}
            {/* <div className='projectContainer'>
                <TasksGrid />
            </div>
            <div className='projectContainer'>
                <TasksGrid />
            </div>
            <div className='projectContainer'>
                <TasksGrid />
            </div> */}
        </>
    )
}