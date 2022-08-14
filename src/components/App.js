import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [index, setIndex] = useState(0);
  function decrement() {
    setIndex((index) => index - 1);
  }
  function restart() {
    setIndex((index) => 0);
  }
  function increment() {
    setIndex((index) => index + 1);
  }
  return (
    <>
    <div>
      <h1 data-testid="title">{slides[{index}].title}</h1>
      <p data-testid="text">{slides[{index}].t}</p>
    </div>
    <button data-testid="button-prev" disabled={index===0} onClick={decrement}>Prev</button>
    <button data-testid="button-restart" disabled={index===0} onClick={restart}>Restart</button>
    <button data-testid="button-next" disabled={index===slides.length-1} onClick={increment}>Next</button>      
    </>
  );
};

export default App;
