import React, { useState } from 'react';

const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  const contextValues = {
    user,
    setUser,
    userId,
    setUserId,
  };
  return <MainContext.Provider value={contextValues}>{children}</MainContext.Provider>;
};

export { MainContextProvider, MainContext };
