import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [operationCompleted, setOperationCompleted] = useState(false);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
        setInput(eval(input).toString()); // Set input to the evaluated result for chaining
        setOperationCompleted(true);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
      setOperationCompleted(false);
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      if (!operationCompleted) {
        // Check if input is not empty and last character is a number
        if (input !== "" && !isNaN(input[input.length - 1])) {
          setInput(input + value);
        }
      } else {
        setInput(result + value); // Use result as the first operand
        setOperationCompleted(false); // Reset operation completed flag
      }
    } else {
      if (operationCompleted) {
        setInput(value);
        setOperationCompleted(false);
      } else {
        setInput(input + value);
      }
    }
  };
  return (
    <div className="main">
      <div className="calculator">
        <div className="display">
          <span>{input}</span>
          {result && <span className="result">=&nbsp;{result}</span>}
        </div>
        <div className="keypad">
          <div className="wrap">
            <button onClick={() => handleClick("+")}>+</button>
            <button onClick={() => handleClick("-")}>-</button>
            <button onClick={() => handleClick("*")}>*</button>
            <button onClick={() => handleClick("/")}>/</button>
          </div>
          <div className="wrap">
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("4")}>4</button>
          </div>
          <div className="wrap">
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
          </div>
          <div className="wrap">
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={() => handleClick(".")}>.</button>
            <button onClick={() => handleClick("C")}>C</button>
          </div>
        </div>
        <button className="submit-btn" onClick={() => handleClick("=")}>
          =
        </button>
      </div>
      <div className="copyright">
        Made with <span>&#10084;</span> by{" "}
        <a href="https://github.com/SharmaSamriddhi" target="_blank">
          Samriddhi Sharma
        </a>
      </div>
    </div>
  );
};

export default Calculator;
