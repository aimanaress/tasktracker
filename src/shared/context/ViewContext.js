import React, { createContext, useContext, useState } from "react";

const ViewContext = createContext();

export function ViewProvider({ children }) {
  const [view, setView] = useState("Today");

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <ViewContext.Provider value={{ view, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  return useContext(ViewContext);
}
