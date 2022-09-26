import { useState } from "react";
import "./App.css";
import GetData from "./components/GetData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <div className="loader"></div> */}
      <GetData />
    </div>
  );
}

export default App;
