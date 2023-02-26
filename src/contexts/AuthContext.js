import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [points, setPoints] = useState(0);

  return (
    <AuthContext.Provider value={{ username, setUsername, points, setPoints }}>
      {children}
    </AuthContext.Provider>
  );
};
