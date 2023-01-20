import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import data from "./data.jsx";

function App() {
  const cards = data.map((d) => {});
  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
