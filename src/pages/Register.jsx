import React from "react";
import "./Register.css";

const Register = () => {
    return (
    <>
        <div className="form-container">
        {/* Page title */}
        <h1 className="form-title">Register Page</h1>
        <form>
          {/* Name field */}
            <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="Full name" placeholder="Enter your full name" />
            </div>
          {/* Email field */}
            <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
          {/* Phone number field */}
            <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
            />
            </div>
            {/* Password field */}
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="Password" placeholder="Enter your password" />
            </div>
            {/*submit Button*/}
            <button type="submit" className="btn-primary">
                Register
            </button>
        </form>
        </div>
    </>
    );
};

export default Register;
