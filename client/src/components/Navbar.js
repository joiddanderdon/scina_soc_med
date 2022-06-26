import Login from './Login.js';

const Navbar = (props) => {
    return (
        <div className="navbar-asn">
            <div className="row">
                <div className="col">             
                    the <br />{'['}anti{']'}social<br /> network.
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <a className="navbar-link" aria-current="page" href=".">My Profile</a>
                        </div>
                        <div className="col">
                            <a className="navbar-link" href=".">Search</a>
                        </div>
                    </div>
                </div>
            
            
                <Login />
            </div>
        </div>
        
    )
}
export default Navbar;