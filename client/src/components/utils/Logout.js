import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/userContext';

const Logout = () => {
    
    const navigate = useNavigate();
    const {updateUser} = useContext(UserContext);
    

    

    const logout = () =>  {            
        updateUser('userid', '');
        navigate("/");       
    }

    
    return (
        <>
            <button onClick={logout}>Logout</button>
        </>
)};

export default Logout;