import React,{useState} from 'react'
import {login_img} from '../images/index'
import '../css/login_reg.css'
import {Link} from 'react-router-dom';

function Register() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [conpassword,setConpassword] = useState('');
    return (
        <div className="base-container">
            <div className="header">Register</div>
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
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="conpassword">Confirm Password</label>
                        <input type="password" name="conpassword" placeholder="Confirm Password" value={conpassword} onChange={e=>setConpassword(e.target.value)}/>
                    </div>
                    <Link to="/dashboard" type="button" className="btn">Register</Link>
                </div>
                <div className="switch-link">Already have an account ?<Link to="/"> Sign in</Link></div>
            </div>
        </div>
    )
}

export default Register
