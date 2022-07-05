import { fetchData } from "../utils/Fetching.js";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/userContext.js';



const Register = () => {
    const navigate = useNavigate();

    const {user, updateUser} = useContext(UserContext);

    const { username, password, password2 } = user;

    const onChange = (e) => {
        updateUser(e.target.name, e.target.value)
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2){
            return;
        } 
        fetchData("/user/register", user, "POST")
        .then((data) => {
            if (!data.message) {
                //updateUser('authenticated', true);
                // seems i can't simultaneously set both..
                // so i'll just say that a userid entry indicates 
                // authenticated.. i need that ID.
                updateUser('userid', data._id);
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
                                id="reg_username"
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
                                id="reg_password"
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
                                id="reg_password2"
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