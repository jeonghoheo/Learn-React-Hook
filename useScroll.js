import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

function App() {
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }} className="App">
      <h1 style={{ position: " fixed", color: y > 100 ? "red" : "blue" }}>
        Hi
      </h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
