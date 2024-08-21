import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './tail.css'
import { GridContextProvider } from "./GridContextProvider";
import { NewspaperGrid } from './NewspaperGrid'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GridContextProvider>
      <NewspaperGrid 
        gridRows='grid-rows-auto'
        gridCols='grid-cols-4'
        gridArrayClasses={[
          'row-span-2 col-span-2',
          'row-span-1 col-span-1',
          'row-span-2 col-span-2',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-2 col-span-2',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
          'row-span-1 col-span-1',
        ]}
      />
    </GridContextProvider>
  </StrictMode>,
)
