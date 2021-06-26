import React,{useState,useRef} from 'react'
import {login_img} from '../images/index'
import '../css/login_reg.css'
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext'

function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const conpasswordRef = useRef();
    const [error,setError] = useState('');
    const history = useHistory();
    const {signup} = useAuth();
    function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value!==conpasswordRef.current.value){
            return setError("Passwords do not match...")
        }   
        setError('')
        signup(emailRef.current.value,passwordRef.current.value).then(res => {
            console.log('then')
            history.push('/dashboard')
        }).catch((err) => {setError("Failed to create an account");
        console.log(err,'err')
        })
    }
    return (
        <div className="base-container">
            <div className="header">Register</div>
            {error}
            <div className="content">
                <div className="image">
                    <img src={login_img} alt="" />
                </div>
                <form className="entry-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="email" name="email" placeholder="email" ref={emailRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" ref={passwordRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="conpassword">Confirm Password</label>
                        <input type="password" name="conpassword" placeholder="Confirm Password" ref={conpasswordRef}/>
                    </div>
                    <button type="submit" className="btn">Register</button>
                </form>
                <div className="switch-link">Already have an account ?<Link to="/"> Sign in</Link></div>
            </div>
        </div>
    )
}

export default Register
