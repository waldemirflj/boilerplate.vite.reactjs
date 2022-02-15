import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function Auth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async () => {
    setIsAuthenticated(true);
  };

  const logout = async () => {
    setIsAuthenticated(false);
  };

  const signUp = async () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ login, logout, signUp, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
