// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Make sure this path is correct

const ProtectedRoute = ({ children }) => {
  const { userData } = useAuth(); // Use whatever signifies authentication in your context

  // Check if userData is null or contains valid data to signify logged-in status
  const isAuthenticated = userData != null; // or some other logic to determine authentication

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render children if authenticated
  return children;
};

export default ProtectedRoute;
