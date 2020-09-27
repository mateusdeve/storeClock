import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
  const produtos = [];
  const item = produtos.length;

  return (
    <GlobalContext.Provider value={{produtos, item}}>
      {children}
    </GlobalContext.Provider>
  );
};
