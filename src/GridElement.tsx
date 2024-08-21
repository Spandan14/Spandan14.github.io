import { useCallback, useEffect, useState } from "react";
import "./GridElement.css";
import { useGridContext } from "./UseGridContext";

interface GridElementProps {
  backgroundColor: string;
  darkBackgroundColor: string;
  gridElemNumber: number;
}

enum Orientation {
  Left = "show-left",
  Top = "show-top"
}

export const GridElement: React.FC<GridElementProps> = (props) => {
  const [orientation, setOrientation] = useState<Orientation>(Orientation.Left);
  const {flipTiles, setFlipTiles} = useGridContext();

  const flipTile = useCallback(() => {
    setOrientation(orientation === Orientation.Left ? Orientation.Top : Orientation.Left);
  }, [orientation, setOrientation]);
  
  useEffect(() => {
    const newFlipTiles = flipTiles;
    newFlipTiles[props.gridElemNumber] = flipTile;

    setFlipTiles(newFlipTiles);
  }, [flipTile, flipTiles, setFlipTiles, props.gridElemNumber]);


  return (
    <div className="scene">
       <div className={`tile-set ${orientation}`} onClick={flipTile}>
        <div className={`${props.backgroundColor} hover:opacity-50 border-b-4 border-slate-600 p-4 
        aspect-square tile_face--left tile`}>
          <p className="tile-text text-slate-800">
            DISTRIBUTED
            SYSTEMS
          </p>
        </div>
        <div className={`${props.darkBackgroundColor} hover:opacity-50 border-b-4 border-slate-400 p-4 
          aspect-square tile_face--top tile`}>
          <p className="tile-text text-slate-200">GRIDELEMENT</p>
        </div>
      </div>
    </div>
  );
}