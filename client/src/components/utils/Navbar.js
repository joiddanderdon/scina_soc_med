import { Outlet, Link} from 'react-router-dom';
import { useState } from 'react';
import Login from './Login.js';

const Navbar = (props) => {
    return (
        <div>
            <div className="navbar-asn">
                <div className="row">
                    <div className="col">
                        <Link className="" to="/">         
                            the <br />{'['}anti{']'}social<br /> network.
                        </Link>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <Link className="navbar-link" to="/profile">
                                    My Profile
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="navbar-link" to="/search">
                                    Search
                                </Link>
                            </div>
                        </div>
                    </div>
                     
                    <Login />
                </div>
                
            </div>
            <Outlet />
        </div>
    )
}
export default Navbar;