import React, { Component } from "react";
import "./Register.css";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { first_name: "", last_name: "", email: "", password: "" };
  }
  handleChange = (e) => {
    let currentState = this.state;
    currentState[e.currentTarget.name] = e.currentTarget.value;
    this.setState(currentState);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.email !== "" &&
      this.state.password.length >= 8 &&
      this.state.first_name !== "" &&
      this.state.last_name !== ""
    ) {
      console.log(this.state);
    } else {
      toast.error("⚠️ Input is invalid");
    }
  };
  render() {
    return (
      <div className="register-box">
        <div className="form">
          <div className="register">
            <h1>Register</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="first_name" className="label">
                First Name
              </label>
              <FormInput
                type="text"
                eid="first_name"
                name="first_name"
                handleChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="label">
                Last Name
              </label>
              <FormInput
                type="text"
                eid="last_name"
                name="last_name"
                handleChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="label">
                Email address
              </label>
              <FormInput
                type="email"
                eid="email"
                name="email"
                handleChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="label">
                Password
              </label>
              <FormInput
                type="password"
                eid="password"
                name="password"
                handleChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary register">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
