import React,{useState} from 'react'
import {login_img} from '../images/index'
import '../css/login_reg.css'
import {Link} from 'react-router-dom';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={login_img} alt="" />
                </div>
                <div className="entry-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <Link to="/dashboard" className="btn">Login</Link>
                </div>
                <div className="switch-link">Not have an account ?<Link to="/register"> Register Now</Link></div>
            </div>
        </div>
    )
}

export default Login
