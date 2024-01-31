import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (buttonValue, event) => {
    event.preventDefault();

    if (buttonValue === "=") {
      try {
        const evalResult = eval(value);
        setResult(handleEvaluationResult(evalResult));
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

  const handleEqualsClick = (event) => {
    event.preventDefault();

    try {
      const evalResult = eval(value);
      setResult(handleEvaluationResult(evalResult));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleEvaluationResult = (evalResult) => {
    if (evalResult === Infinity) {
      return "Infinity";
    } else if (Number.isNaN(evalResult)) {
      return "NaN";
    } else if (Number.isFinite(evalResult)) {
      return evalResult.toString();
    } else {
      return "Error";
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
                    onClick={(event) =>
                      handleButtonClick(number.toString(), event)
                    }
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div>
                {[4, 5, 6, "-"].map((number) => (
                  <button
                    key={number}
                    onClick={(event) =>
                      handleButtonClick(number.toString(), event)
                    }
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div>
                {[1, 2, 3, "*"].map((number) => (
                  <button
                    key={number}
                    onClick={(event) =>
                      handleButtonClick(number.toString(), event)
                    }
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div>
                <button onClick={(event) => handleButtonClick("/", event)}>
                  /
                </button>
                {[0, "="].map((item) => (
                  <button
                    key={item}
                    onClick={(event) =>
                      item === "="
                        ? handleEqualsClick(event)
                        : handleButtonClick(item.toString(), event)
                    }
                  >
                    {item}
                  </button>
                ))}
                <button onClick={(event) => handleButtonClick("C", event)}>
                  C
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
