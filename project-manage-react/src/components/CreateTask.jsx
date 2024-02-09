import React, { useState } from 'react';
import { Route, Routes, Navigate, Link, NavLink, useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';


import './CreateTask.css'

export function CreateTask() {
    // State to store the form inputs
    const [formData, setFormData] = useState({
        title: '',
        personAssigned: '',
        dueDate: '',
        size: 0
    });

    const navigate = useNavigate();

    const { project } = useParams();
    const projectId = project;

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
        //console.log('Form data:', formData);
        // Reset the form after submission
        setFormData({
            title: '',
            personAssigned: '',
            dueDate: '',
            size: 0
        });
        formData.project = projectId;
        formData.comments = "";
        formData.completed = false;

        function convertDateIso(date) {
            const dateString = "2/28/2024";
            const [month, day, year] = dateString.split('/');
            const isoDate = new Date(year, month - 1, day);
            return isoDate.toISOString();
        }
        formData.dueDate = convertDateIso(formData.dueDate);
        console.log(formData);

        fetch('http://localhost:3500/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    navigate('/'); // Navigate to the root URL
                } else {
                    // Handle bad response here, e.g., show error message
                    console.error('Failed to create task:', response.statusText);
                }
            })
            .catch(error => {
                // Handle fetch error here, e.g., show error message
                console.error('Error creating task:', error);
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
                    <NavLink to="/">
                        <Button variant="outlined">Cancel</Button>
                    </NavLink>
                </Stack>
            </form>
        </div>
    );
}