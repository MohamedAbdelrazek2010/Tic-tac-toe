import { useEffect, useState } from "react";
import Cell from "./components/Cell";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("circle");
  const [winner , setwinner] = useState("")

  console.log(cells);

  const reset = () => {
    setCells(Array(9).fill(""))
    setTurn("circle")
    setwinner("")
  }

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const CircleWins = combo.every(cell => cells[cell] === "circle")
      const CrossWins = combo.every(cell => cells[cell] === "cross")

      if (CircleWins) {
        setwinner("CIRCLE WINS")
      } else if (CrossWins) {
        setwinner("CROSS WINS")
      }
    })
  }, cells)

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winner) {
      setwinner("DRAW")
    }
  }, cells)

  return (
    <main className="container">
      <div className="board">
        {cells.map((cell, index) => {
          return ( 
            <Cell 
              id={index} 
              key={index} 
              turn={turn} 
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
              cell={cell}
              winner={winner}
            />
          )
        })}
        <br />
        <button type="button" className="reset" onClick={reset}>
          reset
        </button>
      </div>
      <div className="winner">
        {winner}
      </div>
      {!winner && <div className="status">
          {`its now ${turn} turn`}
      </div>}
    </main>
  );
}

export default App;
