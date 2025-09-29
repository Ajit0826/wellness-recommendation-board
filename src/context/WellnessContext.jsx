import React, { createContext, useContext } from 'react';

const WellnessContext = createContext();

export const useWellness = () => useContext(WellnessContext);

export const WellnessProvider = ({ children, value }) => {
  return (
    <WellnessContext.Provider value={value}>
      {children}
    </WellnessContext.Provider>
  );
};