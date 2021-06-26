import React from 'react'
import {NavLink,Link,useHistory} from 'react-router-dom';
import '../css/navbar.css'
import {useAuth} from '../contexts/AuthContext'

function Navbar() {
    const {logout} = useAuth();
    const history = useHistory();
    const handleLogout=()=>{
        logout()
        history.push('/')
    }
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
                        <button onClick={handleLogout} exact activeClassName="active">Logout</button>
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
