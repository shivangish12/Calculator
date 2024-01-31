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
            <div className="buttons">
              <div>
                <button>
                  <input
                    type="button"
                    value="7"
                    onClick={() => handleButtonClick("7")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="8"
                    onClick={() => handleButtonClick("8")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="9"
                    onClick={() => handleButtonClick("9")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="+"
                    onClick={() => handleButtonClick("+")}
                  />
                </button>
              </div>
              <div>
                <button>
                  <input
                    type="button"
                    value="4"
                    onClick={() => handleButtonClick("4")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="5"
                    onClick={() => handleButtonClick("5")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="6"
                    onClick={() => handleButtonClick("6")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="-"
                    onClick={() => handleButtonClick("-")}
                  />
                </button>
              </div>
              <div>
                <button>
                  <input
                    type="button"
                    value="1"
                    onClick={() => handleButtonClick("1")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="2"
                    onClick={() => handleButtonClick("2")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="3"
                    onClick={() => handleButtonClick("3")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="*"
                    onClick={() => handleButtonClick("*")}
                  />
                </button>
              </div>
              <div>
                <button>
                  <input
                    type="button"
                    value="C"
                    onClick={() => handleButtonClick("C")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="0"
                    onClick={() => handleButtonClick("0")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="="
                    className="equal"
                    onClick={() => handleButtonClick("=")}
                  />
                </button>
                <button>
                  <input
                    type="button"
                    value="/"
                    onClick={() => handleButtonClick("/")}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
