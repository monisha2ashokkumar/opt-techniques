import React, { useState } from "react";
import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);
  const onClickHandler = () => {
    setShowPara(prevShowPara => !showPara);
  };
  return (
    <div className="App">
      <header>
        <h3>Hi hello!!</h3>
        {showPara && <p>It's me Monisha.. Hello!!!</p>}
        <button onClick={onClickHandler}>Click me</button>
      </header>
    </div>
  );
}

export default App;
