
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Route, Routes, Navigate, Link, NavLink } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './CreateTask.css'

export function UpdateTask() {

    const navigate = useNavigate();

    const [task, setTask] = useState(null);
    const [completed, setCompleted] = useState(false);
    const { id } = useParams();
    const taskId = id;

    const handleSubmit = () => {
        console.log(task);
        let update = { 'comments': task.comments, 'completed': task.completed };
        let id = task._id;
        let postObj = { 'id': id, 'update': update };
        console.log(postObj);

        fetch('http://localhost:3500/api/tasks', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postObj)
        })
            .then(response => {
                if (response.ok) {
                    navigate('/'); // Navigate to the root URL on successful response
                } else {
                    // Handle bad response here, e.g., show error message
                    console.error('Failed to update task:', response.statusText);
                }
            })
            .catch(error => {
                // Handle fetch error here, e.g., show error message
                console.error('Error updating task:', error);
            });
    }

    const handleCompletedChange = (value) => {
        setCompleted(value);
        setTask(prevTask => ({ ...prevTask, completed: value }));
    };

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch(`http://localhost:3500/api/tasks/${taskId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch task');
                }
                const taskData = await response.json();
                setTask(taskData);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, []);

    return (
        <div className="task-details card">
            {task ? (
                <div className="task-card">
                    <h2>{task.title}</h2>
                    <p><strong>Assigned to:</strong> {task.personAssigned}</p>
                    <p><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
                    <p><strong>Size:</strong> {task.size}</p>
                    <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Incomplete'}</p>
                    <label>
                        <input
                            type="radio"
                            value={true}
                            checked={task.completed}
                            onChange={() => handleCompletedChange(true)}
                        />
                        Completed
                    </label>
                    <label>
                        <input
                            type="radio"
                            value={false}
                            checked={!task.completed}
                            onChange={() => handleCompletedChange(false)}
                        />
                        In-Progress
                    </label>
                    <p><strong>Comments:</strong></p>
                    <textarea
                    style={{'marginBottom': '20px'}}
                        value={task.comments}
                        onChange={(e) => setTask({ ...task, comments: e.target.value })}
                        rows={4}
                        cols={50}
                        placeholder="Enter comments..."
                    />
                    <Stack spacing={2} direction="row">
                        <Button onClick={handleSubmit} type='submit' variant="contained">Submit</Button>
                        <NavLink to="/">
                            <Button variant="outlined">Cancel</Button>
                        </NavLink>
                    </Stack>
                </div>
            ) : (
                <p>Loading task details...</p>
            )}
        </div>
    );
}