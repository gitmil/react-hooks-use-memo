import React, { useState, useMemo, useCallback, useEffect } from "react";


import "./App.css";
let renderCount = 0;
function App() {
  const [i, setI] = useState(0);

  const callBackClick = useCallback(() => {
    console.log('called')
    setI(c => c + 1);
  }, [i]);



  return (
    <div className="App">
      <header className="App-header">
        <h3> Use Memo</h3>
        <h2>i: {i}</h2>
        <button onClick={callBackClick}>Increment I</button>


      </header>
    </div>
  );
}

export default App;
