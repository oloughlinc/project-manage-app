import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button';
import './TasksGrid.css'
import { Navigate } from "react-router-dom";
import { decode } from '../util/codec.js'

// display a single project and a list of tasks assoc. w/ it
export function TasksGrid({tasks, project, currentUser}) {

    const [prediction, setPrediction] = useState('--');

    const navigate = useNavigate();

    useEffect(() => {
        let predObj = {
            'workload': project.workload,
            'budget': project.budget,
            'teamSize': project.teamSize
        }
        console.log(predObj);
        fetch('http://localhost:5000/api/predict', {
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(predObj),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            let pred = res.predicted_values;
            pred = pred < 1 ? Math.floor((pred*-1)/10) : pred;
            setPrediction(pred);
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    const rows = [];
    let id = 0;
    for (let task of tasks) {
        rows.push({
            id: ++id, 
            title: task.title,
            personAssigned: task.personAssigned,
            dueDate: task.dueDate.split('T')[0],
            size: task.size,
            completed: task.completed ? 'Complete' : 'In Progress'
        });
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 50, headerClassName: 'grid-header' },
        { field: 'title', headerName: 'Task Name', width: 450, headerClassName: 'grid-header'},
        { field: 'personAssigned', headerName: 'Assignee', width: 150, headerClassName: 'grid-header' },
        { field: 'dueDate', headerName: 'Due Date', width: 150, headerClassName: 'grid-header' },
        { field: 'size', headerName: 'Size', width: 90, headerClassName: 'grid-header' },
        { field: 'completed', headerName: 'Status', minWidth: 150, flex: 1, headerClassName: 'grid-header' },
    ];
    

    const handleRowClick = (params) => {
        console.log('Row clicked:', params.row); 
        let taskId = tasks.filter((task) => task.title === params.row.title);
        taskId = taskId[0]._id;
        navigate(`/update/${taskId}`)
    };

    return (
        <div className="relative-pos">
            <p id='proj-cookie'>Async Avengers Program Planning / Project {project.id}</p>
            <p id='project-title'><b>{project.title}</b></p>
            <div id='details'>
                <p><b>Team Size:</b> {project.teamSize}</p>
                <p><b>Budget:</b> ${project.budget}</p>
                <p><b>Workload:</b> {project.workload}</p>
                <p id='estimate'><b><u>AI Predict</u> Estimated Completion:</b> {prediction} {prediction == 1 ? 'Day' : 'Days'}</p>
            </div>
            <NavLink id="top-right" to={`/create/${project.id}`}>
            {decode(currentUser.token).role === 'manager' ? <Button  variant="contained">+ Create Task</Button> : ''}
            </NavLink>
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    
                    hideFooter={true}
                    hideFooterPagination={true}
                    pageSizeOptions={[0]}
                    checkboxSelection={false}
                    onRowClick={handleRowClick}
                    sx={{
                        "& .MuiDataGrid-row:hover": {
                          
                          // color: "red"
                        }
                      }}
                />
            </div>
        </div>
    );
}