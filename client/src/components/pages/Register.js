import { useState } from 'react';
import { fetchData } from "../utils/Fetching.js";
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        password: '',
        password2: ''
    });

    const { username, password, password2 } = user;

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        
        if (document.getElementById('password').value !==
            document.getElementById('password2').value) {
                document.getElementById("confirm_error").innerHTML = 'Passwords do not match';
        } else {
            document.getElementById("confirm_error").innerHTML = '';
        }
      
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2){
            return;
        } 
        fetchData("/user/register", user, "POST")
        .then((data) => {
            if (!data.message) {
                navigate("/profile",{state: {user:data.username, id:data._id}});
            }
        })
        .catch((error) => {
            document.getElementById("inuse_error").innerHTML = error.message;
        })
    }

    return (
            <div>
                <hr />
                <h2>Register</h2>
                <br />
                <form className="loginBox" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="username">Username: </label>
                        </div>
                        <div className="col">
                            <input 
                                type="text" 
                                id="username"
                                name="username"
                                required
                                onChange={onChange}
                                defaultValue={username}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="password">Password: </label>
                        </div>
                        <div className="col">
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                required
                                onChange={onChange}
                                
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="password2">Confirm: </label>
                        </div>
                        <div className="col">
                            <input 
                                type="password" 
                                name="password2" 
                                id="password2"
                                required
                                onChange={onChange}
                               
                            />
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col">
                            <button>Register</button>
                        </div>
                        <div className="col" id="confirm_error">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col" id="inuse_error">

                        </div>
                    </div>
                </form>
            </div>
        )
    }

export default Register;