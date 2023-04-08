import React, { createContext, useState, useRef, useEffect } from 'react';

const AllContext = createContext();



const ContextProvider = ({ children }) => {
  const SetALlstateFalse = () => {
    setCreate(false);
  };
  const [createCLass, setCreate] = useState(false);
  const [DasboardArea, setDasboardArea] = useState(true);
  return (
    <AllContext.Provider value={{
      createCLass, setCreate, SetALlstateFalse, DasboardArea, setDasboardArea

    }}
    >
      {children}
    </AllContext.Provider>
  );
};

export { ContextProvider, AllContext };
