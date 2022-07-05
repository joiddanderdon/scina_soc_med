import { Outlet, Link} from 'react-router-dom';
import { useContext, Fragment } from 'react';
import UserContext from '../../context/userContext.js';
import Login from './Login';
import Logout from './Logout';

const Navbar = (props) => {
    const { user } = useContext(UserContext);

    const authenticated = (
        <>
            
                <Link className="navbar-link" to="/profile">
                    My Profile
                </Link>
                <br />
            
                <Logout />
            
        </>
    )
    const guest = (
        <>
            <Login />
        </>
    )



    return (
        <div>
            <div className="navbar-asn">
                <div className="row">
                    <div className="col-3">
                        <Link className="" to="/">         
                            the <br />{'['}anti{']'}social<br /> network.
                        </Link>
                    </div>
                    <div className="col">                           
                        
                        <Link className="navbar-link" to="/search">
                            Search
                        </Link>
                       
                    
                    </div>
                    <div className="col login_profile">
                    {
                        user.userid !== undefined &&
                        user.userid.length > 0 ?
                        authenticated :
                        guest
                    }
                    </div>
                </div>
                
            </div>
            <Outlet />
        </div>
    )
}
export default Navbar;