import React from 'react'
import '../css/dashboard.css'

function Dashboard() {
    let empArray = JSON.parse(localStorage.getItem('employeeState'));
    let deptArray = JSON.parse(localStorage.getItem('deptState'));
    
    return (
        <div className="dashboard-container">
            <div className="row">
                <div className="card">
                    <h1 className="total-heading">Total Employees</h1> 
                    <h2 className="total-value">
                        {empArray.length}
                    </h2>
                </div>
                <div className="card">
                    <h1 className="total-heading">Total Departments</h1>
                    <h2 className="total-value">
                        {deptArray.length}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
