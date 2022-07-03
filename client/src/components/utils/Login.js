import { Link, useNavigate, useLocation } from 'react-router-dom';
import { fetchData } from './Fetching';
import React, { useState } from 'react';



const Login = (props) => {
    

    
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const username = user.username;

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        fetchData("/user/login", user, "POST")
        .then((data) => {
            if (!data.message) {
                navigate("/profile", {state: {user:data.username, id:data._id}});
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    
    return (
        <form className="col loginBox" onSubmit={onSubmit}>
            <div className="row">
                
                <div className="col align-right">
                    <div className="row">
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="username"
                            defaultValue={username}
                            onChange={onChange}
                        />
                    </div>
                    <div className="row">
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="password"
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="col align-left">
                    <div className="row">
                        <button>Login</button>
                    </div>
                    <div className="row">
                    <Link to="register"><button>Register</button></Link>
                        
                    </div>
                </div>
            </div>    
        </form>
)};

export default Login;