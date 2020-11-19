import React from 'react';
import './login.css'

export const Login = () => {
    return (
       <div className = "wrapper">
           <h1>Welcome To ADG Coding Portal!</h1>
           <p>Please fill in the following details to get started.</p><br></br>       
           <div className = "username">
           <label>Username</label><br></br>
           <input type= "text"
            placeholder= "Enter your username"/> 
            </div>
            <div className = "pass">
            <label>Password</label><br></br>
            <input type= "password"
             placeholder = "Enter your password"/>
            </div>
            <button className="myButton">Submit</button>
        </div>
    )
}
export default Login;