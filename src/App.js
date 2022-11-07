import React from "react";
import ButtonClass from "./components/ButtonClass";
import ButtonFunctional from "./components/ButtonFunctional";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "row", gap: "0.5em" }}
    >
      <ButtonClass text="Button Class Dari Props"/>
      <ButtonFunctional text="Button Functional Dari Props" />
    </div>
  );
}

export default App;
