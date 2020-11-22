import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login-wrapper">
      <h1>Welcome To ADG Coding Portal!</h1>
      <p>Please fill in the following details to get started.</p>
      <br></br>
      <div className="username">
        <label>Email</label>
        <br></br>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div className="pass">
        <label>Password</label>
        <br></br>
        <input type="password" placeholder="Enter your password" />
         
            <button className="myButton">Submit</button>
        
      </div>
       
    </div>
  );
};
export default Login;
