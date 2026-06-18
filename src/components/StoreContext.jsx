import { createContext, useContext, useState } from "react";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [query, setQuery] = useState("");
  const [coffeeItems, setCoffeeItems] = useState([]);

  return (
    <StoreContext.Provider value={{ query, setQuery, coffeeItems, setCoffeeItems }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
}
