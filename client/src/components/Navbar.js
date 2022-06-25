

const Navbar1 = () => (
    <div className="bg-black">
        <nav className="navbar navbar-expand-lg border border-success bg-opacity-75 bg-gradient">
            <div className="container-fluid">
                <ul className="no-bullets">
                    <li className="nav-item">
                        <a className="navbar-link" href=".">
                            The <br />{'['}Anti{']'}social<br /> Network
                        </a>
                    </li>
                </ul>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href=".">My Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".">Search</a>
                    </li>
                </ul>
                </div>
                <div>
                    <ul className="no-bullets">
                        <li className="nav-item">
                            <a className="nav-link" href=".">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=".">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)


const Navbar = (props) => {


    return (
        <div>
            <nav className="navbar">
                <div>
                    <a href=".">
                        The <br />[anti]social<br /> Network
                    </a>
                </div>

                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href=".">My Profile</a>
                        </li>
                    </ul>
                </div>
            
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href=".">Search</a>
                        </li>
                    </ul>
                </div>

                <div id="navbarNav">
                    <ul className="no-bullets">
                        <li className="loginBox">
                            <div class="row">
                                <div class="col">
                                    <label htmlFor="usernameBox">Username:</label>
                                </div>
                                <div class="col">
                                    <input type="text" name="usernameBox" id="usernameBox" />
                                </div>
                            </div>
                        </li>
                        <li className="loginBox">
                            <div class="row">
                                <div class="col">
                                    <label htmlFor="passwordBox">Password:</label>
                                </div>
                                <div class="col">
                                    <input type="password" name="passwordBox" id="passwordBox" />
                                </div>
                            </div>
                        </li>
                        <li className="loginBox">
                            <button>Login</button>
                        </li>
                        <li className="loginBox">
                            <a className="nav-link" href=".">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;