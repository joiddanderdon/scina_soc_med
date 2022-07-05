import { Link, useNavigate } from 'react-router-dom';
import { fetchData } from './Fetching';
import { useContext } from 'react';
import UserContext from '../../context/userContext';

const Login = () => {
    
    const navigate = useNavigate();
    const {user, updateUser} = useContext(UserContext);
    

    const onChange = (e) => {
        updateUser([e.target.name], e.target.value );
    }

    

    const onSubmit = (e) => {
        e.preventDefault();
        fetchData("/user/login", user, "POST")
        .then((data) => {
            if (!data.message) {              
                updateUser('userid', data._id);
                navigate("/profile");
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
                            //defaultValue={username}
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
                        <button className="responsive-width">Login</button>
                    </div>
                    <div className="row">
                        <button className="responsive-width">
                            <Link to="register" id="reglink">Register</Link>
                        </button>
                    </div>
                </div>
            </div>    
        </form>
)};

export default Login;