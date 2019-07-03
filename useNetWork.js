import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

function App() {
  const handleNetWorkChange = onLine => {
    console.log(onLine ? "We just went Online" : "We are Offline");
  };
  const onLine = useNetwork(handleNetWorkChange);
  return (
    <div className="App">
      <h1>{onLine ? "OnLine" : "Offline"}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
