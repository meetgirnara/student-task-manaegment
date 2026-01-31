import "./Login.css";

const Login = () => {
    return (
    <div className="form-container">
      {/* Page title */}
        <h1 className="form-title"> Welcome Back</h1>
      {/* Login form */}
        <form>
         {/* Email field */}
        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            />
        </div>
        {/* Password field */}
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            name="Password"
            placeholder="Enter your password"
            />
        </div>
        {/*submit Button*/}
        <button type="submit" className="btn-primary">
            Login
        </button>
        </form>
    </div>
    );
};

export default Login;
