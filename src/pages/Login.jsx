import React,{useState,useRef} from 'react'
import {login_img} from '../images/index'
import '../css/login_reg.css'
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext'

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login,currentUser} = useAuth();
    const [error,setError] = useState('');
    const history = useHistory();
    function handleSubmit(e){
        e.preventDefault();  
            setError('')
            login(emailRef.current.value,passwordRef.current.value).then(res => {
                console.log('then')
                history.push('/dashboard')
            }).catch((err) => {setError("Failed to login");
        console.log(err,'err')
    })    
    }
    return (
        <div className="base-container">
            <div className="header">Login</div>
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
                    <button type="submit" className="btn">Login</button>
                </form>
                <div className="switch-link">Not have an account ?<Link to="/register"> Register Now</Link></div>
            </div>
        </div>
    )
}

export default Login