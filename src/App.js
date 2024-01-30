import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>React Calculator</h1>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className="display">
              <input type="text" value={value} />
            </div>
            <div className="buttons">
              <div>
                <input
                  type="button"
                  value="7"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="8"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="9"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="+"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="4"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="5"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="6"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="-"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="1"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="2"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="3"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="*"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div>
                <input type="button" value="C" onClick={(e) => setValue("")} />

                <input
                  type="button"
                  value="0"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="="
                  className="equal"
                  onClick={(e) => setValue(eval(value))}
                />
                <input
                  type="button"
                  value="/"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
