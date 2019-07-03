import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  // beforeunload 이벤트는 윈도우, 문서 및 리소스가 언로드 될 때 발생합니다.  문서의 내용은 여전히 표시되며 이 시점에서 이벤트는 아직 취소 가능합니다.
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

function App() {
  const { protect, unprotect } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={protect}>Protect</button>
      <button onClick={unprotect}>UnProtect</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
