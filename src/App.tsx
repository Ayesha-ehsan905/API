import { useState } from "react";
import "./App.css";
import GetData from "./components/GetData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GetData />
    </div>
  );
}

export default App;
