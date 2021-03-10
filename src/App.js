import "./styles.css";

import React from "react";

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <h1> Inicio</h1>
        <p>Usuario</p>
        <input type="text" name="todo" />
        <p>Password</p>
        <input type="text" name="todo" />

        <button>Inicio</button>
      </div>
    </div>
  );
};

export default App;
