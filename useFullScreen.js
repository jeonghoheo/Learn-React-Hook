import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useFullscreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

function App() {
  const onFulls = isFull => {
    console.log(isFull ? "We are Full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div style={{ height: "1000vh" }} className="App">
      <div ref={element}>
        <img
          src="https://pbs.twimg.com/profile_images/887656674399371264/XLAWAGN__400x400.jpg"
          alt="스폰지밥"
        />
        <button onClick={triggerFull}>Make FullScreen</button>
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
