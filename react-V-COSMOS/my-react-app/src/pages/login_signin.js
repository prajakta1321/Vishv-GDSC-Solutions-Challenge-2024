import React, { useState } from 'react';
import SignUp from './signup';
import Login from './Login';

const LoginSign = () => {
  const [showLogin, setShowLogin] = useState(true);

  console.log("Rendering LoginSign, showLogin is", showLogin);

  return (
    <div className="login-sign-container">
      {showLogin ? <Login /> : <SignUp />}
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
  );
}


export default LoginSign;