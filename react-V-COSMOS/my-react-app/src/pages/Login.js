
import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { setUserData } = useAuth();

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "redact.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" } 
    );
  }, []);

  const handleCredentialResponse = async (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    try {
      const googleResponse = await axios.post('http://localhost:8000/google-auth/', {
        token: response.credential,
      });
      
      if (googleResponse.data && googleResponse.data.user) {
        setUserData(googleResponse.data.user);
        navigate('/contribution');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="outer-container">
      <div className="form-container">
        <div id="signInDiv"></div>
      </div>
    </div>
  );
};

export default Login;
