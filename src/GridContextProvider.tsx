import { createContext, useState } from "react";

interface GridContextInterface {
  flipTiles: {(): void;}[];
  setFlipTiles: (flipTiles: {(): void;}[]) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

const GridContext = createContext<GridContextInterface | undefined>(undefined);

export const GridContextProvider = ({children}: ContextProviderProps) => {
  const [flipTiles, setFlipTiles] = useState<{(): void;}[]>([]);

  return (
    <GridContext.Provider value={{flipTiles, setFlipTiles}}>
      {children}
    </GridContext.Provider>
  );
}

export default GridContext;