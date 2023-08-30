import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Main');

  return (
    <AppContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </AppContext.Provider>
  );
};
