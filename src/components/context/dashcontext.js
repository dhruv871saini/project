import React, { createContext, useContext, useState } from "react";

const dashcontext = createContext();

export const DashProvider = ({ children }) => {
  const [first, setfirst] = useState([]);
  const [second, setsecond] = useState("all")

 

  return (
    <dashcontext.Provider value={{ first, setfirst,second,setsecond}}>
      {children}
    </dashcontext.Provider>
  );
};

export const useDash = () => {
  const context = useContext(dashcontext);
  if (!context) {
    throw new Error(`useDash must be used within a DashProvider`);
  }
  return context;
};
