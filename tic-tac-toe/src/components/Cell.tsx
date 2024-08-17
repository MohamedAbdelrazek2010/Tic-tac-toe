import { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  turn: string;
  setTurn: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winner: string;
};

export default function Cell({
  turn,
  setTurn,
  id,
  cells,
  setCells,
  cell,
  winner
}: CellProps) {

  const handleClick = () => {

    if (winner) {
      return;
    }

    const notTaken = !cells[id];

    if (notTaken) {
      if (turn === "circle") {
        handleCellChange("circle");
        setTurn("cross");
      } else if (turn === "cross") {
        handleCellChange("cross");
        setTurn("circle");
      }
    }
  }

  const handleCellChange = (cellToChange: string) => {
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };

  return (
    <>
      <div className="square" onClick={handleClick}>
        <div className={cell}>
          {cell ? (cell === "circle" ? "O" : "X") : "" }
        </div>
      </div>
    </>
  );

}
