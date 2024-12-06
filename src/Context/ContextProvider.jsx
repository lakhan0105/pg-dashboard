import React, { createContext, useContext } from "react";

// create context
const myContext = createContext();

// contextProvider
function ContextProvider({ children }) {
  return (
    <myContext.Provider value={"something"}>{children}</myContext.Provider>
  );
}

export function useMyContext() {
  return useContext(myContext);
}

export default ContextProvider;
