import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const decrease = () => setCount((prev) => prev - 1);
  const increase = () => setCount((prev) => prev + 1);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
