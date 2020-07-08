import React, { useState, useEffect } from "react";
import "./login.css";
import { toast } from "react-toastify";
import FormInput from "./FormInput";

const Login = () => {
  const [state, setState] = useState({
    data: {
      email: "",
      password: "",
    },
    error: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state.data;
    if (email !== "" && password.length >= 8) {
      console.log("Form Submitted");
    } else {
      toast.error("⚠️Input is invalid");
    }
  };

  const handleChange = (e) => {
    let currentState = { ...state };
    currentState.data[e.currentTarget.name] = e.currentTarget.value;
    setState(currentState);
  };
  const { email, password } = state.data;
  return (
    <div className="login-container">
      <div className="form">
        <div className="center">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <FormInput
              type="email"
              eid="email"
              name="email"
              value={email}
              handleChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <FormInput
              type="password"
              eid="password"
              name="password"
              value={password}
              handleChange={handleChange}
            />
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
