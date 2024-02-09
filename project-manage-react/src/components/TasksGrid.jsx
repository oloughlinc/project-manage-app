import React from "react";
import { NavLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button';
import './TasksGrid.css'

// display a single project and a list of tasks assoc. w/ it
export function TasksGrid({tasks, project}) {

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
        console.log('Row clicked:', params.row); // Log the clicked row data
        // You can perform any action here with the clicked row data
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
            <NavLink id="top-right" to="/create">
            <Button  variant="contained">+ Create Task</Button>
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