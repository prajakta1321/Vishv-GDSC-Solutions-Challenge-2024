// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 

const ProtectedRoute = ({ children }) => {
  const { userData } = useAuth(); 

  
  const isAuthenticated = userData != null; 

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
