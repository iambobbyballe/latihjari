import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  let cobaKlik = (e)=>{
    console.log('in terklik')
  }
  return (
    <div className="App">
      <h1>Hello BOBBY</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={cobaKlik}>Klik saja</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
