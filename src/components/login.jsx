import React, { Component } from "react";
import "./login.css";
import { toast } from "react-toastify";
import FormInput from "./FormInput";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password.length >= 8) {
      console.log(this.state);
    } else {
      toast.error("⚠️ Input is invalid");
    }
  };

  handleChange = (e) => {
    let currentState = this.state;
    currentState[e.currentTarget.name] = e.currentTarget.value;
    this.setState(currentState);
  };
  render() {
    return (
      <div className="login-container">
        <div className="form">
          <div className="center">
            <h1>Login</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <FormInput
                type="email"
                eid="email"
                name="email"
                handleChange={this.handleChange}
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
                handleChange={this.handleChange}
              />
            </div>

            <div className="center">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
