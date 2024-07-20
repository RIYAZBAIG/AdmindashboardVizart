import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./index.css";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const value = target.value;
    const { name } = target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const switchVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateForm = async()=>{
    try {
      axios.post(
        "http://dev.vizart.traversetec.co/api/v1/login",
          data
      ).then(res=>{
        if(res.status === 200){
          localStorage.setItem('token',res.data.token)
          window.location.href = "/dashboard";
        }
      })
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="card"
        style={{
          height: "400px",
          width: "550px",
          position: "relative",
          display: "flex",
          marginLeft: "1025px",
        }}
      >
        <div className="card-body">
          <form>
            <div className="form-group">
              <h2>Sign In</h2>
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <br />
            <div className="form-group">
              <label>Password</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">
                Remember me
                <span className="form-check-sign">
                  <span className="check"></span>
                </span>
              </label>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={validateForm}
            >
              Login
            </button>
            <button
              className="btn btn-primary btn-round"
              onClick={switchVisibility}
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
