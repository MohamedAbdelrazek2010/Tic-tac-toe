import { useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(Array(9).fill(null));

  return (
    <main className="container">
      <div className="board">
        {cells.map((_, index) => {
          return (
            <Cell key={index} />
          )
        })}
      </div>
    </main>
  );
}

export default App;
