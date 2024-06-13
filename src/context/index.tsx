"use client";

import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext<any>({ userId: null });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  // Create state that is accessed from local storage
  const [state, setState] = useState({
    userId: localStorage.getItem("userId") || null,
  });

  // Update the local storage state every time state is changed
  useEffect(() => {
    if (state.userId) {
      localStorage.setItem("userId", state.userId);
    } else {
      localStorage.removeItem("userId");
    }
  }, [state.userId]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
