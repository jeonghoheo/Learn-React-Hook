import React from "react";
import ReactDOM from "react-dom";
import { useAxios } from "./useAxios";
import "./styles.css";

const App = () => {
  const { loading, data, error, refetch, trigger } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts/1"
  });
  console.log(
    `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(
      data
    )}\nTrigger: ${trigger}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
