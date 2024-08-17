import { useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("circle");

  console.log(cells);

  return (
    <main className="container">
      <div className="board">
        {cells.map((_, index) => {
          return ( 
            <Cell 
              id={index} 
              key={index} 
              turn={turn} 
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            /> 
          )
        })}
      </div>
    </main>
  );
}

export default App;
