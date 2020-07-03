import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="form">
        <div className="center">
          <h1>Login</h1>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
            ></input>
          </div>
          <div className="center">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
