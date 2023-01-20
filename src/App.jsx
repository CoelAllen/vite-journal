import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import data from "./data.jsx";

function App() {
  const cards = data.map((data) => {
    return <Card key={data.title} {...data} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="cards--list">{cards}</section>
    </div>
  );
}

export default App;
