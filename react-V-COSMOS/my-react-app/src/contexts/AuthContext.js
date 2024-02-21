// AuthContext.js
import React, { useContext, useState, createContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // The context value that will be supplied to any descendants of this component.
  const value = {
    userData,
    setUserData, // This should be a function because it's the setter from useState.
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
