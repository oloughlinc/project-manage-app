import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button';
import './TasksGrid.css'
import { Navigate } from "react-router-dom";

// display a single project and a list of tasks assoc. w/ it
export function TasksGrid({tasks, project, currentUser}) {

    const navigate = useNavigate();

    const rows = [];
    let id = 0;
    for (let task of tasks) {
        rows.push({
            id: ++id, 
            title: task.title,
            personAssigned: task.personAssigned,
            dueDate: task.dueDate,
            size: task.size,
            completed: task.completed ? 'Complete' : 'In Progress'
        });
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'title', headerName: 'Title', width: 450 },
        { field: 'personAssigned', headerName: 'Assignee', width: 150 },
        { field: 'dueDate', headerName: 'Due Date', width: 150 },
        { field: 'size', headerName: 'Size', width: 90 },
        { field: 'completed', headerName: 'Status', width: 150 },
    ];

    const handleRowClick = (params) => {
        console.log('Row clicked:', params.row); 
        let taskId = tasks.filter((task) => task.title === params.row.title);
        taskId = taskId[0]._id;
        navigate(`/update/${taskId}`)
    };

    return (
        <div className="relative-pos">
            <p id='project-title'>{project.title}</p>
            <div id='details'>
                <p><b>Team Size:</b> {project.teamSize}</p>
                <p><b>Budget:</b> ${project.budget}</p>
                <p><b>Workload:</b> {project.workload}</p>
                <p id='estimate'><b>Estimated Completion:</b> 22 Days</p>
            </div>
            <NavLink id="top-right" to={`/create/${project.id}`}>
            {currentUser.role === 'manager' ? <Button  variant="contained">+ Create Task</Button> : ''}
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
                />
            </div>
        </div>
    );
}