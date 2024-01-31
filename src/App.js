import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "=") {
      try {
        setResult(eval(value));
      } catch (error) {
        setResult("Error");
      }
    } else if (buttonValue === "C") {
      setValue("");
      setResult("");
    } else {
      setValue(value + buttonValue);
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <div className="container">
        <div className="calculator">
          <form action="">
            <input type="text" value={value} readOnly />

            <div className="result">{result}</div>
            <button className="buttons">
              <div>
                <input
                  type="button"
                  value="7"
                  onClick={() => handleButtonClick("7")}
                />
                <input
                  type="button"
                  value="8"
                  onClick={() => handleButtonClick("8")}
                />
                <input
                  type="button"
                  value="9"
                  onClick={() => handleButtonClick("9")}
                />
                <input
                  type="button"
                  value="+"
                  onClick={() => handleButtonClick("+")}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="4"
                  onClick={() => handleButtonClick("4")}
                />
                <input
                  type="button"
                  value="5"
                  onClick={() => handleButtonClick("5")}
                />
                <input
                  type="button"
                  value="6"
                  onClick={() => handleButtonClick("6")}
                />
                <input
                  type="button"
                  value="-"
                  onClick={() => handleButtonClick("-")}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="1"
                  onClick={() => handleButtonClick("1")}
                />
                <input
                  type="button"
                  value="2"
                  onClick={() => handleButtonClick("2")}
                />
                <input
                  type="button"
                  value="3"
                  onClick={() => handleButtonClick("3")}
                />
                <input
                  type="button"
                  value="*"
                  onClick={() => handleButtonClick("*")}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="C"
                  onClick={() => handleButtonClick("C")}
                />
                <input
                  type="button"
                  value="0"
                  onClick={() => handleButtonClick("0")}
                />
                <input
                  type="button"
                  value="="
                  className="equal"
                  onClick={() => handleButtonClick("=")}
                />
                <input
                  type="button"
                  value="/"
                  onClick={() => handleButtonClick("/")}
                />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
