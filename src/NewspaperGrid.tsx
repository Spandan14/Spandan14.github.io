import { useState } from "react";
import { GridElement } from "./GridElement";
import "./NewspaperGrid.css";
import { useGridContext } from "./UseGridContext";

interface NewspaperGridProps {
  gridCols: string;
  gridRows: string;
  gridArrayClasses: Array<string>;
}

export const NewspaperGrid: React.FC<NewspaperGridProps> = (props) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [transitionColor, setTransitionColor] = useState<string>("#020617");
  const [inTransition, setInTransition] = useState<boolean>(false);
  const {flipTiles} = useGridContext();

  const transitionStyle = ".newspaper-grid:after {transform: rotate(45deg) translateY(200%) translateX(-10%);}";

  const toggleDarkMode = () => {
    setInTransition(true);
    // cursed 1ms delay for setState to work because im too lazy to use useEffect
    setTimeout(() => {
      setDarkMode(!darkMode);
      setTimeout(() => {
        flipTiles.forEach((fn) => fn());
      }, 200);
      setTimeout(() => {
        setInTransition(false);
      }, 500);
      setTimeout(() => {
        setTransitionColor(transitionColor === "#020617" ? "#e2e8f0" : "#020617");
      }, 500);
    }, 1);
  }

  return (
    <div className={`flex justify-center items-center newspaper-grid`} onClick={inTransition ? () => {} : toggleDarkMode}>
      <style>
        {darkMode ? transitionStyle : ""}
        {`.newspaper-grid {background: ${transitionColor === "#020617" ? "#e2e8f0" : "#020617"}}`}
        {`.newspaper-grid:after {background: ${transitionColor}; display: ${inTransition ? "block": "none"};`}
      </style>
      <div className={`grid grid-flow-row-dense gap-3 ${props.gridCols} ${props.gridRows} sm:w-full md:w-1/2`} >
        {props.gridArrayClasses.map((c, idx) => {
          return <div className={`${c}`}>
            <GridElement backgroundColor="bg-zinc-200" darkBackgroundColor="bg-slate-950" gridElemNumber={idx}/>
          </div>
        })}
      </div>
    </div>
  );
}