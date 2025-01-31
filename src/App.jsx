import { useState } from "react";
import "./App.css";
import StockBar from "./components/stockbar/stockbar";
import Profile from "./components/profile/profile";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <StockBar />
      <div className="container">
        <Profile />
        <Projects />
      </div>
    </>
  );
}

export default App;