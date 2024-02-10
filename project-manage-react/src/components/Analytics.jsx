import React from 'react';
import { SideBar } from "./SideBar"
import { TopBar } from "./TopBar"
import { Route, Routes, Navigate, Link, NavLink } from 'react-router-dom'

import './Analytics.css'

export function Analytics() {
    return (
        <>
            <TopBar />
            <div className="app">
                <div className="sidebar-outer">
                    {/* Sidebar content */}
                    <SideBar />
                </div>
                <div className="content">
                    {/* Main content area */}
                <section>
                    <h2>Linear Regression</h2>
                    <p>This section is about Linear Regression.</p>
                </section>
                <section>
                    <h2>Model R2 Accuracy</h2>
                    <p>This section shows the model's R2 accuracy and room for improvement.</p>
                </section>
                <section>
                    <h2>Type of Data</h2>
                    <p>This section describes the type of data used in the model.</p>
                </section>
                <section>
                    <h2>Importance Chart</h2>
                    <img src="importance_chart.jpg" alt="Importance Chart" />
                </section>

            </div>
        </div >      
        </>
    )
};
export default Analytics
