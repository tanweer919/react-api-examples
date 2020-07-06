import React, { Component } from "react";
import "./login.css";
import { toast } from "react-toastify";
import FormInput from "./FormInput";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
      },
      error: {},
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state.data;
    if (email !== "" && password.length >= 8) {
      console.log(this.state);
    } else {
      toast.error("⚠️Input is invalid");
    }
  };

  handleChange = (e) => {
    let currentData = this.state.data;
    currentData[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: currentData });
  };
  render() {
    const { email, password } = this.state.data;
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
                value={email}
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
                value={password}
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
