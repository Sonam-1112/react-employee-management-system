import React from 'react'
import {NavLink,Link} from 'react-router-dom';
import '../css/navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <nav className="nav">
                <div className="logo">
                    <Link to="/dashboard">EMS</Link>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/dashboard" exact activeClassName="active">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dashboard/add-employee" exact activeClassName="active">Add Employee</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dashboard/add-department" exact activeClassName="active">Add Departments</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">Logout</NavLink>
                    </li>    
                </ul>
                <footer className="footer">
                    <p>@2021 Lorem Ipsum</p>
                </footer>
            </nav>
        </div>
    )
}

export default Navbar
