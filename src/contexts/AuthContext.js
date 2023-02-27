import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState('');
  const [points, setPoints] = useState(0);
  const [username, setUsername] = useState('');

  return (
    <AuthContext.Provider value={{ users, setUsers, points, setPoints, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};
