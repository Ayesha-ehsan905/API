import { useState } from "react";
import "./App.css";
import { AddData } from "./components/AddPost";
import GetData from "./components/GetData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AddData />
    </div>
  );
}

export default App;
