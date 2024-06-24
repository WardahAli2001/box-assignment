import React from "react";
import boxes from "./boxes"; 

import "./App.css";

const Main = () => {
  const [squares, setSquares] = React.useState(boxes);

  
  const handleFunction = (id) => {
   
    const updatedSquares = squares.map((square) =>
      square.id === id ? { ...square, on: !square.on } : square
    );
    setSquares(updatedSquares);
  };

  return (
    <main>
      {squares.map((square) => (
        <div
          key={square.id} 
          className="box"
          onClick={() => handleFunction(square.id)}
          style={{ backgroundColor: square.on ? "#222222" : "transparent" }}
        ></div>
      ))}
    </main>
  );
};

export default Main;
