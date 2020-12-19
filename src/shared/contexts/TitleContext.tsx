import React, { useState, createContext, useCallback } from "react";

interface TitleContextData {
  setTitle(value: string): void;
  title: string;
}

export const TitleContext = createContext<TitleContextData>({} as TitleContextData);

export const TitleProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState('');

  const handleSetTitle = useCallback((value: string) => {
    setTitle(value);
    document.title = `Portal${value !== "" ? " - " + value : ""}`.trim();
  }, []);

  return (
    <TitleContext.Provider value={{ title, setTitle: handleSetTitle }}>
      {children}
    </TitleContext.Provider>
  );
};