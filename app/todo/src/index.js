import React from "react";
import ReactDOM from "react-dom";

// component files
import TodoContainer from "./functionBased/components/TodoContainer";

// stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer/>
  </React.StrictMode>, 
    document.getElementById("root")
)