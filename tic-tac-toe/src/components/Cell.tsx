import { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  turn: string;
  setTurn: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
};

export default function Cell({
  turn,
  setTurn,
  id,
  cells,
  setCells,
}: CellProps) {
  const handleClick = (_: any) => {
    let notChecked = !cells[id];

    const changeCell = (cellToChange: string) => {
      const copiedCells = [...cells];
      copiedCells[id] = cellToChange;
      setCells(copiedCells);

    };
    if (notChecked) {
      if (turn == "circle") {
        changeCell("circle");
        setTurn("cross");
      } else if (turn == "cross") {
        changeCell("circle");
        setTurn("cross");
      }
    }
  };

  return (
    <>
      <div className="square" onClick={handleClick}></div>
    </>
  );
}
