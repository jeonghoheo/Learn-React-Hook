import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancle) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancle && typeof onCancle !== "function") {
    returnl;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  };
  return confirmAction;
};

function App() {
  const deleteWorld = () => console.log("Deleting the world...");
  const adort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, adort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
