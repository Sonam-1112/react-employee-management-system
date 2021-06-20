import React from 'react'
import '../css/dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="row">
                <div className="card">
                    <h1 className="total-heading">Total Employees</h1> 
                    <h2 className="total-value">23</h2>
                </div>
                <div className="card">
                    <h1 className="total-heading">Total Departments</h1>
                    <h2 className="total-value">25</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
