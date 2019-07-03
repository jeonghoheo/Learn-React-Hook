import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function App() {
  const beForLife = () => console.log("Pls don't leave");
  useBeforeLeave(beForLife);
  return <div className="App">Hi</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
