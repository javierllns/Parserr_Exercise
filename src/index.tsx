import React from "react";
import ReactDOM from "react-dom";
import { Calculator } from "./Calculator";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
