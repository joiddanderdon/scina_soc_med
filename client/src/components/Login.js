const Login = () => (
    <div>
        <h2>Login</h2>
        <hr />
        <form>
            
                <div class="row">
                    <div class="col">
                        <label htmlFor="username">User Name:</label>
                    </div>
                    <div class="col">
                        <input type="text" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div class="col">
                        <input type="password" />
                    </div>
                </div>

            
        </form>
    </div>
)

export default Login;