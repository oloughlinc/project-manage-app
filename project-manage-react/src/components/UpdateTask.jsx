
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Route, Routes, Navigate, Link, NavLink } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './CreateTask.css'

export function UpdateTask() {

    const [task, setTask] = useState(null);
    const [completed, setCompleted] = useState(false);
    const { id } = useParams();
    const taskId = id;

    const handleSubmit = () => {
        console.log(task);
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