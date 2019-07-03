import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentIndex: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

function App() {
  const tabs = useTabs(0, content);
  return (
    <div className="App">
      {content.map(section => {
        return <button>{section.tab}</button>;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
