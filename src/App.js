import React from "react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [history, setHistory] = useState([]);

  console.log(history, data);
  function handleAppend(e) {
    setData(e.target.value);
  }
  function ape() {
    if (!data) return;
    setHistory((hist) => [...hist, data]);
    setData("");
    // setVal(true);
  }
  function und() {
    setHistory([...history].slice(0, -1));
    setData("");
  }
  return (
    <div>
      <input type="text" value={data} onChange={handleAppend}></input>
      <button onClick={ape}>Append</button>
      <button onClick={und}>Undo</button>
      {history.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
}
