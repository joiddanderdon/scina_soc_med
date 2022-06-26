const Login = () => (
    <div className="col loginBox">
        <div className="row">   
            <div className="col align-right">
                <div className="row">
                    <input type="text" name="usernameBox" id="usernameBox" placeholder="username" />
                </div>
                <div className="row">
                    <input type="password" name="passwordBox" id="passwordBox" placeholder="password" />
                    
                </div>
            </div>
            <div className="col align-left">
                <div className="row">
                    <button>Login</button>
                </div>
                <div className="row">
                    <button>Register</button>
                </div>
            </div>
        </div>    
    </div>
);

export default Login;