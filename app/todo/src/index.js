import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component files
import TodoContainer from "./functionBased/components/TodoContainer";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import Navbar from "./functionBased/components/Navbar";

// stylesheet
import "./functionBased/App.css"

const root = ReactDOM.createRoot(
  document.getElementById("root")
)

root.render(
  <React.StrictMode>
    <Router>
      <Navbar></Navbar>  
      <Routes>
        <Route exact path="/" element={<TodoContainer/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotMatch/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)