

const Navbar = () => (
    <div className="bg-black">
        <nav className="navbar navbar-expand-lg border border-success bg-opacity-75 bg-gradient">
            <div className="container-fluid">
                <a className="navbar-brand" href=".">
                    The <br />{'['}Anti{']'}social<br /> Network
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href=".">Profile</a>
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

export default Navbar;