import { useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [turn , setTurn] = useState("circle") 

  return (
    <main className="container">
      <div className="board">
        {cells.map((cell, index) => {
          return (
            <Cell id={index} key={index} turn={turn} setTurn={setTurn}/>
          )
        })}
      </div>
    </main>
  );
}

export default App;
