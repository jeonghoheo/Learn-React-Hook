import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };
  return { value, onChange };
};

function App() {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
