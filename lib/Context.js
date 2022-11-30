import React, { createContext, useState } from "react";

export const actionList = [
  { label: "road", color: "#0066ff" },
  { label: "light", color: "#17dd7a" },
];

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [actionType, setActionType] = useState(actionList[0].label);
  const [data, setData] = useState({});

  const fetchData = async ({ actionType }) => {
    const response = await fetch(`/api?key=${actionType}`);
    const result = await response.json();

    setData(result);
  };

  return (
    <Context.Provider
      value={{ actionType, setActionType, data, setData, fetchData }}
    >
      {children}
    </Context.Provider>
  );
};
