import React, { useState } from "react";

function App() {
  var [currentColor, setCurrentColor] = useState("white");
  function changeColor() {
    if (currentColor === "white") {
      setCurrentColor("black");
    } else {
      setCurrentColor("white");
    }
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: currentColor }}
        onMouseOut={changeColor}
        onMouseOver={changeColor}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
