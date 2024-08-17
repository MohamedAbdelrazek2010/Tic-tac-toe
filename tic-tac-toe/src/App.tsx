import { useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("circle");

  console.log(cells);

  const reset = () => {
    setCells(Array(9).fill(""))
    setTurn("circle")
  }

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
            />
          )
        })}
        <br />
        <button type="button" className="reset" onClick={reset}>
          reset
        </button>
      </div>
      <div className="status">
          {`its now ${turn} turn`}
      </div>
    </main>
  );
}

export default App;
