import React, { createContext, useState, useRef, useEffect } from 'react';

const AllContext = createContext();



const ContextProvider = ({ children }) => {
  const host = 'http://localhost:5000'
  const SetALlstateFalse = () => {
    setCreate(false);
  };
  const [createCLass, setCreate] = useState(false);
  const [DasboardArea, setDasboardArea] = useState(true);


  const GetRepel = async () => {
    // const Response = await fetch(`${host}/api/fetchItems`, {
    const Response = await fetch(`${host}/api/fetchItems`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('authToken')
      }
    });
    const res = await Response.json();
    // setAllClasses(res.reverse());
    console.log(res);
    return res
  }
  return (
    <AllContext.Provider value={{
      createCLass, setCreate, SetALlstateFalse, DasboardArea, setDasboardArea
      , GetRepel
    }}
    >
      {children}
    </AllContext.Provider>
  );
};

export { ContextProvider, AllContext };
