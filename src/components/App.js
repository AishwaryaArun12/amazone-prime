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
        <h1>{props.slides[index].title}</h1>
        <p>{props.slides[index].text}</p>
      </div>
      <button
        data-testid="button-prev"
        disabled={index === 0}
        onClick={decrement}
      >
        Prev
      </button>
      <button
        data-testid="button-restart"
        disabled={index === 0}
        onClick={restart}
      >
        Restart
      </button>
      <button
        disabled={index === props.slides.length - 1}
        data-testid="button-next"
        onClick={increment}
      >
        Next
      </button>
    </>
  );
};

export default App;
