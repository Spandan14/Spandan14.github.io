import { useContext } from 'react';
import GridContext from './GridContextProvider.tsx'

export const useGridContext = () => {
  const context = useContext(GridContext);
  if (context === undefined) {
    throw new Error('useGridContext must be used within an GridContextProvider');
  }
  
  return context;
};