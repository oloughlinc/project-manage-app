import React from "react";
import { DataGrid } from '@mui/x-data-grid'
import './TasksGrid.css'

export function TasksGrid() {

    const rows = [];
    for (let i = 1; i <= 5; i++) {
        rows.push({
            id: i,
            firstName: `John${i}`,
            lastName: `Doe${i}`,
            age: Math.floor(Math.random() * 100),
            email: `john${i}@example.com`,
        });
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'age', headerName: 'Age', width: 90 },
        { field: 'email', headerName: 'Email', width: 250 },
    ];

    const handleRowClick = (params) => {
        console.log('Row clicked:', params.row); // Log the clicked row data
        // You can perform any action here with the clicked row data
    };

    return (
        <>
            <p>Project 1</p>
            <div id='details'>
                <p>Team Size: 10</p>
                <p>Budget: $10000</p>
                <p>Workload: Large</p>
                <p>Estimated Completion: 22 Days</p>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 100,
                            },
                        },
                    }}
                    pageSizeOptions={[0]}
                    checkboxSelection={false}
                    onRowClick={handleRowClick}
                />
            </div>
        </>
    );
}