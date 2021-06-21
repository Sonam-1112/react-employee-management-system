import React from 'react'
import Navbar from '../components/Navbar.jsx'
import '../css/layout.css'
import AddEmployee from './EmployeeFolder/AddEmployee'
import AddDepartment from './DepartmentFolder/AddDepartment'
import Dashboard from './Dashboard.jsx'
import {Switch, Route } from 'react-router-dom'

function Main() {
    return ( 
        <div className="whole-container">
            <div className="sidebar">
                <Navbar />
            </div>
            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/dashboard/add-employee" exact component={AddEmployee} />
                        <Route path="/dashboard/add-department" exact component={AddDepartment} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default Main