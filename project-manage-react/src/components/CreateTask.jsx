import React, { useState } from 'react';
import { Route, Routes, Navigate, Link, NavLink } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import './CreateTask.css'

export function CreateTask() {
    // State to store the form inputs
    const [formData, setFormData] = useState({
        title: '',
        personAssigned: '',
        dueDate: '',
        size: 0
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? e.target.checked : value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the formData object via POST request
        console.log('Form data:', formData);
        // Reset the form after submission
        setFormData({
            title: '',
            personAssigned: '',
            dueDate: '',
            size: 0
        });
    };

    return (
        <div className="card">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Person Assigned:</label>
                    <input type="text" name="personAssigned" value={formData.personAssigned} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Due Date:</label>
                    <input type="date" name="dueDate" value={formData.dueDate} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Size:</label>
                    <input type="number" name="size" value={formData.size} onChange={handleInputChange} />
                </div>
                <Stack spacing={2} direction="row">
                    <Button type='submit' variant="contained">Submit</Button>
                    <NavLink to="/tasks">
                        <Button variant="outlined">Cancel</Button>
                    </NavLink>
                </Stack>
            </form>
        </div>
    );
}