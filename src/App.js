import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "=") {
      try {
        const evalResult = eval(value);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (buttonValue === "C") {
      setValue("");
      setResult("");
    } else {
      setValue((prevValue) => prevValue + buttonValue);
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <div className="container">
        <div className="calculator">
          <form>
            <input type="text" value={value} readOnly />

            <div className="result">{result}</div>
            <div className="buttons">
              <div>
                {[7, 8, 9, "+"].map((number) => (
                  <button
                    key={number}
                    onClick={() => handleButtonClick(number.toString())}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div>
                {[4, 5, 6, "-"].map((number) => (
                  <button
                    key={number}
                    onClick={() => handleButtonClick(number.toString())}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div>
                {[1, 2, 3, "*"].map((number) => (
                  <button
                    key={number}
                    onClick={() => handleButtonClick(number.toString())}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div>
                {["C", 0, "=", "/"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleButtonClick(item.toString())}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
