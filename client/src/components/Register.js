const Register = () => (
    <div>
        <h2>Register</h2>
        <hr />
        <form>
            <div class="row">
                <div class="col">
                    <label htmlFor="username">Username: </label>
                </div>
                <div class="col">
                    <input type="text" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label htmlFor="password">Password: </label>
                </div>
                <div class="col">
                    <input type="password" />
                </div>
            </div>
        </form>
    </div>
)

export default Register;