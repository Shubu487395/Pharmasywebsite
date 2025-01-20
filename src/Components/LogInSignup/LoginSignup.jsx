import React, { useState } from 'react';
import './loginSignup.css'
import user_icon from '../../assets/Person.jpg'
import email_icon from '../../assets/Email.jpg'
import password_icon from '../../assets/Password.jpg'


const LoginSignup = () => {

    const[action,setAction] = useState("Login");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="unerline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name'/>
            </div>}
       
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id'/>
            </div>   
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password'/>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      
      
      <div className="submit-conainer">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </div>
  );
}

export default LoginSignup;
