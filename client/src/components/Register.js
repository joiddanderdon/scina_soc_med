const Register = () => (
    <div>
        <h2>Register</h2>
        <hr />
        <form>
            <div className="row">
                <div className="col">
                    <label htmlFor="username">Username: </label>
                </div>
                <div className="col">
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="password">Password: </label>
                </div>
                <div className="col">
                    <input type="password" />
                </div>
            </div>
        </form>
    </div>
)

export default Register;