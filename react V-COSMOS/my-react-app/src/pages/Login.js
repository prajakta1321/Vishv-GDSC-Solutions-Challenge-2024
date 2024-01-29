import React from 'react';
import './css/Login.css'; // Import your CSS here
const Login = () => {
  return (
    <div className="outer-container">
    <div className="form-container">
      <form className="login-form">
        <input type="text" placeholder="Email/Phone" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
