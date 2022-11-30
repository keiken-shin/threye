import React, { createContext, useState } from "react";

export const actionList = [
  { label: "roads", color: "#0066ff" },
  { label: "lights", color: "#17dd7a" },
];

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [actionType, setActionType] = useState(actionList[0].label);

  return (
    <Context.Provider value={{ actionType, setActionType }}>
      {children}
    </Context.Provider>
  );
};
